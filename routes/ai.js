// ============================================
// MATH Academy - Rotas de IA (Chat + Revisao)
// ============================================

const express = require('express')
const router = express.Router()

// ---- CONFIG GEMINI ----

const API_KEY = process.env.GOOGLE_API_KEY || ''
let ai = null

async function getAI() {
  if (ai) return ai
  if (!API_KEY) return null
  const { GoogleGenAI } = require('@google/genai')
  ai = new GoogleGenAI({ apiKey: API_KEY })
  return ai
}

const MODEL = 'gemini-2.0-flash'

const SYSTEM_PROMPT = `Voce e o MATH Tutor, um professor de JavaScript para iniciantes ABSOLUTOS.

REGRAS IMPORTANTES:
- Fale em portugues brasileiro informal (sem "voce" formal, use "voce" normal)
- Use linguagem SIMPLES. O aluno nao sabe NADA de programacao
- Explique como se estivesse falando com um amigo
- De exemplos do dia a dia (receita de bolo, lista de compras, etc)
- Quando mostrar codigo, explique CADA LINHA
- Se o aluno errou, NAO de a resposta pronta. De DICAS pra ele pensar
- Maximo 3 paragrafos por resposta (seja conciso)
- Use analogias do mundo real da manutencao industrial (o aluno tem uma empresa de manutencao chamada Helsen Service)
- Se o aluno pedir a resposta direta, de uma dica primeiro. So de a resposta se ele insistir
- Comemore quando ele acertar algo!
- NUNCA use jargao tecnico sem explicar o que significa
- Quando o aluno mandar codigo com erro, aponte o erro especifico e explique POR QUE ta errado

CONTEXTO: O aluno esta aprendendo JavaScript do zero numa plataforma chamada MATH Academy. Ele construiu um sistema de gestao de manutencao industrial (MATH) usando IA, mas quer aprender a programar de verdade. Os exercicios usam exemplos de ordens de servico, tecnicos, clientes, etc.`

// ---- HISTORICO DE CONVERSAS (em memoria) ----

const conversations = new Map()

function getConversation(sessionId) {
  if (!conversations.has(sessionId)) {
    conversations.set(sessionId, [])
  }
  return conversations.get(sessionId)
}

// Limpa conversas antigas a cada 1h
setInterval(() => {
  conversations.clear()
}, 3600000)

// ---- ROTA: CHAT COM IA ----

router.post('/chat', async (req, res) => {
  const { message, sessionId, context } = req.body

  if (!message) {
    return res.status(400).json({ erro: 'Mensagem vazia' })
  }

  const client = await getAI()
  if (!client) {
    return res.json({
      resposta: 'A IA nao esta configurada. Adicione GOOGLE_API_KEY no .env pra ativar o tutor. Por enquanto, tenta resolver sozinho ou clica em "Ver Resposta" no exercicio!',
      semIA: true
    })
  }

  try {
    const history = getConversation(sessionId || 'default')

    let userMessage = message
    if (context) {
      userMessage = `[CONTEXTO DA AULA]
Aula: ${context.lessonTitle || ''}
Exercicio: ${context.exerciseTitle || ''}
Enunciado: ${context.instructions || ''}
Codigo do aluno: \`\`\`javascript\n${context.code || ''}\n\`\`\`
Saida do codigo: ${context.output || 'nenhuma'}
Erro: ${context.error || 'nenhum'}
[FIM DO CONTEXTO]

Mensagem do aluno: ${message}`
    }

    history.push({ role: 'user', content: userMessage })

    if (history.length > 20) {
      history.splice(0, history.length - 20)
    }

    const contents = []
    contents.push({
      role: 'user',
      parts: [{ text: `[INSTRUCOES DO SISTEMA]\n${SYSTEM_PROMPT}\n[FIM DAS INSTRUCOES]` }]
    })
    contents.push({
      role: 'model',
      parts: [{ text: 'Entendido! Sou o MATH Tutor, vou te ajudar a aprender JavaScript de um jeito simples e direto. Manda tua duvida!' }]
    })

    for (const msg of history) {
      contents.push({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      })
    }

    const response = await client.models.generateContent({
      model: MODEL,
      contents: contents,
      config: {
        maxOutputTokens: 1024,
        temperature: 0.7
      }
    })

    const resposta = response.text || 'Desculpa, nao consegui responder. Tenta de novo!'
    history.push({ role: 'assistant', content: resposta })
    res.json({ resposta })
  } catch (err) {
    console.error('[Tutor IA] Erro:', err.message)
    res.status(500).json({
      resposta: 'Ops, deu um erro na IA. Tenta de novo em alguns segundos!',
      erro: err.message
    })
  }
})

// ---- ROTA: REVISAR CODIGO ----

router.post('/revisar', async (req, res) => {
  const { code, exerciseTitle, instructions, expectedOutput, userOutput, userError, solutionCode } = req.body

  const client = await getAI()
  if (!client) {
    return res.json({ revisao: 'IA nao configurada. Adicione GOOGLE_API_KEY no .env.' })
  }

  try {
    const prompt = `Voce e um revisor de codigo JavaScript para um aluno iniciante ABSOLUTO. Analise o codigo dele e de feedback educativo.

EXERCICIO: ${exerciseTitle}
ENUNCIADO: ${instructions}
SAIDA ESPERADA: ${expectedOutput || 'nao definida'}
SAIDA DO ALUNO: ${userOutput || 'nenhuma'}
ERRO: ${userError || 'nenhum'}

CODIGO DO ALUNO:
\`\`\`javascript
${code}
\`\`\`

${solutionCode ? `SOLUCAO CORRETA (use como referencia, NAO mostre pro aluno):
\`\`\`javascript
${solutionCode}
\`\`\`` : ''}

REGRAS DA REVISAO:
1. Comece dizendo se o codigo ta certo, quase certo, ou errado
2. Se ta CERTO: comemore! Explique por que funcionou e o que ele aprendeu
3. Se ta ERRADO ou QUASE CERTO:
   - Aponte a LINHA EXATA do erro (ex: "Na linha onde voce escreveu X...")
   - Explique POR QUE ta errado usando analogia simples
   - De UMA dica especifica de como corrigir (mas NAO de a resposta pronta)
   - Se o aluno ta muito longe, de uma dica mais direta
4. Se teve erro de sintaxe: explique o que o erro significa em portugues simples
5. Maximo 4 frases, seja DIRETO
6. Use portugues brasileiro informal
7. Use analogias de manutencao industrial quando possivel (o aluno tem uma empresa de manutencao chamada Helsen Service)
8. NUNCA mostre a solucao completa`

    const response = await client.models.generateContent({
      model: MODEL,
      contents: prompt,
      config: {
        maxOutputTokens: 600,
        temperature: 0.5
      }
    })

    res.json({ revisao: response.text || 'Nao consegui revisar.' })
  } catch (err) {
    console.error('[Revisao] Erro:', err.message)
    res.status(500).json({ revisao: 'Erro ao revisar. Tenta de novo!' })
  }
})

// Exporta status da API pra uso no server.js
router.isAIConfigured = () => !!API_KEY

module.exports = router
