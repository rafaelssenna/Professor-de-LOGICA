// ============================================
// COURSE DATA - Todo o conteudo das 13 aulas
// ============================================

const COURSE_DATA = {
  title: "Aprender JavaScript - Do Zero ao Sistema MATH",
  modules: [
    // ========== MODULO 1: FUNDAMENTOS ==========
    {
      id: 1,
      title: "Fundamentos",
      lessons: [
        {
          id: "1-1",
          title: "Variaveis",
          duration: "30 min",
          module: "Fundamentos",
          sections: [
            {
              type: "explanation",
              title: "O que e uma variavel?",
              content: "Variavel = uma <strong>CAIXA</strong> que guarda um valor. Voce da um <strong>NOME</strong> pra caixa e coloca algo dentro. E assim que o computador lembra das coisas."
            },
            {
              type: "code-example",
              title: "Criando variaveis com let",
              code: '// "let" cria uma variavel que pode mudar depois\nlet nome = "Josias"\nlet idade = 25\nlet altura = 1.75\n\nconsole.log(nome)\nconsole.log(idade)\nconsole.log(altura)',
              runnable: true
            },
            {
              type: "explanation",
              title: "let vs const",
              content: "<strong>let</strong> = variavel que PODE mudar depois.<br><strong>const</strong> = variavel que NUNCA muda (constante).<br><br>Use <strong>const</strong> quando o valor nao vai mudar (nome da empresa, configuracao). Use <strong>let</strong> quando o valor pode mudar (status, contador)."
            },
            {
              type: "code-example",
              title: "const nao muda",
              code: 'const empresa = "Helsen Service"\nconst sistema = "MATH"\nconsole.log(empresa)\nconsole.log(sistema)\n\n// Se tentar mudar uma const, da ERRO:\n// empresa = "Outra"  // Descomente pra ver!',
              runnable: true
            },
            {
              type: "explanation",
              title: "Tipos de valores",
              content: "<strong>String</strong> = texto (sempre entre aspas): <code>\&quot;Maria\&quot;</code><br><strong>Number</strong> = numero (sem aspas): <code>42</code>, <code>3.14</code><br><strong>Boolean</strong> = verdadeiro ou falso: <code>true</code>, <code>false</code>"
            },
            {
              type: "code-example",
              title: "Tipos de valores",
              code: 'let nomeCliente = "Maria Silva"\nlet numeroDaOS = 1542\nlet osAberta = true\n\n// typeof mostra o tipo:\nconsole.log(typeof nomeCliente)  // string\nconsole.log(typeof numeroDaOS)   // number\nconsole.log(typeof osAberta)     // boolean',
              runnable: true
            },
            {
              type: "explanation",
              title: "Template Literal (juntando texto com variaveis)",
              content: "Quando voce quer misturar texto com variaveis, tem um jeito muito facil chamado <strong>template literal</strong>. Funciona assim:<br><br><strong>1.</strong> Em vez de aspas normais (<code>\&quot;\&quot;</code>), use <strong>crase</strong> (<code>\`\`</code>). A crase e aquela tecla do lado do 1 no teclado, a mesma do acento agudo. Aperte ela sozinha (sem segurar nada).<br><br><strong>2.</strong> Pra colocar uma variavel dentro do texto, use <strong><code>${ }</code></strong> com o nome da variavel dentro. E tipo um buraco no texto onde a variavel entra.<br><br>Pense assim: e como um modelo de OS preenchido. O modelo e o texto com crase, e os <code>${}</code> sao os campos que o sistema preenche automatico.<br><br><div class='highlight-box tip'><strong>Resumo:</strong> crase (<code>\`</code>) + dolar-chave (<code>${variavel}</code>) = texto com variaveis misturadas!</div>"
            },
            {
              type: "code-example",
              title: "Template literal na pratica",
              code: 'let nomeCliente = "Maria Silva"\nlet numeroDaOS = 1542\n\n// JEITO ANTIGO (chato, cheio de +):\nconsole.log("Cliente " + nomeCliente + " - OS " + numeroDaOS)\n\n// JEITO NOVO com template literal (facil!):\nconsole.log(`Cliente ${nomeCliente} - OS ${numeroDaOS}`)\n\n// Os dois mostram a mesma coisa!\n// Mas com crase e ${} fica MUITO mais facil de ler',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercicio 1",
              instructions: "Crie 3 variaveis: <strong>nomeTecnico</strong> (string), <strong>especialidade</strong> (string) e <strong>anosExperiencia</strong> (number). Coloque valores que faca sentido e mostre cada uma com console.log.",
              starterCode: '// Crie as variaveis aqui:\n\n\n// Mostre com console.log:\n',
              solution: 'let nomeTecnico = "Carlos"\nlet especialidade = "Eletrica"\nlet anosExperiencia = 5\nconsole.log(nomeTecnico)\nconsole.log(especialidade)\nconsole.log(anosExperiencia)',
              validation: "structure",
              checks: { codeHas: ["nomeTecnico", "especialidade", "anosExperiencia", "console.log"], minOutput: 3 }
            },
            {
              type: "exercise",
              title: "Exercicio 2",
              instructions: "Crie uma <strong>const</strong> chamada \"nomeSistema\" com valor \"MATH\" e uma <strong>let</strong> chamada \"versao\" com valor 2. Depois mostre: <code>Sistema MATH - Versao 2</code> usando template literal.<br><br><div class='highlight-box tip'><strong>Lembrete:</strong> template literal usa <strong>crase</strong> (tecla do lado do 1) em vez de aspas, e <strong>${nomeDaVariavel}</strong> pra colocar variavel dentro do texto. Exemplo: <code>\`Ola ${nome}\`</code></div>",
              starterCode: '// Crie as variaveis:\n\n\n// Mostre com template literal (use crase ` e ${}):\n',
              solution: 'const nomeSistema = "MATH"\nlet versao = 2\nconsole.log(`Sistema ${nomeSistema} - Versao ${versao}`)',
              validation: "structure",
              checks: { codeHas: ["const nomeSistema", "let versao", "console.log", "${"], outputHas: ["MATH", "2"] }
            },
            {
              type: "exercise",
              title: "Exercicio 3",
              instructions: "Crie variaveis pra uma Ordem de Servico: <strong>numeroOS</strong> (number), <strong>cliente</strong> (string), <strong>descricao</strong> (string), <strong>urgente</strong> (boolean), <strong>valor</strong> (number). Depois mostre tudo numa mensagem usando template literal.<br><br><div class='highlight-box tip'><strong>Lembrete:</strong> Use crase <code>\`</code> e <code>${variavel}</code> pra montar a mensagem. Exemplo: <code>\`OS ${numeroOS} - Cliente: ${cliente}\`</code></div>",
              starterCode: '// Crie as variaveis da OS:\n\n\n\n\n\n// Mostre a mensagem completa com template literal:\n// Use crase ` e ${} pra colocar as variaveis no texto\n',
              solution: 'let numeroOS = 1500\nlet cliente = "Fabrica X"\nlet descricao = "Troca de rolamento"\nlet urgente = true\nlet valor = 500\nconsole.log(`OS ${numeroOS} - Cliente: ${cliente} - ${descricao} - Urgente: ${urgente} - Valor: R$${valor}`)',
              validation: "structure",
              checks: { codeHas: ["numeroOS", "cliente", "descricao", "urgente", "valor", "console.log", "${"], minOutput: 1 }
            }
          ],
          quiz: [
            {
              question: "Qual a diferenca entre let e const?",
              options: ["let pode mudar, const nao pode", "const pode mudar, let nao pode", "Nao tem diferenca", "let e pra texto, const pra numero"],
              correct: 0,
              explanation: "let cria variavel que pode ser reatribuida. const cria constante que nao muda."
            },
            {
              question: "O que typeof 42 retorna?",
              options: ['"number"', '"integer"', '"string"', '"Number"'],
              correct: 0,
              explanation: "typeof retorna 'number' pra qualquer numero, inteiro ou decimal."
            },
            {
              question: "O que esse codigo mostra?",
              code: 'let x = "5"\nlet y = 3\nconsole.log(x + y)',
              options: ['"53"', '8', 'Erro', 'undefined'],
              correct: 0,
              explanation: "Quando soma string + numero, JS converte o numero pra string e JUNTA. '5' + 3 = '53'."
            },
            {
              question: "Voce pode mudar o valor de uma variavel const?",
              options: ["Nao, da erro", "Sim, normalmente", "So se for numero", "Depende do navegador"],
              correct: 0,
              explanation: "const nao permite reatribuicao. Use let se precisar mudar o valor."
            }
          ]
        },
        {
          id: "1-2",
          title: "Operacoes Matematicas",
          duration: "30 min",
          module: "Fundamentos",
          sections: [
            {
              type: "explanation",
              title: "Operacoes basicas",
              content: "JavaScript sabe fazer matematica! No sistema MATH, calcular valor de servico, horas trabalhadas, custos... tudo usa operacoes matematicas."
            },
            {
              type: "code-example",
              title: "As 5 operacoes",
              code: 'let a = 10\nlet b = 3\n\nconsole.log(a + b)   // 13  (soma)\nconsole.log(a - b)   // 7   (subtracao)\nconsole.log(a * b)   // 30  (multiplicacao)\nconsole.log(a / b)   // 3.33 (divisao)\nconsole.log(a % b)   // 1   (resto: 10/3 = 3, resta 1)',
              runnable: true
            },
            {
              type: "code-example",
              title: "Exemplo real: valor de servico",
              code: 'let horas = 4\nlet valorHora = 85\nlet material = 250\nlet desconto = 50\n\nlet maoDeObra = horas * valorHora\nlet total = maoDeObra + material - desconto\n\nconsole.log(`Mao de obra: R$${maoDeObra}`)\nconsole.log(`Material: R$${material}`)\nconsole.log(`Desconto: R$${desconto}`)\nconsole.log(`TOTAL: R$${total}`)',
              runnable: true
            },
            {
              type: "explanation",
              title: "Atalhos e arredondamento",
              content: "<strong>Incremento:</strong> <code>x++</code> soma 1, <code>x--</code> subtrai 1, <code>x += 5</code> soma 5.<br><strong>Arredondar:</strong> <code>.toFixed(2)</code> = 2 casas decimais, <code>Math.round()</code> = inteiro mais proximo."
            },
            {
              type: "code-example",
              title: "Arredondando e convertendo",
              code: 'let valor = 345.6789\nconsole.log(valor.toFixed(2))    // "345.68"\nconsole.log(Math.round(345.67))  // 346\n\n// CUIDADO: texto + texto JUNTA, nao soma!\nlet a = "10"\nlet b = "5"\nconsole.log(a + b)       // "105" (ERRADO!)\nconsole.log(Number(a) + Number(b))  // 15 (CERTO!)',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercicio 1",
              instructions: "Um tecnico trabalhou em 3 OS: 2h, 3.5h e 1.5h. Valor da hora: R$90. Calcule e mostre o total do dia.",
              starterCode: 'let horas1 = 2\nlet horas2 = 3.5\nlet horas3 = 1.5\nlet valorHora = 90\n\n// Calcule o total:\n\n\n// Mostre o resultado:\n',
              solution: 'let horas1 = 2\nlet horas2 = 3.5\nlet horas3 = 1.5\nlet valorHora = 90\n\nlet totalHoras = horas1 + horas2 + horas3\nlet totalDia = totalHoras * valorHora\n\nconsole.log(`Total: ${totalHoras}h = R$${totalDia}`)',
              validation: "structure",
              checks: { codeHas: ["console.log"], outputHas: ["630"] }
            },
            {
              type: "exercise",
              title: "Exercicio 2",
              instructions: "45 maquinas, cada manutencao R$320. Com 15% de desconto no pacote. Calcule: valor sem desconto, valor do desconto e valor final.",
              starterCode: 'let maquinas = 45\nlet custoUnitario = 320\n\n// Calcule:\n\n\n// Mostre os 3 valores:\n',
              solution: 'let maquinas = 45\nlet custoUnitario = 320\n\nlet semDesconto = maquinas * custoUnitario\nlet valorDesconto = semDesconto * 0.15\nlet comDesconto = semDesconto - valorDesconto\n\nconsole.log(`Sem desconto: R$${semDesconto}`)\nconsole.log(`Desconto: R$${valorDesconto}`)\nconsole.log(`Com desconto: R$${comDesconto}`)',
              validation: "structure",
              checks: { codeHas: ["console.log"], outputHas: ["14400", "2160", "12240"], minOutput: 3 }
            }
          ],
          quiz: [
            {
              question: "Qual o resultado de 10 % 3?",
              options: ["1", "3", "3.33", "0"],
              correct: 0,
              explanation: "% e o resto da divisao. 10 / 3 = 3 com resto 1."
            },
            {
              question: 'O que Number("abc") retorna?',
              options: ["NaN", "0", "Erro", '"abc"'],
              correct: 0,
              explanation: 'NaN = Not a Number. "abc" nao e um numero valido.'
            },
            {
              question: "O que esse codigo mostra?",
              code: 'let x = 5\nx += 3\nx++\nconsole.log(x)',
              options: ["9", "8", "6", "Erro"],
              correct: 0,
              explanation: "x comeca 5, += 3 fica 8, ++ fica 9."
            }
          ]
        }
      ]
    },

    // ========== MODULO 2: DECISOES ==========
    {
      id: 2,
      title: "Decisoes",
      lessons: [
        {
          id: "2-1",
          title: "If / Else",
          duration: "30 min",
          module: "Decisoes",
          sections: [
            {
              type: "explanation",
              title: "O que e if/else? Pensa assim...",
              content: "Na Helsen Service, voce toma decisoes o tempo todo:<br><br>🔧 <em>\&quot;SE a maquina ta quebrada, ENTAO manda o tecnico. SENAO, agenda preventiva.\&quot;</em><br><br>🔧 <em>\&quot;SE o cliente e VIP, ENTAO atende primeiro. SENAO, coloca na fila normal.\&quot;</em><br><br>O computador faz a MESMA coisa! So que ao inves de pensar, ele usa <strong>if</strong> (SE) e <strong>else</strong> (SENAO).<br><br><strong>if</strong> = SE (verifica uma condicao)<br><strong>else</strong> = SENAO (o que fazer se a condicao nao for verdadeira)"
            },
            {
              type: "explanation",
              title: "Antes de tudo: como comparar coisas?",
              content: "Pra tomar decisoes, o computador precisa COMPARAR. Tipo:<br>- Esse numero e MAIOR que 1000?<br>- Esse texto e IGUAL a \"admin\"?<br><br>Pra isso usamos <strong>operadores de comparacao</strong>. Olha a tabela:<br><br><table style='width:100%;border-collapse:collapse;margin:10px 0'><tr style='border-bottom:1px solid #555'><td style='padding:8px'><code>===</code></td><td style='padding:8px'>E igual? (3 iguais!)</td><td style='padding:8px;color:#7ec8e3'>5 === 5 → true</td></tr><tr style='border-bottom:1px solid #555'><td style='padding:8px'><code>!==</code></td><td style='padding:8px'>E diferente?</td><td style='padding:8px;color:#7ec8e3'>5 !== 3 → true</td></tr><tr style='border-bottom:1px solid #555'><td style='padding:8px'><code>&gt;</code></td><td style='padding:8px'>E maior?</td><td style='padding:8px;color:#7ec8e3'>10 > 5 → true</td></tr><tr style='border-bottom:1px solid #555'><td style='padding:8px'><code>&lt;</code></td><td style='padding:8px'>E menor?</td><td style='padding:8px;color:#7ec8e3'>3 < 8 → true</td></tr><tr style='border-bottom:1px solid #555'><td style='padding:8px'><code>&gt;=</code></td><td style='padding:8px'>Maior ou igual?</td><td style='padding:8px;color:#7ec8e3'>5 >= 5 → true</td></tr><tr><td style='padding:8px'><code>&lt;=</code></td><td style='padding:8px'>Menor ou igual?</td><td style='padding:8px;color:#7ec8e3'>3 <= 8 → true</td></tr></table><br><div style='background:#1a3a2a;border-left:3px solid #4caf50;padding:10px;border-radius:4px'>⚠️ <strong>CUIDADO:</strong> Pra comparar use <code>===</code> (3 iguais). Um <code>=</code> sozinho e pra GUARDAR valor na variavel, nao pra comparar!</div>"
            },
            {
              type: "code-example",
              title: "Testando comparacoes",
              code: 'let idade = 20\n\n// Vamos testar cada comparacao:\nconsole.log("idade === 20?", idade === 20)   // true  (e igual a 20? SIM!)\nconsole.log("idade !== 25?", idade !== 25)   // true  (e diferente de 25? SIM!)\nconsole.log("idade > 18?",  idade > 18)     // true  (e maior que 18? SIM!)\nconsole.log("idade < 18?",  idade < 18)     // false (e menor que 18? NAO!)\nconsole.log("idade >= 20?", idade >= 20)    // true  (e maior ou igual a 20? SIM!)',
              runnable: true
            },
            {
              type: "explanation",
              title: "A estrutura do if/else (passo a passo)",
              content: "Agora que voce sabe comparar, vamos montar um if/else. A estrutura e assim:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px;font-size:14px;line-height:1.8'><span style='color:#c586c0'>if</span> <span style='color:#888'>(</span><span style='color:#9cdcfe'>condicao</span><span style='color:#888'>)</span> <span style='color:#888'>{</span>\n  <span style='color:#6a9955'>// faz isso SE for verdadeiro</span>\n<span style='color:#888'>}</span> <span style='color:#c586c0'>else</span> <span style='color:#888'>{</span>\n  <span style='color:#6a9955'>// faz isso SE NAO for verdadeiro</span>\n<span style='color:#888'>}</span></pre><br>Traduzindo: <strong>SE</strong> (condicao for true) <strong>faz X</strong>, <strong>SENAO faz Y</strong>.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 As <strong>chaves { }</strong> marcam o BLOCO de codigo. Tudo que ta dentro das chaves so roda se a condicao for verdadeira.</div>"
            },
            {
              type: "code-example",
              title: "Primeiro if/else (simples!)",
              code: '// Imagina: chegou uma OS na Helsen Service\nlet valorOS = 1500\n\nif (valorOS > 1000) {\n  console.log("OS de alto valor! Prioridade!")\n} else {\n  console.log("OS normal, segue o fluxo")\n}\n\n// O que acontece aqui?\n// 1. valorOS e 1500\n// 2. 1500 > 1000? SIM! (true)\n// 3. Entao entra no primeiro bloco\n// 4. Mostra: "OS de alto valor! Prioridade!"',
              runnable: true
            },
            {
              type: "explanation",
              title: "E se tiver mais de 2 opcoes?",
              content: "As vezes nao e so SIM ou NAO. Tem VARIAS opcoes!<br><br>Tipo na Helsen: o tecnico pode ser <strong>admin</strong>, <strong>tecnico</strong>, <strong>cliente</strong> ou <strong>outro</strong>.<br><br>Pra isso a gente usa <strong>else if</strong> (SENAO SE) no meio:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px;font-size:14px;line-height:1.8'><span style='color:#c586c0'>if</span> (condicao1) {\n  <span style='color:#6a9955'>// primeira opcao</span>\n} <span style='color:#c586c0'>else if</span> (condicao2) {\n  <span style='color:#6a9955'>// segunda opcao</span>\n} <span style='color:#c586c0'>else if</span> (condicao3) {\n  <span style='color:#6a9955'>// terceira opcao</span>\n} <span style='color:#c586c0'>else</span> {\n  <span style='color:#6a9955'>// se NENHUMA das anteriores</span>\n}</pre><br>O computador testa de CIMA PRA BAIXO. Quando acha a primeira condicao verdadeira, executa aquele bloco e PARA. Nao testa o resto."
            },
            {
              type: "code-example",
              title: "if / else if / else na pratica",
              code: 'let tipoUsuario = "tecnico"\n\n// Testando de cima pra baixo:\nif (tipoUsuario === "admin") {\n  console.log("Bem-vindo ao painel admin")\n} else if (tipoUsuario === "tecnico") {\n  console.log("Bem-vindo! Aqui estao suas OS")\n} else if (tipoUsuario === "cliente") {\n  console.log("Acompanhe seus chamados")\n} else {\n  console.log("Usuario desconhecido")\n}\n\n// Teste: troque "tecnico" por "admin" ou "cliente"\n// e rode de novo pra ver o que muda!',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercicio 1 - Seu primeiro if/else!",
              instructions: "Vamos comecar simples! Crie uma variavel <strong>maquinaLigada</strong> (true ou false). <br><br>Use <strong>if/else</strong> pra verificar:<br>- SE maquinaLigada for <strong>true</strong>: mostre <em>\&quot;Maquina em funcionamento\&quot;</em><br>- SENAO: mostre <em>\&quot;Maquina desligada\&quot;</em><br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 <strong>Dica:</strong> Quando a variavel ja e true/false, voce nao precisa comparar com === true. Pode fazer direto: <code>if (maquinaLigada)</code></div>",
              starterCode: '// Crie a variavel:\nlet maquinaLigada = true\n\n// Faca o if/else:\n',
              solution: 'let maquinaLigada = true\n\nif (maquinaLigada) {\n  console.log("Maquina em funcionamento")\n} else {\n  console.log("Maquina desligada")\n}',
              validation: "structure",
              checks: { codeHas: ["maquinaLigada", "if", "else", "console.log"], minOutput: 1 }
            },
            {
              type: "exercise",
              title: "Exercicio 2 - Classificando valor da OS",
              instructions: "Agora com <strong>else if</strong>! Crie uma variavel <strong>valorOS</strong> com o valor que quiser.<br><br>Use <strong>if / else if / else</strong> pra classificar:<br>- SE valorOS > 1000: mostre <em>\&quot;OS de alto valor\&quot;</em><br>- SENAO SE valorOS >= 500: mostre <em>\&quot;OS de valor medio\&quot;</em><br>- SENAO: mostre <em>\&quot;OS de valor baixo\&quot;</em><br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 <strong>Lembra:</strong> O computador testa de CIMA PRA BAIXO. Se valorOS for 1500, ele ja entra no primeiro if e nao testa o resto.</div>",
              starterCode: 'let valorOS = 750\n\n// Faca o if / else if / else:\n',
              solution: 'let valorOS = 750\n\nif (valorOS > 1000) {\n  console.log("OS de alto valor")\n} else if (valorOS >= 500) {\n  console.log("OS de valor medio")\n} else {\n  console.log("OS de valor baixo")\n}',
              validation: "structure",
              checks: { codeHas: ["valorOS", "if", "else", "console.log"], minOutput: 1 }
            },
            {
              type: "explanation",
              title: "Combinando condicoes com && e ||",
              content: "As vezes voce precisa verificar MAIS DE UMA coisa ao mesmo tempo. Tipo:<br><br>🔧 <em>\"O tecnico ta DISPONIVEL <strong>E</strong> tem OS pra ele?\"</em> — as DUAS precisam ser verdadeiras.<br>🔧 <em>\"O tecnico e SENIOR <strong>OU</strong> PLENO?\"</em> — basta UMA ser verdadeira.<br><br><table style='width:100%;border-collapse:collapse;margin:10px 0'><tr style='border-bottom:1px solid #555'><td style='padding:10px;font-size:20px'><code>&&</code></td><td style='padding:10px'><strong>E</strong> — as DUAS condicoes precisam ser true</td></tr><tr style='border-bottom:1px solid #555'><td style='padding:10px;font-size:20px'><code>||</code></td><td style='padding:10px'><strong>OU</strong> — pelo menos UMA precisa ser true</td></tr><tr><td style='padding:10px;font-size:20px'><code>!</code></td><td style='padding:10px'><strong>NAO</strong> — inverte (true vira false, false vira true)</td></tr></table><br><div style='background:#1a3a2a;border-left:3px solid #4caf50;padding:10px;border-radius:4px'>💡 Pensa no && como uma porta com DUAS chaves — precisa das duas pra abrir.<br>Pensa no || como uma porta com DUAS fechaduras — qualquer chave abre.</div>"
            },
            {
              type: "code-example",
              title: "Usando && (E)",
              code: 'let disponivel = true\nlet temOS = true\n\n// && = E (as duas precisam ser true)\nif (disponivel && temOS) {\n  console.log("Tecnico pode pegar a OS!")\n} else {\n  console.log("Tecnico NAO pode pegar a OS")\n}\n\n// Testa mudar uma das variaveis pra false\n// e roda de novo pra ver o que acontece!',
              runnable: true
            },
            {
              type: "code-example",
              title: "Usando || (OU)",
              code: 'let nivel = "senior"\n\n// || = OU (basta uma ser true)\nif (nivel === "senior" || nivel === "pleno") {\n  console.log("Pode fazer manutencao complexa")\n} else {\n  console.log("Apenas manutencao simples")\n}\n\n// Testa trocar pra "junior" e roda de novo!',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercicio 3 - Combinando condicoes",
              instructions: "Crie <strong>diaSemana</strong> (texto) e <strong>horaAtual</strong> (numero) com os valores que quiser.<br><br>Um tecnico so vai a campo se:<br>- NAO for sabado e NAO for domingo (use <code>!==</code>)<br>- <strong>E</strong> a hora for >= 8 <strong>E</strong> <= 18<br><br>Use <code>&&</code> pra juntar tudo! Mostre se pode ou nao enviar o tecnico.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 <strong>Dica:</strong> Voce vai precisar de && pra juntar varias condicoes:<br><code>if (condicao1 && condicao2 && condicao3)</code></div>",
              starterCode: 'let diaSemana = "segunda"\nlet horaAtual = 10\n\n// Verifique se pode enviar o tecnico:\n',
              solution: 'let diaSemana = "segunda"\nlet horaAtual = 10\n\nif (diaSemana !== "sabado" && diaSemana !== "domingo" && horaAtual >= 8 && horaAtual <= 18) {\n  console.log("Pode enviar tecnico")\n} else {\n  console.log("Fora do horario")\n}',
              validation: "structure",
              checks: { codeHas: ["diaSemana", "horaAtual", "if", "&&", "console.log"], minOutput: 1 }
            }
          ],
          quiz: [
            {
              question: "Qual a diferenca entre = e ===?",
              options: ["= guarda valor, === compara se e igual", "= compara, === guarda valor", "Sao a mesma coisa", "=== guarda valor mais rapido"],
              correct: 0,
              explanation: "Um = sozinho GUARDA valor na variavel (ex: let x = 5). Tres === COMPARA se dois valores sao iguais (ex: x === 5 retorna true)."
            },
            {
              question: 'O que esse codigo mostra?\n\nlet idade = 15\nif (idade >= 18) {\n  console.log("Maior de idade")\n} else {\n  console.log("Menor de idade")\n}',
              options: ['"Menor de idade"', '"Maior de idade"', 'Erro', 'Nao mostra nada'],
              correct: 0,
              explanation: "15 >= 18? NAO (false)! Entao pula o if e entra no else. Mostra 'Menor de idade'."
            },
            {
              question: "O que && (E) faz numa condicao?",
              options: ["Exige que TODAS as condicoes sejam true", "Basta UMA condicao ser true", "Inverte true pra false", "Compara dois numeros"],
              correct: 0,
              explanation: "&& = E logico. E tipo uma porta com duas chaves: precisa das DUAS pra abrir. As duas condicoes precisam ser verdadeiras."
            },
            {
              question: "O que || (OU) faz numa condicao?",
              options: ["Basta UMA condicao ser true", "TODAS as condicoes precisam ser true", "Inverte true pra false", "Soma dois valores"],
              correct: 0,
              explanation: "|| = OU logico. Basta UMA das condicoes ser verdadeira pro bloco executar. E tipo uma porta com duas fechaduras: qualquer chave abre."
            },
            {
              question: 'O que esse codigo mostra?\n\nlet x = 10\nif (x > 5 && x < 20) {\n  console.log("A")\n} else {\n  console.log("B")\n}',
              options: ['"A"', '"B"', 'Erro', 'undefined'],
              correct: 0,
              explanation: "10 > 5? SIM (true). 10 < 20? SIM (true). As DUAS sao true, entao o && retorna true e mostra 'A'."
            }
          ]
        },
        {
          id: "2-2",
          title: "Switch e Ternario",
          duration: "30 min",
          module: "Decisoes",
          sections: [
            // ========== PARTE 1: SWITCH ==========
            {
              type: "explanation",
              title: "Quando usar Switch ao inves de If/Else?",
              content: "Voce ja sabe usar if/else. Mas imagina que voce tem uma variavel e quer comparar ela com VARIAS opcoes exatas. Tipo:<br><br><em>\&quot;Se o status for 'aberta', faz X. Se for 'em_andamento', faz Y. Se for 'finalizada', faz Z. Se for 'cancelada', faz W.\&quot;</em><br><br>Com if/else, ficaria assim:<br><pre style='background:#1e1e1e;padding:15px;border-radius:8px;font-size:14px;line-height:1.8'>if (status === \"aberta\") { ... }\nelse if (status === \"em_andamento\") { ... }\nelse if (status === \"finalizada\") { ... }\nelse if (status === \"cancelada\") { ... }\nelse { ... }</pre><br>Funciona! Mas quando tem <strong>4, 5, 6 opcoes</strong> pra mesma variavel, fica repetitivo. O <strong>switch</strong> faz a mesma coisa, so que mais organizado."
            },
            {
              type: "explanation",
              title: "A estrutura do Switch (passo a passo)",
              content: "O switch pega UMA variavel e compara com varios valores. A estrutura e assim:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px;font-size:14px;line-height:1.8'><span style='color:#c586c0'>switch</span> (<span style='color:#9cdcfe'>variavel</span>) {\n  <span style='color:#c586c0'>case</span> <span style='color:#ce9178'>\"valor1\"</span>:\n    <span style='color:#6a9955'>// faz isso se variavel === \"valor1\"</span>\n    <span style='color:#c586c0'>break</span>\n  <span style='color:#c586c0'>case</span> <span style='color:#ce9178'>\"valor2\"</span>:\n    <span style='color:#6a9955'>// faz isso se variavel === \"valor2\"</span>\n    <span style='color:#c586c0'>break</span>\n  <span style='color:#c586c0'>default</span>:\n    <span style='color:#6a9955'>// faz isso se NENHUM case combinou</span>\n}</pre><br>Traduzindo:<br>- <strong>switch (variavel)</strong> = \"vou comparar essa variavel\"<br>- <strong>case \&quot;valor\&quot;</strong> = \"se for igual a esse valor, faz isso\"<br>- <strong>break</strong> = \"pronto, para aqui\" (OBRIGATORIO! senao continua rodando os proximos cases)<br>- <strong>default</strong> = \"se nao for nenhum dos valores acima\" (como o else)"
            },
            {
              type: "code-example",
              title: "Switch vs If/Else (lado a lado)",
              code: 'let dia = "segunda"\n\n// ---- COM IF/ELSE ----\nif (dia === "segunda") {\n  console.log("[if] Inicio da semana")\n} else if (dia === "sexta") {\n  console.log("[if] Quase fim de semana!")\n} else if (dia === "sabado" || dia === "domingo") {\n  console.log("[if] Fim de semana!")\n} else {\n  console.log("[if] Dia normal")\n}\n\n// ---- COM SWITCH (mesma coisa!) ----\nswitch (dia) {\n  case "segunda":\n    console.log("[switch] Inicio da semana")\n    break\n  case "sexta":\n    console.log("[switch] Quase fim de semana!")\n    break\n  case "sabado":\n  case "domingo":\n    console.log("[switch] Fim de semana!")\n    break\n  default:\n    console.log("[switch] Dia normal")\n}\n\n// Os dois fazem a MESMA coisa!\n// Troque "segunda" por "sexta" e rode de novo!',
              runnable: true
            },
            {
              type: "explanation",
              title: "Quando usar Switch? Quando usar If/Else?",
              content: "<table style='width:100%;border-collapse:collapse;margin:10px 0'><tr style='border-bottom:2px solid #555'><td style='padding:10px;font-weight:bold'>Use SWITCH quando...</td><td style='padding:10px;font-weight:bold'>Use IF/ELSE quando...</td></tr><tr style='border-bottom:1px solid #444'><td style='padding:10px'>Compara a MESMA variavel com valores exatos</td><td style='padding:10px'>Precisa de >, <, >=, <=</td></tr><tr style='border-bottom:1px solid #444'><td style='padding:10px'>Tem 3 ou mais opcoes</td><td style='padding:10px'>Tem 1 ou 2 opcoes</td></tr><tr><td style='padding:10px'>Ex: status, tipo, dia, nivel</td><td style='padding:10px'>Ex: valor > 1000, idade >= 18</td></tr></table><br><div style='background:#1a3a2a;border-left:3px solid #4caf50;padding:10px;border-radius:4px'>Resumo: <strong>Switch</strong> = comparar a mesma coisa com varios valores exatos. <strong>If/Else</strong> = qualquer tipo de condicao (maior, menor, E, OU).</div>"
            },
            {
              type: "code-example",
              title: "Switch na Helsen - Status da OS",
              code: 'let status = "em_andamento"\n\nswitch (status) {\n  case "aberta":\n    console.log("Aguardando tecnico")\n    break\n  case "em_andamento":\n    console.log("Tecnico trabalhando")\n    break\n  case "finalizada":\n    console.log("Servico concluido")\n    break\n  case "cancelada":\n    console.log("OS cancelada")\n    break\n  default:\n    console.log("Status desconhecido")\n}\n\n// Troque "em_andamento" por "finalizada"\n// e rode de novo pra ver!',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercicio 1 - Seu primeiro Switch!",
              instructions: "Crie um switch pra tipo de servico:<br>- <strong>\&quot;preventiva\&quot;</strong> → mostre \"Manutencao preventiva - R$300\"<br>- <strong>\&quot;corretiva\&quot;</strong> → mostre \"Manutencao corretiva - R$450\"<br>- <strong>\&quot;emergencial\&quot;</strong> → mostre \"Emergencial - R$700\"<br>- <strong>Qualquer outro</strong> → mostre \"Tipo nao cadastrado\"<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>Lembra da estrutura:<br><code>switch (variavel) {</code><br>&nbsp;&nbsp;<code>case \&quot;valor\&quot;:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>console.log(...)</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>break</code><br>&nbsp;&nbsp;<code>default:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>console.log(...)</code><br><code>}</code></div>",
              starterCode: 'let tipo = "corretiva"\n\n// Crie o switch:\n',
              solution: 'let tipo = "corretiva"\n\nswitch (tipo) {\n  case "preventiva":\n    console.log("Manutencao preventiva - R$300")\n    break\n  case "corretiva":\n    console.log("Manutencao corretiva - R$450")\n    break\n  case "emergencial":\n    console.log("Emergencial - R$700")\n    break\n  default:\n    console.log("Tipo nao cadastrado")\n}',
              validation: "structure",
              checks: { codeHas: ["switch", "case", "break", "default", "console.log"], minOutput: 1 }
            },
            // ========== PARTE 2: TERNARIO ==========
            {
              type: "explanation",
              title: "Agora o Ternario: o que e?",
              content: "O ternario e so um <strong>atalho pro if/else</strong>. Ele faz a MESMA coisa, so que em UMA linha ao inves de 5.<br><br>Olha a diferenca:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px;font-size:14px;line-height:1.8'><span style='color:#6a9955'>// COM IF/ELSE (5 linhas):</span>\n<span style='color:#c586c0'>if</span> (idade >= 18) {\n  resultado = <span style='color:#ce9178'>\"Maior de idade\"</span>\n} <span style='color:#c586c0'>else</span> {\n  resultado = <span style='color:#ce9178'>\"Menor de idade\"</span>\n}\n\n<span style='color:#6a9955'>// COM TERNARIO (1 linha!):</span>\nresultado = idade >= 18 <span style='color:#c586c0'>?</span> <span style='color:#ce9178'>\"Maior de idade\"</span> <span style='color:#c586c0'>:</span> <span style='color:#ce9178'>\"Menor de idade\"</span></pre><br>Os dois fazem <strong>exatamente a mesma coisa</strong>. O ternario so usa menos linhas."
            },
            {
              type: "explanation",
              title: "Como ler o ternario (passo a passo)",
              content: "O ternario tem 3 partes. Por isso chama <strong>ternario</strong> (tres partes):<br><br><pre style='background:#1e1e1e;padding:20px;border-radius:8px;font-size:16px;line-height:2;text-align:center'><span style='color:#9cdcfe'>condicao</span> <span style='color:#c586c0;font-size:20px'>?</span> <span style='color:#4ec9b0'>valorSeTrue</span> <span style='color:#c586c0;font-size:20px'>:</span> <span style='color:#ce9178'>valorSeFalse</span></pre><br><table style='width:100%;border-collapse:collapse;margin:10px 0'><tr style='border-bottom:1px solid #555'><td style='padding:10px;font-size:18px;text-align:center'><code>condicao</code></td><td style='padding:10px'>A pergunta (igual ao if)</td></tr><tr style='border-bottom:1px solid #555'><td style='padding:10px;font-size:18px;text-align:center;color:#c586c0'><code>?</code></td><td style='padding:10px'>Significa: \"SE for verdadeiro, use isso\"</td></tr><tr style='border-bottom:1px solid #555'><td style='padding:10px;font-size:18px;text-align:center;color:#c586c0'><code>:</code></td><td style='padding:10px'>Significa: \"SENAO, use isso\"</td></tr></table><br>Pense assim: <strong>?</strong> = SE, <strong>:</strong> = SENAO<br><br><div style='background:#1a3a2a;border-left:3px solid #4caf50;padding:10px;border-radius:4px'>Exemplo: <code>nota >= 7 ? \&quot;Aprovado\&quot; : \&quot;Reprovado\&quot;</code><br>Leia: \"nota >= 7? <strong>SE sim</strong> → Aprovado, <strong>SENAO</strong> → Reprovado\"</div>"
            },
            {
              type: "code-example",
              title: "Ternario na pratica (passo a passo)",
              code: '// Exemplo 1: simples\nlet idade = 20\nlet categoria = idade >= 18 ? "Adulto" : "Menor"\nconsole.log(categoria)  // "Adulto"\n// idade >= 18?  SIM! Entao usa "Adulto"\n\n// Exemplo 2: dentro do console.log\nlet nota = 6\nconsole.log(nota >= 7 ? "Aprovado" : "Reprovado")\n// nota >= 7?  NAO! (6 < 7) Entao usa "Reprovado"\n\n// Exemplo 3: com template literal\nlet maquina = true\nconsole.log(`Status: ${maquina ? "Ligada" : "Desligada"}`)\n// maquina e true? SIM! Entao usa "Ligada"',
              runnable: true
            },
            {
              type: "code-example",
              title: "Comparando: if/else vs ternario",
              code: 'let valor = 1500\n\n// ---- COM IF/ELSE ----\nlet mensagem1\nif (valor > 1000) {\n  mensagem1 = "Precisa aprovacao"\n} else {\n  mensagem1 = "Aprovado automatico"\n}\nconsole.log("[if/else]", mensagem1)\n\n// ---- COM TERNARIO (mesma coisa!) ----\nlet mensagem2 = valor > 1000 ? "Precisa aprovacao" : "Aprovado automatico"\nconsole.log("[ternario]", mensagem2)\n\n// Os dois mostram a mesma coisa!\n// O ternario e so um ATALHO pro if/else',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercicio 2 - Transforme if/else em ternario",
              instructions: "Transforme esse if/else em <strong>ternario</strong>:<br><br><pre style='background:#1e1e1e;padding:10px;border-radius:8px;font-size:13px'>if (nota >= 4) {\n  resultado = \"Satisfeito\"\n} else {\n  resultado = \"Insatisfeito\"\n}</pre><br>Coloque a nota que quiser e mostre o resultado com console.log.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>Lembra a formula:<br><code>variavel = condicao ? valorSeTrue : valorSeFalse</code><br><br>Nesse caso:<br>- condicao = <code>nota >= 4</code><br>- valorSeTrue = <code>\&quot;Satisfeito\&quot;</code><br>- valorSeFalse = <code>\&quot;Insatisfeito\&quot;</code></div>",
              starterCode: 'let nota = 4.5\n\n// Transforme o if/else em ternario:\nlet resultado\n\n\nconsole.log(resultado)',
              solution: 'let nota = 4.5\n\nlet resultado = nota >= 4 ? "Satisfeito" : "Insatisfeito"\n\nconsole.log(resultado)',
              validation: "structure",
              checks: { codeHas: ["nota", "?", ":", "console.log"], minOutput: 1 }
            },
            {
              type: "exercise",
              title: "Exercicio 3 - Ternario com template literal",
              instructions: "Crie variavel <strong>tecnico</strong> (nome) e <strong>disponivel</strong> (true ou false).<br><br>Mostre com console.log e template literal:<br><code>Carlos: Disponivel</code> ou <code>Carlos: Ocupado</code><br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>Dica: use ternario DENTRO do template literal:<br><code>console.log(`${nome}: ${condicao ? \&quot;Sim\&quot; : \&quot;Nao\&quot;}`)</code></div>",
              starterCode: 'let tecnico = "Carlos"\nlet disponivel = true\n\n// Mostre com template literal + ternario:\n',
              solution: 'let tecnico = "Carlos"\nlet disponivel = true\n\nconsole.log(`${tecnico}: ${disponivel ? "Disponivel" : "Ocupado"}`)',
              validation: "structure",
              checks: { codeHas: ["tecnico", "disponivel", "?", ":", "${", "console.log"], minOutput: 1 }
            }
          ],
          quiz: [
            {
              question: "Quando e melhor usar switch ao inves de if/else?",
              options: ["Quando compara a mesma variavel com vários valores exatos", "Quando precisa de > ou <", "Quando tem so 2 opcoes", "Sempre"],
              correct: 0,
              explanation: "Switch e ideal pra comparar uma variavel com muitos valores exatos (===). Pra >, <, && e ||, use if/else."
            },
            {
              question: "O que acontece se esquecer o 'break' no switch?",
              options: ["Continua executando os proximos cases", "Da erro", "Para automaticamente", "Volta pro primeiro case"],
              correct: 0,
              explanation: "Sem break, o switch 'cai' pros proximos cases e executa todos. SEMPRE coloque break!"
            },
            {
              question: "O que o ternario faz?",
              options: ["E um atalho pro if/else em uma linha", "Cria 3 variaveis", "Repete codigo 3 vezes", "Divide um numero por 3"],
              correct: 0,
              explanation: "Ternario = 3 partes (condicao ? valorTrue : valorFalse). E so um if/else mais curto!"
            },
            {
              question: "O que esse ternario retorna?",
              code: 'let x = 3\nlet r = x > 5 ? "grande" : "pequeno"',
              options: ['"pequeno"', '"grande"', 'undefined', 'Erro'],
              correct: 0,
              explanation: "3 > 5? NAO (false)! Entao pega o valor depois do : que e \"pequeno\"."
            },
            {
              question: "Qual e a forma correta do ternario?",
              options: ["condicao ? valorTrue : valorFalse", "condicao : valorTrue ? valorFalse", "? condicao : valorTrue valorFalse", "condicao valorTrue ? : valorFalse"],
              correct: 0,
              explanation: "A ordem e: condicao PRIMEIRO, depois ? (se true), depois : (se false)."
            }
          ]
        }
      ]
    },

    // ========== MODULO 3: REPETICOES ==========
    {
      id: 3,
      title: "Repeticoes",
      lessons: [
        {
          id: "3-1",
          title: "Arrays (Listas)",
          duration: "40 min",
          module: "Repeticoes",
          sections: [
            // ========== PARTE 1: O QUE E UM ARRAY? ==========
            {
              type: "explanation",
              title: "O que e um Array? Pensa assim...",
              content: "Imagina uma <strong>caixa de ferramentas</strong>. Dentro dela tem varias ferramentas:<br><br>🔧 Chave de fenda (posicao 1)<br>🔧 Alicate (posicao 2)<br>🔧 Martelo (posicao 3)<br>🔧 Chave inglesa (posicao 4)<br><br>Um <strong>array</strong> e EXATAMENTE isso: uma <strong>LISTA de valores</strong> dentro de uma variavel so.<br><br>Na Helsen Service, usamos arrays o tempo todo:<br>- Lista de tecnicos (Leon Mendes, Dayvison Jepson, Valdinei Pereira)<br>- Lista de OS (6650, 6632, 6620)<br>- Lista de clientes (Minerva Usinagem, Usinagem Castro...)<br><br><div style='background:#1a3a2a;border-left:3px solid #4caf50;padding:10px;border-radius:4px'>Array = <strong>\&quot;Caixa que guarda uma LISTA de valores\&quot;</strong></div>"
            },
            {
              type: "explanation",
              title: "Criando seu primeiro array",
              content: "Criar um array e super simples! Usa colchetes <code>[ ]</code> e separa os valores com virgula:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px;font-size:14px;line-height:1.8'><span style='color:#c586c0'>let</span> <span style='color:#9cdcfe'>tecnicos</span> = [<span style='color:#ce9178'>\"Leon Mendes\"</span>, <span style='color:#ce9178'>\"Dayvison Jepson\"</span>, <span style='color:#ce9178'>\"Valdinei Pereira\"</span>]</pre><br>Pode ter:<br>✓ Textos (entre aspas)<br>✓ Numeros (sem aspas)<br>✓ true/false<br>✓ Ate outros arrays!<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Array vazio = <code>let lista = []</code></div>"
            },
            {
              type: "code-example",
              title: "Exemplo: Arrays com diferentes tipos",
              code: '// Array de textos (nomes de tecnicos):\nlet tecnicos = ["Leon Mendes", "Dayvison Jepson", "Valdinei Pereira"]\nconsole.log("Tecnicos:", tecnicos)\n\n// Array de numeros (numeros de OS):\nlet osNumeros = [6650, 6632, 6620, 6579]\nconsole.log("OS:", osNumeros)\n\n// Array de valores (valor das OS):\nlet valores = [1145, 700, 445, 890]\nconsole.log("Valores:", valores)',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercicio 1A - Criando um array",
              instructions: "Crie um array chamado <strong>clientes</strong> com 3 nomes de clientes (invente os nomes que quiser). Depois mostre o array inteiro com console.log.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Lembra: <code>let clientes = [\&quot;Nome1\&quot;, \&quot;Nome2\&quot;, \&quot;Nome3\&quot;]</code></div>",
              starterCode: '// Crie o array clientes:\n\n\n// Mostre ele:\n',
              solution: 'let clientes = ["Fabrica ABC", "Metalurgica XYZ", "Industria 123"]\n\nconsole.log(clientes)',
              validation: "structure",
              checks: { codeHas: ["let clientes", "[", "]", "console.log"], minOutput: 1 }
            },

            // ========== PARTE 2: ACESSANDO ITENS (COMECA NO ZERO!) ==========
            {
              type: "explanation",
              title: "Acessando itens do array (COMECA NO ZERO!)",
              content: "<div style='background:#3a2a1a;border-left:3px solid #f48771;padding:10px;border-radius:4px;margin-bottom:15px'>⚠️ <strong>ATENÇÃO:</strong> Arrays comecam na posicao <strong>0</strong> (zero), NAO no 1!</div>Imagina um predio de 3 andares:<br><br>🏢 Andar 0 (terreo) = primeiro item<br>🏢 Andar 1 = segundo item<br>🏢 Andar 2 = terceiro item<br><br>Pra acessar um item, use colchetes com o numero da posicao:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px;font-size:14px;line-height:1.8'><span style='color:#c586c0'>let</span> <span style='color:#9cdcfe'>tecnicos</span> = [<span style='color:#ce9178'>\"Leon\"</span>, <span style='color:#ce9178'>\"Dayvison\"</span>, <span style='color:#ce9178'>\"Valdinei\"</span>]\n\n<span style='color:#dcdcaa'>console</span>.<span style='color:#dcdcaa'>log</span>(<span style='color:#9cdcfe'>tecnicos</span>[<span style='color:#b5cea8'>0</span>])  <span style='color:#6a9955'>// \"Leon\" (primeiro!)</span>\n<span style='color:#dcdcaa'>console</span>.<span style='color:#dcdcaa'>log</span>(<span style='color:#9cdcfe'>tecnicos</span>[<span style='color:#b5cea8'>1</span>])  <span style='color:#6a9955'>// \"Dayvison\"</span>\n<span style='color:#dcdcaa'>console</span>.<span style='color:#dcdcaa'>log</span>(<span style='color:#9cdcfe'>tecnicos</span>[<span style='color:#b5cea8'>2</span>])  <span style='color:#6a9955'>// \"Valdinei\" (ultimo!)</span></pre>"
            },
            {
              type: "code-example",
              title: "Exemplo: Acessando cada item",
              code: 'let tecnicos = ["Leon Mendes", "Dayvison Jepson", "Valdinei Pereira"]\n\n// IMPORTANTE: Comeca no ZERO!\nconsole.log("Posicao 0 (primeiro):", tecnicos[0])  // Leon Mendes\nconsole.log("Posicao 1:", tecnicos[1])            // Dayvison Jepson\nconsole.log("Posicao 2 (ultimo):", tecnicos[2])   // Valdinei Pereira\n\n// Tenta trocar os numeros [0], [1], [2]\n// e roda de novo pra ver o que muda!',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercicio 1B - Acessando itens",
              instructions: "Ja tem um array de clientes criado. Mostre APENAS o <strong>primeiro cliente</strong> (posicao 0) com console.log.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Use: <code>console.log(clientes[0])</code></div>",
              starterCode: 'let clientes = ["Minerva Usinagem", "Usinagem Castro", "Off Limits"]\n\n// Mostre APENAS o primeiro cliente:\n',
              solution: 'let clientes = ["Minerva Usinagem", "Usinagem Castro", "Off Limits"]\n\nconsole.log(clientes[0])',
              validation: "structure",
              checks: { codeHas: ["clientes[0]", "console.log"], outputHas: ["Minerva"] }
            },
            {
              type: "exercise",
              title: "Exercicio 1C - Varios itens",
              instructions: "Agora mostre o <strong>primeiro E o ultimo</strong> cliente do array.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Primeiro = posicao 0<br>💡 Ultimo = posicao 2 (porque tem 3 clientes: 0, 1, 2)</div>",
              starterCode: 'let clientes = ["Minerva Usinagem", "Usinagem Castro", "Off Limits"]\n\n// Mostre o primeiro:\n\n\n// Mostre o ultimo:\n',
              solution: 'let clientes = ["Minerva Usinagem", "Usinagem Castro", "Off Limits"]\n\nconsole.log("Primeiro:", clientes[0])\nconsole.log("Ultimo:", clientes[2])',
              validation: "structure",
              checks: { codeHas: ["clientes[0]", "clientes[2]", "console.log"], minOutput: 2 }
            },

            // ========== PARTE 3: .length (TAMANHO DO ARRAY) ==========
            {
              type: "explanation",
              title: ".length — Descobrindo quantos itens tem",
              content: "Pra saber <strong>quantos itens tem no array</strong>, use <code>.length</code>:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px;font-size:14px;line-height:1.8'><span style='color:#c586c0'>let</span> <span style='color:#9cdcfe'>tecnicos</span> = [<span style='color:#ce9178'>\"Leon\"</span>, <span style='color:#ce9178'>\"Dayvison\"</span>, <span style='color:#ce9178'>\"Valdinei\"</span>]\n\n<span style='color:#dcdcaa'>console</span>.<span style='color:#dcdcaa'>log</span>(<span style='color:#9cdcfe'>tecnicos</span>.<span style='color:#9cdcfe'>length</span>)  <span style='color:#6a9955'>// 3</span></pre><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 <strong>DICA PRO:</strong> O ultimo item sempre ta na posicao <code>length - 1</code>:<br><code>let ultimo = tecnicos[tecnicos.length - 1]</code><br><br>Por que -1? Porque comeca no zero! Se tem 3 itens, as posicoes sao 0, 1, 2 (e 2 = 3-1).</div>"
            },
            {
              type: "code-example",
              title: "Exemplo: .length na pratica",
              code: 'let tecnicos = ["Leon Mendes", "Dayvison Jepson", "Valdinei Pereira"]\n\nconsole.log("Total de tecnicos:", tecnicos.length)  // 3\nconsole.log("Primeiro:", tecnicos[0])                // Leon\nconsole.log("Ultimo:", tecnicos[tecnicos.length - 1]) // Valdinei\n\n// ===== POR QUE length - 1? =====\n//\n// tecnicos.length = 3 (tem 3 itens)\n// Mas as posicoes sao: 0, 1, 2\n// O ultimo e a posicao 2\n// Entao: length - 1 = 3 - 1 = 2 ✓',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercicio 1D - Usando .length",
              instructions: "Mostre quantos clientes tem no array usando <code>.length</code>.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Use: <code>console.log(clientes.length)</code></div>",
              starterCode: 'let clientes = ["Minerva Usinagem", "Usinagem Castro", "Off Limits", "Hseven LTDA"]\n\n// Mostre quantos clientes tem:\n',
              solution: 'let clientes = ["Minerva Usinagem", "Usinagem Castro", "Off Limits", "Hseven LTDA"]\n\nconsole.log(clientes.length)',
              validation: "structure",
              checks: { codeHas: ["clientes.length", "console.log"], outputHas: ["4"] }
            },

            // ========== PARTE 4: .push() (ADICIONAR NO FINAL) ==========
            {
              type: "explanation",
              title: ".push() — Adicionar item no FINAL",
              content: "Imagina que chegou um tecnico novo na Helsen Service. Como adicionar ele na lista?<br><br>Use <code>.push()</code> pra adicionar no <strong>final</strong> do array:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px;font-size:14px;line-height:1.8'><span style='color:#c586c0'>let</span> <span style='color:#9cdcfe'>tecnicos</span> = [<span style='color:#ce9178'>\"Leon\"</span>, <span style='color:#ce9178'>\"Dayvison\"</span>]\n<span style='color:#dcdcaa'>console</span>.<span style='color:#dcdcaa'>log</span>(<span style='color:#ce9178'>\"Antes:\"</span>, <span style='color:#9cdcfe'>tecnicos</span>)  <span style='color:#6a9955'>// [\"Leon\", \"Dayvison\"]</span>\n\n<span style='color:#9cdcfe'>tecnicos</span>.<span style='color:#dcdcaa'>push</span>(<span style='color:#ce9178'>\"Valdinei\"</span>)\n<span style='color:#dcdcaa'>console</span>.<span style='color:#dcdcaa'>log</span>(<span style='color:#ce9178'>\"Depois:\"</span>, <span style='color:#9cdcfe'>tecnicos</span>)  <span style='color:#6a9955'>// [\"Leon\", \"Dayvison\", \"Valdinei\"]</span></pre><br><div style='background:#1a3a2a;border-left:3px solid #4caf50;padding:10px;border-radius:4px'>.push() = \"empurra\" um item novo pro final da fila!</div>"
            },
            {
              type: "code-example",
              title: "Exemplo: Adicionando OS no final",
              code: 'let osNumeros = [6650, 6632, 6620]\nconsole.log("Antes:", osNumeros)\nconsole.log("Total antes:", osNumeros.length)  // 3\n\n// Chegou uma OS nova!\nosNumeros.push(6579)\nconsole.log("Depois:", osNumeros)\nconsole.log("Total depois:", osNumeros.length)  // 4\n\n// Chegou mais uma!\nosNumeros.push(6418)\nconsole.log("Final:", osNumeros)\nconsole.log("Total final:", osNumeros.length)  // 5',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercicio 1E - Adicionando com .push()",
              instructions: "Adicione <strong>\&quot;JMS Industria\&quot;</strong> no final do array de clientes usando <code>.push()</code>. Depois mostre o array inteiro pra confirmar.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Use: <code>clientes.push(\&quot;JMS Industria\&quot;)</code></div>",
              starterCode: 'let clientes = ["Minerva Usinagem", "Usinagem Castro"]\n\n// Adicione "JMS Industria":\n\n\n// Mostre o array:\n',
              solution: 'let clientes = ["Minerva Usinagem", "Usinagem Castro"]\n\nclientes.push("JMS Industria")\nconsole.log(clientes)',
              validation: "structure",
              checks: { codeHas: ["clientes.push", "JMS", "console.log"], outputHas: ["JMS"] }
            },

            // ========== RESUMO FINAL ==========
            {
              type: "explanation",
              title: "Resumo: O que voce aprendeu",
              content: "<div style='background:#1a2a2a;padding:15px;border-radius:8px;margin:15px 0'><strong style='color:#4fc3f7;font-size:16px'>✓ Arrays</strong><br><br>📦 <code>let lista = [\&quot;A\&quot;, \&quot;B\&quot;, \&quot;C\&quot;]</code> → criar array<br>🔍 <code>lista[0]</code> → acessar primeiro item (comeca no ZERO!)<br>📏 <code>lista.length</code> → quantos itens tem<br>➕ <code>lista.push(\&quot;D\&quot;)</code> → adicionar no final<br><br><div style='background:#1a3a2a;border-left:3px solid #4caf50;padding:10px;border-radius:4px;margin-top:10px'>Arrays sao a BASE de tudo! No proximo modulo voce vai aprender a PERCORRER arrays com loops (for...of).</div></div>"
            }
          ],
          quiz: [
            {
              question: "Qual e a posicao do PRIMEIRO item de um array?",
              options: ["0", "1", "-1", "Depende"],
              correct: 0,
              explanation: "Em JavaScript, arrays comecam na posicao 0 (zero)!"
            },
            {
              question: 'O que esse codigo mostra?\n\nlet nomes = ["Ana", "Carlos", "Pedro"]\nconsole.log(nomes[1])',
              options: ['"Carlos"', '"Ana"', '"Pedro"', 'Erro'],
              correct: 0,
              explanation: "Posicao 0 = Ana, Posicao 1 = Carlos, Posicao 2 = Pedro. Entao nomes[1] = Carlos."
            },
            {
              question: "O que .push() faz?",
              options: ["Adiciona item no final", "Remove o primeiro", "Adiciona no inicio", "Conta quantos tem"],
              correct: 0,
              explanation: ".push() adiciona um item no final do array."
            },
            {
              question: 'O que esse codigo mostra?\n\nlet x = [10, 20, 30]\nconsole.log(x.length)',
              options: ["3", "30", "2", "10"],
              correct: 0,
              explanation: ".length retorna quantos itens tem no array. Tem 3 itens (10, 20, 30), entao mostra 3."
            }
          ]
        },
        {
          id: "3-2",
          title: "Loops (For, While)",
          duration: "30 min",
          module: "Repeticoes",
          sections: [
            {
              type: "explanation",
              title: "O que e um Loop? A Analogia da Escada",
              content: "Imagina que voce precisa subir uma escada de 10 degraus. Cada degrau voce faz a MESMA coisa:<br><br>1. Pe direito sobe<br>2. Pe esquerdo sobe<br>3. Repete...<br><br>Voce NAO pensa \"vou fazer isso 10 vezes\". Seu cerebro automaticamente repete ate acabar os degraus.<br><br>O <strong>loop</strong> e a mesma coisa! Ele pega uma lista e faz a MESMA ACAO pra cada item da lista. Tipo:<br><br>🔧 Lista de 50 OS → mostrar cada uma na tela<br>🔧 Lista de valores → somar todos<br>🔧 Lista de tecnicos → enviar email pra cada um<br><br><div style='background:#1a3a2a;border-left:3px solid #4caf50;padding:10px;border-radius:4px'>Loop = <strong>\&quot;Faca isso pra CADA item da lista\&quot;</strong></div>"
            },
            {
              type: "explanation",
              title: "Sem Loop vs Com Loop (olha a diferenca!)",
              content: "Imagina que voce tem 3 clientes e quer mostrar cada um.<br><br><strong>❌ SEM LOOP (repetindo codigo):</strong><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px;font-size:14px;line-height:1.8'>let clientes = [\"Fabrica ABC\", \"Metal XYZ\", \"Industria 123\"]\n\nconsole.log(clientes[0])  // Fabrica ABC\nconsole.log(clientes[1])  // Metal XYZ\nconsole.log(clientes[2])  // Industria 123\n\n<span style='color:#f48771'>// E se tiver 100 clientes? 100 linhas??? NÃO DÁ!</span></pre><br><strong>✅ COM LOOP (1 linha resolve tudo!):</strong><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px;font-size:14px;line-height:1.8'>let clientes = [\"Fabrica ABC\", \"Metal XYZ\", \"Industria 123\"]\n\nfor (let cliente of clientes) {\n  console.log(cliente)\n}\n\n<span style='color:#4ec9b0'>// Funciona com 3, 100 ou 10.000 clientes!</span></pre>"
            },
            // ========== FOR...OF (o mais simples) ==========
            {
              type: "explanation",
              title: "for...of — O Loop mais Simples (comece por aqui!)",
              content: "O <strong>for...of</strong> e tipo um robo que vai olhando cada item da lista, um por um.<br><br>A estrutura e assim:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px;font-size:14px;line-height:1.8'><span style='color:#c586c0'>for</span> (<span style='color:#c586c0'>let</span> <span style='color:#9cdcfe'>item</span> <span style='color:#c586c0'>of</span> <span style='color:#9cdcfe'>lista</span>) {\n  <span style='color:#6a9955'>// faz algo com cada item</span>\n}</pre><br>Leia assim: <strong>\&quot;PARA CADA item DA lista, faca isso\&quot;</strong><br><br>📦 <code>lista</code> = a caixa cheia de coisas<br>🔍 <code>item</code> = a coisa que o robo ta olhando AGORA (muda sozinho a cada rodada)<br>⚙️ <code>{ }</code> = o que fazer com cada coisa<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 O nome <code>item</code> voce escolhe! Pode ser <code>nome</code>, <code>os</code>, <code>valor</code>... o que fizer sentido.</div>"
            },
            {
              type: "code-example",
              title: "Exemplo Visual: O Robo Percorrendo a Lista",
              code: 'let tecnicos = ["Carlos", "Ana", "Pedro"]\n\n// O robo vai olhar cada nome, um por um:\nfor (let nome of tecnicos) {\n  console.log("Tecnico:", nome)\n}\n\n// ==== O QUE ACONTECE POR DENTRO ====\n//\n// Rodada 1:\n//   Robo pega: "Carlos"\n//   Variavel nome = "Carlos"\n//   Executa: console.log("Tecnico:", "Carlos")\n//   Saida: Tecnico: Carlos\n//\n// Rodada 2:\n//   Robo pega: "Ana"\n//   Variavel nome = "Ana"\n//   Executa: console.log("Tecnico:", "Ana")\n//   Saida: Tecnico: Ana\n//\n// Rodada 3:\n//   Robo pega: "Pedro"\n//   Variavel nome = "Pedro"\n//   Executa: console.log("Tecnico:", "Pedro")\n//   Saida: Tecnico: Pedro\n//\n// Lista acabou? PARA!\n//\n// Troque os nomes e rode de novo!',
              runnable: true
            },
            {
              type: "code-example",
              title: "Exemplo Real: Somando Valores de OS",
              code: 'let valores = [350, 820, 1200, 450]\nlet total = 0\n\n// Para CADA valor DA lista, soma no total:\nfor (let v of valores) {\n  total += v   // total = total + v\n}\n\nconsole.log(`Total: R$${total}`)\n\n// ===== RODADA POR RODADA =====\n//\n// ANTES DO LOOP: total = 0\n//\n// Rodada 1:\n//   v = 350\n//   total = 0 + 350 = 350\n//\n// Rodada 2:\n//   v = 820\n//   total = 350 + 820 = 1170\n//\n// Rodada 3:\n//   v = 1200\n//   total = 1170 + 1200 = 2370\n//\n// Rodada 4:\n//   v = 450\n//   total = 2370 + 450 = 2820\n//\n// Lista acabou!\n// Mostra: Total: R$2820',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercicio 1A - Seu primeiro loop (so mostrar)!",
              instructions: "Use <strong>for...of</strong> pra percorrer o array de clientes e mostrar cada um com console.log.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>Lembra a estrutura:<br><code>for (let item of lista) {</code><br>&nbsp;&nbsp;<code>console.log(item)</code><br><code>}</code></div>",
              starterCode: 'let clientes = ["Fabrica ABC", "Metal XYZ", "Industria 123"]\n\n// Percorra a lista e mostre cada cliente:\n',
              solution: 'let clientes = ["Fabrica ABC", "Metal XYZ", "Industria 123"]\n\nfor (let cliente of clientes) {\n  console.log(cliente)\n}',
              validation: "structure",
              checks: { codeHas: ["for", "of", "clientes", "console.log"], minOutput: 3 }
            },
            {
              type: "exercise",
              title: "Exercicio 1B - Loop com template literal",
              instructions: "Agora percorra o array de tecnicos e mostre cada um FORMATADO: <code>`Tecnico: ${nome}`</code><br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Dentro do loop:<br><code>console.log(`Tecnico: ${nome}`)</code></div>",
              starterCode: 'let tecnicos = ["Leon Mendes", "Dayvison Jepson", "Valdinei Pereira"]\n\n// Percorra e mostre formatado:\n',
              solution: 'let tecnicos = ["Leon Mendes", "Dayvison Jepson", "Valdinei Pereira"]\n\nfor (let nome of tecnicos) {\n  console.log(`Tecnico: ${nome}`)\n}',
              validation: "structure",
              checks: { codeHas: ["for", "of", "tecnicos", "console.log", "`"], minOutput: 3, outputHas: ["Tecnico:"] }
            },
            // ========== FOR CLASSICO (OPCIONAL - so se precisar) ==========
            {
              type: "explanation",
              title: "For Classico (BONUS - voce NAO precisa disso agora!)",
              content: "<div style='background:#3a2a1a;border-left:3px solid #f48771;padding:10px;border-radius:4px;margin-bottom:15px'>⚠️ <strong>PULA ESSA PARTE!</strong> O for...of ja resolve 99% dos casos. So volte aqui se PRECISAR de um contador numerico tipo \"mostre os numeros de 1 ate 10\".</div>O <strong>for classico</strong> serve pra quando voce quer um <strong>contador</strong> — tipo contar de 1 ate 10.<br><br>Exemplo com nome de variavel CLARO:<br><pre style='background:#1e1e1e;padding:15px;border-radius:8px;font-size:14px;line-height:1.8'><span style='color:#c586c0'>for</span> (<span style='color:#c586c0'>let</span> <span style='color:#9cdcfe'>numero</span> = <span style='color:#b5cea8'>1</span>; <span style='color:#9cdcfe'>numero</span> <= <span style='color:#b5cea8'>5</span>; <span style='color:#9cdcfe'>numero</span>++) {\n  <span style='color:#dcdcaa'>console</span>.<span style='color:#dcdcaa'>log</span>(<span style='color:#ce9178'>\"Numero:\"</span>, <span style='color:#9cdcfe'>numero</span>)\n}</pre><br>Traduz pra portugues:<br><br>📌 <code>let numero = 1</code> → começa com numero valendo 1<br>📌 <code>numero <= 5</code> → continua enquanto numero for menor ou igual a 5<br>📌 <code>numero++</code> → a cada rodada, soma 1 no numero<br><br>Saida: mostra 1, 2, 3, 4, 5 e para.<br><br><div style='background:#1a3a2a;border-left:3px solid #4caf50;padding:10px;border-radius:4px'>💡 Muita gente usa <code>i</code> (de \"indice\") por tradicao, mas voce pode usar <strong>qualquer nome</strong>: <code>contador</code>, <code>numero</code>, <code>posicao</code>... Use o que fizer sentido!</div>"
            },
            {
              type: "explanation",
              title: "Por que tem 3 partes? Vamos por partes...",
              content: "O for classico parece confuso, mas e so <strong>3 comandos numa linha</strong>. Olha o que ta acontecendo:<br><br><strong>Versao separada (o que ta acontecendo por dentro):</strong><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px;font-size:14px;line-height:1.8'><span style='color:#c586c0'>let</span> <span style='color:#9cdcfe'>contador</span> = <span style='color:#b5cea8'>1</span>  <span style='color:#6a9955'>// 1. Cria o contador (so roda UMA vez no inicio)</span>\n\n<span style='color:#c586c0'>while</span> (<span style='color:#9cdcfe'>contador</span> <= <span style='color:#b5cea8'>5</span>) {  <span style='color:#6a9955'>// 2. Continua enquanto contador <= 5</span>\n  <span style='color:#dcdcaa'>console</span>.<span style='color:#dcdcaa'>log</span>(<span style='color:#9cdcfe'>contador</span>)\n  <span style='color:#9cdcfe'>contador</span>++  <span style='color:#6a9955'>// 3. Soma 1 no final de cada rodada</span>\n}</pre><br><strong>Versao for (tudo numa linha):</strong><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px;font-size:14px;line-height:1.8'><span style='color:#c586c0'>for</span> (<span style='color:#c586c0'>let</span> <span style='color:#9cdcfe'>contador</span> = <span style='color:#b5cea8'>1</span>; <span style='color:#9cdcfe'>contador</span> <= <span style='color:#b5cea8'>5</span>; <span style='color:#9cdcfe'>contador</span>++) {\n  <span style='color:#dcdcaa'>console</span>.<span style='color:#dcdcaa'>log</span>(<span style='color:#9cdcfe'>contador</span>)\n}</pre><br>E a MESMA coisa! O for so junta os 3 comandos numa linha pra economizar espaco.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>Se voce nao entender o for classico, <strong>TUDO BEM!</strong> Use <strong>for...of</strong> sempre. Ele resolve 99% dos problemas e e muito mais facil.</div>"
            },
            {
              type: "code-example",
              title: "Exemplo Real: Numerando OS",
              code: '// Imagina que precisa numerar 5 OS\nfor (let numeroOS = 1; numeroOS <= 5; numeroOS++) {\n  console.log(`OS-00${numeroOS}`)\n}\n\n// Saida:\n// OS-001\n// OS-002\n// OS-003\n// OS-004\n// OS-005\n//\n// Viu? Usei "numeroOS" ao inves de "i"\n// Use o nome que fizer sentido!',
              runnable: true
            },
            {
              type: "explanation",
              title: "Quando usar qual?",
              content: "<table style='width:100%;border-collapse:collapse;margin:10px 0'><tr style='border-bottom:2px solid #555'><td style='padding:10px;font-weight:bold'>Use FOR...OF quando...</td><td style='padding:10px;font-weight:bold'>Use FOR classico quando...</td></tr><tr style='border-bottom:1px solid #444'><td style='padding:10px'>Quer percorrer um array</td><td style='padding:10px'>Precisa de um contador (1, 2, 3...)</td></tr><tr style='border-bottom:1px solid #444'><td style='padding:10px'>Nao precisa saber a posicao</td><td style='padding:10px'>Precisa saber a posicao de cada item</td></tr><tr><td style='padding:10px'>Ex: mostrar cada tecnico</td><td style='padding:10px'>Ex: contar de 1 ate 10, gerar numeros</td></tr></table><br><div style='background:#1a3a2a;border-left:3px solid #4caf50;padding:10px;border-radius:4px'>Na maioria dos casos, <strong>for...of</strong> e o que voce vai usar. E mais simples e mais facil de ler.</div>"
            },
            {
              type: "exercise",
              title: "Exercicio 2A - Loop pra contar",
              instructions: "Use <strong>for...of</strong> pra contar quantos clientes tem. Crie uma variavel <code>total</code> comecando em 0. A cada rodada do loop, some 1 (<code>total++</code>).<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Dentro do loop: <code>total++</code> (soma 1)</div>",
              starterCode: 'let clientes = ["Minerva", "Castro", "Off Limits", "Hseven"]\nlet total = 0\n\n// Faca o loop e conte:\n\n\nconsole.log(`Total: ${total}`)',
              solution: 'let clientes = ["Minerva", "Castro", "Off Limits", "Hseven"]\nlet total = 0\n\nfor (let c of clientes) {\n  total++\n}\n\nconsole.log(`Total: ${total}`)',
              validation: "structure",
              checks: { codeHas: ["for", "of", "total", "++", "console.log"], outputHas: ["4"] }
            },
            {
              type: "exercise",
              title: "Exercicio 2B - Loop com soma",
              instructions: "Agora use <strong>for...of</strong> pra SOMAR todos os valores do array. Crie <code>soma</code> comecando em 0. Dentro do loop, faca <code>soma += v</code>.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 <code>soma += v</code> e o mesmo que <code>soma = soma + v</code></div>",
              starterCode: 'let valores = [350, 820, 1200, 450, 690]\nlet soma = 0\n\n// Faca o loop pra somar:\n\n\nconsole.log(`Total: R$${soma}`)',
              solution: 'let valores = [350, 820, 1200, 450, 690]\nlet soma = 0\n\nfor (let v of valores) {\n  soma += v\n}\n\nconsole.log(`Total: R$${soma}`)',
              validation: "structure",
              checks: { codeHas: ["for", "of", "soma", "+=", "console.log"], outputHas: ["3510"] }
            },
            {
              type: "exercise",
              title: "Exercicio 2C - Loop com if dentro",
              instructions: "Use <strong>for...of</strong> com <strong>if</strong> dentro! Conte quantos valores sao maiores que 1000.<br><br>Crie <code>maiores</code> comecando em 0. Dentro do loop, teste: <code>if (v > 1000)</code> e some 1 se passar.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Estrutura:<br><code>for (let v of valores) {</code><br>&nbsp;&nbsp;<code>if (v > 1000) {</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>maiores++</code><br>&nbsp;&nbsp;<code>}</code><br><code>}</code></div>",
              starterCode: 'let valores = [150, 2300, 800, 450, 3100, 670]\nlet maiores = 0\n\n// Faca o loop e conte os maiores que 1000:\n\n\nconsole.log(`Maiores que 1000: ${maiores}`)',
              solution: 'let valores = [150, 2300, 800, 450, 3100, 670]\nlet maiores = 0\n\nfor (let v of valores) {\n  if (v > 1000) {\n    maiores++\n  }\n}\n\nconsole.log(`Maiores que 1000: ${maiores}`)',
              validation: "structure",
              checks: { codeHas: ["for", "of", "if", "maiores", "console.log"], outputHas: ["2"] }
            }
          ],
          quiz: [
            {
              question: "O que for...of faz?",
              options: ["Percorre cada item do array, um por um", "Cria um novo array", "Ordena o array", "Remove itens do array"],
              correct: 0,
              explanation: "for...of pega cada item do array automaticamente, um de cada vez."
            },
            {
              question: "Qual a diferenca entre for...of e for classico?",
              options: ["for...of percorre lista, for classico usa contador", "Sao a mesma coisa", "for classico e mais rapido", "for...of so funciona com numeros"],
              correct: 0,
              explanation: "for...of e pra percorrer arrays. for classico e pra quando voce precisa de um contador (let i = 0; i < 10; i++)."
            },
            {
              question: "O que esse codigo mostra?",
              code: 'let s = 0\nfor (let n of [1, 2, 3]) {\n  s += n\n}\nconsole.log(s)',
              options: ["6", "123", "3", "0"],
              correct: 0,
              explanation: "s comeca em 0. Rodada 1: 0+1=1. Rodada 2: 1+2=3. Rodada 3: 3+3=6."
            },
            {
              question: "Quantas vezes esse loop roda?",
              code: 'for (let i = 1; i <= 3; i++) {\n  console.log(i)\n}',
              options: ["3 vezes (mostra 1, 2, 3)", "4 vezes", "2 vezes", "Infinitas vezes"],
              correct: 0,
              explanation: "i comeca em 1. Roda enquanto i <= 3. Entao roda com i=1, i=2, i=3. Quando i vira 4, para."
            }
          ]
        }
      ]
    },

    // ========== MODULO 4: FUNCOES ==========
    {
      id: 4,
      title: "Funcoes",
      lessons: [
        {
          id: "4-1",
          title: "Criando Funcoes",
          duration: "45 min",
          module: "Funcoes",
          sections: [
            // ========== PARTE 1: O QUE E UMA FUNCAO? ==========
            {
              type: "explanation",
              title: "O que e uma funcao? A analogia da receita de bolo",
              content: "Imagina que voce quer fazer um bolo. Voce NAO inventa a receita toda vez, ne? Voce:<br><br>1. Olha a <strong>receita</strong> (instrucoes)<br>2. Pega os <strong>ingredientes</strong> (valores)<br>3. Segue os <strong>passos</strong><br>4. <strong>Resultado:</strong> bolo pronto!<br><br>Funcao e EXATAMENTE isso! E uma <strong>receita de codigo</strong>:<br><br>📝 Voce escreve a funcao UMA VEZ<br>🍰 Depois \"chama\" ela quantas vezes quiser<br>🎯 Cada vez pode usar ingredientes (valores) diferentes<br>✨ E ela retorna o resultado<br><br><div style='background:#1a3a2a;border-left:3px solid #4caf50;padding:10px;border-radius:4px'>Funcao = <strong>\&quot;Receita de codigo que voce pode usar varias vezes\&quot;</strong></div>"
            },
            {
              type: "explanation",
              title: "Estrutura de uma funcao (super simples!)",
              content: "A estrutura mais basica e assim:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px;font-size:14px;line-height:1.8'><span style='color:#c586c0'>function</span> <span style='color:#dcdcaa'>nomeDaFuncao</span>() {\n  <span style='color:#6a9955'>// codigo que vai rodar quando voce chamar</span>\n}\n\n<span style='color:#6a9955'>// Chamando (usando) a funcao:</span>\n<span style='color:#dcdcaa'>nomeDaFuncao</span>()</pre><br>Explicando cada parte:<br><br>📌 <code>function</code> = palavra magica pra criar funcao<br>📌 <code>nomeDaFuncao</code> = nome que voce escolhe (como nome de variavel)<br>📌 <code>( )</code> = parenteses OBRIGATORIOS (por enquanto vazios)<br>📌 <code>{ }</code> = chaves com o codigo dentro<br>📌 Pra usar: chama o nome com <code>()</code><br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Criar a funcao NAO executa ela! Voce precisa CHAMAR depois.</div>"
            },
            {
              type: "code-example",
              title: "Exemplo: Funcao SEM parametros (sem ingredientes)",
              code: '// 1. CRIAR a funcao (ainda nao roda!):\nfunction mostrarMensagem() {\n  console.log("Bem-vindo a Helsen Service!")\n  console.log("Sistema MATH Academy")\n}\n\n// 2. CHAMAR a funcao (agora SIM roda!):\nmostrarMensagem()\n\n// Pode chamar quantas vezes quiser:\nmostrarMensagem()\nmostrarMensagem()\n\n// Cada vez que chama, roda o codigo inteiro de novo!',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercicio 1A - Funcao simples (sem parametros)",
              instructions: "Crie uma funcao chamada <strong>mostrarTecnicos</strong> que mostra 3 nomes de tecnicos com console.log. Depois CHAME a funcao pra rodar.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Estrutura:<br><code>function mostrarTecnicos() {</code><br>&nbsp;&nbsp;<code>console.log(\&quot;Leon Mendes\&quot;)</code><br>&nbsp;&nbsp;<code>// ... mais 2 tecnicos</code><br><code>}</code><br><br>Depois chama: <code>mostrarTecnicos()</code></div>",
              starterCode: '// Crie a funcao mostrarTecnicos:\n\n\n// Chame a funcao:\n',
              solution: 'function mostrarTecnicos() {\n  console.log("Leon Mendes")\n  console.log("Dayvison Jepson")\n  console.log("Valdinei Pereira")\n}\n\nmostrarTecnicos()',
              validation: "structure",
              checks: { codeHas: ["function mostrarTecnicos", "console.log", "mostrarTecnicos()"], minOutput: 3 }
            },

            // ========== PARTE 2: PARAMETROS (INGREDIENTES!) ==========
            {
              type: "explanation",
              title: "Parametros — Os \"ingredientes\" da funcao",
              content: "Ate agora a funcao faz sempre a MESMA coisa. Mas e se voce quiser mudar algo? Tipo:<br><br>🍰 Fazer bolo de chocolate OU de morango?<br>🔧 Calcular servico de 2 horas OU de 5 horas?<br><br>Pra isso usamos <strong>PARAMETROS</strong> — sao como ingredientes que voce passa pra funcao:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px;font-size:14px;line-height:1.8'><span style='color:#c586c0'>function</span> <span style='color:#dcdcaa'>saudar</span>(<span style='color:#9cdcfe'>nome</span>) {\n  <span style='color:#dcdcaa'>console</span>.<span style='color:#dcdcaa'>log</span>(<span style='color:#ce9178'>`Oi, </span><span style='color:#569cd6'>${</span><span style='color:#9cdcfe'>nome</span><span style='color:#569cd6'>}</span><span style='color:#ce9178'>!`</span>)\n}\n\n<span style='color:#dcdcaa'>saudar</span>(<span style='color:#ce9178'>\"Leon\"</span>)      <span style='color:#6a9955'>// Oi, Leon!</span>\n<span style='color:#dcdcaa'>saudar</span>(<span style='color:#ce9178'>\"Dayvison\"</span>)  <span style='color:#6a9955'>// Oi, Dayvison!</span></pre><br><div style='background:#1a3a2a;border-left:3px solid #4caf50;padding:10px;border-radius:4px'>Parametro = variavel que recebe o valor quando voce chama a funcao!</div>"
            },
            {
              type: "code-example",
              title: "Exemplo: Funcao COM parametro",
              code: '// Funcao que recebe o nome do tecnico:\nfunction mostrarTecnico(nome) {\n  console.log(`Tecnico: ${nome}`)\n  console.log(`Status: Disponivel`)\n}\n\n// Chamando com valores diferentes:\nmostrarTecnico("Leon Mendes")\nmostrarTecnico("Dayvison Jepson")\nmostrarTecnico("Valdinei Pereira")\n\n// A mesma funcao, mas cada vez mostra um tecnico diferente!',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercicio 1B - Funcao com 1 parametro",
              instructions: "Crie uma funcao <strong>mostrarCliente</strong> que recebe o nome do cliente e mostra: <code>`Cliente: ${nome}`</code>. Chame 2 vezes com clientes diferentes.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 <code>function mostrarCliente(nome) {</code><br>&nbsp;&nbsp;<code>console.log(`Cliente: ${nome}`)</code><br><code>}</code></div>",
              starterCode: '// Crie a funcao:\n\n\n// Chame 2 vezes:\n',
              solution: 'function mostrarCliente(nome) {\n  console.log(`Cliente: ${nome}`)\n}\n\nmostrarCliente("Minerva Usinagem")\nmostrarCliente("Usinagem Castro")',
              validation: "structure",
              checks: { codeHas: ["function mostrarCliente", "nome", "console.log", "mostrarCliente("], minOutput: 2 }
            },

            // ========== PARTE 3: VARIOS PARAMETROS ==========
            {
              type: "explanation",
              title: "Varios parametros (varios ingredientes!)",
              content: "Funcao pode receber QUANTOS parametros voce quiser! Separa com virgula:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px;font-size:14px;line-height:1.8'><span style='color:#c586c0'>function</span> <span style='color:#dcdcaa'>calcular</span>(<span style='color:#9cdcfe'>horas</span>, <span style='color:#9cdcfe'>valorHora</span>) {\n  <span style='color:#c586c0'>let</span> <span style='color:#9cdcfe'>total</span> = <span style='color:#9cdcfe'>horas</span> * <span style='color:#9cdcfe'>valorHora</span>\n  <span style='color:#dcdcaa'>console</span>.<span style='color:#dcdcaa'>log</span>(<span style='color:#ce9178'>`Total: R$</span><span style='color:#569cd6'>${</span><span style='color:#9cdcfe'>total</span><span style='color:#569cd6'>}</span><span style='color:#ce9178'>`</span>)\n}\n\n<span style='color:#dcdcaa'>calcular</span>(<span style='color:#b5cea8'>4</span>, <span style='color:#b5cea8'>175</span>)  <span style='color:#6a9955'>// Total: R$700</span>\n<span style='color:#dcdcaa'>calcular</span>(<span style='color:#b5cea8'>2</span>, <span style='color:#b5cea8'>175</span>)  <span style='color:#6a9955'>// Total: R$350</span></pre><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 A ORDEM importa! Primeiro parametro recebe primeiro valor, segundo parametro recebe segundo valor, etc.</div>"
            },
            {
              type: "code-example",
              title: "Exemplo: Funcao com 2 parametros",
              code: 'function mostrarOS(numero, cliente) {\n  console.log(`OS #${numero}`)\n  console.log(`Cliente: ${cliente}`)\n  console.log("---")\n}\n\n// Chamando com valores diferentes:\nmostrarOS(6650, "Minerva Usinagem")\nmostrarOS(6632, "Usinagem Castro")\nmostrarOS(6620, "Off Limits")\n\n// Repara: numero sempre vem primeiro, cliente sempre segundo!',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercicio 1C - Funcao com 2 parametros",
              instructions: "Crie funcao <strong>calcularServico</strong> que recebe <code>horas</code> e <code>valorHora</code>. Calcule o total e mostre: <code>`Total: R$${total}`</code>. Teste com 4 horas a R$175/hora.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Dentro da funcao:<br><code>let total = horas * valorHora</code><br><code>console.log(`Total: R$${total}`)</code></div>",
              starterCode: '// Crie a funcao:\n\n\n// Chame com 4 horas, R$175/hora:\n',
              solution: 'function calcularServico(horas, valorHora) {\n  let total = horas * valorHora\n  console.log(`Total: R$${total}`)\n}\n\ncalcularServico(4, 175)',
              validation: "structure",
              checks: { codeHas: ["function calcularServico", "horas", "valorHora", "console.log"], outputHas: ["700"] }
            },

            // ========== PARTE 4: RETURN (DEVOLVER RESULTADO) ==========
            {
              type: "explanation",
              title: "return — Devolvendo um resultado",
              content: "Ate agora as funcoes so MOSTRAM coisas (console.log). Mas e se voce quiser GUARDAR o resultado numa variavel?<br><br>Pra isso usa <strong>return</strong> pra DEVOLVER um valor:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px;font-size:14px;line-height:1.8'><span style='color:#c586c0'>function</span> <span style='color:#dcdcaa'>somar</span>(<span style='color:#9cdcfe'>a</span>, <span style='color:#9cdcfe'>b</span>) {\n  <span style='color:#c586c0'>let</span> <span style='color:#9cdcfe'>resultado</span> = <span style='color:#9cdcfe'>a</span> + <span style='color:#9cdcfe'>b</span>\n  <span style='color:#c586c0'>return</span> <span style='color:#9cdcfe'>resultado</span>  <span style='color:#6a9955'>// DEVOLVE o valor</span>\n}\n\n<span style='color:#c586c0'>let</span> <span style='color:#9cdcfe'>total</span> = <span style='color:#dcdcaa'>somar</span>(<span style='color:#b5cea8'>10</span>, <span style='color:#b5cea8'>20</span>)  <span style='color:#6a9955'>// total recebe 30</span>\n<span style='color:#dcdcaa'>console</span>.<span style='color:#dcdcaa'>log</span>(<span style='color:#9cdcfe'>total</span>)  <span style='color:#6a9955'>// 30</span></pre><br><div style='background:#1a3a2a;border-left:3px solid #4caf50;padding:10px;border-radius:4px'><strong>return</strong> = \"termina a funcao e devolve esse valor\"</div><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Depois do return, o codigo para! Nada mais roda naquela funcao.</div>"
            },
            {
              type: "code-example",
              title: "Exemplo: console.log vs return",
              code: '// FUNCAO 1: So mostra (nao retorna)\nfunction mostrarTotal(a, b) {\n  let total = a + b\n  console.log(`Total: ${total}`)\n  // NAO retorna nada!\n}\n\n// FUNCAO 2: Retorna o valor\nfunction calcularTotal(a, b) {\n  let total = a + b\n  return total  // DEVOLVE o valor\n}\n\n// Testando:\nmostrarTotal(10, 20)  // Mostra: Total: 30\nlet x = mostrarTotal(10, 20)  // x recebe undefined!\nconsole.log("x =", x)\n\nlet y = calcularTotal(10, 20)  // y recebe 30\nconsole.log("y =", y)\n\n// Viu a diferenca? Com return voce pode GUARDAR o resultado!',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercicio 1D - Funcao com return",
              instructions: "Crie funcao <strong>calcularValorOS</strong> que recebe <code>horas</code> e <code>valorHora</code>, calcula o total e RETORNA (return) o valor. Depois guarde o resultado numa variavel e mostre.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Dentro da funcao:<br><code>let total = horas * valorHora</code><br><code>return total</code><br><br>Depois:<br><code>let valor = calcularValorOS(6, 175)</code><br><code>console.log(`Valor: R$${valor}`)</code></div>",
              starterCode: '// Crie a funcao com return:\n\n\n// Chame e guarde numa variavel:\n\n\n// Mostre o resultado:\n',
              solution: 'function calcularValorOS(horas, valorHora) {\n  let total = horas * valorHora\n  return total\n}\n\nlet valor = calcularValorOS(6, 175)\nconsole.log(`Valor: R$${valor}`)',
              validation: "structure",
              checks: { codeHas: ["function calcularValorOS", "return", "calcularValorOS(", "console.log"], outputHas: ["1050"] }
            },

            // ========== RESUMO FINAL ==========
            {
              type: "explanation",
              title: "Resumo: O que voce aprendeu",
              content: "<div style='background:#1a2a2a;padding:15px;border-radius:8px;margin:15px 0'><strong style='color:#4fc3f7;font-size:16px'>✓ Funcoes</strong><br><br>📝 <code>function nome() { }</code> → criar funcao SEM parametros<br>🎯 <code>function nome(param) { }</code> → criar funcao COM parametros<br>📦 <code>function nome(a, b) { }</code> → varios parametros<br>↩️ <code>return valor</code> → devolver resultado<br>▶️ <code>nome()</code> → chamar (executar) a funcao<br><br><div style='background:#1a3a2a;border-left:3px solid #4caf50;padding:10px;border-radius:4px;margin-top:10px'>Funcoes sao ESSENCIAIS! No sistema real da Helsen tem centenas de funcoes. No proximo modulo voce vai aprender metodos de array que usam funcoes!</div></div>"
            }
          ],
          quiz: [
            {
              question: "O que 'return' faz numa funcao?",
              options: ["Devolve um valor e termina a funcao", "Mostra algo na tela", "Para o programa inteiro", "Cria uma variavel"],
              correct: 0,
              explanation: "return devolve um valor pra quem chamou a funcao e termina a execucao daquela funcao."
            },
            {
              question: 'O que esse codigo mostra?\n\nfunction dobrar(n) {\n  return n * 2\n}\nlet x = dobrar(5)\nconsole.log(x)',
              options: ["10", "5", "n * 2", "undefined"],
              correct: 0,
              explanation: "dobrar(5) retorna 5 * 2 = 10. x recebe 10. console.log mostra 10."
            },
            {
              question: "Qual a diferenca entre parametro e argumento?",
              options: ["Parametro e na definicao, argumento e no chamado", "Sao a mesma coisa", "Argumento e na definicao, parametro e no chamado", "Parametro e so pra numeros"],
              correct: 0,
              explanation: "Parametro e a variavel na DEFINICAO da funcao (function f(parametro)). Argumento e o VALOR que voce passa quando CHAMA (f(argumento))."
            },
            {
              question: 'O que esse codigo mostra?\n\nfunction somar(a, b) {\n  console.log(a + b)\n}\nlet x = somar(2, 3)\nconsole.log(x)',
              options: ["5 depois undefined", "5 depois 5", "undefined depois 5", "Erro"],
              correct: 0,
              explanation: "Primeiro mostra 5 (console.log dentro da funcao). x recebe undefined (funcao nao tem return). Depois mostra undefined."
            }
          ]
        },
        {
          id: "4-2",
          title: "Metodos de Array",
          duration: "30 min",
          module: "Funcoes",
          sections: [
            {
              type: "explanation",
              title: "O que sao Metodos de Array?",
              content: "Arrays tem <strong>funcoes prontas</strong> (metodos) que facilitam MUITO a vida. No sistema da Helsen Service, usamos em TODO lugar:<br><br>🔍 <strong>.find()</strong> → achar um tecnico especifico pelo ID (Leon Mendes, Dayvison Jepson)<br>🎯 <strong>.filter()</strong> → pegar so as OS com status \"assigned\" ou \"finished\"<br>🔄 <strong>.map()</strong> → pegar lista de clientes de todas as OS do mes<br><br>Sem esses metodos, o sistema da Helsen seria MUITO mais complicado de fazer."
            },
            // ========== Arrow Function (explicacao) ==========
            {
              type: "explanation",
              title: "Antes de comecar: o que e Arrow Function ( => )?",
              content: "Voce vai ver muito essa <strong>seta =></strong> nesta aula. Calma, e facil!<br><br><strong>Arrow Function</strong> = forma curta de escrever funcoes.<br><br><div style='background:#2a2a2a;padding:15px;border-radius:6px;margin:10px 0'><strong>Forma ANTIGA:</strong><br><code>function(os) { return os.numero === 6632 }</code><br><br><strong>Forma NOVA (arrow):</strong><br><code>os => os.numero === 6632</code></div><br>E a <strong>mesma coisa</strong>, so que mais curta!<br><br>A seta <code>=></code> significa: <strong>\&quot;pega isso e faz aquilo\&quot;</strong>.<br><br><div style='background:#1a3a2a;border-left:3px solid #4caf50;padding:10px;border-radius:4px'>✓ O nome antes da seta (<code>os</code>, <code>item</code>, <code>x</code>) e so uma variavel temporaria. Voce escolhe o nome!<br>✓ <code>=></code> NAO e \"maior ou igual\" (<code>>=</code>)! Sao coisas diferentes!</div>"
            },
            {
              type: "code-example",
              title: "Comparacao: funcao antiga vs arrow function",
              code: '// FORMA ANTIGA (mais longa):\nlet ordens = [\n  { numero: 6650, cliente: "Minerva" },\n  { numero: 6632, cliente: "Castro" }\n]\n\nlet osAntica = ordens.find(function(os) {\n  return os.numero === 6632\n})\n\nconsole.log("Forma antiga:", osAntica.cliente)\n\n// FORMA NOVA (arrow function - mais curta!):\nlet osNova = ordens.find(os => os.numero === 6632)\n\nconsole.log("Forma nova:", osNova.cliente)\n\n// SAO A MESMA COISA! Ambas acham a OS 6632.\n// A arrow function e so mais rapida de escrever.',
              runnable: true
            },
            {
              type: "explanation",
              title: "Entendendo a arrow function passo a passo",
              content: "Quando voce escreve:<br><br><code>ordens.find(os => os.numero === 6632)</code><br><br>O JavaScript entende:<br><br>1. <strong>Pega cada item</strong> do array <code>ordens</code><br>2. <strong>Coloca numa variavel temporaria</strong> chamada <code>os</code><br>3. <strong>Testa a condicao:</strong> <code>os.numero === 6632</code><br>4. <strong>Se passar no teste,</strong> retorna aquele item<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Dica: Voce pode usar <strong>qualquer nome</strong> no lugar de <code>os</code>:<br><code>ordens.find(ordem => ordem.numero === 6632)</code><br><code>ordens.find(o => o.numero === 6632)</code><br><code>ordens.find(x => x.numero === 6632)</code><br><br>Todos funcionam! E so o nome da variavel temporaria.</div>"
            },
            // ========== .find() ==========
            {
              type: "explanation",
              title: ".find() — Procurar UM item especifico",
              content: "Imagina que voce tem uma lista de 50 tecnicos da Helsen e quer achar um tecnico especifico. Sem .find() voce teria que fazer um loop e verificar um por um.<br><br>O <strong>.find()</strong> faz isso automaticamente! Ele procura na lista e retorna o PRIMEIRO item que passou no teste.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 <strong>Uso real na Helsen:</strong> Quando uma OS precisa ser atribuida a um tecnico, o sistema usa <code>.find()</code> pra achar o tecnico pelo ID no banco de dados.</div>"
            },
            {
              type: "code-example",
              title: "Exemplo REAL da Helsen — find() buscando OS",
              code: '// OS REAIS do banco da Helsen Service!\n\nlet ordens = [\n  { numero: 6650, cliente: "Minerva Usinagem", valor: 1145 },\n  { numero: 6632, cliente: "Usinagem Castro", valor: 700 },\n  { numero: 6620, cliente: "Off Limits Industria", valor: 445 }\n]\n\n// Preciso achar a OS numero 6632\nlet osProcurada = ordens.find(os => os.numero === 6632)\n\nconsole.log("Achei!")\nconsole.log("Cliente:", osProcurada.cliente)\nconsole.log("Valor: R$", osProcurada.valor)\n\n// Se procurar OS que nao existe:\nlet naoExiste = ordens.find(os => os.numero === 9999)\nconsole.log("\\nOS 9999:", naoExiste)  // undefined',
              runnable: true
            },
            {
              type: "explanation",
              title: "Como .find() funciona passo a passo",
              content: "Quando voce escreve:<br><br><code>ordens.find(os => os.numero === 6632)</code><br><br>O JavaScript faz:<br><br>1. Pega a primeira OS: numero 6650<br>2. Testa: <code>6650 === 6632</code>? NAO!<br>3. Pega a segunda OS: numero 6632<br>4. Testa: <code>6632 === 6632</code>? SIM! Achou!<br>5. Retorna essa OS e PARA de procurar<br><br><div style='background:#1a3a2a;border-left:3px solid #4caf50;padding:10px;border-radius:4px'>✓ O .find() para assim que acha o primeiro item que passa no teste.<br>✓ Se procurar a lista toda e nao achar nada, retorna <code>undefined</code>.</div>"
            },
            {
              type: "exercise",
              title: "Exercicio 1A - Primeiro .find() simples",
              instructions: "Use <strong>.find()</strong> pra procurar o tecnico com nome 'Leon Mendes'. Guarde o resultado numa variavel e mostre o nome dele.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Estrutura:<br><code>let tecnico = tecnicos.find(t => t.nome === 'Leon Mendes')</code><br><code>console.log(tecnico.nome)</code></div>",
              starterCode: 'let tecnicos = [\n  { nome: "Leon Mendes", taxa: 175 },\n  { nome: "Dayvison Jepson", taxa: 175 },\n  { nome: "Valdinei Pereira", taxa: 175 }\n]\n\n// Procure Leon Mendes:\n\n\n// Mostre o nome:\n',
              solution: 'let tecnicos = [\n  { nome: "Leon Mendes", taxa: 175 },\n  { nome: "Dayvison Jepson", taxa: 175 },\n  { nome: "Valdinei Pereira", taxa: 175 }\n]\n\nlet tecnico = tecnicos.find(t => t.nome === "Leon Mendes")\nconsole.log(tecnico.nome)',
              validation: "structure",
              checks: { codeHas: [".find(", "console.log"], outputHas: ["Leon"] }
            },
            {
              type: "exercise",
              title: "Exercicio 1B - .find() com numero (OS REAL)",
              instructions: "Agora use <strong>.find()</strong> pra procurar a OS com numero 6632. Mostre o cliente e o valor.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Essas são OS REAIS do banco da Helsen!<br>Dica: <code>ordens.find(os => os.numero === 6632)</code></div>",
              starterCode: '// OS REAIS do banco Helsen Service!\nlet ordens = [\n  { numero: 6650, cliente: "Minerva Usinagem", valor: 1145 },\n  { numero: 6632, cliente: "Usinagem Castro", valor: 700 },\n  { numero: 6620, cliente: "Off Limits", valor: 445 }\n]\n\n// Procure a OS 6632:\n\n\n// Mostre cliente e valor:\n',
              solution: 'let ordens = [\n  { numero: 6650, cliente: "Minerva Usinagem", valor: 1145 },\n  { numero: 6632, cliente: "Usinagem Castro", valor: 700 },\n  { numero: 6620, cliente: "Off Limits", valor: 445 }\n]\n\nlet os = ordens.find(os => os.numero === 6632)\nconsole.log("Cliente:", os.cliente)\nconsole.log("Valor: R$", os.valor)',
              validation: "structure",
              checks: { codeHas: [".find(", "console.log"], outputHas: ["Usinagem Castro", "700"] }
            },
            // ========== .filter() ==========
            {
              type: "explanation",
              title: ".filter() — Filtrar VARIOS itens",
              content: "O <strong>.filter()</strong> e parecido com .find(), mas ao inves de retornar UM item, ele retorna TODOS os itens que passaram no teste.<br><br>Pensa assim: voce tem 100 OS da Helsen e quer pegar SÓ as que estao com status \"completed\" (finalizadas). O .filter() pega todas as finalizadas e coloca num array novo.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 <strong>Uso real na Helsen:</strong> No dashboard, quando o gerente quer ver quantas OS foram finalizadas no mes, o sistema usa <code>.filter()</code> pra pegar so as OS com status \"completed\".</div>"
            },
            {
              type: "code-example",
              title: "Exemplo REAL da Helsen — filter() por status",
              code: '// OS REAIS do banco da Helsen Service!\n\nlet todasOS = [\n  { numero: 6650, cliente: "Minerva Usinagem", valor: 1145, status: "completed" },\n  { numero: 6632, cliente: "Usinagem Castro", valor: 700, status: "avulso" },\n  { numero: 6620, cliente: "Off Limits Industria", valor: 445, status: "completed" },\n  { numero: 6579, cliente: "JMF Tecnologia", valor: 545, status: "archived" },\n  { numero: 6841, cliente: "A.T.P Assemblege", valor: 1385, status: "completed" },\n  { numero: 6843, cliente: "Del Rey Rubber", valor: null, status: "accepted" }\n]\n\n// Pegar so as OS finalizadas (completed)\nlet finalizadas = todasOS.filter(os => os.status === "completed")\n\nconsole.log("Total de OS finalizadas:", finalizadas.length)\nconsole.log("\\nOS finalizadas:")\n\nfor (let os of finalizadas) {\n  console.log(`OS ${os.numero} - ${os.cliente} - R$ ${os.valor}`)\n}',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercicio 2A - Primeiro .filter() simples",
              instructions: "Use <strong>.filter()</strong> pra pegar SÓ os tecnicos com taxa maior que 150. Mostre quantos tecnicos tem taxa alta.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Estrutura:<br><code>let taxaAlta = tecnicos.filter(t => t.taxa > 150)</code><br><code>console.log(taxaAlta.length)</code></div>",
              starterCode: 'let tecnicos = [\n  { nome: "Leon", taxa: 175 },\n  { nome: "Pedro", taxa: 120 },\n  { nome: "Dayvison", taxa: 175 },\n  { nome: "Ana", taxa: 100 }\n]\n\n// Filtre os com taxa > 150:\n\n\n// Mostre quantos sao:\n',
              solution: 'let tecnicos = [\n  { nome: "Leon", taxa: 175 },\n  { nome: "Pedro", taxa: 120 },\n  { nome: "Dayvison", taxa: 175 },\n  { nome: "Ana", taxa: 100 }\n]\n\nlet taxaAlta = tecnicos.filter(t => t.taxa > 150)\nconsole.log("Tecnicos com taxa alta:", taxaAlta.length)',
              validation: "structure",
              checks: { codeHas: [".filter(", "console.log"], outputHas: ["2"] }
            },
            {
              type: "exercise",
              title: "Exercicio 2B - .filter() com loop (OS REAL)",
              instructions: "Use <strong>.filter()</strong> pra pegar as OS pendentes. Depois use <code>for...of</code> pra mostrar cada uma.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Dados REAIS da Helsen!<br>Passo 1: Filtrar<br>Passo 2: Loop pra mostrar</div>",
              starterCode: '// OS REAIS da Helsen Service!\nlet ordens = [\n  { numero: 6848, cliente: "Soltenge", status: "pending_review", valor: 445 },\n  { numero: 6847, cliente: "WF Ferramentaria", status: "pending_review", valor: 532 },\n  { numero: 6841, cliente: "A.T.P Assemblege", status: "completed", valor: 1385 },\n  { numero: 6843, cliente: "Del Rey Rubber", status: "accepted", valor: null },\n  { numero: 6840, cliente: "WR Industria", status: "pending_review", valor: 1145 }\n]\n\n// Filtre as pending_review:\n\n\n// Mostre quantas sao:\n\n\n// Mostre cada uma:\n',
              solution: '// OS REAIS da Helsen Service!\nlet ordens = [\n  { numero: 6848, cliente: "Soltenge", status: "pending_review", valor: 445 },\n  { numero: 6847, cliente: "WF Ferramentaria", status: "pending_review", valor: 532 },\n  { numero: 6841, cliente: "A.T.P Assemblege", status: "completed", valor: 1385 },\n  { numero: 6843, cliente: "Del Rey Rubber", status: "accepted", valor: null },\n  { numero: 6840, cliente: "WR Industria", status: "pending_review", valor: 1145 }\n]\n\nlet pendentes = ordens.filter(os => os.status === "pending_review")\n\nconsole.log("Total pendente de revisao:", pendentes.length)\nconsole.log("\\nLista:")\n\nfor (let os of pendentes) {\n  console.log(`OS ${os.numero} - ${os.cliente}`)\n}',
              validation: "structure",
              checks: { codeHas: [".filter(", "for", "of", "console.log"], outputHas: ["6848", "6847", "6840"], minOutput: 3 }
            },
            // ========== .map() ==========
            {
              type: "explanation",
              title: ".map() — Transformar cada item",
              content: "O <strong>.map()</strong> pega cada item da lista, transforma ele, e coloca num array novo.<br><br>Pensa assim: voce tem uma lista de OS da Helsen e quer pegar SÓ os valores (grand_total) de cada uma. Com .map() voce transforma um array de objetos num array de numeros!<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 <strong>Uso real na Helsen:</strong> Quando o sistema precisa calcular o faturamento total do mes, ele usa <code>.map()</code> pra extrair os valores de todas as OS, depois soma tudo.</div>"
            },
            {
              type: "code-example",
              title: "Exemplo REAL da Helsen — map() extraindo valores",
              code: '// OS REAIS do banco da Helsen Service!\n\nlet ordens = [\n  { numero: 6650, cliente: "Minerva Usinagem", valor: 1145, status: "completed" },\n  { numero: 6620, cliente: "Off Limits", valor: 445, status: "completed" },\n  { numero: 6841, cliente: "A.T.P Assemblege", valor: 1385, status: "completed" },\n  { numero: 6839, cliente: "Estampos Qualytec", valor: 1312, status: "completed" }\n]\n\n// Extrai so os valores usando map()\nlet valores = ordens.map(os => os.valor)\n\nconsole.log("Valores extraidos:", valores)\nconsole.log("\\nAgora podemos somar:")\n\nlet total = 0\nfor (let valor of valores) {\n  total += valor\n}\n\nconsole.log("Faturamento total: R$", total)\n\n// Tambem podemos extrair so os nomes dos clientes:\nlet clientes = ordens.map(os => os.cliente)\nconsole.log("\\nClientes:", clientes)',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercicio 3A - Primeiro .map() simples",
              instructions: "Use <strong>.map()</strong> pra extrair SÓ os nomes dos tecnicos. Mostre o array de nomes.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Estrutura:<br><code>let nomes = tecnicos.map(t => t.nome)</code><br><code>console.log(nomes)</code></div>",
              starterCode: 'let tecnicos = [\n  { nome: "Leon Mendes", taxa: 175 },\n  { nome: "Dayvison Jepson", taxa: 175 },\n  { nome: "Valdinei Pereira", taxa: 175 }\n]\n\n// Extraia so os nomes:\n\n\n// Mostre o array:\n',
              solution: 'let tecnicos = [\n  { nome: "Leon Mendes", taxa: 175 },\n  { nome: "Dayvison Jepson", taxa: 175 },\n  { nome: "Valdinei Pereira", taxa: 175 }\n]\n\nlet nomes = tecnicos.map(t => t.nome)\nconsole.log(nomes)',
              validation: "structure",
              checks: { codeHas: [".map(", "console.log"], outputHas: ["Leon", "Dayvison", "Valdinei"] }
            },
            {
              type: "exercise",
              title: "Exercicio 3B - .map() com soma (Faturamento REAL)",
              instructions: "Use <strong>.map()</strong> pra extrair os valores das OS. Depois some com <code>for...of</code>.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Dados REAIS da Helsen!<br>Passo 1: <code>let valores = ordens.map(os => os.valor)</code><br>Passo 2: Loop pra somar</div>",
              starterCode: '// OS REAIS da Helsen Service finalizadas!\nlet ordens = [\n  { numero: 6650, cliente: "Minerva Usinagem", valor: 1145 },\n  { numero: 6620, cliente: "Off Limits", valor: 445 },\n  { numero: 6841, cliente: "A.T.P Assemblege", valor: 1385 },\n  { numero: 6839, cliente: "Estampos Qualytec", valor: 1312 },\n  { numero: 6834, cliente: "Estampos Qualytec", valor: 1132 }\n]\n\n// Extraia so os valores:\n\n\n// Some todos:\n\n\n// Mostre o faturamento total:\n',
              solution: '// OS REAIS da Helsen Service finalizadas!\nlet ordens = [\n  { numero: 6650, cliente: "Minerva Usinagem", valor: 1145 },\n  { numero: 6620, cliente: "Off Limits", valor: 445 },\n  { numero: 6841, cliente: "A.T.P Assemblege", valor: 1385 },\n  { numero: 6839, cliente: "Estampos Qualytec", valor: 1312 },\n  { numero: 6834, cliente: "Estampos Qualytec", valor: 1132 }\n]\n\nlet valores = ordens.map(os => os.valor)\n\nlet total = 0\nfor (let valor of valores) {\n  total += valor\n}\n\nconsole.log("Faturamento total: R$", total)',
              validation: "structure",
              checks: { codeHas: [".map(", "for", "of", "total", "console.log"], outputHas: ["5419"] }
            }
          ],
          quiz: [
            {
              question: "O que .filter() retorna?",
              options: ["Novo array com itens que passaram no teste", "O primeiro item encontrado", "Um numero (total)", "true ou false"],
              correct: 0,
              explanation: "filter cria um NOVO array so com os itens que retornaram true."
            },
            {
              question: "Qual metodo transforma cada item do array?",
              options: [".map()", ".filter()", ".find()", ".reduce()"],
              correct: 0,
              explanation: "map cria um novo array transformando cada item."
            }
          ]
        }
      ]
    },

    // ========== MODULO 5: OBJETOS ==========
    {
      id: 5,
      title: "Objetos",
      lessons: [
        {
          id: "5-1",
          title: "Objetos e JSON",
          duration: "30 min",
          module: "Objetos",
          sections: [
            {
              type: "explanation",
              title: "O que e um Objeto?",
              content: "Objeto = uma colecao de dados relacionados. Uma variavel guarda UM valor. Um objeto guarda VARIOS valores organizados.<br><br>Na Helsen Service, uma OS e um objeto com MUITAS propriedades: <code>{ order_number, client_name, technician_id, grand_total, status, scheduled_date, ... }</code><br><br>Em vez de criar 10 variaveis separadas, voce cria 1 objeto com 10 propriedades!"
            },
            {
              type: "code-example",
              title: "Estrutura REAL de uma OS da Helsen",
              code: '// Assim que uma OS e armazenada no banco da Helsen!\n\nlet os = {\n  order_number: 6650,\n  client_name: "Minerva Usinagem e Servicos LDTA",\n  technician_id: 41,  // Leon Mendes\n  status: "completed",\n  grand_total: 1145,\n  scheduled_date: "2026-01-14",\n  maintenance_type: "corretiva",\n  total_hours: 4.5\n}\n\n// Acessando as propriedades:\nconsole.log("OS:", os.order_number)\nconsole.log("Cliente:", os.client_name)\nconsole.log("Valor: R$", os.grand_total)\nconsole.log("Status:", os.status)\n\n// Modificando:\nos.status = "archived"\nconsole.log("\\nNovo status:", os.status)',
              runnable: true
            },
            {
              type: "code-example",
              title: "Objeto dentro de objeto",
              code: '// Tecnicos da Helsen podem ter mais informacoes:\n\nlet tecnico = {\n  id: 41,\n  username: "Leon Mendes",\n  hourly_rate: 175,\n  contato: {\n    telefone: "(11) 98765-4321",\n    email: "leon@helsen.com"\n  }\n}\n\n// Acessar dados dentro de contato:\nconsole.log("Nome:", tecnico.username)\nconsole.log("Telefone:", tecnico.contato.telefone)\nconsole.log("Email:", tecnico.contato.email)',
              runnable: true
            },
            {
              type: "code-example",
              title: "Desestruturacao — forma rapida de extrair dados",
              code: '// OS REAL da Helsen\nlet os = {\n  order_number: 6632,\n  client_name: "Usinagem Castro LTDA",\n  status: "avulso",\n  grand_total: 700,\n  technician_id: 41\n}\n\n// SEM desestruturacao (forma longa):\nlet numero1 = os.order_number\nlet cliente1 = os.client_name\nlet valor1 = os.grand_total\n\nconsole.log("Forma longa:", numero1, cliente1, valor1)\n\n// COM desestruturacao (forma rapida):\nlet { order_number, client_name, grand_total } = os\n\nconsole.log("\\nForma rapida:", order_number, client_name, grand_total)\n\n// Muito usado na Helsen quando o backend retorna OS:\nconsole.log(`\\nOS ${order_number} - ${client_name} - R$ ${grand_total}`)',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercicio 1A - Criar objeto simples",
              instructions: "Crie um objeto <strong>tecnico</strong> com: nome (texto) e taxa (numero). Depois mostre o nome e a taxa.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Estrutura:<br><code>let tecnico = { nome: &quot;Leon&quot;, taxa: 175 }</code><br><code>console.log(tecnico.nome)</code></div>",
              starterCode: '// Crie o objeto tecnico:\n\n\n// Mostre nome e taxa:\n',
              solution: 'let tecnico = {\n  nome: "Leon Mendes",\n  taxa: 175\n}\n\nconsole.log("Nome:", tecnico.nome)\nconsole.log("Taxa:", tecnico.taxa)',
              validation: "structure",
              checks: { codeHas: ["tecnico", "{", "}", "nome", "taxa", "console.log"], minOutput: 2 }
            },
            {
              type: "exercise",
              title: "Exercicio 1B - Desestruturacao",
              instructions: "Agora use <strong>desestruturacao</strong> pra extrair nome e taxa do objeto direto pra variaveis. Depois mostre elas.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 <code>let { nome, taxa } = tecnico</code><br><code>console.log(nome, taxa)</code></div>",
              starterCode: 'let tecnico = {\n  nome: "Dayvison Jepson",\n  taxa: 175\n}\n\n// Use desestruturacao:\n\n\n// Mostre as variaveis:\n',
              solution: 'let tecnico = {\n  nome: "Dayvison Jepson",\n  taxa: 175\n}\n\nlet { nome, taxa } = tecnico\n\nconsole.log("Nome:", nome)\nconsole.log("Taxa:", taxa)',
              validation: "structure",
              checks: { codeHas: ["let {", "nome", "taxa", "} = tecnico", "console.log"], minOutput: 2 }
            },
            {
              type: "exercise",
              title: "Exercicio 1C - Objeto completo (estrutura Helsen)",
              instructions: "Crie objeto <strong>tecnico</strong> completo: id, username, hourly_rate, disponivel. Use desestruturacao e mostre com ternario.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Ternario: <code>let status = disponivel ? &quot;Sim&quot; : &quot;Nao&quot;</code></div>",
              starterCode: '// Crie o objeto tecnico:\n\n\n// Desestruturacao:\n\n\n// Ternario e mostre:\n',
              solution: 'let tecnico = {\n  id: 41,\n  username: "Leon Mendes",\n  hourly_rate: 175,\n  disponivel: true\n}\n\nlet { username, hourly_rate, disponivel } = tecnico\nlet status = disponivel ? "Disponivel" : "Indisponivel"\n\nconsole.log(`Tecnico ${username} - R$ ${hourly_rate}/hora - ${status}`)',
              validation: "structure",
              checks: { codeHas: ["tecnico", "username", "hourly_rate", "disponivel", "let {", "?", ":", "console.log"], minOutput: 1 }
            }
          ],
          quiz: [
            {
              question: "Como acessar a propriedade 'nome' de um objeto 'user'?",
              options: ["user.nome", "user[0]", "user->nome", "nome.user"],
              correct: 0,
              explanation: "Usa ponto: objeto.propriedade"
            },
            {
              question: "O que e desestruturacao?",
              options: ["Extrair valores de um objeto pra variaveis", "Deletar um objeto", "Criar objeto vazio", "Converter objeto pra array"],
              correct: 0,
              explanation: "let { a, b } = obj pega os valores de a e b do objeto."
            }
          ]
        }
      ]
    },

    // ========== MODULO 6: PROJETO REAL ==========
    {
      id: 6,
      title: "Projeto Real",
      lessons: [
        {
          id: "6-1",
          title: "Lendo Codigo REAL da Helsen",
          duration: "30 min",
          module: "Projeto Real",
          sections: [
            {
              type: "explanation",
              title: "Agora voce le codigo real da Helsen Service!",
              content: "Voce ja sabe variaveis, if/else, loops, funcoes, arrays e objetos. Agora vamos ler codigo REAL do sistema da Helsen Service e entender cada parte.<br><br>Tudo que voce aprendeu ate aqui aparece no sistema real: validacao de tecnicos, calculo de OS, relatorios, etc."
            },
            {
              type: "code-example",
              title: "Logica REAL — Validar se tecnico pode aceitar OS",
              code: '// Funcao real do sistema Helsen Service!\n// Valida se um tecnico pode aceitar uma nova OS\n\nfunction podePegarOS(tecnico, osAtivas) {\n  // Tecnico inativo nao pode pegar OS\n  if (!tecnico.active) {\n    return {\n      pode: false,\n      motivo: `${tecnico.username} esta inativo no sistema`\n    }\n  }\n\n  // Limite: maximo 5 OS ativas por tecnico\n  let osDoTecnico = osAtivas.filter(os => os.technician_id === tecnico.id)\n  \n  if (osDoTecnico.length >= 5) {\n    return {\n      pode: false,\n      motivo: `${tecnico.username} ja tem ${osDoTecnico.length} OS ativas (limite: 5)`\n    }\n  }\n\n  return {\n    pode: true,\n    osAtivas: osDoTecnico.length,\n    vagas: 5 - osDoTecnico.length\n  }\n}\n\n// Teste com dados REAIS:\nlet leon = { id: 41, username: "Leon Mendes", active: true }\nlet osAtivas = [\n  { id: 1, technician_id: 41, status: "accepted" },\n  { id: 2, technician_id: 41, status: "accepted" },\n  { id: 3, technician_id: 40, status: "accepted" }\n]\n\nconsole.log(podePegarOS(leon, osAtivas))\n\n// Tecnico inativo:\nlet inativo = { id: 50, username: "Tecnico Teste", active: false }\nconsole.log("\\n", podePegarOS(inativo, osAtivas))',
              runnable: true
            },
            {
              type: "code-example",
              title: "Logica REAL — Calculo de faturamento da OS",
              code: '// Assim que o sistema Helsen calcula o valor de uma OS!\n\nfunction calcularValorOS(dados) {\n  // Pega a taxa/hora do tecnico\n  let taxaHora = dados.tecnico.hourly_rate\n  \n  // Calcula custo de mao de obra\n  let custoServico = dados.total_hours * taxaHora\n  \n  // Soma os materiais usados\n  let custoMateriais = dados.materiais.reduce((total, mat) => {\n    return total + (mat.quantidade * mat.preco_unitario)\n  }, 0)\n  \n  // Custo de deslocamento (se houver)\n  let custoDeslocamento = 0\n  if (dados.displacement_km > 0) {\n    custoDeslocamento = dados.displacement_km * 3.50  // R$ 3,50 por km\n  }\n  \n  // Total geral\n  let grandTotal = custoServico + custoMateriais + custoDeslocamento\n  \n  return {\n    service_cost: custoServico.toFixed(2),\n    material_cost: custoMateriais.toFixed(2),\n    displacement_cost: custoDeslocamento.toFixed(2),\n    grand_total: grandTotal.toFixed(2)\n  }\n}\n\n// Exemplo REAL:\nlet resultado = calcularValorOS({\n  tecnico: { id: 41, username: "Leon Mendes", hourly_rate: 175 },\n  total_hours: 4.5,\n  displacement_km: 35,\n  materiais: [\n    { nome: "Rolamento SKF", quantidade: 2, preco_unitario: 85 },\n    { nome: "Oleo lubrificante", quantidade: 1, preco_unitario: 45 }\n  ]\n})\n\nconsole.log("Detalhamento da OS:")\nconsole.log("Mao de obra: R$", resultado.service_cost)\nconsole.log("Materiais: R$", resultado.material_cost)\nconsole.log("Deslocamento: R$", resultado.displacement_cost)\nconsole.log("TOTAL: R$", resultado.grand_total)',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercicio 1 - Calcular faturamento total",
              instructions: "Crie funcao <strong>calcularFaturamento</strong> que recebe array de OS REAIS da Helsen. Use <strong>.filter()</strong> pra pegar so as OS com status \"completed\". Depois use um loop <code>for...of</code> pra somar os valores e retornar o total.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Igual ao exercicio 3 da aula anterior, mas agora dentro de uma funcao!</div>",
              starterCode: '// OS REAIS da Helsen Service!\nlet ordens = [\n  { numero: 6650, valor: 1145, status: "completed" },\n  { numero: 6632, valor: 700, status: "avulso" },\n  { numero: 6841, valor: 1385, status: "completed" },\n  { numero: 6839, valor: 1312, status: "completed" },\n  { numero: 6843, valor: null, status: "accepted" }\n]\n\n// Crie a funcao calcularFaturamento:\n\n\n// Teste:\nlet total = calcularFaturamento(ordens)\nconsole.log("Faturamento total: R$", total)',
              solution: '// OS REAIS da Helsen Service!\nlet ordens = [\n  { numero: 6650, valor: 1145, status: "completed" },\n  { numero: 6632, valor: 700, status: "avulso" },\n  { numero: 6841, valor: 1385, status: "completed" },\n  { numero: 6839, valor: 1312, status: "completed" },\n  { numero: 6843, valor: null, status: "accepted" }\n]\n\nfunction calcularFaturamento(lista) {\n  // Filtra so as completed\n  let finalizadas = lista.filter(os => os.status === "completed")\n  \n  // Soma os valores\n  let total = 0\n  for (let os of finalizadas) {\n    total += os.valor\n  }\n  \n  return total\n}\n\nlet total = calcularFaturamento(ordens)\nconsole.log("Faturamento total: R$", total)',
              validation: "structure",
              checks: { codeHas: ["function calcularFaturamento", "filter", "for", "of", "return", "console.log"], outputHas: ["3842"] }
            }
          ],
          quiz: [
            {
              question: "No codigo de permissao, o que '!usuario.ativo' verifica?",
              options: ["Se o usuario NAO esta ativo", "Se o usuario esta ativo", "Se ativo nao existe", "Se e administrador"],
              correct: 0,
              explanation: "! inverte: se ativo e false, !ativo vira true."
            },
            {
              question: "Pra que serve o reduce no calculo de materiais?",
              options: ["Somar todos os valores num unico numero", "Filtrar materiais caros", "Ordenar por preco", "Contar quantos tem"],
              correct: 0,
              explanation: "reduce acumula todos os valores em um resultado so."
            }
          ]
        }
      ]
    },

    // ========== MODULO 7: ASYNC ==========
    {
      id: 7,
      title: "Async/Await",
      lessons: [
        {
          id: "7-1",
          title: "Promises e Async",
          duration: "30 min",
          module: "Async/Await",
          sections: [
            {
              type: "explanation",
              title: "Por que async?",
              content: "No mundo real, muitas coisas <strong>demoram</strong>: buscar OS no banco PostgreSQL, buscar dados de um tecnico, calcular relatorios. JavaScript nao fica parado esperando.<br><br>Ele usa <strong>async/await</strong> pra lidar com isso.<br><br>Na Helsen Service, TODA chamada ao backend (buscar OS, salvar dados, etc) usa async/await."
            },
            {
              type: "code-example",
              title: "Exemplo REAL — buscar tecnico no banco da Helsen",
              code: '// Simula busca no banco PostgreSQL da Helsen\n// (na vida real, demora alguns milissegundos)\n\nfunction buscarTecnicoPorId(id) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      // Simula busca: SELECT * FROM technicians WHERE id = ?\n      if (id === 41) {\n        resolve({ id: 41, username: "Leon Mendes", hourly_rate: 175, active: true })\n      } else if (id === 42) {\n        resolve({ id: 42, username: "Valdinei Pereira", hourly_rate: 175, active: true })\n      } else if (id === 48) {\n        resolve({ id: 48, username: "Dayvison Jepson", hourly_rate: 175, active: true })\n      } else {\n        reject(new Error(`Tecnico ID ${id} nao encontrado`))\n      }\n    }, 800)  // Simula delay do banco\n  })\n}\n\n// Funcao async que usa await\nasync function atribuirOS() {\n  console.log("Buscando tecnico ID 41 no banco...")\n  \n  try {\n    let tecnico = await buscarTecnicoPorId(41)\n    console.log(`✓ Encontrado: ${tecnico.username}`)\n    console.log(`Taxa/hora: R$ ${tecnico.hourly_rate}`)\n    console.log("OS atribuida com sucesso!")\n  } catch (erro) {\n    console.log(`✗ Erro: ${erro.message}`)\n  }\n}\n\natribuirOS()',
              runnable: true
            },
            {
              type: "explanation",
              title: "Entendendo o codigo",
              content: "<strong>Promise</strong> = promessa de que um valor vai chegar no futuro.<br><strong>async</strong> = essa funcao tem coisas que demoram.<br><strong>await</strong> = espera terminar antes de continuar.<br><strong>try/catch</strong> = tenta fazer algo, se der erro, pega o erro."
            },
            {
              type: "exercise",
              title: "Exercicio 1 - Buscar OS REAL no banco",
              instructions: "Crie funcao <strong>buscarOS</strong> que retorna Promise. Se numero = 6650, retorna a OS da Minerva. Se 6632, retorna OS da Usinagem Castro. Outro numero = erro \"OS nao encontrada\". Depois crie funcao <strong>async</strong> que busca a OS 6650 e mostra o cliente.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Use setTimeout pra simular delay do banco!</div>",
              starterCode: '// Crie buscarOS que retorna Promise:\n\n\n// Crie funcao async pra buscar OS 6650:\n\n\n// Chame a funcao:\n',
              solution: 'function buscarOS(numero) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (numero === 6650) {\n        resolve({ order_number: 6650, client_name: "Minerva Usinagem e Servicos LDTA", grand_total: 1145 })\n      } else if (numero === 6632) {\n        resolve({ order_number: 6632, client_name: "Usinagem Castro LTDA", grand_total: 700 })\n      } else {\n        reject(new Error("OS nao encontrada"))\n      }\n    }, 600)\n  })\n}\n\nasync function buscarEMostrar() {\n  console.log("Buscando OS 6650...")\n  try {\n    let os = await buscarOS(6650)\n    console.log(`Cliente: ${os.client_name}`)\n    console.log(`Valor: R$ ${os.grand_total}`)\n  } catch (erro) {\n    console.log(`Erro: ${erro.message}`)\n  }\n}\n\nbuscarEMostrar()',
              validation: "structure",
              checks: { codeHas: ["Promise", "async", "await", "try", "catch", "console.log"], outputHas: ["Minerva"] }
            }
          ],
          quiz: [
            {
              question: "O que 'await' faz?",
              options: ["Espera a operacao terminar", "Cancela a operacao", "Acelera a operacao", "Cria nova operacao"],
              correct: 0,
              explanation: "await pausa a funcao ate a Promise resolver."
            },
            {
              question: "Pra que serve try/catch?",
              options: ["Tratar erros sem quebrar o programa", "Acelerar o codigo", "Criar variaveis", "Repetir codigo"],
              correct: 0,
              explanation: "try tenta executar, catch pega o erro se acontecer."
            }
          ]
        }
      ]
    },

    // ========== MODULO 8: EXPRESS (CONCEITUAL) ==========
    {
      id: 8,
      title: "Express Basico",
      lessons: [
        {
          id: "8-1",
          title: "Criando uma API",
          duration: "40 min",
          module: "Express Basico",
          sections: [
            {
              type: "explanation",
              title: "O que e Express?",
              content: "Express e a ferramenta que a Helsen Service usa no <strong>backend</strong>. Ele cria um SERVIDOR que recebe pedidos (requisicoes) e responde com dados.<br><br>Quando o frontend quer buscar uma OS, ele faz uma requisicao pro backend Express, que busca no PostgreSQL e retorna os dados.<br><br><strong>Neste modulo voce vai SIMULAR Express direto no navegador!</strong> Criamos um ExpressSimulator que funciona igual ao Express real."
            },
            {
              type: "code-example",
              title: "Primeira rota GET (listar tecnicos)",
              code: '// Criando servidor Express simulado!\nlet app = new ExpressSimulator()\n\n// O app.data ja tem tecnicos da Helsen:\nconsole.log("Dados iniciais:", app.data.tecnicos)\n\n// GET = buscar/listar dados\napp.get("/tecnicos", (req, res) => {\n  res.json(app.data.tecnicos)\n})\n\n// Testando a rota:\nlet resultado = await app.request("GET", "/tecnicos")\nconsole.log("\\nResposta da API:")\nconsole.log("Status:", resultado.status)\nconsole.log("Body:", resultado.body)',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercicio 1A - Sua primeira rota GET",
              instructions: "Crie um ExpressSimulator. Crie rota GET <code>/os</code> que retorna a lista de OS. Teste a rota.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Use <code>app.data.os</code> pra acessar as OS</div>",
              starterCode: '// Crie o simulador:\nlet app = new ExpressSimulator()\n\n// Crie a rota GET /os:\n\n\n// Teste a rota:\n',
              solution: 'let app = new ExpressSimulator()\n\napp.get("/os", (req, res) => {\n  res.json(app.data.os)\n})\n\nlet resultado = await app.request("GET", "/os")\nconsole.log("Status:", resultado.status)\nconsole.log("OS:", resultado.body)',
              validation: "structure",
              checks: { codeHas: ["ExpressSimulator", "app.get", "/os", "res.json", "app.request"], minOutput: 2 }
            },
            {
              type: "explanation",
              title: "Entendendo as rotas",
              content: "<strong>GET</strong> = buscar dados (listar tecnicos, ver OS)<br><strong>POST</strong> = criar dados (nova OS, novo cliente)<br><strong>PUT</strong> = atualizar dados (mudar status da OS)<br><strong>DELETE</strong> = deletar dados<br><br><strong>req</strong> = requisicao (o que o usuario mandou)<br><strong>res</strong> = resposta (o que o servidor devolve)<br><strong>status(200)</strong> = sucesso | <strong>status(404)</strong> = nao encontrou | <strong>status(500)</strong> = erro"
            },
            {
              type: "code-example",
              title: "Rota com parametros (/tecnicos/:id)",
              code: 'let app = new ExpressSimulator()\n\n// Rota com parametro :id\napp.get("/tecnicos/:id", (req, res) => {\n  let id = Number(req.params.id)  // pega o :id da URL\n  \n  let tecnico = app.data.tecnicos.find(t => t.id === id)\n  \n  if (!tecnico) {\n    return res.status(404).json({ error: "Tecnico nao encontrado" })\n  }\n  \n  res.json(tecnico)\n})\n\n// Testando com ID 41:\nlet r1 = await app.request("GET", "/tecnicos/41")\nconsole.log("Tecnico 41:", r1.body)\n\n// Testando com ID inexistente:\nlet r2 = await app.request("GET", "/tecnicos/999")\nconsole.log("\\nTecnico 999:", r2.status, r2.body)',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercicio 1B - Rota com parametro",
              instructions: "Crie rota GET <code>/os/:numero</code> que busca OS pelo numero. Se nao encontrar, retorna status 404.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Use <code>app.data.os.find()</code></div>",
              starterCode: 'let app = new ExpressSimulator()\n\n// Crie a rota GET /os/:numero:\n\n\n// Teste com numero 6650:\n\n\n// Teste com numero inexistente:\n',
              solution: 'let app = new ExpressSimulator()\n\napp.get("/os/:numero", (req, res) => {\n  let numero = Number(req.params.numero)\n  let os = app.data.os.find(o => o.order_number === numero)\n  \n  if (!os) {\n    return res.status(404).json({ error: "OS nao encontrada" })\n  }\n  \n  res.json(os)\n})\n\nlet r1 = await app.request("GET", "/os/6650")\nconsole.log("OS 6650:", r1.body)\n\nlet r2 = await app.request("GET", "/os/9999")\nconsole.log("OS 9999:", r2.status, r2.body)',
              validation: "structure",
              checks: { codeHas: ["app.get", "/os/:numero", "req.params", "find", "res.status(404)", "app.request"], minOutput: 3 }
            }
          ],
          quiz: [
            {
              question: "O que GET faz numa API?",
              options: ["Busca/lista dados", "Cria novos dados", "Deleta dados", "Atualiza dados"],
              correct: 0,
              explanation: "GET e pra buscar. POST cria, PUT atualiza, DELETE deleta."
            },
            {
              question: "O que status 404 significa?",
              options: ["Nao encontrado", "Sucesso", "Erro do servidor", "Nao autorizado"],
              correct: 0,
              explanation: "404 = recurso nao encontrado. 200 = sucesso. 500 = erro do servidor."
            }
          ]
        }
      ]
    },

    // ========== MODULO 9: BANCO DE DADOS (CONCEITUAL) ==========
    {
      id: 9,
      title: "Banco de Dados",
      lessons: [
        {
          id: "9-1",
          title: "SQL e Banco de Dados",
          duration: "30 min",
          module: "Banco de Dados",
          conceptual: true,
          sections: [
            {
              type: "explanation",
              title: "Por que banco de dados?",
              content: "Ate agora guardamos dados em arrays. Mas quando o servidor desliga, <strong>tudo some!</strong> Banco de dados = guardar dados <strong>permanente</strong>.<br><br>A Helsen Service usa <strong>PostgreSQL</strong> hospedado na Railway. Todas as OS, tecnicos, clientes e materiais ficam salvos la.<br><br>Mesmo se o servidor cair, os dados permanecem seguros no banco."
            },
            {
              type: "code-example",
              title: "Estrutura REAL do banco da Helsen",
              code: '// SQL = linguagem do banco de dados\n\n// Assim sao as tabelas REAIS da Helsen:\n\n// Tabela de tecnicos:\n// CREATE TABLE technicians (\n//   id SERIAL PRIMARY KEY,\n//   username VARCHAR(100) NOT NULL,\n//   hourly_rate NUMERIC(10,2),\n//   active BOOLEAN DEFAULT true\n// )\n\n// Tabela de OS:\n// CREATE TABLE os (\n//   id SERIAL PRIMARY KEY,\n//   order_number INTEGER UNIQUE,\n//   client_name VARCHAR(255),\n//   technician_id INTEGER REFERENCES technicians(id),\n//   status VARCHAR(50),\n//   grand_total NUMERIC(10,2),\n//   created_at TIMESTAMP DEFAULT NOW()\n// )\n\n// Buscar tecnicos ativos:\n// SELECT * FROM technicians WHERE active = true\n\n// No Node.js com PostgreSQL:\nconst { Client } = require("pg")\nconst db = new Client({ connectionString: process.env.DATABASE_URL })\n\nasync function listarTecnicos() {\n  let resultado = await db.query(\n    "SELECT id, username, hourly_rate FROM technicians WHERE active = true"\n  )\n  return resultado.rows  // [{ id: 41, username: "Leon Mendes", ... }]\n}',
              runnable: false
            },
            {
              type: "explanation",
              title: "Comandos SQL essenciais",
              content: "<strong>SELECT</strong> = buscar dados<br><strong>INSERT INTO</strong> = inserir dados<br><strong>UPDATE</strong> = atualizar dados<br><strong>DELETE FROM</strong> = deletar dados<br><strong>WHERE</strong> = filtrar (condicao)<br><strong>JOIN</strong> = juntar tabelas relacionadas<br><strong>COUNT, SUM, AVG</strong> = contar, somar, media"
            },
            {
              type: "code-example",
              title: "Queries simples da Helsen",
              code: '// Exemplos de SQL que a Helsen Service usa:\n\n// Buscar tecnicos ativos:\n// SELECT * FROM technicians WHERE active = true\n\n// Buscar OS de um tecnico:\n// SELECT * FROM os WHERE technician_id = 41\n\n// Buscar OS finalizadas:\n// SELECT * FROM os WHERE status = \'completed\'\n\n// Contar quantas OS tem:\n// SELECT COUNT(*) FROM os\n\n// Somar valor total das OS:\n// SELECT SUM(grand_total) FROM os WHERE status = \'completed\'\n\n// No Node.js, voce usa assim:\nasync function buscarOS(tecnicoId) {\n  let resultado = await db.query(\n    "SELECT * FROM os WHERE technician_id = $1",\n    [tecnicoId]\n  )\n  return resultado.rows\n}',
              runnable: false
            }
          ],
          quiz: [
            {
              question: "Qual comando SQL busca dados?",
              options: ["SELECT", "INSERT", "UPDATE", "CREATE"],
              correct: 0,
              explanation: "SELECT busca/le dados do banco."
            },
            {
              question: "Pra que serve WHERE no SQL?",
              options: ["Filtrar resultados com condicao", "Criar tabela", "Ordenar resultados", "Juntar tabelas"],
              correct: 0,
              explanation: "WHERE filtra: SELECT * FROM x WHERE condicao."
            }
          ]
        }
      ]
    },

    // ========== MODULO 10: DESAFIO FINAL ==========
    {
      id: 10,
      title: "Desafio Final",
      lessons: [
        {
          id: "10-1",
          title: "Construa seu Sistema",
          duration: "2 horas",
          module: "Desafio Final",
          conceptual: true,
          sections: [
            {
              type: "explanation",
              title: "Voce chegou no final!",
              content: "Parabens! Voce aprendeu tudo que precisa pra entender como a Helsen Service funciona. Agora o desafio: <strong>criar um mini sistema de OS sozinho.</strong><br><br>Use tudo que voce aprendeu: variaveis, loops, funcoes, arrays, objetos, async. Voce ja sabe o suficiente!"
            },
            {
              type: "explanation",
              title: "O que construir",
              content: "<strong>Backend com Express + SQLite:</strong><br>- Tabela de tecnicos, clientes e OS<br>- Rota GET /tecnicos (listar)<br>- Rota POST /tecnicos (criar)<br>- Rota GET /os (listar com filtro por status)<br>- Rota POST /os (criar OS)<br>- Rota PUT /os/:id (atualizar status)<br>- Rota GET /dashboard (estatisticas)"
            },
            {
              type: "explanation",
              title: "Regras de negocio",
              content: "- Nao pode criar OS sem cliente<br>- Nao pode finalizar OS sem tecnico<br>- Valor minimo: R$100<br>- Status validos: aberta, atribuida, em_andamento, finalizada, cancelada"
            },
            {
              type: "explanation",
              title: "Como comecar",
              content: "1. Crie pasta <code>meu-sistema</code><br>2. Rode <code>npm init -y</code><br>3. Rode <code>npm install express better-sqlite3</code><br>4. Crie <code>servidor.js</code><br>5. Comece pelas tabelas<br>6. Crie as rotas uma por uma<br>7. Teste cada rota antes da proxima<br><br><strong>Dica:</strong> copie das aulas anteriores! Isso e esperado. O gabarito esta em <code>modulo-10-desafio-final/servidor-exemplo.js</code>"
            }
          ],
          quiz: [
            {
              question: "Qual a primeira coisa a fazer num projeto Node.js?",
              options: ["npm init -y", "Criar o HTML", "Abrir o navegador", "Criar o banco de dados"],
              correct: 0,
              explanation: "npm init -y cria o package.json, que e o arquivo de configuracao do projeto."
            },
            {
              question: "O que voce aprendeu neste curso?",
              options: ["Variaveis, funcoes, arrays, objetos, async, API e banco", "So HTML e CSS", "Apenas logica", "Nada, so copiei"],
              correct: 0,
              explanation: "Voce aprendeu a base completa de JavaScript! Agora e praticar."
            }
          ]
        }
      ]
    }
  ]
}
