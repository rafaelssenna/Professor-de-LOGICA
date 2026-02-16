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
              content: "<strong>String</strong> = texto (sempre entre aspas): <code>\"Maria\"</code><br><strong>Number</strong> = numero (sem aspas): <code>42</code>, <code>3.14</code><br><strong>Boolean</strong> = verdadeiro ou falso: <code>true</code>, <code>false</code>"
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
              content: "Quando voce quer misturar texto com variaveis, tem um jeito muito facil chamado <strong>template literal</strong>. Funciona assim:<br><br><strong>1.</strong> Em vez de aspas normais (<code>\"\"</code>), use <strong>crase</strong> (<code>\`\`</code>). A crase e aquela tecla do lado do 1 no teclado, a mesma do acento agudo. Aperte ela sozinha (sem segurar nada).<br><br><strong>2.</strong> Pra colocar uma variavel dentro do texto, use <strong><code>${ }</code></strong> com o nome da variavel dentro. E tipo um buraco no texto onde a variavel entra.<br><br>Pense assim: e como um modelo de OS preenchido. O modelo e o texto com crase, e os <code>${}</code> sao os campos que o sistema preenche automatico.<br><br><div class='highlight-box tip'><strong>Resumo:</strong> crase (<code>\`</code>) + dolar-chave (<code>${variavel}</code>) = texto com variaveis misturadas!</div>"
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
              content: "Na Helsen Service, voce toma decisoes o tempo todo:<br><br>🔧 <em>\"SE a maquina ta quebrada, ENTAO manda o tecnico. SENAO, agenda preventiva.\"</em><br><br>🔧 <em>\"SE o cliente e VIP, ENTAO atende primeiro. SENAO, coloca na fila normal.\"</em><br><br>O computador faz a MESMA coisa! So que ao inves de pensar, ele usa <strong>if</strong> (SE) e <strong>else</strong> (SENAO).<br><br><strong>if</strong> = SE (verifica uma condicao)<br><strong>else</strong> = SENAO (o que fazer se a condicao nao for verdadeira)"
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
              instructions: "Vamos comecar simples! Crie uma variavel <strong>maquinaLigada</strong> (true ou false). <br><br>Use <strong>if/else</strong> pra verificar:<br>- SE maquinaLigada for <strong>true</strong>: mostre <em>\"Maquina em funcionamento\"</em><br>- SENAO: mostre <em>\"Maquina desligada\"</em><br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 <strong>Dica:</strong> Quando a variavel ja e true/false, voce nao precisa comparar com === true. Pode fazer direto: <code>if (maquinaLigada)</code></div>",
              starterCode: '// Crie a variavel:\nlet maquinaLigada = true\n\n// Faca o if/else:\n',
              solution: 'let maquinaLigada = true\n\nif (maquinaLigada) {\n  console.log("Maquina em funcionamento")\n} else {\n  console.log("Maquina desligada")\n}',
              validation: "structure",
              checks: { codeHas: ["maquinaLigada", "if", "else", "console.log"], minOutput: 1 }
            },
            {
              type: "exercise",
              title: "Exercicio 2 - Classificando valor da OS",
              instructions: "Agora com <strong>else if</strong>! Crie uma variavel <strong>valorOS</strong> com o valor que quiser.<br><br>Use <strong>if / else if / else</strong> pra classificar:<br>- SE valorOS > 1000: mostre <em>\"OS de alto valor\"</em><br>- SENAO SE valorOS >= 500: mostre <em>\"OS de valor medio\"</em><br>- SENAO: mostre <em>\"OS de valor baixo\"</em><br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 <strong>Lembra:</strong> O computador testa de CIMA PRA BAIXO. Se valorOS for 1500, ele ja entra no primeiro if e nao testa o resto.</div>",
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
              content: "Voce ja sabe usar if/else. Mas imagina que voce tem uma variavel e quer comparar ela com VARIAS opcoes exatas. Tipo:<br><br><em>\"Se o status for 'aberta', faz X. Se for 'em_andamento', faz Y. Se for 'finalizada', faz Z. Se for 'cancelada', faz W.\"</em><br><br>Com if/else, ficaria assim:<br><pre style='background:#1e1e1e;padding:15px;border-radius:8px;font-size:14px;line-height:1.8'>if (status === \"aberta\") { ... }\nelse if (status === \"em_andamento\") { ... }\nelse if (status === \"finalizada\") { ... }\nelse if (status === \"cancelada\") { ... }\nelse { ... }</pre><br>Funciona! Mas quando tem <strong>4, 5, 6 opcoes</strong> pra mesma variavel, fica repetitivo. O <strong>switch</strong> faz a mesma coisa, so que mais organizado."
            },
            {
              type: "explanation",
              title: "A estrutura do Switch (passo a passo)",
              content: "O switch pega UMA variavel e compara com varios valores. A estrutura e assim:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px;font-size:14px;line-height:1.8'><span style='color:#c586c0'>switch</span> (<span style='color:#9cdcfe'>variavel</span>) {\n  <span style='color:#c586c0'>case</span> <span style='color:#ce9178'>\"valor1\"</span>:\n    <span style='color:#6a9955'>// faz isso se variavel === \"valor1\"</span>\n    <span style='color:#c586c0'>break</span>\n  <span style='color:#c586c0'>case</span> <span style='color:#ce9178'>\"valor2\"</span>:\n    <span style='color:#6a9955'>// faz isso se variavel === \"valor2\"</span>\n    <span style='color:#c586c0'>break</span>\n  <span style='color:#c586c0'>default</span>:\n    <span style='color:#6a9955'>// faz isso se NENHUM case combinou</span>\n}</pre><br>Traduzindo:<br>- <strong>switch (variavel)</strong> = \"vou comparar essa variavel\"<br>- <strong>case \"valor\"</strong> = \"se for igual a esse valor, faz isso\"<br>- <strong>break</strong> = \"pronto, para aqui\" (OBRIGATORIO! senao continua rodando os proximos cases)<br>- <strong>default</strong> = \"se nao for nenhum dos valores acima\" (como o else)"
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
              instructions: "Crie um switch pra tipo de servico:<br>- <strong>\"preventiva\"</strong> → mostre \"Manutencao preventiva - R$300\"<br>- <strong>\"corretiva\"</strong> → mostre \"Manutencao corretiva - R$450\"<br>- <strong>\"emergencial\"</strong> → mostre \"Emergencial - R$700\"<br>- <strong>Qualquer outro</strong> → mostre \"Tipo nao cadastrado\"<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>Lembra da estrutura:<br><code>switch (variavel) {</code><br>&nbsp;&nbsp;<code>case \"valor\":</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>console.log(...)</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>break</code><br>&nbsp;&nbsp;<code>default:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>console.log(...)</code><br><code>}</code></div>",
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
              content: "O ternario tem 3 partes. Por isso chama <strong>ternario</strong> (tres partes):<br><br><pre style='background:#1e1e1e;padding:20px;border-radius:8px;font-size:16px;line-height:2;text-align:center'><span style='color:#9cdcfe'>condicao</span> <span style='color:#c586c0;font-size:20px'>?</span> <span style='color:#4ec9b0'>valorSeTrue</span> <span style='color:#c586c0;font-size:20px'>:</span> <span style='color:#ce9178'>valorSeFalse</span></pre><br><table style='width:100%;border-collapse:collapse;margin:10px 0'><tr style='border-bottom:1px solid #555'><td style='padding:10px;font-size:18px;text-align:center'><code>condicao</code></td><td style='padding:10px'>A pergunta (igual ao if)</td></tr><tr style='border-bottom:1px solid #555'><td style='padding:10px;font-size:18px;text-align:center;color:#c586c0'><code>?</code></td><td style='padding:10px'>Significa: \"SE for verdadeiro, use isso\"</td></tr><tr style='border-bottom:1px solid #555'><td style='padding:10px;font-size:18px;text-align:center;color:#c586c0'><code>:</code></td><td style='padding:10px'>Significa: \"SENAO, use isso\"</td></tr></table><br>Pense assim: <strong>?</strong> = SE, <strong>:</strong> = SENAO<br><br><div style='background:#1a3a2a;border-left:3px solid #4caf50;padding:10px;border-radius:4px'>Exemplo: <code>nota >= 7 ? \"Aprovado\" : \"Reprovado\"</code><br>Leia: \"nota >= 7? <strong>SE sim</strong> → Aprovado, <strong>SENAO</strong> → Reprovado\"</div>"
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
              instructions: "Transforme esse if/else em <strong>ternario</strong>:<br><br><pre style='background:#1e1e1e;padding:10px;border-radius:8px;font-size:13px'>if (nota >= 4) {\n  resultado = \"Satisfeito\"\n} else {\n  resultado = \"Insatisfeito\"\n}</pre><br>Coloque a nota que quiser e mostre o resultado com console.log.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>Lembra a formula:<br><code>variavel = condicao ? valorSeTrue : valorSeFalse</code><br><br>Nesse caso:<br>- condicao = <code>nota >= 4</code><br>- valorSeTrue = <code>\"Satisfeito\"</code><br>- valorSeFalse = <code>\"Insatisfeito\"</code></div>",
              starterCode: 'let nota = 4.5\n\n// Transforme o if/else em ternario:\nlet resultado\n\n\nconsole.log(resultado)',
              solution: 'let nota = 4.5\n\nlet resultado = nota >= 4 ? "Satisfeito" : "Insatisfeito"\n\nconsole.log(resultado)',
              validation: "structure",
              checks: { codeHas: ["nota", "?", ":", "console.log"], minOutput: 1 }
            },
            {
              type: "exercise",
              title: "Exercicio 3 - Ternario com template literal",
              instructions: "Crie variavel <strong>tecnico</strong> (nome) e <strong>disponivel</strong> (true ou false).<br><br>Mostre com console.log e template literal:<br><code>Carlos: Disponivel</code> ou <code>Carlos: Ocupado</code><br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>Dica: use ternario DENTRO do template literal:<br><code>console.log(`${nome}: ${condicao ? \"Sim\" : \"Nao\"}`)</code></div>",
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
          duration: "30 min",
          module: "Repeticoes",
          sections: [
            {
              type: "explanation",
              title: "O que e um Array?",
              content: "Array = uma <strong>LISTA</strong> de valores. No sistema MATH, tudo e lista: lista de tecnicos, lista de OS, lista de clientes... O primeiro item e posicao <strong>0</strong> (nao 1!)."
            },
            {
              type: "code-example",
              title: "Criando e acessando",
              code: 'let tecnicos = ["Carlos", "Ana", "Pedro", "Maria"]\n\nconsole.log(tecnicos[0])   // "Carlos" (primeiro)\nconsole.log(tecnicos[1])   // "Ana"\nconsole.log(tecnicos[3])   // "Maria" (ultimo)\nconsole.log(tecnicos.length) // 4 (quantidade)',
              runnable: true
            },
            {
              type: "code-example",
              title: "Adicionando e removendo",
              code: 'let fila = ["OS-001", "OS-002", "OS-003"]\nconsole.log("Inicio:", fila)\n\nfila.push("OS-004")    // adiciona no FINAL\nconsole.log("Push:", fila)\n\nfila.shift()           // remove o PRIMEIRO\nconsole.log("Shift:", fila)\n\nconsole.log("Tem OS-002?", fila.includes("OS-002"))',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercicio 1",
              instructions: "Crie array <strong>clientes</strong> com 4 nomes (os que quiser). Mostre o primeiro, o ultimo, e quantos tem. Adicione mais um no final.",
              starterCode: '// Crie o array:\n\n\n// Mostre primeiro, ultimo, quantidade:\n\n\n// Adicione mais um:\n',
              solution: 'let clientes = ["Fabrica ABC", "Metalurgica XYZ", "Industria 123", "Construtora Top"]\nconsole.log("Primeiro:", clientes[0])\nconsole.log("Ultimo:", clientes[clientes.length - 1])\nconsole.log("Total:", clientes.length)\nclientes.push("Logistica Express")\nconsole.log("Agora:", clientes)',
              validation: "structure",
              checks: { codeHas: ["clientes", "[", "]", ".push(", "console.log", "[0]", ".length"], minOutput: 3 }
            }
          ],
          quiz: [
            {
              question: "Qual e a posicao do PRIMEIRO item de um array?",
              options: ["0", "1", "-1", "Depende"],
              correct: 0,
              explanation: "Em JavaScript, arrays comecam na posicao 0."
            },
            {
              question: "O que .push() faz?",
              options: ["Adiciona no final", "Remove o primeiro", "Adiciona no inicio", "Remove o ultimo"],
              correct: 0,
              explanation: ".push() adiciona um item no final do array."
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
              content: "Imagina que voce precisa subir uma escada de 10 degraus. Cada degrau voce faz a MESMA coisa:<br><br>1. Pe direito sobe<br>2. Pe esquerdo sobe<br>3. Repete...<br><br>Voce NAO pensa \"vou fazer isso 10 vezes\". Seu cerebro automaticamente repete ate acabar os degraus.<br><br>O <strong>loop</strong> e a mesma coisa! Ele pega uma lista e faz a MESMA ACAO pra cada item da lista. Tipo:<br><br>🔧 Lista de 50 OS → mostrar cada uma na tela<br>🔧 Lista de valores → somar todos<br>🔧 Lista de tecnicos → enviar email pra cada um<br><br><div style='background:#1a3a2a;border-left:3px solid #4caf50;padding:10px;border-radius:4px'>Loop = <strong>\"Faca isso pra CADA item da lista\"</strong></div>"
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
              content: "O <strong>for...of</strong> e tipo um robo que vai olhando cada item da lista, um por um.<br><br>A estrutura e assim:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px;font-size:14px;line-height:1.8'><span style='color:#c586c0'>for</span> (<span style='color:#c586c0'>let</span> <span style='color:#9cdcfe'>item</span> <span style='color:#c586c0'>of</span> <span style='color:#9cdcfe'>lista</span>) {\n  <span style='color:#6a9955'>// faz algo com cada item</span>\n}</pre><br>Leia assim: <strong>\"PARA CADA item DA lista, faca isso\"</strong><br><br>📦 <code>lista</code> = a caixa cheia de coisas<br>🔍 <code>item</code> = a coisa que o robo ta olhando AGORA (muda sozinho a cada rodada)<br>⚙️ <code>{ }</code> = o que fazer com cada coisa<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 O nome <code>item</code> voce escolhe! Pode ser <code>nome</code>, <code>os</code>, <code>valor</code>... o que fizer sentido.</div>"
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
              title: "Exercicio 1 - Seu primeiro loop!",
              instructions: "Use <strong>for...of</strong> pra percorrer o array de clientes e mostrar cada um com console.log.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>Lembra a estrutura:<br><code>for (let item of lista) {</code><br>&nbsp;&nbsp;<code>console.log(item)</code><br><code>}</code></div>",
              starterCode: 'let clientes = ["Fabrica ABC", "Metal XYZ", "Industria 123"]\n\n// Percorra a lista e mostre cada cliente:\n',
              solution: 'let clientes = ["Fabrica ABC", "Metal XYZ", "Industria 123"]\n\nfor (let cliente of clientes) {\n  console.log(cliente)\n}',
              validation: "structure",
              checks: { codeHas: ["for", "of", "clientes", "console.log"], minOutput: 3 }
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
              title: "Exercicio 2 - Loop com soma",
              instructions: "Use <strong>for...of</strong> pra somar todos os valores do array. Mostre o total.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>Dica: crie uma variavel <code>soma</code> comecando em 0. Dentro do loop, faca <code>soma += v</code> pra ir somando cada valor.</div>",
              starterCode: 'let valores = [350, 820, 1200, 450, 690]\nlet soma = 0\n\n// Faca o loop pra somar:\n\n\nconsole.log(`Total: R$${soma}`)',
              solution: 'let valores = [350, 820, 1200, 450, 690]\nlet soma = 0\n\nfor (let v of valores) {\n  soma += v\n}\n\nconsole.log(`Total: R$${soma}`)',
              validation: "structure",
              checks: { codeHas: ["for", "of", "soma", "+=", "console.log"], outputHas: ["3510"] }
            },
            {
              type: "exercise",
              title: "Exercicio 3 - Loop com if dentro",
              instructions: "Use <strong>for...of</strong> pra percorrer o array de valores. Dentro do loop, use <strong>if</strong> pra contar quantos sao maiores que 1000.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>Dica: crie <code>let maiores = 0</code>. Dentro do loop: <code>if (v > 1000) { maiores++ }</code></div>",
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
          duration: "30 min",
          module: "Funcoes",
          sections: [
            {
              type: "explanation",
              title: "O que e uma funcao?",
              content: "Funcao = um <strong>BLOCO DE CODIGO com nome</strong>. Voce cria uma vez e usa quantas vezes quiser. E como uma receita: escreve uma vez, faz o prato quantas vezes precisar.<br><br>No MATH, TUDO e funcao: <code>calcularValorOS()</code>, <code>enviarEmail()</code>, <code>criarOS()</code>..."
            },
            {
              type: "code-example",
              title: "Funcao com parametros e retorno",
              code: 'function calcularServico(horas, valorHora) {\n  let total = horas * valorHora\n  return total\n}\n\nlet v1 = calcularServico(4, 85)\nlet v2 = calcularServico(2, 120)\n\nconsole.log(`Servico 1: R$${v1}`)\nconsole.log(`Servico 2: R$${v2}`)\nconsole.log(`Total: R$${v1 + v2}`)',
              runnable: true
            },
            {
              type: "code-example",
              title: "Arrow function (funcao flecha)",
              code: '// Forma mais curta - muito usada!\nconst dobrar = (n) => n * 2\nconst ehUrgente = (p) => p <= 2\nconst formatarValor = (v) => `R$${v.toFixed(2)}`\n\nconsole.log(dobrar(5))           // 10\nconsole.log(ehUrgente(1))        // true\nconsole.log(formatarValor(350.5)) // R$350.50',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercicio 1",
              instructions: "Crie funcao <strong>calcularHoraExtra</strong>(horasNormais, horasExtras, valorHora). Hora extra vale 50% a mais. Retorne o total. Teste com 8h normais, 2h extras, R$50/hora.",
              starterCode: '// Crie a funcao:\n\n\n// Teste:\n',
              solution: 'function calcularHoraExtra(horasNormais, horasExtras, valorHora) {\n  let normal = horasNormais * valorHora\n  let extra = horasExtras * (valorHora * 1.5)\n  return normal + extra\n}\n\nlet total = calcularHoraExtra(8, 2, 50)\nconsole.log(`Total: R$${total}`)',
              validation: "structure",
              checks: { codeHas: ["function calcularHoraExtra", "return", "console.log"], outputHas: ["550"] }
            }
          ],
          quiz: [
            {
              question: "O que 'return' faz numa funcao?",
              options: ["Devolve um valor", "Para o programa", "Imprime na tela", "Cria variavel"],
              correct: 0,
              explanation: "return devolve um valor pra quem chamou a funcao."
            },
            {
              question: "Qual dessas e uma arrow function valida?",
              options: ["const f = (x) => x * 2", "arrow f(x) => x * 2", "const f = arrow(x) x * 2", "function => (x) x * 2"],
              correct: 0,
              explanation: "Arrow function: const nome = (param) => expressao"
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
              content: "Arrays tem <strong>funcoes prontas</strong> (metodos) que facilitam MUITO a vida. No sistema MATH, usamos em TODO lugar:<br><br>🔍 <strong>.find()</strong> → achar uma licao especifica pelo ID<br>🎯 <strong>.filter()</strong> → pegar so as linhas de saida que nao estao vazias<br>🔄 <strong>.map()</strong> → transformar argumentos do console.log em texto<br><br>Sem esses metodos, o MATH seria MUITO mais complicado de fazer."
            },
            // ========== .find() ==========
            {
              type: "explanation",
              title: ".find() — Procurar UM item especifico",
              content: "Imagina que voce tem uma lista de 50 alunos e quer achar um aluno especifico. Sem .find() voce teria que fazer um loop e verificar um por um.<br><br>O <strong>.find()</strong> faz isso automaticamente! Ele procura na lista e retorna o PRIMEIRO item que passou no teste.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 <strong>Uso real no MATH:</strong> Quando voce clica numa licao, o sistema usa <code>.find()</code> pra achar a licao pelo ID na lista de todas as licoes.</div>"
            },
            {
              type: "code-example",
              title: "find() — Procurando um aluno pelo nome",
              code: 'let alunos = [\n  { nome: "Rafael", nota: 8 },\n  { nome: "Ana", nota: 9 },\n  { nome: "Pedro", nota: 7 }\n]\n\n// Procura o aluno chamado "Ana"\nlet aluno = alunos.find(a => a.nome === "Ana")\n\nconsole.log("Encontrou:", aluno.nome)\nconsole.log("Nota:", aluno.nota)\n\n// Se nao encontrar, retorna undefined\nlet naoExiste = alunos.find(a => a.nome === "Maria")\nconsole.log("Maria:", naoExiste)  // undefined',
              runnable: true
            },
            {
              type: "explanation",
              title: "Como .find() funciona passo a passo",
              content: "Quando voce escreve:<br><br><code>alunos.find(a => a.nome === \"Ana\")</code><br><br>O JavaScript faz:<br><br>1. Pega o primeiro aluno: <code>{ nome: \"Rafael\", nota: 8 }</code><br>2. Testa: <code>\"Rafael\" === \"Ana\"</code>? NAO!<br>3. Pega o segundo aluno: <code>{ nome: \"Ana\", nota: 9 }</code><br>4. Testa: <code>\"Ana\" === \"Ana\"</code>? SIM! Achou!<br>5. Retorna esse aluno e PARA de procurar<br><br><div style='background:#1a3a2a;border-left:3px solid #4caf50;padding:10px;border-radius:4px'>Se procurar a lista toda e nao achar nada, retorna <code>undefined</code>.</div>"
            },
            {
              type: "exercise",
              title: "Exercicio 1 - Procurar uma OS",
              instructions: "Use <strong>.find()</strong> pra procurar a OS com numero 1502. Mostre o cliente dela.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>Dica: <code>ordens.find(os => os.numero === 1502)</code></div>",
              starterCode: 'let ordens = [\n  { numero: 1501, cliente: "Fabrica ABC" },\n  { numero: 1502, cliente: "Metal XYZ" },\n  { numero: 1503, cliente: "Industria 123" }\n]\n\n// Procure a OS 1502:\n\n\n// Mostre o cliente:\n',
              solution: 'let ordens = [\n  { numero: 1501, cliente: "Fabrica ABC" },\n  { numero: 1502, cliente: "Metal XYZ" },\n  { numero: 1503, cliente: "Industria 123" }\n]\n\nlet os = ordens.find(os => os.numero === 1502)\nconsole.log("Cliente:", os.cliente)',
              validation: "structure",
              checks: { codeHas: [".find(", "console.log"], outputHas: ["Metal XYZ"] }
            },
            // ========== .filter() ==========
            {
              type: "explanation",
              title: ".filter() — Filtrar VARIOS itens",
              content: "O <strong>.filter()</strong> e parecido com .find(), mas ao inves de retornar UM item, ele retorna TODOS os itens que passaram no teste.<br><br>Pensa assim: voce tem 100 OS e quer pegar SÓ as que estao abertas. O .filter() pega todas as abertas e coloca num array novo.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 <strong>Uso real no MATH:</strong> Quando o sistema valida sua resposta, ele usa <code>.filter()</code> pra pegar so as linhas de saida que nao estao vazias, ignorando linhas em branco.</div>"
            },
            {
              type: "code-example",
              title: "filter() — Pegar SÓ as OS abertas",
              code: 'let ordens = [\n  { numero: 1501, status: "aberta" },\n  { numero: 1502, status: "finalizada" },\n  { numero: 1503, status: "aberta" },\n  { numero: 1504, status: "cancelada" }\n]\n\n// Pega SÓ as abertas\nlet abertas = ordens.filter(os => os.status === "aberta")\n\nconsole.log("Total abertas:", abertas.length)\nconsole.log("Numeros:", abertas)\n\n// Percorre as abertas\nfor (let os of abertas) {\n  console.log("OS", os.numero, "esta aberta")\n}',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercicio 2 - Filtrar tecnicos disponiveis",
              instructions: "Use <strong>.filter()</strong> pra pegar so os tecnicos com <code>disponivel: true</code>. Mostre os nomes deles.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>Dica: depois de filtrar, use um loop <code>for...of</code> pra mostrar cada nome.</div>",
              starterCode: 'let tecnicos = [\n  { nome: "Carlos", disponivel: true },\n  { nome: "Ana", disponivel: false },\n  { nome: "Pedro", disponivel: true },\n  { nome: "Maria", disponivel: false }\n]\n\n// Filtre os disponiveis:\n\n\n// Mostre os nomes:\n',
              solution: 'let tecnicos = [\n  { nome: "Carlos", disponivel: true },\n  { nome: "Ana", disponivel: false },\n  { nome: "Pedro", disponivel: true },\n  { nome: "Maria", disponivel: false }\n]\n\nlet disponiveis = tecnicos.filter(t => t.disponivel === true)\n\nfor (let t of disponiveis) {\n  console.log(t.nome, "esta disponivel")\n}',
              validation: "structure",
              checks: { codeHas: [".filter(", "for", "of", "console.log"], outputHas: ["Carlos", "Pedro"], minOutput: 2 }
            },
            // ========== .map() ==========
            {
              type: "explanation",
              title: ".map() — Transformar cada item",
              content: "O <strong>.map()</strong> pega cada item da lista, transforma ele, e coloca num array novo.<br><br>Pensa assim: voce tem uma lista de numeros e quer dobrar cada um. Sem .map() voce faria um loop e criaria um array novo. Com .map() e automático!<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 <strong>Uso real no MATH:</strong> Quando voce da console.log, o sistema usa <code>.map()</code> pra transformar cada argumento em texto antes de mostrar na tela.</div>"
            },
            {
              type: "code-example",
              title: "map() — Pegar SÓ os nomes",
              code: 'let alunos = [\n  { nome: "Rafael", nota: 8 },\n  { nome: "Ana", nota: 9 },\n  { nome: "Pedro", nota: 7 }\n]\n\n// Pega SÓ os nomes (transforma objeto em string)\nlet nomes = alunos.map(a => a.nome)\n\nconsole.log("Nomes:", nomes)\n// ["Rafael", "Ana", "Pedro"]\n\n// Tambem pode transformar de outro jeito:\nlet mensagens = alunos.map(a => `${a.nome} tirou ${a.nota}`)\n\nfor (let msg of mensagens) {\n  console.log(msg)\n}',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercicio 3 - Transformar valores",
              instructions: "Use <strong>.map()</strong> pra pegar so os valores das OS. Depois some todos os valores com um loop <code>for...of</code>.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>Passo 1: <code>let valores = ordens.map(os => os.valor)</code><br>Passo 2: Loop pra somar</div>",
              starterCode: 'let ordens = [\n  { numero: 1501, valor: 350 },\n  { numero: 1502, valor: 820 },\n  { numero: 1503, valor: 1200 }\n]\n\n// Pegue so os valores:\n\n\n// Some todos:\n',
              solution: 'let ordens = [\n  { numero: 1501, valor: 350 },\n  { numero: 1502, valor: 820 },\n  { numero: 1503, valor: 1200 }\n]\n\nlet valores = ordens.map(os => os.valor)\n\nlet soma = 0\nfor (let v of valores) {\n  soma += v\n}\n\nconsole.log("Total:", soma)',
              validation: "structure",
              checks: { codeHas: [".map(", "for", "of", "soma", "console.log"], outputHas: ["2370"] }
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
              content: "Objeto = uma colecao de dados relacionados. Uma variavel guarda UM valor. Um objeto guarda VARIOS valores organizados.<br><br>No MATH, uma OS e um objeto: <code>{ numero, cliente, tecnico, valor, status }</code>"
            },
            {
              type: "code-example",
              title: "Criando e acessando objetos",
              code: 'let os = {\n  numero: 1501,\n  cliente: "Fabrica ABC",\n  tecnico: "Carlos",\n  valor: 850,\n  urgente: true\n}\n\nconsole.log(os.numero)   // 1501\nconsole.log(os.cliente)  // "Fabrica ABC"\n\n// Modificando:\nos.status = "em_andamento"\nconsole.log(os)',
              runnable: true
            },
            {
              type: "code-example",
              title: "Objeto dentro de objeto",
              code: 'let osCompleta = {\n  numero: 1503,\n  cliente: {\n    nome: "Industria 123",\n    contato: "Maria",\n    tel: "(11) 99999-0000"\n  },\n  servico: {\n    descricao: "Manutencao preventiva",\n    materiais: ["Rolamento", "Oleo", "Filtro"]\n  }\n}\n\nconsole.log(osCompleta.cliente.nome)\nconsole.log(osCompleta.servico.materiais[0])',
              runnable: true
            },
            {
              type: "code-example",
              title: "Desestruturacao",
              code: 'let os = { numero: 1502, cliente: "Metal XYZ", valor: 1200 }\n\n// Forma rapida de pegar valores:\nlet { numero, cliente, valor } = os\n\nconsole.log(numero)  // 1502\nconsole.log(cliente)  // "Metal XYZ"\nconsole.log(valor)    // 1200',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercicio 1",
              instructions: "Crie objeto <strong>maquina</strong> com: id, nome, fabricante, anoFabricacao, funcionando (boolean). Valores que quiser! Mostre: \"Maquina [nome] ([fabricante]) - Funcionando/Parada\" (use ternario).",
              starterCode: '// Crie o objeto:\n\n\n// Mostre a mensagem:\n',
              solution: 'let maquina = {\n  id: 1,\n  nome: "Torno CNC",\n  fabricante: "Romi",\n  anoFabricacao: 2019,\n  funcionando: true\n}\n\nlet status = maquina.funcionando ? "Funcionando" : "Parada"\nconsole.log(`Maquina ${maquina.nome} (${maquina.fabricante}) - ${status}`)',
              validation: "structure",
              checks: { codeHas: ["maquina", "{", "}", "?", ":", "console.log", "nome", "fabricante", "funcionando"], minOutput: 1 }
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
          title: "Lendo Codigo do MATH",
          duration: "30 min",
          module: "Projeto Real",
          sections: [
            {
              type: "explanation",
              title: "Agora voce le codigo real!",
              content: "Voce ja sabe variaveis, if/else, loops, funcoes, arrays e objetos. Agora vamos ler codigo REAL do sistema MATH e entender cada parte. Tudo que voce aprendeu ate aqui aparece no codigo real."
            },
            {
              type: "code-example",
              title: "Verificacao de permissao (middleware)",
              code: '// Versao simplificada do MATH\nfunction verificarPermissao(usuario) {\n  if (!usuario.ativo) {\n    return { permitido: false, motivo: "Usuario inativo" }\n  }\n  \n  switch (usuario.tipo) {\n    case "admin":\n      return { permitido: true, nivel: "total" }\n    case "tecnico":\n      return { permitido: true, nivel: "parcial" }\n    case "cliente":\n      return { permitido: true, nivel: "limitado" }\n    default:\n      return { permitido: false, motivo: "Tipo desconhecido" }\n  }\n}\n\nconsole.log(verificarPermissao({ nome: "Carlos", tipo: "admin", ativo: true }))\nconsole.log(verificarPermissao({ nome: "Ana", tipo: "tecnico", ativo: false }))',
              runnable: true
            },
            {
              type: "code-example",
              title: "Calculo de OS (billing)",
              code: 'function calcularOS(os) {\n  let base = 0\n  switch (os.tipo) {\n    case "preventiva": base = 300; break\n    case "corretiva": base = 450; break\n    case "emergencial": base = 700; break\n  }\n\n  let maoDeObra = os.horas * os.valorHora\n  let materiais = os.materiais.reduce((a, m) => a + m.valor, 0)\n  let sub = base + maoDeObra + materiais\n  let desc = os.desconto ? sub * (os.desconto / 100) : 0\n  let total = sub - desc\n\n  return { base, maoDeObra, materiais, sub, desc, total: total.toFixed(2) }\n}\n\nlet r = calcularOS({\n  tipo: "corretiva",\n  horas: 5, valorHora: 90,\n  materiais: [{ valor: 120 }, { valor: 45 }],\n  desconto: 10\n})\nconsole.log(r)',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercicio 1",
              instructions: "Crie funcao <strong>gerarRelatorio</strong> que recebe array de OS (com numero, valor, status, tecnico). Retorne: totalOS, faturamento (soma dos finalizados), e tecnico mais ativo.",
              starterCode: 'let ordens = [\n  { numero: 1, valor: 500, status: "finalizada", tecnico: "Carlos" },\n  { numero: 2, valor: 1500, status: "aberta", tecnico: "Ana" },\n  { numero: 3, valor: 800, status: "finalizada", tecnico: "Carlos" },\n  { numero: 4, valor: 300, status: "aberta", tecnico: "Ana" },\n  { numero: 5, valor: 2000, status: "finalizada", tecnico: "Carlos" }\n]\n\n// Crie a funcao:\n\n\n// Teste:\n',
              solution: 'let ordens = [\n  { numero: 1, valor: 500, status: "finalizada", tecnico: "Carlos" },\n  { numero: 2, valor: 1500, status: "aberta", tecnico: "Ana" },\n  { numero: 3, valor: 800, status: "finalizada", tecnico: "Carlos" },\n  { numero: 4, valor: 300, status: "aberta", tecnico: "Ana" },\n  { numero: 5, valor: 2000, status: "finalizada", tecnico: "Carlos" }\n]\n\nfunction gerarRelatorio(lista) {\n  let fat = lista.filter(o => o.status === "finalizada").reduce((a, o) => a + o.valor, 0)\n  let contagem = {}\n  for (let o of lista) {\n    contagem[o.tecnico] = (contagem[o.tecnico] || 0) + 1\n  }\n  let maisAtivo = ""\n  let max = 0\n  for (let nome in contagem) {\n    if (contagem[nome] > max) { max = contagem[nome]; maisAtivo = nome }\n  }\n  return { totalOS: lista.length, faturamento: fat, maisAtivo }\n}\n\nconsole.log(gerarRelatorio(ordens))',
              validation: "structure",
              checks: { codeHas: ["function gerarRelatorio", "return", "console.log"], outputHas: ["5", "3300", "Carlos"] }
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
              content: "No mundo real, muitas coisas <strong>demoram</strong>: buscar dados no banco, chamar API, ler arquivo. JavaScript nao fica parado esperando. Ele usa <strong>async/await</strong> pra lidar com isso.<br><br>No MATH, toda chamada ao backend usa async/await."
            },
            {
              type: "code-example",
              title: "Promise + async/await",
              code: '// Simula busca no banco (demora 1 segundo)\nfunction buscarTecnico(id) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (id === 1) resolve({ nome: "Carlos", esp: "Eletrica" })\n      else if (id === 2) resolve({ nome: "Ana", esp: "Mecanica" })\n      else reject(new Error("Nao encontrado"))\n    }, 1000)\n  })\n}\n\nasync function main() {\n  console.log("Buscando...")\n  try {\n    let tec = await buscarTecnico(1)\n    console.log(`Encontrou: ${tec.nome}`)\n  } catch (erro) {\n    console.log(`Erro: ${erro.message}`)\n  }\n}\n\nmain()',
              runnable: true
            },
            {
              type: "explanation",
              title: "Entendendo o codigo",
              content: "<strong>Promise</strong> = promessa de que um valor vai chegar no futuro.<br><strong>async</strong> = essa funcao tem coisas que demoram.<br><strong>await</strong> = espera terminar antes de continuar.<br><strong>try/catch</strong> = tenta fazer algo, se der erro, pega o erro."
            },
            {
              type: "exercise",
              title: "Exercicio 1",
              instructions: "Crie funcao <strong>buscarCliente</strong> que retorna Promise. ID 1 = {nome: 'Fabrica ABC'}, ID 2 = {nome: 'Metal XYZ'}, outro = erro. Crie funcao async pra chamar e mostrar.",
              starterCode: '// Crie buscarCliente:\n\n\n// Crie funcao async pra chamar:\n',
              solution: 'function buscarCliente(id) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (id === 1) resolve({ nome: "Fabrica ABC" })\n      else if (id === 2) resolve({ nome: "Metal XYZ" })\n      else reject(new Error("Nao encontrado"))\n    }, 500)\n  })\n}\n\nasync function main() {\n  try {\n    let c = await buscarCliente(1)\n    console.log(`Cliente: ${c.nome}`)\n  } catch (e) {\n    console.log(e.message)\n  }\n}\nmain()',
              validation: "structure",
              checks: { codeHas: ["Promise", "async", "await", "try", "catch", "console.log"], minOutput: 1 }
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
          duration: "30 min",
          module: "Express Basico",
          conceptual: true,
          sections: [
            {
              type: "explanation",
              title: "O que e Express?",
              content: "Express e a ferramenta que o MATH usa no <strong>backend</strong>. Ele cria um SERVIDOR que recebe pedidos (requisicoes) e responde com dados.<br><br><strong>Este modulo e conceitual</strong> - o codigo precisa ser rodado no terminal com <code>node</code>, nao funciona no navegador."
            },
            {
              type: "code-example",
              title: "Estrutura basica de um servidor",
              code: '// Como funciona o backend do MATH:\n\nconst express = require("express")\nconst app = express()\napp.use(express.json())\n\n// GET = buscar dados\napp.get("/tecnicos", (req, res) => {\n  let tecnicos = [\n    { id: 1, nome: "Carlos" },\n    { id: 2, nome: "Ana" }\n  ]\n  res.json({ sucesso: true, dados: tecnicos })\n})\n\n// POST = criar dados\napp.post("/os", (req, res) => {\n  let { cliente, valor } = req.body\n  if (!cliente) {\n    return res.status(400).json({ erro: "Cliente obrigatorio" })\n  }\n  res.status(201).json({ mensagem: "OS criada!" })\n})\n\napp.listen(3000)',
              runnable: false
            },
            {
              type: "explanation",
              title: "Entendendo as rotas",
              content: "<strong>GET</strong> = buscar dados (listar tecnicos, ver OS)<br><strong>POST</strong> = criar dados (nova OS, novo cliente)<br><strong>PUT</strong> = atualizar dados (mudar status da OS)<br><strong>DELETE</strong> = deletar dados<br><br><strong>req</strong> = requisicao (o que o usuario mandou)<br><strong>res</strong> = resposta (o que o servidor devolve)<br><strong>status(200)</strong> = sucesso | <strong>status(404)</strong> = nao encontrou | <strong>status(500)</strong> = erro"
            },
            {
              type: "code-example",
              title: "Rota com parametros e validacao",
              code: '// Buscar tecnico por ID\napp.get("/tecnicos/:id", (req, res) => {\n  let id = Number(req.params.id)  // pega o :id da URL\n  let tecnico = tecnicos.find(t => t.id === id)\n  \n  if (!tecnico) {\n    return res.status(404).json({ erro: "Nao encontrado" })\n  }\n  \n  res.json({ sucesso: true, dados: tecnico })\n})\n\n// Atualizar status da OS\napp.put("/os/:id/status", (req, res) => {\n  let { status } = req.body  // pega do corpo\n  let validos = ["aberta", "finalizada", "cancelada"]\n  \n  if (!validos.includes(status)) {\n    return res.status(400).json({ erro: "Status invalido" })\n  }\n  \n  // atualiza no banco...\n  res.json({ mensagem: "Atualizado!" })\n})',
              runnable: false
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
              content: "Ate agora guardamos dados em arrays. Mas quando o servidor desliga, <strong>tudo some!</strong> Banco de dados = guardar dados <strong>permanente</strong>.<br><br>O MATH usa <strong>PostgreSQL</strong>. A logica e a mesma de qualquer banco SQL."
            },
            {
              type: "code-example",
              title: "Criando tabelas e inserindo dados",
              code: '// SQL = linguagem do banco de dados\n\n// Criar tabela:\n// CREATE TABLE tecnicos (\n//   id SERIAL PRIMARY KEY,\n//   nome TEXT NOT NULL,\n//   especialidade TEXT,\n//   ativo BOOLEAN DEFAULT true\n// )\n\n// Inserir dados:\n// INSERT INTO tecnicos (nome, especialidade)\n// VALUES (\'Carlos\', \'Eletrica\')\n\n// Buscar dados:\n// SELECT * FROM tecnicos WHERE ativo = true\n\n// No Node.js com PostgreSQL:\nasync function listarTecnicos() {\n  let resultado = await db.query(\n    "SELECT * FROM tecnicos WHERE ativo = true"\n  )\n  return resultado.rows\n}',
              runnable: false
            },
            {
              type: "explanation",
              title: "Comandos SQL essenciais",
              content: "<strong>SELECT</strong> = buscar dados<br><strong>INSERT INTO</strong> = inserir dados<br><strong>UPDATE</strong> = atualizar dados<br><strong>DELETE FROM</strong> = deletar dados<br><strong>WHERE</strong> = filtrar (condicao)<br><strong>JOIN</strong> = juntar tabelas relacionadas<br><strong>COUNT, SUM, AVG</strong> = contar, somar, media"
            },
            {
              type: "code-example",
              title: "Queries do MATH",
              code: '// Buscar OS abertas de um tecnico:\n// SELECT * FROM ordens_servico\n// WHERE status = \'aberta\' AND tecnico_id = 1\n\n// Dashboard - estatisticas:\n// SELECT\n//   COUNT(*) as total,\n//   SUM(CASE WHEN status = \'aberta\' THEN 1 ELSE 0 END) as abertas,\n//   SUM(CASE WHEN status = \'finalizada\' THEN 1 ELSE 0 END) as finalizadas,\n//   SUM(valor) as valor_total\n// FROM ordens_servico\n\n// OS com nome do tecnico (JOIN):\n// SELECT os.numero, os.cliente, t.nome as tecnico\n// FROM ordens_servico os\n// LEFT JOIN tecnicos t ON os.tecnico_id = t.id',
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
              content: "Parabens! Voce aprendeu tudo que precisa pra entender o sistema MATH. Agora o desafio: <strong>criar um mini sistema de OS sozinho.</strong><br><br>Volte nas aulas 12 e 13 (Express e Banco de Dados) e use o que aprendeu pra construir."
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
