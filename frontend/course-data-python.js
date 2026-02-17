// ============================================
// CURSO DE PYTHON - HELSEN SERVICE
// Refeito do zero com metodologia correta:
// Ensina conceito A → exercício A
// NUNCA cobra algo antes de ensinar!
// ============================================

const COURSE_DATA_PYTHON = {
  title: "Aprender Python - Do Zero ao Sistema MATH",
  modules: [

    // ========== MÓDULO 1: PRIMEIROS PASSOS ==========
    {
      id: 1,
      title: "Primeiros Passos",
      lessons: [
        // ---------- LIÇÃO 1-1: BOAS-VINDAS AO PYTHON ----------
        {
          id: "1-1",
          title: "Boas-vindas ao Python",
          duration: "20 min",
          module: "Primeiros Passos",
          sections: [
            {
              type: "explanation",
              title: "O que é print()?",
              content: "Em Python, pra <strong>mostrar algo na tela</strong>, a gente usa <code>print()</code>. É tipo o <code>console.log()</code> do JavaScript, só que mais simples.<br><br>Pense assim: <code>print()</code> é como uma <strong>impressora</strong>. Você coloca algo dentro dos parênteses e ele <strong>imprime na tela</strong>.<br><br><div class='highlight-box tip'><strong>Dica:</strong> Texto sempre vai entre aspas: <code>print(\"Olá mundo\")</code></div>"
            },
            {
              type: "code-example",
              title: "Usando print()",
              code: '# Mostrando texto na tela:\nprint("Olá, Helsen Service!")\nprint("Bem-vindo ao Python!")\n\n# Mostrando números (sem aspas!):\nprint(2024)\nprint(3.14)',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1A",
              instructions: "Use <code>print()</code> para mostrar a mensagem: <code>Helsen Service</code><br><br><div class='highlight-box tip'><strong>Lembre:</strong> Texto vai entre aspas dentro do print()</div>",
              starterCode: '# Mostre "Helsen Service" na tela:\n',
              solution: 'print("Helsen Service")',
              validation: "structure",
              checks: {
                codeHas: ["print"],
                outputHas: ["Helsen Service"]
              }
            },
            {
              type: "explanation",
              title: "Comentários com #",
              content: "Linhas que começam com <code>#</code> são <strong>comentários</strong>. O computador <strong>ignora</strong> essas linhas.<br><br>Serve pra você escrever notas, explicações, lembretes no código. É como escrever um bilhete pra você mesmo (ou pra quem for ler seu código depois)."
            },
            {
              type: "code-example",
              title: "Comentários na prática",
              code: '# Isso é um comentário - Python ignora essa linha\nprint("Essa linha aparece")  # Comentário no final da linha\n\n# print("Essa linha NÃO aparece porque está comentada")',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1B",
              instructions: "Escreva um comentário explicando o que o código faz, depois use <code>print()</code> para mostrar: <code>Sistema MATH</code>",
              starterCode: '# Escreva seu comentário aqui:\n\n# Agora mostre "Sistema MATH":\n',
              solution: '# Mostrando o nome do sistema\nprint("Sistema MATH")',
              validation: "structure",
              checks: {
                codeHas: ["#", "print"],
                outputHas: ["Sistema MATH"]
              }
            },
            {
              type: "exercise",
              title: "Exercício 1C",
              instructions: "Use <strong>dois</strong> <code>print()</code> para mostrar:<br><code>Helsen Service</code><br><code>Manutencao Industrial</code><br><br><div class='highlight-box tip'><strong>Dica:</strong> Cada print() mostra uma linha</div>",
              starterCode: '# Mostre as duas mensagens (uma por linha):\n',
              solution: 'print("Helsen Service")\nprint("Manutencao Industrial")',
              validation: "structure",
              checks: {
                codeHas: ["print"],
                outputHas: ["Helsen Service", "Manutencao Industrial"]
              }
            }
          ],
          quiz: [
            {
              question: "Qual comando mostra algo na tela em Python?",
              options: ["print()", "console.log()", "echo()", "show()"],
              correct: 0,
              explanation: "Em Python usamos print() para mostrar coisas na tela. console.log() é JavaScript!"
            },
            {
              question: "Como escrever um comentário em Python?",
              options: ["# comentário", "// comentário", "/* comentário */", "-- comentário"],
              correct: 0,
              explanation: "Em Python, comentários começam com # (cerquilha). // é JavaScript e /* */ é CSS/Java."
            },
            {
              question: "O que esse código mostra na tela?",
              code: '# print("Olá")\nprint("Mundo")',
              options: ["Mundo", "Olá\\nMundo", "Olá", "Nada"],
              correct: 0,
              explanation: "A primeira linha está comentada (tem # no início), então Python ignora ela. Só a segunda linha roda."
            },
            {
              question: "Qual desses está correto?",
              options: ['print("Olá")', 'print(Olá)', 'Print("Olá")', 'print "Olá"'],
              correct: 0,
              explanation: "Texto precisa de aspas, print é minúsculo, e precisa de parênteses. Só a primeira opção está certa!"
            }
          ]
        },

        // ---------- LIÇÃO 1-2: VARIÁVEIS ----------
        {
          id: "1-2",
          title: "Variáveis",
          duration: "30 min",
          module: "Primeiros Passos",
          sections: [
            {
              type: "explanation",
              title: "O que é uma variável?",
              content: "Variável é uma <strong>caixa com nome</strong> que guarda um valor. Você dá um nome pra caixa e coloca algo dentro.<br><br>Pense assim: na Helsen, cada técnico tem um <strong>crachá com nome</strong>. A variável é o crachá - ela identifica quem (ou o quê) está ali.<br><br>Em Python, criar variável é <strong>super simples</strong>: só escreve o nome, o sinal de <code>=</code> e o valor!"
            },
            {
              type: "code-example",
              title: "Criando variáveis de texto",
              code: '# Variável de texto (string) - sempre entre aspas\ntecnico = "Leon Mendes"\ncliente = "Minerva Usinagem"\n\nprint(tecnico)\nprint(cliente)',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1A",
              instructions: "Crie uma variável chamada <code>tecnico</code> com o valor <code>\"Valdinei Pereira\"</code> e mostre ela com <code>print()</code>.<br><br><div class='highlight-box tip'><strong>Lembre:</strong> nome = \"valor\" e depois print(nome)</div>",
              starterCode: '# Crie a variável tecnico:\n\n\n# Mostre o valor:\n',
              solution: 'tecnico = "Valdinei Pereira"\nprint(tecnico)',
              validation: "structure",
              checks: {
                codeHas: ["tecnico", "print"],
                outputHas: ["Valdinei Pereira"]
              }
            },
            {
              type: "explanation",
              title: "Variáveis numéricas",
              content: "Variáveis também guardam <strong>números</strong>. A diferença é que números <strong>NÃO usam aspas</strong>.<br><br><strong>Inteiro (int):</strong> <code>idade = 30</code> → número sem ponto<br><strong>Decimal (float):</strong> <code>preco = 175.50</code> → número com ponto<br><br><div class='highlight-box tip'><strong>Atenção:</strong> <code>\"30\"</code> é texto (string). <code>30</code> é número (int). São coisas diferentes!</div>"
            },
            {
              type: "code-example",
              title: "Variáveis com números",
              code: '# Inteiro (int) - número sem ponto\nnumero_os = 6650\nhoras = 8\n\n# Decimal (float) - número com ponto\nvalor_hora = 175.50\nnota_avaliacao = 9.5\n\nprint(numero_os)\nprint(valor_hora)',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1B",
              instructions: "Crie uma variável <code>numero_os</code> com valor <code>6650</code> (número, sem aspas!) e mostre com <code>print()</code>.",
              starterCode: '# Crie a variável numero_os (é número!):\n\n\n# Mostre o valor:\n',
              solution: 'numero_os = 6650\nprint(numero_os)',
              validation: "structure",
              checks: {
                codeHas: ["numero_os", "6650", "print"],
                outputHas: ["6650"]
              }
            },
            {
              type: "exercise",
              title: "Exercício 1C",
              instructions: "Crie <strong>3 variáveis</strong>:<br>- <code>tecnico</code> com valor <code>\"Dayvison Jepson\"</code><br>- <code>numero_os</code> com valor <code>6632</code><br>- <code>valor</code> com valor <code>890.00</code><br><br>Mostre as 3 com <code>print()</code>.",
              starterCode: '# Crie as 3 variáveis:\n\n\n\n\n# Mostre as 3:\n',
              solution: 'tecnico = "Dayvison Jepson"\nnumero_os = 6632\nvalor = 890.00\nprint(tecnico)\nprint(numero_os)\nprint(valor)',
              validation: "structure",
              checks: {
                codeHas: ["tecnico", "numero_os", "valor", "print"],
                outputHas: ["Dayvison Jepson", "6632", "890"]
              }
            }
          ],
          quiz: [
            {
              question: "Como criar uma variável em Python?",
              options: ['nome = "Leon"', 'let nome = "Leon"', 'var nome = "Leon"', 'const nome = "Leon"'],
              correct: 0,
              explanation: "Em Python, basta escrever o nome, = e o valor. Sem let, var ou const!"
            },
            {
              question: "Qual a diferença entre 42 e \"42\"?",
              options: ["42 é número, \"42\" é texto", "São a mesma coisa", "42 é texto, \"42\" é número", "Os dois são números"],
              correct: 0,
              explanation: "Sem aspas = número. Com aspas = texto (string). São tipos diferentes!"
            },
            {
              question: "O que esse código mostra?",
              code: 'x = 10\nx = 20\nprint(x)',
              options: ["20", "10", "10 e 20", "Erro"],
              correct: 0,
              explanation: "A variável x primeiro recebeu 10, depois foi atualizada pra 20. print(x) mostra o valor atual: 20."
            },
            {
              question: "Qual desses é um número decimal (float)?",
              options: ["175.50", '"175.50"', "175", "True"],
              correct: 0,
              explanation: "175.50 tem ponto decimal e sem aspas = float. \"175.50\" com aspas seria texto."
            }
          ]
        },

        // ---------- LIÇÃO 1-3: OPERAÇÕES MATEMÁTICAS ----------
        {
          id: "1-3",
          title: "Operações Matemáticas",
          duration: "25 min",
          module: "Primeiros Passos",
          sections: [
            {
              type: "explanation",
              title: "Fazendo contas em Python",
              content: "Python é uma <strong>calculadora</strong> poderosa. Os operadores são simples:<br><br><code>+</code> → soma<br><code>-</code> → subtração<br><code>*</code> → multiplicação<br><code>/</code> → divisão<br><br>Funciona igualzinho matemática do dia a dia!"
            },
            {
              type: "code-example",
              title: "Operadores básicos",
              code: '# Soma\nprint(10 + 5)    # 15\n\n# Subtração\nprint(10 - 3)    # 7\n\n# Multiplicação\nprint(8 * 175)   # 1400\n\n# Divisão\nprint(1400 / 8)  # 175.0',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1A",
              instructions: "O técnico Leon trabalhou <code>8</code> horas e cobra <code>175</code> por hora. Crie as variáveis <code>horas</code> e <code>valor_hora</code>, calcule o <code>total</code> multiplicando os dois, e mostre o total.<br><br><div class='highlight-box tip'><strong>Dica:</strong> total = horas * valor_hora</div>",
              starterCode: '# Crie as variáveis:\nhoras = \nvalor_hora = \n\n# Calcule o total:\ntotal = \n\n# Mostre o resultado:\nprint(total)',
              solution: 'horas = 8\nvalor_hora = 175\ntotal = horas * valor_hora\nprint(total)',
              validation: "structure",
              checks: {
                codeHas: ["horas", "valor_hora", "total", "*", "print"],
                outputHas: ["1400"]
              }
            },
            {
              type: "exercise",
              title: "Exercício 1B",
              instructions: "Calcule quanto 3 técnicos recebem juntos:<br>- Leon: <code>1400</code><br>- Valdinei: <code>890</code><br>- Dayvison: <code>700</code><br><br>Crie as variáveis e some tudo em <code>total_equipe</code>.",
              starterCode: '# Valores de cada técnico:\nleon = \nvaldinei = \ndayvison = \n\n# Some tudo:\ntotal_equipe = \n\n# Mostre:\nprint(total_equipe)',
              solution: 'leon = 1400\nvaldinei = 890\ndayvison = 700\ntotal_equipe = leon + valdinei + dayvison\nprint(total_equipe)',
              validation: "structure",
              checks: {
                codeHas: ["leon", "valdinei", "dayvison", "total_equipe", "+", "print"],
                outputHas: ["2990"]
              }
            },
            {
              type: "explanation",
              title: "Ordem das operações e parênteses",
              content: "Python segue a mesma ordem da matemática:<br><br><strong>1º</strong> Parênteses <code>()</code><br><strong>2º</strong> Multiplicação e Divisão <code>* /</code><br><strong>3º</strong> Soma e Subtração <code>+ -</code><br><br>Na dúvida, use <strong>parênteses</strong> pra deixar claro o que calcular primeiro!"
            },
            {
              type: "code-example",
              title: "Parênteses mudam tudo",
              code: '# SEM parênteses: multiplica primeiro\nresultado1 = 10 + 5 * 2\nprint(resultado1)  # 20 (5*2=10, 10+10=20)\n\n# COM parênteses: soma primeiro\nresultado2 = (10 + 5) * 2\nprint(resultado2)  # 30 (10+5=15, 15*2=30)',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1C",
              instructions: "Uma OS teve material de <code>200</code> reais e mão de obra de <code>350</code> reais. O cliente tem <code>10</code>% de desconto sobre o total. Calcule o <code>total_final</code>.<br><br><div class='highlight-box tip'><strong>Dica:</strong> Primeiro some material + mão de obra, depois multiplique por 0.90 (que é 100% - 10%)</div>",
              starterCode: '# Valores:\nmaterial = 200\nmao_de_obra = 350\n\n# Calcule com desconto de 10%:\ntotal_final = \n\nprint(total_final)',
              solution: 'material = 200\nmao_de_obra = 350\ntotal_final = (material + mao_de_obra) * 0.90\nprint(total_final)',
              validation: "structure",
              checks: {
                codeHas: ["material", "mao_de_obra", "total_final", "print"],
                outputHas: ["495"]
              }
            }
          ],
          quiz: [
            {
              question: "O que 10 + 5 * 2 resulta em Python?",
              options: ["20", "30", "25", "Erro"],
              correct: 0,
              explanation: "Multiplicação tem prioridade! 5*2=10, depois 10+10=20. Pra dar 30, seria (10+5)*2."
            },
            {
              question: "Qual operador faz multiplicação?",
              options: ["*", "x", "×", "X"],
              correct: 0,
              explanation: "Em Python (e na maioria das linguagens), multiplicação é o asterisco *."
            },
            {
              question: "O que esse código mostra?",
              code: 'a = 100\nb = a / 4\nprint(b)',
              options: ["25.0", "25", "Erro", "a / 4"],
              correct: 0,
              explanation: "Divisão em Python sempre retorna float (decimal). 100/4 = 25.0"
            }
          ]
        }
      ]
    },

    // ========== MÓDULO 2: TEXTO E STRINGS ==========
    {
      id: 2,
      title: "Texto e Strings",
      lessons: [
        // ---------- LIÇÃO 2-1: STRINGS ----------
        {
          id: "2-1",
          title: "Strings (Texto)",
          duration: "25 min",
          module: "Texto e Strings",
          sections: [
            {
              type: "explanation",
              title: "O que são Strings?",
              content: "String é o nome que a programação dá pra <strong>texto</strong>. Qualquer coisa entre aspas é uma string.<br><br>Pode usar aspas duplas <code>\"texto\"</code> ou simples <code>'texto'</code> — tanto faz em Python!<br><br>Exemplos: <code>\"Leon Mendes\"</code>, <code>'Minerva Usinagem'</code>, <code>\"6650\"</code> (sim, número entre aspas é texto!)"
            },
            {
              type: "code-example",
              title: "Criando strings",
              code: '# Aspas duplas ou simples, tanto faz:\nnome = "Leon Mendes"\nempresa = \'Helsen Service\'\n\nprint(nome)\nprint(empresa)',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1A",
              instructions: "Crie uma variável <code>cliente</code> com valor <code>\"Minerva Usinagem\"</code> e mostre com <code>print()</code>.",
              starterCode: '# Crie a variável:\n\n\n# Mostre:\n',
              solution: 'cliente = "Minerva Usinagem"\nprint(cliente)',
              validation: "structure",
              checks: {
                codeHas: ["cliente", "print"],
                outputHas: ["Minerva Usinagem"]
              }
            },
            {
              type: "explanation",
              title: "Juntando strings (concatenação)",
              content: "Você pode <strong>juntar</strong> textos usando o <code>+</code>. Isso se chama <strong>concatenação</strong>.<br><br>É como juntar peças de um quebra-cabeça: <code>\"Helsen\" + \" \" + \"Service\"</code> vira <code>\"Helsen Service\"</code>.<br><br><div class='highlight-box tip'><strong>Atenção:</strong> O + com strings JUNTA texto. Com números SOMA. São coisas diferentes!</div>"
            },
            {
              type: "code-example",
              title: "Concatenando strings",
              code: 'primeiro = "Leon"\nsobrenome = "Mendes"\n\n# Juntando com +\nnome_completo = primeiro + " " + sobrenome\nprint(nome_completo)  # Leon Mendes\n\n# Sem o espaço fica grudado:\nprint(primeiro + sobrenome)  # LeonMendes',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1B",
              instructions: "Crie <code>empresa</code> com <code>\"Helsen\"</code> e <code>tipo</code> com <code>\"Service\"</code>. Junte as duas com um espaço no meio e mostre o resultado.<br><br><div class='highlight-box tip'><strong>Dica:</strong> Use + \" \" + pra colocar espaço entre os textos</div>",
              starterCode: 'empresa = "Helsen"\ntipo = "Service"\n\n# Junte as duas com espaço e mostre:\n',
              solution: 'empresa = "Helsen"\ntipo = "Service"\nprint(empresa + " " + tipo)',
              validation: "structure",
              checks: {
                codeHas: ["empresa", "tipo", "+", "print"],
                outputHas: ["Helsen Service"]
              }
            },
            {
              type: "explanation",
              title: "Misturando texto com número: str()",
              content: "Python <strong>NÃO deixa</strong> juntar texto com número usando <code>+</code>. Dá erro!<br><br><code>\"OS \" + 6650</code> → <strong>ERRO!</strong><br><br>Pra funcionar, transforme o número em texto com <code>str()</code>:<br><code>\"OS \" + str(6650)</code> → <code>\"OS 6650\"</code><br><br><div class='highlight-box tip'><strong>str()</strong> transforma qualquer coisa em texto (string)</div>"
            },
            {
              type: "code-example",
              title: "Usando str() para converter",
              code: 'numero_os = 6650\n\n# ERRADO - dá erro:\n# print("OS número " + numero_os)\n\n# CERTO - converte com str():\nprint("OS número " + str(numero_os))  # OS número 6650',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1C",
              instructions: "Crie <code>os_numero</code> com valor <code>6620</code> (número!). Mostre a mensagem: <code>Ordem de Servico: 6620</code> usando concatenação com <code>str()</code>.",
              starterCode: 'os_numero = 6620\n\n# Mostre "Ordem de Servico: 6620" usando + e str():\n',
              solution: 'os_numero = 6620\nprint("Ordem de Servico: " + str(os_numero))',
              validation: "structure",
              checks: {
                codeHas: ["os_numero", "str(", "print", "+"],
                outputHas: ["Ordem de Servico: 6620"]
              }
            }
          ],
          quiz: [
            {
              question: "O que é uma string?",
              options: ["Texto entre aspas", "Um número", "Uma lista", "Um comando"],
              correct: 0,
              explanation: "String é qualquer texto entre aspas em programação."
            },
            {
              question: 'O que "10" + "5" resulta em Python?',
              options: ['"105"', "15", "Erro", '"10 5"'],
              correct: 0,
              explanation: "Com aspas são strings! O + junta texto: \"10\" + \"5\" = \"105\". Pra somar, tire as aspas."
            },
            {
              question: 'O que acontece com: print("OS " + 6650)?',
              options: ["Erro - não pode juntar texto com número", "OS 6650", "OS6650", "6650"],
              correct: 0,
              explanation: "Python não deixa juntar string com número usando +. Precisa usar str(6650) primeiro."
            },
            {
              question: "Qual a forma correta de juntar texto com número?",
              options: ['"OS " + str(6650)', '"OS " + 6650', '"OS " , 6650', '"OS " & 6650'],
              correct: 0,
              explanation: "Use str() para converter o número em texto antes de juntar com +."
            }
          ]
        },

        // ---------- LIÇÃO 2-2: F-STRINGS ----------
        {
          id: "2-2",
          title: "F-Strings (Formatação)",
          duration: "25 min",
          module: "Texto e Strings",
          sections: [
            {
              type: "explanation",
              title: "O que são F-Strings?",
              content: "F-String é o jeito <strong>mais fácil</strong> de misturar texto com variáveis em Python. Muito mais simples que ficar usando <code>+</code> e <code>str()</code>!<br><br>Como funciona:<br><strong>1.</strong> Coloque a letra <code>f</code> antes das aspas<br><strong>2.</strong> Coloque as variáveis dentro de <code>{chaves}</code><br><br>Exemplo: <code>f\"Técnico: {nome}\"</code><br><br>Python substitui automaticamente <code>{nome}</code> pelo valor da variável!"
            },
            {
              type: "code-example",
              title: "F-String na prática",
              code: 'tecnico = "Leon Mendes"\nnumero_os = 6650\n\n# JEITO ANTIGO (chato):\nprint("Técnico " + tecnico + " - OS " + str(numero_os))\n\n# JEITO NOVO com f-string (fácil!):\nprint(f"Técnico {tecnico} - OS {numero_os}")\n\n# Os dois mostram a mesma coisa!\n# Mas f-string é MUITO mais fácil de ler',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1A",
              instructions: "Crie <code>cliente</code> com <code>\"Minerva Usinagem\"</code>. Use uma <strong>f-string</strong> para mostrar: <code>Cliente: Minerva Usinagem</code><br><br><div class='highlight-box tip'><strong>Formato:</strong> <code>print(f\"Cliente: {cliente}\")</code></div>",
              starterCode: 'cliente = "Minerva Usinagem"\n\n# Use f-string para mostrar "Cliente: Minerva Usinagem":\n',
              solution: 'cliente = "Minerva Usinagem"\nprint(f"Cliente: {cliente}")',
              validation: "structure",
              checks: {
                codeHas: ["cliente", "print", "f\"", "{"],
                outputHas: ["Cliente: Minerva Usinagem"]
              }
            },
            {
              type: "explanation",
              title: "F-Strings com várias variáveis",
              content: "Você pode colocar <strong>quantas variáveis quiser</strong> dentro de uma f-string. Cada uma vai entre <code>{chaves}</code>.<br><br>Exemplo: <code>f\"OS {numero} - Cliente: {cliente} - R${valor}\"</code><br><br>Isso é muito útil pra gerar mensagens completas, relatórios, etc."
            },
            {
              type: "code-example",
              title: "Múltiplas variáveis na f-string",
              code: 'tecnico = "Valdinei Pereira"\nos_numero = 6632\ncliente = "Usinagem Castro"\n\nprint(f"OS {os_numero} - {cliente}")\nprint(f"Técnico responsável: {tecnico}")',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1B",
              instructions: "Crie 3 variáveis: <code>tecnico</code> = <code>\"Leon Mendes\"</code>, <code>os_numero</code> = <code>6650</code>, <code>cliente</code> = <code>\"Minerva Usinagem\"</code>.<br>Mostre com f-string: <code>OS 6650 - Minerva Usinagem - Tecnico: Leon Mendes</code>",
              starterCode: '# Crie as variáveis:\ntecnico = "Leon Mendes"\nos_numero = 6650\ncliente = "Minerva Usinagem"\n\n# Mostre tudo com UMA f-string:\n',
              solution: 'tecnico = "Leon Mendes"\nos_numero = 6650\ncliente = "Minerva Usinagem"\nprint(f"OS {os_numero} - {cliente} - Tecnico: {tecnico}")',
              validation: "structure",
              checks: {
                codeHas: ["f\"", "{", "print"],
                outputHas: ["OS 6650", "Minerva Usinagem", "Tecnico: Leon Mendes"]
              }
            },
            {
              type: "explanation",
              title: "Cálculos dentro da f-string",
              content: "Dentro das <code>{chaves}</code> você também pode fazer <strong>contas</strong>!<br><br>Exemplo: <code>f\"Total: {preco * quantidade}\"</code><br><br>Python calcula primeiro e depois coloca o resultado no texto."
            },
            {
              type: "code-example",
              title: "Cálculos em f-strings",
              code: 'horas = 8\nvalor_hora = 175\n\n# Cálculo direto na f-string:\nprint(f"Total: R${horas * valor_hora}")\n\n# Funciona com qualquer operação:\nprint(f"Metade: R${horas * valor_hora / 2}")',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1C",
              instructions: "O técnico trabalhou <code>6</code> horas a <code>175</code> por hora. Mostre com f-string: <code>Total da OS: R$1050</code><br><br><div class='highlight-box tip'><strong>Dica:</strong> Faça a conta dentro das chaves: <code>{horas * valor_hora}</code></div>",
              starterCode: 'horas = 6\nvalor_hora = 175\n\n# Mostre "Total da OS: R$1050" com f-string:\n',
              solution: 'horas = 6\nvalor_hora = 175\nprint(f"Total da OS: R${horas * valor_hora}")',
              validation: "structure",
              checks: {
                codeHas: ["f\"", "{", "*", "print"],
                outputHas: ["Total da OS: R$1050"]
              }
            }
          ],
          quiz: [
            {
              question: "O que o f faz antes das aspas em f\"texto\"?",
              options: ["Permite colocar variáveis com {}", "Formata o texto em negrito", "Transforma em número", "Nada"],
              correct: 0,
              explanation: "O f ativa f-strings, que permitem colocar variáveis dentro do texto usando {chaves}."
            },
            {
              question: "O que esse código mostra?",
              code: 'x = 10\ny = 3\nprint(f"Resultado: {x + y}")',
              options: ["Resultado: 13", "Resultado: x + y", "Resultado: {13}", "Erro"],
              correct: 0,
              explanation: "A f-string calcula x + y = 13 e coloca o resultado no texto."
            },
            {
              question: "Qual é a forma correta de usar f-string?",
              options: ['f"Nome: {nome}"', '"Nome: {nome}"', 'f"Nome: nome"', '"f Nome: {nome}"'],
              correct: 0,
              explanation: "O f vem colado antes da aspas, e a variável vai dentro de {chaves}."
            },
            {
              question: "Qual vantagem da f-string sobre concatenação (+)?",
              options: ["É mais fácil de ler e não precisa de str()", "É mais rápida", "Só funciona com números", "Não tem vantagem"],
              correct: 0,
              explanation: "F-strings são mais legíveis e convertem números automaticamente, sem precisar de str()."
            }
          ]
        }
      ]
    },

    // ========== MÓDULO 3: CONDICIONAIS ==========
    {
      id: 3,
      title: "Condicionais",
      lessons: [
        // ---------- LIÇÃO 3-1: IF E ELSE ----------
        {
          id: "3-1",
          title: "If e Else",
          duration: "30 min",
          module: "Condicionais",
          sections: [
            {
              type: "explanation",
              title: "Tomando decisões no código",
              content: "Até agora seu código roda <strong>tudo</strong>, linha por linha. Mas e quando você quer que algo aconteça <strong>SÓ SE</strong> uma condição for verdadeira?<br><br>É pra isso que serve o <code>if</code> (que significa <strong>\"se\"</strong>).<br><br>Pense assim: na Helsen, <strong>SE</strong> o valor da OS passar de R$1000, precisa de aprovação do gerente. <strong>SE NÃO</strong>, pode liberar direto. Isso é uma <strong>condição</strong>!"
            },
            {
              type: "explanation",
              title: "Operadores de comparação",
              content: "Pra criar condições, usamos <strong>operadores de comparação</strong>. Eles comparam dois valores e retornam <code>True</code> (verdadeiro) ou <code>False</code> (falso):<br><br><code>==</code> → é igual a?<br><code>!=</code> → é diferente de?<br><code>></code> → é maior que?<br><code><</code> → é menor que?<br><code>>=</code> → é maior ou igual?<br><code><=</code> → é menor ou igual?<br><br><div class='highlight-box tip'><strong>CUIDADO:</strong> <code>=</code> é atribuição (guardar valor). <code>==</code> é comparação (verificar se é igual). São coisas diferentes!</div>"
            },
            {
              type: "code-example",
              title: "Comparações na prática",
              code: 'valor = 1200\n\nprint(valor > 1000)    # True (1200 é maior que 1000)\nprint(valor == 1000)   # False (1200 não é igual a 1000)\nprint(valor != 500)    # True (1200 é diferente de 500)\nprint(valor <= 1200)   # True (1200 é menor OU IGUAL a 1200)',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1A",
              instructions: "Crie <code>valor_os</code> com <code>1500</code>. Use <code>print()</code> para mostrar se <code>valor_os</code> é maior que <code>1000</code>.<br><br><div class='highlight-box tip'><strong>Dica:</strong> <code>print(valor_os > 1000)</code> vai mostrar True ou False</div>",
              starterCode: 'valor_os = 1500\n\n# Mostre se valor_os é maior que 1000:\n',
              solution: 'valor_os = 1500\nprint(valor_os > 1000)',
              validation: "structure",
              checks: {
                codeHas: ["valor_os", "1000", "print", ">"],
                outputHas: ["True"]
              }
            },
            {
              type: "explanation",
              title: "Estrutura do IF",
              content: "Agora vamos usar as comparações pra <strong>tomar decisões</strong>:<br><br><pre><code>if condição:\n    # código que roda SE for verdadeiro</code></pre><br><strong>Regras importantes:</strong><br>1. Depois do <code>if</code>, escreva a condição<br>2. Coloque <code>:</code> (dois pontos) no final da linha<br>3. O código dentro do if precisa ter <strong>4 espaços</strong> na frente (indentação)<br><br><div class='highlight-box tip'><strong>Indentação</strong> = os espaços no começo da linha. Em Python, isso é OBRIGATÓRIO pra dizer o que está dentro do if!</div>"
            },
            {
              type: "code-example",
              title: "If na prática",
              code: 'valor_os = 1500\n\nif valor_os > 1000:\n    print("OS de alto valor!")\n    print("Precisa aprovação do gerente")\n\nprint("Fim")  # Essa roda SEMPRE (não tem espaço)',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1B",
              instructions: "Crie <code>horas</code> com <code>10</code>. <strong>SE</strong> horas for maior que <code>8</code>, mostre: <code>Hora extra!</code><br><br><div class='highlight-box tip'><strong>Lembre:</strong> Depois do if tem <code>:</code> e o print() dentro tem 4 espaços na frente</div>",
              starterCode: 'horas = 10\n\n# SE horas > 8, mostre "Hora extra!":\n',
              solution: 'horas = 10\n\nif horas > 8:\n    print("Hora extra!")',
              validation: "structure",
              checks: {
                codeHas: ["horas", "if", ">", "8", "print"],
                outputHas: ["Hora extra!"]
              }
            },
            {
              type: "explanation",
              title: "Else (senão)",
              content: "E quando a condição é <strong>falsa</strong>? Usamos <code>else</code> (que significa <strong>\"senão\"</strong>):<br><br><pre><code>if condição:\n    # roda se VERDADEIRO\nelse:\n    # roda se FALSO</code></pre><br>Pense assim: <strong>SE</strong> a OS tiver valor alto, manda pro gerente. <strong>SENÃO</strong>, libera direto."
            },
            {
              type: "code-example",
              title: "If / Else na prática",
              code: 'valor_os = 500\n\nif valor_os > 1000:\n    print("Precisa aprovação")\nelse:\n    print("Liberado!")\n\n# Como valor_os é 500 (menor que 1000),\n# vai mostrar "Liberado!"',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1C",
              instructions: "Crie <code>nota</code> com <code>7</code>. <strong>SE</strong> nota for maior ou igual a <code>6</code>, mostre <code>Aprovado!</code>. <strong>SENÃO</strong>, mostre <code>Reprovado!</code>.<br><br><div class='highlight-box tip'><strong>Maior ou igual</strong> é o operador <code>>=</code></div>",
              starterCode: 'nota = 7\n\n# Se nota >= 6: Aprovado!, senão: Reprovado!\n',
              solution: 'nota = 7\n\nif nota >= 6:\n    print("Aprovado!")\nelse:\n    print("Reprovado!")',
              validation: "structure",
              checks: {
                codeHas: ["nota", "if", ">=", "else", "print"],
                outputHas: ["Aprovado!"]
              }
            },
            {
              type: "exercise",
              title: "Exercício 1D",
              instructions: "Crie <code>status_os</code> com <code>\"aberta\"</code>. SE status for igual a <code>\"aberta\"</code>, mostre <code>OS em andamento</code>. SENÃO, mostre <code>OS finalizada</code>.<br><br><div class='highlight-box tip'><strong>Comparar texto:</strong> use <code>==</code> (dois iguais)</div>",
              starterCode: 'status_os = "aberta"\n\n# Compare o status e mostre a mensagem correta:\n',
              solution: 'status_os = "aberta"\n\nif status_os == "aberta":\n    print("OS em andamento")\nelse:\n    print("OS finalizada")',
              validation: "structure",
              checks: {
                codeHas: ["status_os", "if", "==", "else", "print"],
                outputHas: ["OS em andamento"]
              }
            }
          ],
          quiz: [
            {
              question: "Qual a diferença entre = e ==?",
              options: ["= atribui valor, == compara valores", "São a mesma coisa", "== atribui, = compara", "= é pra texto, == pra número"],
              correct: 0,
              explanation: "Um = guarda valor na variável. Dois == compara se os valores são iguais."
            },
            {
              question: "O que esse código mostra?",
              code: 'x = 5\nif x > 10:\n    print("Grande")\nelse:\n    print("Pequeno")',
              options: ["Pequeno", "Grande", "Grande\\nPequeno", "Erro"],
              correct: 0,
              explanation: "x é 5, que NÃO é maior que 10, então vai pro else e mostra 'Pequeno'."
            },
            {
              question: "O que acontece se esquecer os : depois do if?",
              options: ["Erro de Sintaxe", "Funciona normal", "Mostra False", "Pula o if"],
              correct: 0,
              explanation: "Os dois pontos : são obrigatórios no final da linha do if (e do else). Sem eles, dá SyntaxError."
            },
            {
              question: "O que é indentação?",
              options: ["Espaços no início da linha que definem blocos de código", "O nome do if em Python", "Um tipo de variável", "Um operador matemático"],
              correct: 0,
              explanation: "Indentação são os espaços (geralmente 4) no início da linha. Em Python, são obrigatórios pra definir o que está dentro do if."
            },
            {
              question: "O que 10 >= 10 retorna?",
              options: ["True", "False", "10", "Erro"],
              correct: 0,
              explanation: ">= significa maior OU IGUAL. 10 é igual a 10, então retorna True."
            }
          ]
        },

        // ---------- LIÇÃO 3-2: ELIF E CONDIÇÕES COMPOSTAS ----------
        {
          id: "3-2",
          title: "Elif e Condições Compostas",
          duration: "30 min",
          module: "Condicionais",
          sections: [
            {
              type: "explanation",
              title: "E quando tem mais de 2 opções?",
              content: "O <code>if/else</code> só tem 2 caminhos: verdadeiro ou falso. Mas e quando tem <strong>3 ou mais opções</strong>?<br><br>Pra isso existe o <code>elif</code> (que vem de <strong>\"else if\"</strong> = \"senão se\").<br><br>Exemplo do dia a dia: Na Helsen, o valor da OS pode ser:<br>- Até R$500 → <strong>baixo</strong><br>- De R$501 a R$1000 → <strong>médio</strong><br>- Acima de R$1000 → <strong>alto</strong><br><br>São 3 opções! Precisa de <code>elif</code>."
            },
            {
              type: "code-example",
              title: "If / Elif / Else",
              code: 'valor = 750\n\nif valor > 1000:\n    print("Valor ALTO")\nelif valor > 500:\n    print("Valor MEDIO")\nelse:\n    print("Valor BAIXO")\n\n# valor é 750, que NÃO é > 1000, MAS é > 500\n# Resultado: "Valor MEDIO"',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1A",
              instructions: "Crie <code>nota</code> com <code>8</code>. Classifique:<br>- Se nota >= 9: <code>Excelente</code><br>- Se nota >= 7: <code>Bom</code><br>- Se nota >= 5: <code>Regular</code><br>- Senão: <code>Insuficiente</code>",
              starterCode: 'nota = 8\n\n# Classifique a nota:\n',
              solution: 'nota = 8\n\nif nota >= 9:\n    print("Excelente")\nelif nota >= 7:\n    print("Bom")\nelif nota >= 5:\n    print("Regular")\nelse:\n    print("Insuficiente")',
              validation: "structure",
              checks: {
                codeHas: ["nota", "if", "elif", "else", "print"],
                outputHas: ["Bom"]
              }
            },
            {
              type: "explanation",
              title: "Operador and (E)",
              content: "Às vezes você precisa verificar <strong>duas condições ao mesmo tempo</strong>. O operador <code>and</code> (E) exige que <strong>AMBAS</strong> sejam verdadeiras.<br><br><code>if idade >= 18 and tem_cnh == True:</code><br><br>Isso é tipo: \"SE tem mais de 18 <strong>E</strong> tem CNH, pode dirigir\".<br><br><div class='highlight-box tip'><strong>and:</strong> as DUAS condições precisam ser True pra entrar no if</div>"
            },
            {
              type: "code-example",
              title: "Usando and",
              code: 'valor = 1500\nstatus = "aberta"\n\n# As DUAS condições precisam ser verdadeiras:\nif valor > 1000 and status == "aberta":\n    print("OS urgente de alto valor!")\nelse:\n    print("OS normal")',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1B",
              instructions: "Crie <code>horas</code> com <code>10</code> e <code>certificado</code> com <code>True</code>. SE horas for maior que <code>8</code> <strong>E</strong> certificado for <code>True</code>, mostre <code>Bonus liberado!</code>. SENÃO: <code>Sem bonus</code>.",
              starterCode: 'horas = 10\ncertificado = True\n\n# SE horas > 8 E certificado é True:\n',
              solution: 'horas = 10\ncertificado = True\n\nif horas > 8 and certificado == True:\n    print("Bonus liberado!")\nelse:\n    print("Sem bonus")',
              validation: "structure",
              checks: {
                codeHas: ["horas", "certificado", "if", "and", "print"],
                outputHas: ["Bonus liberado!"]
              }
            },
            {
              type: "explanation",
              title: "Operador or (OU)",
              content: "O operador <code>or</code> (OU) exige que <strong>pelo menos uma</strong> das condições seja verdadeira.<br><br><code>if status == \"urgente\" or valor > 2000:</code><br><br>Isso é tipo: \"SE a OS é urgente <strong>OU</strong> valor passa de 2000, prioriza\".<br><br><div class='highlight-box tip'><strong>or:</strong> basta UMA condição ser True pra entrar no if</div>"
            },
            {
              type: "code-example",
              title: "Usando or",
              code: 'status = "normal"\nvalor = 2500\n\n# Basta UMA ser verdadeira:\nif status == "urgente" or valor > 2000:\n    print("Prioridade alta!")\nelse:\n    print("Fila normal")\n\n# status não é "urgente", MAS valor > 2000\n# Resultado: "Prioridade alta!"',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1C",
              instructions: "Crie <code>cliente_vip</code> com <code>False</code> e <code>valor</code> com <code>3000</code>. SE <code>cliente_vip</code> for <code>True</code> <strong>OU</strong> <code>valor</code> for maior que <code>2000</code>, mostre <code>Desconto aplicado!</code>. SENÃO: <code>Sem desconto</code>.",
              starterCode: 'cliente_vip = False\nvalor = 3000\n\n# SE cliente_vip OU valor > 2000:\n',
              solution: 'cliente_vip = False\nvalor = 3000\n\nif cliente_vip == True or valor > 2000:\n    print("Desconto aplicado!")\nelse:\n    print("Sem desconto")',
              validation: "structure",
              checks: {
                codeHas: ["cliente_vip", "valor", "if", "or", "print"],
                outputHas: ["Desconto aplicado!"]
              }
            }
          ],
          quiz: [
            {
              question: "O que é elif?",
              options: ["Else if - uma condição extra entre if e else", "Um tipo de variável", "Um operador matemático", "O mesmo que else"],
              correct: 0,
              explanation: "elif vem de 'else if' e permite adicionar condições extras entre o if e o else."
            },
            {
              question: "O que esse código mostra?",
              code: 'x = 15\nif x > 20:\n    print("A")\nelif x > 10:\n    print("B")\nelif x > 5:\n    print("C")\nelse:\n    print("D")',
              options: ["B", "C", "B e C", "A"],
              correct: 0,
              explanation: "x é 15. Não é > 20, mas É > 10. Python para no PRIMEIRO elif verdadeiro e mostra 'B'."
            },
            {
              question: "True and False resulta em:",
              options: ["False", "True", "Erro", "None"],
              correct: 0,
              explanation: "Com 'and', AMBOS precisam ser True. Como um é False, o resultado é False."
            },
            {
              question: "True or False resulta em:",
              options: ["True", "False", "Erro", "None"],
              correct: 0,
              explanation: "Com 'or', basta UM ser True. Como um é True, o resultado é True."
            }
          ]
        }
      ]
    },

    // ========== MÓDULO 4: LISTAS E LOOPS ==========
    {
      id: 4,
      title: "Listas e Loops",
      lessons: [
        // ---------- LIÇÃO 4-1: LISTAS ----------
        {
          id: "4-1",
          title: "Listas em Python",
          duration: "30 min",
          module: "Listas e Loops",
          sections: [
            {
              type: "explanation",
              title: "O que são listas?",
              content: "Lista é uma <strong>coleção de itens</strong>, tipo uma lista de compras ou uma lista de técnicos.<br><br>Em Python, listas ficam dentro de <strong>colchetes</strong> <code>[]</code> e os itens são separados por <strong>vírgula</strong>.<br><br>Exemplo: <code>[\"Leon\", \"Valdinei\", \"Dayvison\"]</code>"
            },
            {
              type: "code-example",
              title: "Criando listas",
              code: '# Lista de texto:\ntecnicos = ["Leon", "Valdinei", "Dayvison"]\nprint(tecnicos)\n\n# Lista de números:\nvalores = [1145, 700, 445, 890]\nprint(valores)\n\n# Lista vazia:\npendentes = []\nprint(pendentes)',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1A",
              instructions: "Crie uma lista chamada <code>clientes</code> com os valores: <code>\"Minerva Usinagem\"</code>, <code>\"Usinagem Castro\"</code>, <code>\"Off Limits\"</code>. Mostre a lista com <code>print()</code>.",
              starterCode: '# Crie a lista de clientes:\n\n\n# Mostre a lista:\n',
              solution: 'clientes = ["Minerva Usinagem", "Usinagem Castro", "Off Limits"]\nprint(clientes)',
              validation: "structure",
              checks: {
                codeHas: ["clientes", "[", "]", "print"],
                outputHas: ["Minerva Usinagem", "Usinagem Castro", "Off Limits"]
              }
            },
            {
              type: "explanation",
              title: "Acessando itens da lista",
              content: "Cada item da lista tem uma <strong>posição</strong> (chamada de <strong>índice</strong>). E atenção: <strong>começa do ZERO!</strong><br><br><code>[\"Leon\", \"Valdinei\", \"Dayvison\"]</code><br><code>  [0]      [1]         [2]</code><br><br>Pra acessar, use <code>lista[índice]</code>:<br><code>tecnicos[0]</code> → <code>\"Leon\"</code><br><code>tecnicos[1]</code> → <code>\"Valdinei\"</code><br><code>tecnicos[2]</code> → <code>\"Dayvison\"</code>"
            },
            {
              type: "code-example",
              title: "Acessando por índice",
              code: 'tecnicos = ["Leon", "Valdinei", "Dayvison"]\n\nprint(tecnicos[0])   # Leon (primeiro)\nprint(tecnicos[1])   # Valdinei (segundo)\nprint(tecnicos[2])   # Dayvison (terceiro)',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1B",
              instructions: "Usando a lista abaixo, mostre o <strong>primeiro</strong> cliente (índice 0).",
              starterCode: 'clientes = ["Minerva Usinagem", "Usinagem Castro", "Off Limits"]\n\n# Mostre o primeiro cliente (índice 0):\n',
              solution: 'clientes = ["Minerva Usinagem", "Usinagem Castro", "Off Limits"]\nprint(clientes[0])',
              validation: "structure",
              checks: {
                codeHas: ["clientes[0]", "print"],
                outputHas: ["Minerva Usinagem"]
              }
            },
            {
              type: "explanation",
              title: "Índice negativo: último item",
              content: "Pra pegar o <strong>último</strong> item sem contar quantos tem, use índice <strong>negativo</strong>:<br><br><code>lista[-1]</code> → último item<br><code>lista[-2]</code> → penúltimo item<br><br>É um atalho bem prático!"
            },
            {
              type: "code-example",
              title: "Índice negativo",
              code: 'tecnicos = ["Leon", "Valdinei", "Dayvison"]\n\nprint(tecnicos[-1])  # Dayvison (último)\nprint(tecnicos[-2])  # Valdinei (penúltimo)',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1C",
              instructions: "Usando a lista abaixo, mostre o <strong>último</strong> valor usando índice negativo.",
              starterCode: 'valores = [1145, 700, 445, 890]\n\n# Mostre o último valor (use índice negativo):\n',
              solution: 'valores = [1145, 700, 445, 890]\nprint(valores[-1])',
              validation: "structure",
              checks: {
                codeHas: ["valores[-1]", "print"],
                outputHas: ["890"]
              }
            },
            {
              type: "explanation",
              title: "len() - Tamanho da lista",
              content: "<code>len()</code> retorna <strong>quantos itens</strong> tem na lista.<br><br><code>len([\"Leon\", \"Valdinei\", \"Dayvison\"])</code> → <code>3</code><br><br>Muito útil pra saber quantos registros, quantas OS, quantos clientes, etc."
            },
            {
              type: "code-example",
              title: "len() na prática",
              code: 'tecnicos = ["Leon", "Valdinei", "Dayvison"]\nquantidade = len(tecnicos)\n\nprint(quantidade)  # 3',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1D",
              instructions: "Use <code>len()</code> para mostrar quantos itens tem na lista <code>os_numeros</code>.",
              starterCode: 'os_numeros = [6650, 6632, 6620, 6648, 6610]\n\n# Mostre quantos itens tem:\n',
              solution: 'os_numeros = [6650, 6632, 6620, 6648, 6610]\nprint(len(os_numeros))',
              validation: "structure",
              checks: {
                codeHas: ["len(", "print"],
                outputHas: ["5"]
              }
            },
            {
              type: "explanation",
              title: "append() e pop() - Adicionar e remover",
              content: "<code>append()</code> → <strong>adiciona</strong> um item no final da lista<br><code>pop()</code> → <strong>remove e retorna</strong> o último item da lista<br><br>Exemplo:<br><code>lista.append(\"novo\")</code> → coloca \"novo\" no final<br><code>removido = lista.pop()</code> → tira o último e guarda em <code>removido</code>"
            },
            {
              type: "code-example",
              title: "append() e pop()",
              code: 'tecnicos = ["Leon", "Valdinei"]\nprint(tecnicos)  # ["Leon", "Valdinei"]\n\n# Adiciona no final:\ntecnicos.append("Dayvison")\nprint(tecnicos)  # ["Leon", "Valdinei", "Dayvison"]\n\n# Remove o último e guarda na variável:\nremovido = tecnicos.pop()\nprint(removido)   # Dayvison\nprint(tecnicos)   # ["Leon", "Valdinei"]',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1E",
              instructions: "A lista <code>fila</code> tem 2 clientes. Adicione <code>\"Off Limits\"</code> com <code>append()</code> e depois mostre a lista.",
              starterCode: 'fila = ["Minerva Usinagem", "Usinagem Castro"]\n\n# Adicione "Off Limits" na fila:\n\n\n# Mostre a fila completa:\n',
              solution: 'fila = ["Minerva Usinagem", "Usinagem Castro"]\nfila.append("Off Limits")\nprint(fila)',
              validation: "structure",
              checks: {
                codeHas: [".append(", "print"],
                outputHas: ["Minerva Usinagem", "Usinagem Castro", "Off Limits"]
              }
            }
          ],
          quiz: [
            {
              question: "Qual o índice do PRIMEIRO item de uma lista?",
              options: ["0", "1", "-1", "Depende"],
              correct: 0,
              explanation: "Em Python (e na maioria das linguagens), listas começam do índice 0."
            },
            {
              question: "O que lista[-1] retorna?",
              options: ["O último item", "O primeiro item", "Erro", "Nada"],
              correct: 0,
              explanation: "Índice negativo conta de trás pra frente. -1 é o último, -2 o penúltimo, etc."
            },
            {
              question: "O que len([10, 20, 30]) retorna?",
              options: ["3", "30", "60", "10"],
              correct: 0,
              explanation: "len() conta quantos itens tem na lista. Tem 3 itens, então retorna 3."
            },
            {
              question: "O que append() faz?",
              options: ["Adiciona item no final da lista", "Remove item da lista", "Ordena a lista", "Conta itens da lista"],
              correct: 0,
              explanation: "append() adiciona um novo item no final da lista."
            },
            {
              question: "O que pop() retorna?",
              options: ["O item que foi removido", "True ou False", "O tamanho da lista", "Nada"],
              correct: 0,
              explanation: "pop() remove o último item E retorna ele, pra você poder guardar numa variável."
            }
          ]
        },

        // ---------- LIÇÃO 4-2: LOOPS ----------
        {
          id: "4-2",
          title: "Loops (For)",
          duration: "35 min",
          module: "Listas e Loops",
          sections: [
            {
              type: "explanation",
              title: "O que é um loop?",
              content: "Loop é um código que <strong>repete</strong> uma ação várias vezes. Em vez de escrever a mesma coisa 10 vezes, você escreve UMA vez e manda repetir!<br><br>O <code>for</code> percorre cada item de uma lista, um por um:<br><br><pre><code>for item in lista:\n    print(item)</code></pre><br>Leia assim: \"<strong>para cada</strong> item <strong>na</strong> lista, faça algo\""
            },
            {
              type: "code-example",
              title: "Loop for básico",
              code: 'tecnicos = ["Leon", "Valdinei", "Dayvison"]\n\n# Para cada tecnico na lista:\nfor tecnico in tecnicos:\n    print(tecnico)\n\n# Mostra um por um:\n# Leon\n# Valdinei\n# Dayvison',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1A",
              instructions: "Use <code>for</code> para mostrar cada cliente da lista, um por linha.",
              starterCode: 'clientes = ["Minerva Usinagem", "Usinagem Castro", "Off Limits"]\n\n# Mostre cada cliente:\n',
              solution: 'clientes = ["Minerva Usinagem", "Usinagem Castro", "Off Limits"]\n\nfor cliente in clientes:\n    print(cliente)',
              validation: "structure",
              checks: {
                codeHas: ["for", "in", "print"],
                outputHas: ["Minerva Usinagem", "Usinagem Castro", "Off Limits"]
              }
            },
            {
              type: "explanation",
              title: "Loop com f-string",
              content: "Dentro do loop, você pode usar <strong>f-strings</strong> pra formatar a saída. A variável do loop funciona como qualquer outra variável!<br><br><pre><code>for tecnico in tecnicos:\n    print(f\"Técnico: {tecnico}\")</code></pre>"
            },
            {
              type: "code-example",
              title: "Loop com f-string",
              code: 'tecnicos = ["Leon", "Valdinei", "Dayvison"]\n\nfor tecnico in tecnicos:\n    print(f"Tecnico disponivel: {tecnico}")\n\n# Tecnico disponivel: Leon\n# Tecnico disponivel: Valdinei\n# Tecnico disponivel: Dayvison',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1B",
              instructions: "Use <code>for</code> e <code>f-string</code> para mostrar cada OS no formato: <code>OS: 6650</code>, <code>OS: 6632</code>, etc.",
              starterCode: 'os_lista = [6650, 6632, 6620]\n\n# Mostre cada OS com f-string:\n',
              solution: 'os_lista = [6650, 6632, 6620]\n\nfor os in os_lista:\n    print(f"OS: {os}")',
              validation: "structure",
              checks: {
                codeHas: ["for", "in", "f\"", "print"],
                outputHas: ["OS: 6650", "OS: 6632", "OS: 6620"]
              }
            },
            {
              type: "explanation",
              title: "Variável acumuladora (contador)",
              content: "Muitas vezes você quer <strong>contar</strong> ou <strong>somar</strong> valores dentro do loop. Pra isso, cria uma variável <strong>ANTES</strong> do loop e atualiza ela <strong>DENTRO</strong> do loop:<br><br><pre><code>contador = 0              # Começa em 0\nfor item in lista:\n    contador = contador + 1  # Soma 1 a cada volta</code></pre><br><div class='highlight-box tip'><strong>Atalho:</strong> <code>contador += 1</code> é o mesmo que <code>contador = contador + 1</code></div>"
            },
            {
              type: "code-example",
              title: "Contando itens no loop",
              code: 'tecnicos = ["Leon", "Valdinei", "Dayvison"]\n\ncontador = 0\nfor tecnico in tecnicos:\n    contador += 1\n\nprint(f"Total de tecnicos: {contador}")  # 3',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1C",
              instructions: "Conte quantos valores existem na lista usando um <code>for</code> com variável acumuladora. Mostre: <code>Total: X</code><br><br><div class='highlight-box tip'><strong>Dica:</strong> Crie <code>contador = 0</code> antes do loop e some 1 a cada volta</div>",
              starterCode: 'valores = [1145, 700, 445, 890]\n\n# Conte os itens:\ncontador = 0\n\n\n\n# Mostre o total:\n',
              solution: 'valores = [1145, 700, 445, 890]\n\ncontador = 0\nfor valor in valores:\n    contador += 1\n\nprint(f"Total: {contador}")',
              validation: "structure",
              checks: {
                codeHas: ["contador", "for", "+=", "print"],
                outputHas: ["Total: 4"]
              }
            },
            {
              type: "explanation",
              title: "Somando valores no loop",
              content: "O mesmo raciocínio serve pra <strong>somar</strong>. Cria <code>total = 0</code> antes e soma cada valor dentro do loop:<br><br><pre><code>total = 0\nfor valor in valores:\n    total += valor  # soma cada valor ao total</code></pre>"
            },
            {
              type: "code-example",
              title: "Somando com loop",
              code: 'valores = [1145, 700, 445, 890]\n\ntotal = 0\nfor valor in valores:\n    total += valor\n\nprint(f"Soma total: R${total}")  # R$3180',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1D",
              instructions: "Some todos os valores das OS e mostre: <code>Total faturado: R$XXXX</code>",
              starterCode: 'valores_os = [1145, 700, 445, 890, 1200]\n\n# Some todos os valores:\ntotal = 0\n\n\n\n# Mostre o resultado:\n',
              solution: 'valores_os = [1145, 700, 445, 890, 1200]\n\ntotal = 0\nfor valor in valores_os:\n    total += valor\n\nprint(f"Total faturado: R${total}")',
              validation: "structure",
              checks: {
                codeHas: ["total", "for", "+=", "print"],
                outputHas: ["Total faturado: R$4380"]
              }
            },
            {
              type: "explanation",
              title: "Loop com if (filtro)",
              content: "Agora que você sabe <code>for</code> e <code>if</code>, pode <strong>combinar os dois</strong>! Isso serve pra <strong>filtrar</strong> itens de uma lista.<br><br><pre><code>for valor in valores:\n    if valor > 1000:\n        print(valor)  # Só mostra os > 1000</code></pre><br><div class='highlight-box tip'><strong>Atenção à indentação:</strong> O if está dentro do for (4 espaços). O print está dentro do if (8 espaços).</div>"
            },
            {
              type: "code-example",
              title: "Filtrando com for + if",
              code: 'valores = [1145, 700, 445, 890, 1200]\n\nprint("OS acima de R$1000:")\nfor valor in valores:\n    if valor > 1000:\n        print(f"  R${valor}")\n\n# Só mostra 1145 e 1200',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1E",
              instructions: "Percorra a lista de valores. <strong>SE</strong> o valor for maior que <code>800</code>, mostre: <code>Valor alto: R$XXXX</code>.<br><br><div class='highlight-box tip'><strong>Lembre:</strong> O if fica DENTRO do for, e o print fica DENTRO do if</div>",
              starterCode: 'valores = [1145, 700, 445, 890, 1200]\n\n# Mostre só os valores acima de 800:\n',
              solution: 'valores = [1145, 700, 445, 890, 1200]\n\nfor valor in valores:\n    if valor > 800:\n        print(f"Valor alto: R${valor}")',
              validation: "structure",
              checks: {
                codeHas: ["for", "if", ">", "800", "print"],
                outputHas: ["1145", "890", "1200"]
              }
            }
          ],
          quiz: [
            {
              question: "O que o for faz?",
              options: ["Repete código para cada item da lista", "Cria uma nova lista", "Remove itens da lista", "Ordena a lista"],
              correct: 0,
              explanation: "O for percorre cada item da lista e executa o código dentro dele pra cada um."
            },
            {
              question: "O que esse código mostra?",
              code: 'nums = [1, 2, 3]\ntotal = 0\nfor n in nums:\n    total += n\nprint(total)',
              options: ["6", "123", "3", "0"],
              correct: 0,
              explanation: "total começa em 0. Cada volta soma: 0+1=1, 1+2=3, 3+3=6. Resultado: 6."
            },
            {
              question: "O que += faz?",
              options: ["Soma e guarda no mesmo valor (x = x + algo)", "Apenas compara", "Multiplica", "Subtrai"],
              correct: 0,
              explanation: "x += 1 é o mesmo que x = x + 1. É um atalho pra somar e guardar."
            },
            {
              question: "Quantos espaços o print tem nesse código?",
              code: 'for x in lista:\n    if x > 10:\n        print(x)',
              options: ["8 espaços (dentro do for E do if)", "4 espaços", "0 espaços", "12 espaços"],
              correct: 0,
              explanation: "O print está dentro do for (4 espaços) E dentro do if (+4 espaços) = 8 espaços total."
            },
            {
              question: "O que esse código mostra?",
              code: 'nums = [5, 12, 3, 18, 7]\nfor n in nums:\n    if n > 10:\n        print(n)',
              options: ["12 e 18", "5, 12, 3, 18, 7", "Só 18", "Nada"],
              correct: 0,
              explanation: "Só mostra os maiores que 10: 12 e 18."
            }
          ]
        }
      ]
    },

    // ========== MÓDULO 5: FUNÇÕES ==========
    {
      id: 5,
      title: "Funções",
      lessons: [
        // ---------- LIÇÃO 5-1: FUNÇÕES ----------
        {
          id: "5-1",
          title: "Funções em Python",
          duration: "35 min",
          module: "Funções",
          sections: [
            {
              type: "explanation",
              title: "O que são funções?",
              content: "Função é um <strong>bloco de código reutilizável</strong>. Você cria uma vez e usa quantas vezes quiser!<br><br>Pense assim: na Helsen, quando um técnico faz uma manutenção, ele segue um <strong>checklist</strong>. A função é esse checklist - você define os passos uma vez, e repete sempre que precisar.<br><br>Em Python, cria com <code>def</code> (de <strong>define</strong>):<br><pre><code>def nome_da_funcao():\n    # código aqui</code></pre>"
            },
            {
              type: "code-example",
              title: "Criando uma função simples",
              code: '# Definindo a função:\ndef saudacao():\n    print("Bem-vindo a Helsen Service!")\n    print("Sistema MATH ativo")\n\n# Chamando a função (executando):\nsaudacao()\nsaudacao()  # Pode chamar quantas vezes quiser!',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1A",
              instructions: "Crie uma função chamada <code>mostrar_empresa</code> que mostra: <code>Helsen Service</code>. Depois chame ela.",
              starterCode: '# Crie a função:\n\n\n\n# Chame a função:\n',
              solution: 'def mostrar_empresa():\n    print("Helsen Service")\n\nmostrar_empresa()',
              validation: "structure",
              checks: {
                codeHas: ["def", "mostrar_empresa", "print"],
                outputHas: ["Helsen Service"]
              }
            },
            {
              type: "explanation",
              title: "Funções com parâmetros",
              content: "Funções ficam mais úteis quando recebem <strong>informações</strong>. Essas informações são os <strong>parâmetros</strong> - vão dentro dos parênteses.<br><br><pre><code>def saudar(nome):\n    print(f\"Olá, {nome}!\")\n\nsaudar(\"Leon\")   # Olá, Leon!\nsaudar(\"Valdinei\") # Olá, Valdinei!</code></pre><br>O parâmetro é como um <strong>campo em branco</strong> que você preenche quando chama a função."
            },
            {
              type: "code-example",
              title: "Função com 1 parâmetro",
              code: 'def saudar_tecnico(nome):\n    print(f"Ola, {nome}!")\n    print(f"Bom trabalho hoje!")\n\nsaudar_tecnico("Leon")\nsaudar_tecnico("Valdinei")',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1B",
              instructions: "Crie uma função <code>mostrar_os</code> que recebe <code>numero</code> como parâmetro e mostra: <code>OS: XXXX</code>. Chame com <code>6650</code>.",
              starterCode: '# Crie a função com parâmetro:\n\n\n\n# Chame com 6650:\n',
              solution: 'def mostrar_os(numero):\n    print(f"OS: {numero}")\n\nmostrar_os(6650)',
              validation: "structure",
              checks: {
                codeHas: ["def", "mostrar_os", "numero", "print", "6650"],
                outputHas: ["OS: 6650"]
              }
            },
            {
              type: "explanation",
              title: "Funções com vários parâmetros",
              content: "Pode ter <strong>mais de um parâmetro</strong>, separados por vírgula:<br><br><pre><code>def info_os(numero, cliente):\n    print(f\"OS {numero} - {cliente}\")</code></pre><br>Quando chamar, passa os valores na <strong>mesma ordem</strong>."
            },
            {
              type: "code-example",
              title: "Função com 2 parâmetros",
              code: 'def info_os(numero, cliente):\n    print(f"OS {numero} - Cliente: {cliente}")\n\ninfo_os(6650, "Minerva Usinagem")\ninfo_os(6632, "Usinagem Castro")',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1C",
              instructions: "Crie <code>calcular_os</code> que recebe <code>horas</code> e <code>valor_hora</code> e mostra: <code>Total: R$XXXX</code>. Chame com <code>8</code> e <code>175</code>.",
              starterCode: '# Crie a função:\n\n\n\n# Chame com horas=8 e valor_hora=175:\n',
              solution: 'def calcular_os(horas, valor_hora):\n    print(f"Total: R${horas * valor_hora}")\n\ncalcular_os(8, 175)',
              validation: "structure",
              checks: {
                codeHas: ["def", "calcular_os", "horas", "valor_hora", "print"],
                outputHas: ["Total: R$1400"]
              }
            },
            {
              type: "explanation",
              title: "Return (retornar valor)",
              content: "Até agora nossas funções só <strong>mostram</strong> (print). Mas e se você quiser que a função <strong>calcule e devolva</strong> o resultado pra usar depois?<br><br>Pra isso usa <code>return</code>:<br><pre><code>def calcular(horas, valor):\n    total = horas * valor\n    return total  # DEVOLVE o resultado\n\nresultado = calcular(8, 175)  # resultado = 1400</code></pre><br><div class='highlight-box tip'><strong>print</strong> = mostra na tela. <strong>return</strong> = devolve o valor pra quem chamou.</div>"
            },
            {
              type: "code-example",
              title: "Usando return",
              code: 'def calcular_total(horas, valor_hora):\n    total = horas * valor_hora\n    return total\n\n# Guarda o resultado numa variável:\nresultado = calcular_total(8, 175)\nprint(f"Total: R${resultado}")\n\n# Pode usar em cálculos:\ncom_imposto = resultado * 1.10\nprint(f"Com imposto: R${com_imposto}")',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1D",
              instructions: "Crie <code>calcular_desconto</code> que recebe <code>valor</code> e <code>percentual</code>, calcula o desconto e <strong>retorna</strong> o valor final. Chame com <code>1000</code> e <code>10</code> e mostre o resultado.<br><br><div class='highlight-box tip'><strong>Dica:</strong> desconto = valor * percentual / 100. Final = valor - desconto</div>",
              starterCode: '# Crie a função com return:\n\n\n\n\n# Chame e mostre:\nresultado = \nprint(f"Valor final: R${resultado}")',
              solution: 'def calcular_desconto(valor, percentual):\n    desconto = valor * percentual / 100\n    return valor - desconto\n\nresultado = calcular_desconto(1000, 10)\nprint(f"Valor final: R${resultado}")',
              validation: "structure",
              checks: {
                codeHas: ["def", "calcular_desconto", "return", "print"],
                outputHas: ["900"]
              }
            }
          ],
          quiz: [
            {
              question: "O que def faz?",
              options: ["Define (cria) uma função", "Deleta uma função", "Executa uma função", "Define uma variável"],
              correct: 0,
              explanation: "def vem de 'define' e serve pra criar uma nova função."
            },
            {
              question: "Qual a diferença entre print e return?",
              options: ["print mostra na tela, return devolve o valor", "São a mesma coisa", "return mostra na tela, print devolve", "print é mais rápido"],
              correct: 0,
              explanation: "print() exibe na tela. return devolve o valor pra quem chamou a função, pra usar depois."
            },
            {
              question: "O que esse código mostra?",
              code: 'def dobro(x):\n    return x * 2\n\nresultado = dobro(5)\nprint(resultado)',
              options: ["10", "5", "dobro(5)", "Nada"],
              correct: 0,
              explanation: "dobro(5) retorna 5 * 2 = 10. resultado = 10. print mostra 10."
            },
            {
              question: "O que acontece se criar a função mas não chamar?",
              options: ["Nada acontece - a função só é criada", "Python executa automaticamente", "Dá erro", "Mostra o código"],
              correct: 0,
              explanation: "Definir uma função só cria ela. Pra executar, precisa CHAMAR: nome_funcao()."
            }
          ]
        },

        // ---------- LIÇÃO 5-2: FUNÇÕES AVANÇADAS ----------
        {
          id: "5-2",
          title: "Funções Avançadas",
          duration: "30 min",
          module: "Funções",
          sections: [
            {
              type: "explanation",
              title: "Parâmetros com valor padrão",
              content: "Você pode dar um <strong>valor padrão</strong> pra um parâmetro. Se quem chamar não passar aquele valor, usa o padrão:<br><br><pre><code>def calcular(valor, taxa=0.10):\n    return valor * taxa</code></pre><br><code>calcular(1000)</code> → usa taxa=0.10<br><code>calcular(1000, 0.15)</code> → usa taxa=0.15<br><br>É tipo: \"SE não informar a taxa, assume 10%\"."
            },
            {
              type: "code-example",
              title: "Valor padrão na prática",
              code: 'def calcular_imposto(valor, taxa=0.10):\n    imposto = valor * taxa\n    return imposto\n\n# Sem informar taxa (usa 10% padrão):\nprint(calcular_imposto(1000))    # 100.0\n\n# Informando taxa diferente:\nprint(calcular_imposto(1000, 0.15))  # 150.0',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1A",
              instructions: "Crie <code>calcular_total_os</code> que recebe <code>horas</code> e <code>valor_hora</code> com padrão <code>175</code>. Retorne horas * valor_hora. Chame duas vezes: uma sem informar valor_hora e outra com <code>200</code>.",
              starterCode: '# Crie a função com valor padrão:\n\n\n\n# Chame SEM informar valor_hora:\nprint(calcular_total_os(8))\n\n# Chame COM valor_hora = 200:\nprint(calcular_total_os(8, 200))',
              solution: 'def calcular_total_os(horas, valor_hora=175):\n    return horas * valor_hora\n\nprint(calcular_total_os(8))\nprint(calcular_total_os(8, 200))',
              validation: "structure",
              checks: {
                codeHas: ["def", "calcular_total_os", "=175", "return"],
                outputHas: ["1400", "1600"]
              }
            },
            {
              type: "explanation",
              title: "Funções que usam if",
              content: "Agora que você sabe <code>if</code> e <code>funções</code>, pode <strong>combinar</strong>! Uma função pode tomar decisões internamente:<br><br><pre><code>def classificar(valor):\n    if valor > 1000:\n        return \"Alto\"\n    else:\n        return \"Normal\"</code></pre>"
            },
            {
              type: "code-example",
              title: "Função com if/else",
              code: 'def classificar_os(valor):\n    if valor > 1000:\n        return "ALTO"\n    elif valor > 500:\n        return "MEDIO"\n    else:\n        return "BAIXO"\n\nprint(classificar_os(1500))  # ALTO\nprint(classificar_os(750))   # MEDIO\nprint(classificar_os(300))   # BAIXO',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1B",
              instructions: "Crie <code>verificar_horas</code> que recebe <code>horas</code>. SE horas > 8, retorne <code>\"Hora extra\"</code>. SENÃO, retorne <code>\"Normal\"</code>. Chame com <code>10</code> e mostre o resultado.",
              starterCode: '# Crie a função:\n\n\n\n\n\n# Chame e mostre:\nprint(verificar_horas(10))',
              solution: 'def verificar_horas(horas):\n    if horas > 8:\n        return "Hora extra"\n    else:\n        return "Normal"\n\nprint(verificar_horas(10))',
              validation: "structure",
              checks: {
                codeHas: ["def", "verificar_horas", "if", "return"],
                outputHas: ["Hora extra"]
              }
            },
            {
              type: "explanation",
              title: "Funções chamando funções",
              content: "Uma função pode <strong>chamar outra função</strong>. Isso permite criar código organizado e reutilizável:<br><br><pre><code>def calcular(h, v):\n    return h * v\n\ndef gerar_relatorio(h, v):\n    total = calcular(h, v)\n    print(f\"Total: R${total}\")</code></pre>"
            },
            {
              type: "code-example",
              title: "Composição de funções",
              code: 'def calcular_total(horas, valor_hora):\n    return horas * valor_hora\n\ndef aplicar_desconto(total, percentual):\n    desconto = total * percentual / 100\n    return total - desconto\n\n# Uma usa a outra:\ntotal = calcular_total(8, 175)\nfinal = aplicar_desconto(total, 10)\nprint(f"Total: R${total}")\nprint(f"Com desconto: R${final}")',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1C",
              instructions: "Crie duas funções:<br>1. <code>calcular_valor</code>(horas, valor_hora) → retorna horas * valor_hora<br>2. <code>com_imposto</code>(valor, taxa) → retorna valor + (valor * taxa / 100)<br><br>Calcule: 8 horas a R$175, com 10% de imposto. Mostre o valor final.",
              starterCode: '# Função 1: calcular_valor\n\n\n\n# Função 2: com_imposto\n\n\n\n# Use as duas funções:\ntotal = calcular_valor(8, 175)\nfinal = com_imposto(total, 10)\nprint(f"Valor final: R${final}")',
              solution: 'def calcular_valor(horas, valor_hora):\n    return horas * valor_hora\n\ndef com_imposto(valor, taxa):\n    return valor + (valor * taxa / 100)\n\ntotal = calcular_valor(8, 175)\nfinal = com_imposto(total, 10)\nprint(f"Valor final: R${final}")',
              validation: "structure",
              checks: {
                codeHas: ["def calcular_valor", "def com_imposto", "return"],
                outputHas: ["1540"]
              }
            }
          ],
          quiz: [
            {
              question: "O que acontece se não passar um parâmetro com valor padrão?",
              options: ["Usa o valor padrão definido na função", "Dá erro", "Usa None", "Usa 0"],
              correct: 0,
              explanation: "Se o parâmetro tem valor padrão e você não passa, ele usa o valor padrão."
            },
            {
              question: "O que esse código mostra?",
              code: 'def saudar(nome="Visitante"):\n    return f"Ola, {nome}!"\n\nprint(saudar())',
              options: ['Ola, Visitante!', 'Ola, !', 'Erro', 'Ola, nome!'],
              correct: 0,
              explanation: "saudar() sem argumento usa o padrão \"Visitante\"."
            },
            {
              question: "Uma função pode chamar outra função?",
              options: ["Sim, sem problema", "Não, dá erro", "Só se for a mesma função", "Só com import"],
              correct: 0,
              explanation: "Sim! Funções podem chamar outras funções, isso é composição."
            },
            {
              question: "O que esse código mostra?",
              code: 'def dobro(x):\n    return x * 2\n\ndef triplo(x):\n    return x * 3\n\nprint(dobro(5) + triplo(2))',
              options: ["16", "15", "30", "Erro"],
              correct: 0,
              explanation: "dobro(5) = 10, triplo(2) = 6. 10 + 6 = 16."
            }
          ]
        }
      ]
    },

    // ========== MÓDULO 6: DICIONÁRIOS ==========
    {
      id: 6,
      title: "Dicionários",
      lessons: [
        // ---------- LIÇÃO 6-1: DICIONÁRIOS ----------
        {
          id: "6-1",
          title: "Dicionários em Python",
          duration: "30 min",
          module: "Dicionários",
          sections: [
            {
              type: "explanation",
              title: "O que são dicionários?",
              content: "Dicionário é uma coleção de <strong>chave: valor</strong>. É como uma ficha de cadastro:<br><br><code>nome: \"Leon\"</code> ← chave é \"nome\", valor é \"Leon\"<br><code>idade: 30</code> ← chave é \"idade\", valor é 30<br><br>Em Python, dicionários usam <strong>chaves { }</strong>:<br><code>{\"nome\": \"Leon\", \"idade\": 30}</code><br><br>Pense como uma <strong>Ordem de Serviço</strong>: cada campo (número, cliente, valor) é uma chave, e o conteúdo é o valor."
            },
            {
              type: "code-example",
              title: "Criando dicionários",
              code: '# Dicionário = { chave: valor }\nos = {\n    "numero": 6650,\n    "cliente": "Minerva Usinagem",\n    "tecnico": "Leon Mendes",\n    "valor": 1145\n}\n\nprint(os)',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1A",
              instructions: "Crie um dicionário <code>tecnico</code> com as chaves: <code>\"nome\"</code> = <code>\"Valdinei Pereira\"</code>, <code>\"id\"</code> = <code>42</code>, <code>\"especialidade\"</code> = <code>\"Eletrica\"</code>. Mostre com <code>print()</code>.",
              starterCode: '# Crie o dicionário:\ntecnico = {\n\n}\n\n# Mostre:\nprint(tecnico)',
              solution: 'tecnico = {\n    "nome": "Valdinei Pereira",\n    "id": 42,\n    "especialidade": "Eletrica"\n}\nprint(tecnico)',
              validation: "structure",
              checks: {
                codeHas: ["tecnico", "{", "}", "\"nome\"", "\"id\"", "print"],
                outputHas: ["Valdinei Pereira", "42", "Eletrica"]
              }
            },
            {
              type: "explanation",
              title: "Acessando valores",
              content: "Pra acessar um valor, use a <strong>chave entre colchetes</strong>:<br><br><code>dicionario[\"chave\"]</code><br><br>Exemplo: <code>os[\"cliente\"]</code> → <code>\"Minerva Usinagem\"</code><br><br>É como consultar um campo específico da OS: \"me dá o nome do cliente\"."
            },
            {
              type: "code-example",
              title: "Acessando valores por chave",
              code: 'os = {\n    "numero": 6650,\n    "cliente": "Minerva Usinagem",\n    "valor": 1145\n}\n\nprint(os["numero"])   # 6650\nprint(os["cliente"])  # Minerva Usinagem\nprint(os["valor"])    # 1145',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1B",
              instructions: "Usando o dicionário abaixo, mostre com f-string: <code>OS 6650 - Minerva Usinagem</code>",
              starterCode: 'os = {\n    "numero": 6650,\n    "cliente": "Minerva Usinagem",\n    "valor": 1145\n}\n\n# Mostre "OS 6650 - Minerva Usinagem" com f-string:\n',
              solution: 'os = {\n    "numero": 6650,\n    "cliente": "Minerva Usinagem",\n    "valor": 1145\n}\nprint(f"OS {os[\"numero\"]} - {os[\"cliente\"]}")',
              validation: "structure",
              checks: {
                codeHas: ["os[", "f\"", "print"],
                outputHas: ["OS 6650", "Minerva Usinagem"]
              }
            },
            {
              type: "explanation",
              title: "Adicionando e alterando chaves",
              content: "Pra <strong>adicionar</strong> uma chave nova ou <strong>alterar</strong> uma existente, basta atribuir:<br><br><code>os[\"status\"] = \"concluida\"</code> → adiciona chave nova<br><code>os[\"valor\"] = 1200</code> → altera valor existente"
            },
            {
              type: "code-example",
              title: "Adicionando e alterando",
              code: 'os = {"numero": 6650, "valor": 1145}\nprint(os)\n\n# Adicionar chave nova:\nos["status"] = "concluida"\nprint(os)\n\n# Alterar valor existente:\nos["valor"] = 1200\nprint(os)',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1C",
              instructions: "No dicionário abaixo, adicione a chave <code>\"status\"</code> com valor <code>\"aberta\"</code>. Depois mostre o dicionário.",
              starterCode: 'os = {\n    "numero": 6632,\n    "cliente": "Usinagem Castro",\n    "valor": 890\n}\n\n# Adicione a chave "status":\n\n\n# Mostre:\nprint(os)',
              solution: 'os = {\n    "numero": 6632,\n    "cliente": "Usinagem Castro",\n    "valor": 890\n}\nos["status"] = "aberta"\nprint(os)',
              validation: "structure",
              checks: {
                codeHas: ["os[\"status\"]", "=", "print"],
                outputHas: ["aberta"]
              }
            },
            {
              type: "explanation",
              title: "Métodos úteis: keys(), values(), items()",
              content: "<code>.keys()</code> → retorna todas as <strong>chaves</strong><br><code>.values()</code> → retorna todos os <strong>valores</strong><br><code>.items()</code> → retorna <strong>chave e valor</strong> juntos<br><br>Muito útil pra ver o que tem dentro do dicionário!"
            },
            {
              type: "code-example",
              title: "keys(), values(), items()",
              code: 'os = {"numero": 6650, "cliente": "Minerva", "valor": 1145}\n\n# Todas as chaves:\nprint(list(os.keys()))    # ["numero", "cliente", "valor"]\n\n# Todos os valores:\nprint(list(os.values()))  # [6650, "Minerva", 1145]\n\n# Chave e valor juntos:\nfor chave, valor in os.items():\n    print(f"{chave}: {valor}")',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1D",
              instructions: "Use um <code>for</code> com <code>.items()</code> para mostrar cada campo do dicionário no formato: <code>chave: valor</code>",
              starterCode: 'tecnico = {\n    "nome": "Leon Mendes",\n    "id": 41,\n    "horas": 8,\n    "valor_hora": 175\n}\n\n# Mostre cada chave: valor com for:\n',
              solution: 'tecnico = {\n    "nome": "Leon Mendes",\n    "id": 41,\n    "horas": 8,\n    "valor_hora": 175\n}\n\nfor chave, valor in tecnico.items():\n    print(f"{chave}: {valor}")',
              validation: "structure",
              checks: {
                codeHas: ["for", ".items()", "print"],
                outputHas: ["nome: Leon Mendes", "id: 41"]
              }
            }
          ],
          quiz: [
            {
              question: "Como acessar o valor da chave \"nome\" num dicionário?",
              options: ['dicionario["nome"]', "dicionario.nome", "dicionario(nome)", "dicionario->nome"],
              correct: 0,
              explanation: "Em Python, acessa valores de dicionário com colchetes e a chave entre aspas."
            },
            {
              question: "Qual a diferença entre lista e dicionário?",
              options: ["Lista usa índice numérico, dicionário usa chave nomeada", "São a mesma coisa", "Lista é mais rápida", "Dicionário só guarda texto"],
              correct: 0,
              explanation: "Lista: acessa por posição (0, 1, 2). Dicionário: acessa por nome da chave (\"nome\", \"valor\")."
            },
            {
              question: "O que .keys() retorna?",
              options: ["Todas as chaves do dicionário", "Todos os valores", "O primeiro item", "O tamanho"],
              correct: 0,
              explanation: ".keys() retorna todas as chaves. .values() retorna os valores. .items() retorna ambos."
            },
            {
              question: "O que acontece ao fazer d[\"nova_chave\"] = \"valor\"?",
              options: ["Adiciona a nova chave ao dicionário", "Dá erro", "Apaga o dicionário", "Nada"],
              correct: 0,
              explanation: "Se a chave não existe, ela é criada. Se já existe, o valor é atualizado."
            }
          ]
        },

        // ---------- LIÇÃO 6-2: LISTAS DE DICIONÁRIOS ----------
        {
          id: "6-2",
          title: "Listas de Dicionários",
          duration: "35 min",
          module: "Dicionários",
          sections: [
            {
              type: "explanation",
              title: "Combinando listas com dicionários",
              content: "Na vida real, você não tem UMA OS, tem <strong>várias</strong>! E cada OS tem vários campos.<br><br>A solução é uma <strong>lista de dicionários</strong> - uma lista onde cada item é um dicionário:<br><br><pre><code>ordens = [\n    {\"numero\": 6650, \"cliente\": \"Minerva\"},\n    {\"numero\": 6632, \"cliente\": \"Castro\"}\n]</code></pre><br>É exatamente como um <strong>banco de dados</strong>: cada linha é um dicionário, cada coluna é uma chave!"
            },
            {
              type: "code-example",
              title: "Criando lista de dicionários",
              code: 'ordens = [\n    {"numero": 6650, "cliente": "Minerva Usinagem", "valor": 1145},\n    {"numero": 6632, "cliente": "Usinagem Castro", "valor": 890},\n    {"numero": 6620, "cliente": "Off Limits", "valor": 445}\n]\n\n# Acessar a primeira OS:\nprint(ordens[0])\n\n# Acessar campo da primeira OS:\nprint(ordens[0]["cliente"])',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1A",
              instructions: "Crie uma lista <code>tecnicos</code> com 2 dicionários. Cada um com <code>\"nome\"</code> e <code>\"id\"</code>:<br>- Leon Mendes, id 41<br>- Valdinei Pereira, id 42<br><br>Mostre a lista.",
              starterCode: '# Crie a lista de dicionários:\ntecnicos = [\n\n]\n\nprint(tecnicos)',
              solution: 'tecnicos = [\n    {"nome": "Leon Mendes", "id": 41},\n    {"nome": "Valdinei Pereira", "id": 42}\n]\nprint(tecnicos)',
              validation: "structure",
              checks: {
                codeHas: ["tecnicos", "[", "{", "\"nome\"", "\"id\""],
                outputHas: ["Leon Mendes", "41", "Valdinei Pereira", "42"]
              }
            },
            {
              type: "explanation",
              title: "Loop em lista de dicionários",
              content: "Pra percorrer uma lista de dicionários, use <code>for</code>. Cada item do loop é um dicionário inteiro:<br><br><pre><code>for os in ordens:\n    print(os[\"numero\"])  # Acessa campo de cada OS</code></pre>"
            },
            {
              type: "code-example",
              title: "Percorrendo com for",
              code: 'ordens = [\n    {"numero": 6650, "cliente": "Minerva Usinagem", "valor": 1145},\n    {"numero": 6632, "cliente": "Usinagem Castro", "valor": 890},\n    {"numero": 6620, "cliente": "Off Limits", "valor": 445}\n]\n\nfor os in ordens:\n    print(f"OS {os[\"numero\"]} - {os[\"cliente\"]} - R${os[\"valor\"]}")',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1B",
              instructions: "Percorra a lista de OS e mostre cada uma no formato: <code>OS XXXX: R$YYYY</code>",
              starterCode: 'ordens = [\n    {"numero": 6650, "valor": 1145},\n    {"numero": 6632, "valor": 890},\n    {"numero": 6620, "valor": 445}\n]\n\n# Mostre cada OS:\n',
              solution: 'ordens = [\n    {"numero": 6650, "valor": 1145},\n    {"numero": 6632, "valor": 890},\n    {"numero": 6620, "valor": 445}\n]\n\nfor os in ordens:\n    print(f"OS {os[\"numero\"]}: R${os[\"valor\"]}")',
              validation: "structure",
              checks: {
                codeHas: ["for", "os[", "print", "f\""],
                outputHas: ["OS 6650: R$1145", "OS 6632: R$890", "OS 6620: R$445"]
              }
            },
            {
              type: "explanation",
              title: "Filtrando com for + if",
              content: "Agora combinamos <strong>tudo</strong>: loop na lista de dicionários + condição pra filtrar!<br><br><pre><code>for os in ordens:\n    if os[\"valor\"] > 1000:\n        print(os[\"numero\"])  # Só OS caras</code></pre><br>Isso é exatamente como um <strong>filtro no banco de dados</strong>: \"me mostra só as OS acima de R$1000\"."
            },
            {
              type: "code-example",
              title: "Filtrando lista de dicionários",
              code: 'ordens = [\n    {"numero": 6650, "valor": 1145, "status": "concluida"},\n    {"numero": 6632, "valor": 890, "status": "aberta"},\n    {"numero": 6620, "valor": 445, "status": "concluida"}\n]\n\nprint("OS abertas:")\nfor os in ordens:\n    if os["status"] == "aberta":\n        print(f"  OS {os[\"numero\"]} - R${os[\"valor\"]}")',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1C",
              instructions: "Percorra a lista e mostre APENAS as OS com valor <strong>maior que 500</strong>. Formato: <code>OS XXXX: R$YYYY</code>",
              starterCode: 'ordens = [\n    {"numero": 6650, "valor": 1145},\n    {"numero": 6632, "valor": 890},\n    {"numero": 6620, "valor": 445},\n    {"numero": 6648, "valor": 1200}\n]\n\n# Mostre só as OS com valor > 500:\n',
              solution: 'ordens = [\n    {"numero": 6650, "valor": 1145},\n    {"numero": 6632, "valor": 890},\n    {"numero": 6620, "valor": 445},\n    {"numero": 6648, "valor": 1200}\n]\n\nfor os in ordens:\n    if os["valor"] > 500:\n        print(f"OS {os[\"numero\"]}: R${os[\"valor\"]}")',
              validation: "structure",
              checks: {
                codeHas: ["for", "if", ">", "500", "print"],
                outputHas: ["6650", "6632", "6648"]
              }
            },
            {
              type: "explanation",
              title: "Somando valores da lista",
              content: "Combine loop + acumulador pra <strong>somar</strong> valores de dicionários:<br><br><pre><code>total = 0\nfor os in ordens:\n    total += os[\"valor\"]\nprint(f\"Total: R${total}\")</code></pre>"
            },
            {
              type: "code-example",
              title: "Somando valores",
              code: 'ordens = [\n    {"numero": 6650, "valor": 1145},\n    {"numero": 6632, "valor": 890},\n    {"numero": 6620, "valor": 445}\n]\n\ntotal = 0\nfor os in ordens:\n    total += os["valor"]\n\nprint(f"Total faturado: R${total}")  # R$2480',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1D",
              instructions: "Some APENAS os valores das OS com status <code>\"concluida\"</code>. Mostre: <code>Total concluido: R$XXXX</code>",
              starterCode: 'ordens = [\n    {"numero": 6650, "valor": 1145, "status": "concluida"},\n    {"numero": 6632, "valor": 890, "status": "aberta"},\n    {"numero": 6620, "valor": 445, "status": "concluida"},\n    {"numero": 6648, "valor": 1200, "status": "aberta"}\n]\n\n# Some só os valores das concluidas:\ntotal = 0\n\n\n\nprint(f"Total concluido: R${total}")',
              solution: 'ordens = [\n    {"numero": 6650, "valor": 1145, "status": "concluida"},\n    {"numero": 6632, "valor": 890, "status": "aberta"},\n    {"numero": 6620, "valor": 445, "status": "concluida"},\n    {"numero": 6648, "valor": 1200, "status": "aberta"}\n]\n\ntotal = 0\nfor os in ordens:\n    if os["status"] == "concluida":\n        total += os["valor"]\n\nprint(f"Total concluido: R${total}")',
              validation: "structure",
              checks: {
                codeHas: ["total", "for", "if", "==", "concluida", "+=", "print"],
                outputHas: ["Total concluido: R$1590"]
              }
            }
          ],
          quiz: [
            {
              question: "O que é uma lista de dicionários?",
              options: ["Uma lista onde cada item é um dicionário", "Um dicionário com listas dentro", "A mesma coisa que um dicionário", "Um tipo especial de variável"],
              correct: 0,
              explanation: "É uma lista [ ] onde cada item é um dicionário { }. Tipo um banco de dados!"
            },
            {
              question: "Como acessar o cliente da segunda OS?",
              code: 'ordens = [\n    {"numero": 6650, "cliente": "Minerva"},\n    {"numero": 6632, "cliente": "Castro"}\n]',
              options: ['ordens[1]["cliente"]', 'ordens[2]["cliente"]', 'ordens["cliente"][1]', 'ordens.cliente[1]'],
              correct: 0,
              explanation: "ordens[1] pega o segundo item (índice 1), e [\"cliente\"] pega o campo cliente."
            },
            {
              question: "O que esse código faz?",
              code: 'total = 0\nfor os in ordens:\n    if os["status"] == "aberta":\n        total += os["valor"]',
              options: ["Soma valores só das OS abertas", "Soma todos os valores", "Conta quantas OS abertas", "Remove as OS abertas"],
              correct: 0,
              explanation: "O if filtra só as abertas, e o += soma os valores delas no total."
            },
            {
              question: "Lista de dicionários é parecida com:",
              options: ["Uma tabela de banco de dados", "Uma variável simples", "Um número", "Um comentário"],
              correct: 0,
              explanation: "Cada dicionário é uma 'linha' e cada chave é uma 'coluna'. Igualzinho um banco de dados!"
            },
            {
              question: "No for abaixo, o que 'os' representa a cada volta?",
              code: 'for os in ordens:\n    print(os)',
              options: ["Um dicionário completo (uma OS)", "Um número", "Uma string", "O índice"],
              correct: 0,
              explanation: "Cada 'os' é um dicionário inteiro da lista, com todas as chaves e valores."
            }
          ]
        }
      ]
    }
  ]
}
