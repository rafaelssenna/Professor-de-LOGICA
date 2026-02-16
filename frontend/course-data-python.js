// ============================================
// CURSO DE PYTHON - HELSEN SERVICE
// Sistema de aprendizado progressivo para funcionários
// ============================================

const COURSE_DATA_PYTHON = {
  title: "Aprender Python - Do Zero ao Sistema MATH",
  modules: [
    // ========== MÓDULO 1: PRIMEIROS PASSOS ==========
    {
      id: 1,
      title: "Primeiros Passos",
      lessons: [
        {
          id: "1-1",
          title: "Variáveis",
          duration: "30 min",
          module: "Primeiros Passos",
          sections: [
            {
              type: "explanation",
              title: "O que é uma variável?",
              content: "Variável = uma <strong>CAIXA</strong> que guarda um valor. Você dá um <strong>NOME</strong> pra caixa e coloca algo dentro. É assim que o computador lembra das coisas."
            },
            {
              type: "code-example",
              title: "Criando variáveis em Python",
              code: '# Python não precisa de "let" ou "const"\n# Só escreve o nome e o valor!\nnome = "Leon Mendes"\nidade = 30\naltura = 1.75\n\nprint(nome)\nprint(idade)\nprint(altura)',
              runnable: true
            },
            {
              type: "explanation",
              title: "Diferença entre Python e JavaScript",
              content: "Em JavaScript você usa <code>let</code> ou <code>const</code>. Em Python, você só escreve o nome!<br><br><strong>JavaScript:</strong> <code>let nome = \"Leon\"</code><br><strong>Python:</strong> <code>nome = \"Leon\"</code><br><br>Muito mais simples! Python descobre sozinho se é texto, número, etc."
            },
            {
              type: "code-example",
              title: "Tipos de valores",
              code: '# String = texto (entre aspas)\nnome_cliente = "Maria Silva"\n\n# Int = número inteiro (sem aspas)\nnumero_os = 6650\n\n# Float = número decimal\nvalor_hora = 175.50\n\n# Boolean = verdadeiro ou falso\nos_aberta = True\n\n# type() mostra o tipo:\nprint(type(nome_cliente))  # <class \'str\'>\nprint(type(numero_os))     # <class \'int\'>\nprint(type(valor_hora))    # <class \'float\'>\nprint(type(os_aberta))     # <class \'bool\'>',
              runnable: true
            },
            {
              type: "explanation",
              title: "F-Strings (juntando texto com variáveis)",
              content: "Quando você quer misturar texto com variáveis, Python tem um jeito <strong>muito fácil</strong> chamado <strong>f-string</strong>. Funciona assim:<br><br><strong>1.</strong> Coloque <strong>f</strong> antes das aspas: <code>f\"texto\"</code><br><strong>2.</strong> Pra colocar uma variável dentro do texto, use <strong><code>{variavel}</code></strong><br><br>Pense assim: é como um modelo de OS preenchido. O modelo é o texto com f, e os <code>{}</code> são os campos que o sistema preenche automático.<br><br><div class='highlight-box tip'><strong>Resumo:</strong> f antes das aspas + chaves <code>{variavel}</code> = texto com variáveis misturadas!</div>"
            },
            {
              type: "code-example",
              title: "F-Strings na prática",
              code: 'nome_cliente = "Maria Silva"\nnumero_os = 6650\n\n# JEITO ANTIGO (chato, cheio de +):\nprint("Cliente " + nome_cliente + " - OS " + str(numero_os))\n\n# JEITO NOVO com f-string (facil!):\nprint(f"Cliente {nome_cliente} - OS {numero_os}")\n\n# Os dois mostram a mesma coisa!\n# Mas com f-string fica MUITO mais facil de ler',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1",
              instructions: "Crie 3 variáveis: <strong>nome_tecnico</strong> (string), <strong>especialidade</strong> (string) e <strong>anos_experiencia</strong> (número). Coloque valores que façam sentido e mostre cada uma com print.",
              starterCode: '# Crie as variaveis aqui:\n\n\n# Mostre com print:\n',
              solution: 'nome_tecnico = "Carlos Silva"\nespecialidade = "Eletrica"\nanos_experiencia = 5\n\nprint(nome_tecnico)\nprint(especialidade)\nprint(anos_experiencia)',
              validation: "structure",
              checks: { codeHas: ["nome_tecnico", "especialidade", "anos_experiencia", "print"], minOutput: 3 }
            },
            {
              type: "exercise",
              title: "Exercício 2",
              instructions: "Crie uma variável chamada \"nome_sistema\" com valor \"MATH\" e outra \"versao\" com valor 2. Depois mostre: <code>Sistema MATH - Versao 2</code> usando f-string.<br><br><div class='highlight-box tip'><strong>Lembrete:</strong> f-string usa <strong>f antes das aspas</strong> e <strong>{nome_variavel}</strong> pra colocar variável dentro do texto. Exemplo: <code>f\"Ola {nome}\"</code></div>",
              starterCode: '# Crie as variaveis:\n\n\n# Mostre com f-string (use f e {}):\n',
              solution: 'nome_sistema = "MATH"\nversao = 2\n\nprint(f"Sistema {nome_sistema} - Versao {versao}")',
              validation: "structure",
              checks: { codeHas: ["nome_sistema", "versao", "print", "f\"", "{"], outputHas: ["MATH", "2"] }
            },
            {
              type: "exercise",
              title: "Exercício 3",
              instructions: "Crie variáveis pra uma Ordem de Serviço: <strong>numero_os</strong> (número), <strong>cliente</strong> (string), <strong>descricao</strong> (string), <strong>urgente</strong> (True ou False), <strong>valor</strong> (número). Depois mostre tudo numa mensagem usando f-string.<br><br><div class='highlight-box tip'><strong>Lembrete:</strong> Use f-string: <code>print(f\"OS {numero_os} - Cliente: {cliente}\")</code></div>",
              starterCode: '# Crie as variaveis da OS:\n\n\n\n\n\n# Mostre a mensagem completa com f-string:\n',
              solution: 'numero_os = 6650\ncliente = "Minerva Usinagem"\ndescricao = "Troca de rolamento"\nurgente = True\nvalor = 1145\n\nprint(f"OS {numero_os} - Cliente: {cliente} - {descricao} - Urgente: {urgente} - Valor: R${valor}")',
              validation: "structure",
              checks: { codeHas: ["numero_os", "cliente", "descricao", "urgente", "valor", "print", "f\""], minOutput: 1 }
            }
          ],
          quiz: [
            {
              question: "Qual a diferença entre criar variável em Python e JavaScript?",
              options: ["Python não precisa de let/const, só escreve o nome", "Python usa var ao invés de let", "Python precisa declarar o tipo", "Não tem diferença"],
              correct: 0,
              explanation: "Em Python você só escreve nome = valor. Não precisa de let, const ou var!"
            },
            {
              question: "O que type(42) retorna em Python?",
              options: ["<class 'int'>", "'number'", "'integer'", "42"],
              correct: 0,
              explanation: "type() retorna <class 'int'> pra números inteiros em Python."
            },
            {
              question: "Como criar uma f-string em Python?",
              options: ["f\"texto {variavel}\"", "`texto ${variavel}`", "\"texto \" + variavel", "str(texto, variavel)"],
              correct: 0,
              explanation: "F-string usa f antes das aspas e {} pra variáveis: f\"Ola {nome}\""
            },
            {
              question: "Qual o valor de True em Python?",
              options: ["True (com T maiúsculo)", "true (minúsculo)", "1", "Verdadeiro"],
              correct: 0,
              explanation: "Em Python, booleanos são True e False (com primeira letra maiúscula)."
            }
          ]
        },
        {
          id: "1-2",
          title: "Operações Matemáticas",
          duration: "30 min",
          module: "Primeiros Passos",
          sections: [
            {
              type: "explanation",
              title: "Operações básicas",
              content: "Python sabe fazer matemática! No sistema MATH, calcular valor de serviço, horas trabalhadas, custos... tudo usa operações matemáticas."
            },
            {
              type: "code-example",
              title: "As 6 operações principais",
              code: 'a = 10\nb = 3\n\nprint(a + b)   # 13  (soma)\nprint(a - b)   # 7   (subtracao)\nprint(a * b)   # 30  (multiplicacao)\nprint(a / b)   # 3.33 (divisao - sempre retorna float)\nprint(a // b)  # 3   (divisao inteira - so a parte inteira)\nprint(a % b)   # 1   (resto: 10/3 = 3, resta 1)\nprint(a ** b)  # 1000 (potencia: 10 elevado a 3)',
              runnable: true
            },
            {
              type: "explanation",
              title: "Divisão: / vs //",
              content: "Python tem <strong>dois tipos de divisão</strong>:<br><br><code>/</code> = divisão normal (retorna float): <code>10 / 3 = 3.333...</code><br><code>//</code> = divisão inteira (só a parte inteira): <code>10 // 3 = 3</code><br><br>Use <code>/</code> quando quiser o valor exato. Use <code>//</code> quando só importa a parte inteira."
            },
            {
              type: "code-example",
              title: "Exemplo real: valor de serviço",
              code: 'horas = 6.5\nvalor_hora = 175\nmaterial = 250\ndesconto = 50\n\nmao_de_obra = horas * valor_hora\ntotal = mao_de_obra + material - desconto\n\nprint(f"Mao de obra: R${mao_de_obra}")\nprint(f"Material: R${material}")\nprint(f"Desconto: R${desconto}")\nprint(f"TOTAL: R${total}")',
              runnable: true
            },
            {
              type: "explanation",
              title: "Arredondamento e formatação",
              content: "<strong>round():</strong> arredonda pra número de casas decimais<br><strong>int():</strong> converte pra inteiro (corta casas decimais)<br><strong>float():</strong> converte pra decimal<br><br>Exemplo:<br><code>valor = 345.6789</code><br><code>round(valor, 2)</code> → 345.68 (2 casas)<br><code>int(valor)</code> → 345 (sem casas)"
            },
            {
              type: "code-example",
              title: "Arredondando e convertendo",
              code: 'valor = 345.6789\n\nprint(round(valor, 2))     # 345.68 (2 casas)\nprint(round(valor, 1))     # 345.7 (1 casa)\nprint(int(valor))          # 345 (sem casas)\n\n# CUIDADO: texto + texto JUNTA, nao soma!\na = "10"\nb = "5"\nprint(a + b)       # "105" (ERRADO!)\nprint(int(a) + int(b))  # 15 (CERTO!)',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1",
              instructions: "Um técnico trabalhou em 3 OS: 2 horas, 3.5 horas e 1.5 horas. Valor da hora: R$175. Calcule e mostre o total do dia.",
              starterCode: 'horas1 = 2\nhoras2 = 3.5\nhoras3 = 1.5\nvalor_hora = 175\n\n# Calcule o total:\n\n\n# Mostre o resultado:\n',
              solution: 'horas1 = 2\nhoras2 = 3.5\nhoras3 = 1.5\nvalor_hora = 175\n\ntotal_horas = horas1 + horas2 + horas3\ntotal_dia = total_horas * valor_hora\n\nprint(f"Total: {total_horas}h = R${total_dia}")',
              validation: "structure",
              checks: { codeHas: ["print"], outputHas: ["1225"] }
            },
            {
              type: "exercise",
              title: "Exercício 2",
              instructions: "45 máquinas, cada manutenção R$320. Com 15% de desconto no pacote. Calcule: valor sem desconto, valor do desconto e valor final.",
              starterCode: 'maquinas = 45\ncusto_unitario = 320\n\n# Calcule:\n\n\n# Mostre os 3 valores:\n',
              solution: 'maquinas = 45\ncusto_unitario = 320\n\nsem_desconto = maquinas * custo_unitario\nvalor_desconto = sem_desconto * 0.15\ncom_desconto = sem_desconto - valor_desconto\n\nprint(f"Sem desconto: R${sem_desconto}")\nprint(f"Desconto: R${valor_desconto}")\nprint(f"Com desconto: R${com_desconto}")',
              validation: "structure",
              checks: { codeHas: ["print"], outputHas: ["14400", "2160", "12240"], minOutput: 3 }
            },
            {
              type: "exercise",
              title: "Exercício 3",
              instructions: "Calcule quantos dias tem em 1000 horas. Use divisão inteira (//) pra pegar só a parte inteira. Depois calcule quantas horas sobram usando resto (%).",
              starterCode: 'total_horas = 1000\n\n# Calcule dias (1 dia = 24h):\n\n\n# Calcule horas que sobram:\n\n\n# Mostre:\n',
              solution: 'total_horas = 1000\n\ndias = total_horas // 24\nhoras_sobram = total_horas % 24\n\nprint(f"{total_horas} horas = {dias} dias e {horas_sobram} horas")',
              validation: "structure",
              checks: { codeHas: ["//", "%", "print"], outputHas: ["41", "16"] }
            }
          ],
          quiz: [
            {
              question: "Qual a diferença entre / e // em Python?",
              options: ["/ retorna float, // retorna inteiro", "/ é mais rápido", "// é divisão por 2", "Não tem diferença"],
              correct: 0,
              explanation: "/ = divisão normal (retorna float). // = divisão inteira (só parte inteira)."
            },
            {
              question: "O que 10 % 3 retorna?",
              options: ["1", "3", "3.33", "0"],
              correct: 0,
              explanation: "% é o resto da divisão. 10 / 3 = 3 com resto 1."
            },
            {
              question: "O que round(345.678, 1) retorna?",
              options: ["345.7", "345.68", "345", "346"],
              correct: 0,
              explanation: "round(valor, 1) arredonda pra 1 casa decimal: 345.7"
            },
            {
              question: "O que esse código mostra?",
              code: 'a = \"5\"\nb = \"3\"\nprint(a + b)',
              options: ['"53"', '8', 'Erro', '5 + 3'],
              correct: 0,
              explanation: "Quando soma string + string, Python JUNTA os textos: \"5\" + \"3\" = \"53\""
            }
          ]
        },
        {
          id: "1-3",
          title: "Números e Tipos",
          duration: "25 min",
          module: "Primeiros Passos",
          sections: [
            {
              type: "explanation",
              title: "Tipos numéricos em Python",
              content: "Python tem <strong>dois tipos principais</strong> de números:<br><br><strong>int</strong> = número inteiro (sem casas decimais): <code>1145</code>, <code>6650</code>, <code>-50</code><br><strong>float</strong> = número decimal (com ponto): <code>175.50</code>, <code>3.14</code>, <code>0.5</code><br><br>Quando você divide com <code>/</code>, SEMPRE vira float. Quando usa <code>//</code>, vira int."
            },
            {
              type: "code-example",
              title: "Int vs Float",
              code: '# Inteiros (int)\nnumero_os = 6650\nquantidade = 45\n\nprint(type(numero_os))  # <class \'int\'>\n\n# Decimais (float)\nvalor_hora = 175.50\npercentual = 0.15\n\nprint(type(valor_hora))  # <class \'float\'>\n\n# Conversões\nprint(int(3.9))      # 3 (corta as casas)\nprint(float(10))     # 10.0 (adiciona .0)\nprint(int("42"))     # 42 (converte texto pra int)',
              runnable: true
            },
            {
              type: "explanation",
              title: "Operações entre int e float",
              content: "Quando você mistura int e float, Python <strong>converte tudo pra float</strong>:<br><br><code>10 + 3.5</code> → 13.5 (float)<br><code>100 * 0.15</code> → 15.0 (float)<br><code>5 / 2</code> → 2.5 (float)<br><br>Só <code>//</code> e <code>%</code> podem retornar int (depende dos valores)."
            },
            {
              type: "code-example",
              title: "Misturando int e float",
              code: 'horas = 8        # int\nvalor_hora = 175.50  # float\n\ntotal = horas * valor_hora\nprint(total)         # 1404.0 (virou float!)\nprint(type(total))   # <class \'float\'>\n\n# Se quiser forçar pra int:\ntotal_int = int(total)\nprint(total_int)     # 1404',
              runnable: true
            },
            {
              type: "explanation",
              title: "Formatando números pra exibir",
              content: "Pra mostrar números com formato bonito, use f-string com <code>:.2f</code>:<br><br><code>f\"{valor:.2f}\"</code> = 2 casas decimais<br><code>f\"{valor:.1f}\"</code> = 1 casa decimal<br><code>f\"{valor:.0f}\"</code> = sem casas decimais<br><br>O <code>f</code> depois do <code>:</code> significa \"float formatado\"."
            },
            {
              type: "code-example",
              title: "Formatação em f-strings",
              code: 'valor = 1145.6789\n\nprint(f"2 casas: R${valor:.2f}")  # R$1145.68\nprint(f"1 casa: R${valor:.1f}")   # R$1145.7\nprint(f"0 casas: R${valor:.0f}")  # R$1146\n\n# Útil pra dinheiro!\npreco = 175.5\nprint(f"Valor/hora: R${preco:.2f}")  # R$175.50',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1",
              instructions: "Crie duas variáveis: <strong>valor_total</strong> (float) com 1145.6789 e <strong>parcelas</strong> (int) com 3. Calcule o valor de cada parcela e mostre com 2 casas decimais usando f-string.",
              starterCode: '# Crie as variáveis:\n\n\n# Calcule valor da parcela:\n\n\n# Mostre com 2 casas decimais:\n',
              solution: 'valor_total = 1145.6789\nparcelas = 3\n\nvalor_parcela = valor_total / parcelas\n\nprint(f"Cada parcela: R${valor_parcela:.2f}")',
              validation: "structure",
              checks: { codeHas: ["valor_total", "parcelas", "print", ":.2f"], outputHas: ["381.89"] }
            },
            {
              type: "exercise",
              title: "Exercício 2",
              instructions: "Converta a string \"6650\" pra int, depois some com 10 e mostre o resultado. Se não converter, vai dar erro!",
              starterCode: 'numero_texto = "6650"\n\n# Converta pra int:\n\n\n# Some com 10:\n\n\n# Mostre:\n',
              solution: 'numero_texto = "6650"\n\nnumero_int = int(numero_texto)\nresultado = numero_int + 10\n\nprint(resultado)',
              validation: "structure",
              checks: { codeHas: ["int(", "print"], outputHas: ["6660"] }
            },
            {
              type: "exercise",
              title: "Exercício 3",
              instructions: "Calcule 15% de desconto sobre R$1145.00. Mostre o valor original, o desconto e o valor final, todos com 2 casas decimais.",
              starterCode: 'valor_original = 1145.00\n\n# Calcule o desconto (15%):\n\n\n# Calcule o valor final:\n\n\n# Mostre tudo com 2 casas:\n',
              solution: 'valor_original = 1145.00\n\ndesconto = valor_original * 0.15\nvalor_final = valor_original - desconto\n\nprint(f"Original: R${valor_original:.2f}")\nprint(f"Desconto: R${desconto:.2f}")\nprint(f"Final: R${valor_final:.2f}")',
              validation: "structure",
              checks: { codeHas: ["print", ":.2f"], outputHas: ["1145.00", "171.75", "973.25"], minOutput: 3 }
            }
          ],
          quiz: [
            {
              question: "Qual a diferença entre int e float?",
              options: ["int não tem casas decimais, float tem", "int é mais rápido", "float só pra dinheiro", "Não tem diferença"],
              correct: 0,
              explanation: "int = número inteiro (sem casas). float = número decimal (com ponto)."
            },
            {
              question: "O que acontece quando você divide com /?",
              options: ["Sempre retorna float", "Sempre retorna int", "Depende dos números", "Dá erro"],
              correct: 0,
              explanation: "Divisão com / SEMPRE retorna float, mesmo que o resultado seja exato (10 / 2 = 5.0)."
            },
            {
              question: "O que f\"{valor:.2f}\" faz?",
              options: ["Formata com 2 casas decimais", "Multiplica por 2", "Arredonda pra inteiro", "Converte pra string"],
              correct: 0,
              explanation: ":.2f formata o número com 2 casas decimais (útil pra dinheiro!)."
            },
            {
              question: "O que esse código mostra?",
              code: 'a = 10\nb = 3.0\nprint(type(a * b))',
              options: ["<class 'float'>", "<class 'int'>", "30", "Erro"],
              correct: 0,
              explanation: "Quando mistura int e float, o resultado SEMPRE vira float."
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
        {
          id: "2-1",
          title: "Strings e Concatenação",
          duration: "30 min",
          module: "Texto e Strings",
          sections: [
            {
              type: "explanation",
              title: "O que é uma String?",
              content: "String = TEXTO. Qualquer coisa entre aspas é string:<br><br><code>\"Leon Mendes\"</code> → string<br><code>'Minerva Usinagem'</code> → string<br><code>\"6650\"</code> → string (mesmo sendo número!)<br><br>Em Python, tanto aspas duplas <code>\"\"</code> quanto aspas simples <code>''</code> funcionam igual."
            },
            {
              type: "code-example",
              title: "Criando strings",
              code: '# Aspas duplas ou simples, tanto faz!\nnome1 = "Leon Mendes"\nnome2 = \'Dayvison Jepson\'\n\nprint(nome1)\nprint(nome2)\n\n# String com números (vira texto!)\nos_texto = "6650"\nprint(type(os_texto))  # <class \'str\'>\n\n# Se quiser numero, não usa aspas!\nos_numero = 6650\nprint(type(os_numero))  # <class \'int\'>',
              runnable: true
            },
            {
              type: "explanation",
              title: "Concatenação (juntar strings)",
              content: "Concatenação = juntar textos. Use <code>+</code> pra juntar strings:<br><br><code>\"Leon\" + \" \" + \"Mendes\"</code> → \"Leon Mendes\"<br><br><div style='background:#3a2a1a;border-left:3px solid #f48771;padding:10px;border-radius:4px'>⚠️ <strong>CUIDADO:</strong> Só funciona com strings! Se misturar string + número, dá erro. Precisa converter com <code>str()</code></div>"
            },
            {
              type: "code-example",
              title: "Concatenando strings",
              code: 'nome = "Leon"\nsobrenome = "Mendes"\n\n# Juntando com +\nnome_completo = nome + " " + sobrenome\nprint(nome_completo)  # Leon Mendes\n\n# ERRO: String + número não funciona!\n# print("OS " + 6650)  # TypeError!\n\n# CERTO: Converte pra string com str()\nprint("OS " + str(6650))  # OS 6650',
              runnable: true
            },
            {
              type: "explanation",
              title: "Métodos de string úteis",
              content: "Strings tem <strong>métodos</strong> (funções) que facilitam a vida:<br><br><code>.upper()</code> = TUDO MAIÚSCULO<br><code>.lower()</code> = tudo minúsculo<br><code>.title()</code> = Primeira Letra Maiúscula<br><code>.strip()</code> = remove espaços nas pontas<br><code>len()</code> = tamanho da string"
            },
            {
              type: "code-example",
              title: "Métodos de string",
              code: 'nome = "leon mendes"\n\nprint(nome.upper())   # LEON MENDES\nprint(nome.lower())   # leon mendes\nprint(nome.title())   # Leon Mendes\n\n# Remove espaços nas pontas\ntexto = "  Helsen Service  "\nprint(texto.strip())  # "Helsen Service"\n\n# Tamanho da string\nprint(len("Minerva Usinagem"))  # 16',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1",
              instructions: "Crie duas variáveis: <strong>cliente</strong> com \"Minerva\" e <strong>tipo</strong> com \"Usinagem\". Junte as duas com um espaço no meio e mostre o resultado.",
              starterCode: '# Crie as variáveis:\n\n\n# Junte com + e mostre:\n',
              solution: 'cliente = "Minerva"\ntipo = "Usinagem"\n\nnome_completo = cliente + " " + tipo\nprint(nome_completo)',
              validation: "structure",
              checks: { codeHas: ["cliente", "tipo", "+", "print"], outputHas: ["Minerva Usinagem"] }
            },
            {
              type: "exercise",
              title: "Exercício 2",
              instructions: "Converta o nome \"leon mendes\" pra formato correto (primeira letra maiúscula em cada palavra) usando o método <code>.title()</code>.",
              starterCode: 'nome = "leon mendes"\n\n# Converta pra Title Case:\n\n\n# Mostre:\n',
              solution: 'nome = "leon mendes"\n\nnome_correto = nome.title()\nprint(nome_correto)',
              validation: "structure",
              checks: { codeHas: [".title()", "print"], outputHas: ["Leon Mendes"] }
            },
            {
              type: "exercise",
              title: "Exercício 3",
              instructions: "Junte \"OS\", o número 6650 e o texto \"- Minerva\" numa string só. Lembre de converter o número pra string com <code>str()</code>!",
              starterCode: '# Crie a variável do número:\nnumero = 6650\n\n# Junte tudo:\n\n\n# Mostre:\n',
              solution: 'numero = 6650\n\nmensagem = "OS " + str(numero) + " - Minerva"\nprint(mensagem)',
              validation: "structure",
              checks: { codeHas: ["str(", "+", "print"], outputHas: ["OS 6650 - Minerva"] }
            }
          ],
          quiz: [
            {
              question: "Qual a diferença entre \"6650\" e 6650?",
              options: ["\"6650\" é string, 6650 é número", "São iguais", "\"6650\" é mais rápido", "6650 é string"],
              correct: 0,
              explanation: "Com aspas = string (texto). Sem aspas = número (int)."
            },
            {
              question: "O que .upper() faz?",
              options: ["Converte pra MAIÚSCULAS", "Converte pra minúsculas", "Remove espaços", "Conta letras"],
              correct: 0,
              explanation: ".upper() converte toda a string pra MAIÚSCULAS."
            },
            {
              question: "Como juntar \"OS\" com o número 6650?",
              options: ["\"OS \" + str(6650)", "\"OS \" + 6650", "\"OS \" * 6650", "concat(\"OS\", 6650)"],
              correct: 0,
              explanation: "Precisa converter número pra string com str() antes de concatenar."
            },
            {
              question: "O que esse código mostra?",
              code: 'texto = \"  Python  \"\nprint(len(texto.strip()))',
              options: ["6", "10", "8", "Erro"],
              correct: 0,
              explanation: ".strip() remove espaços (fica \"Python\" = 6 letras). len() conta: 6."
            }
          ]
        },
        {
          id: "2-2",
          title: "F-Strings Avançadas",
          duration: "30 min",
          module: "Texto e Strings",
          sections: [
            {
              type: "explanation",
              title: "F-Strings: a forma moderna",
              content: "F-strings são o jeito <strong>mais fácil e rápido</strong> de misturar variáveis com texto em Python. Funciona assim:<br><br>1. Coloca <code>f</code> antes das aspas<br>2. Coloca variáveis dentro de <code>{}</code><br><br><div class='highlight-box tip'>F-string é tipo template literal do JavaScript, mas MUITO mais poderoso!</div>"
            },
            {
              type: "code-example",
              title: "F-Strings básicas",
              code: 'tecnico = "Leon Mendes"\nvalor_hora = 175\nhoras = 6.5\n\n# SEM f-string (chato!):\nprint("Tecnico: " + tecnico + " - R$" + str(valor_hora) + "/hora")\n\n# COM f-string (facil!):\nprint(f"Tecnico: {tecnico} - R${valor_hora}/hora")\n\n# Pode fazer contas dentro das {}!\ntotal = horas * valor_hora\nprint(f"Total: {horas}h x R${valor_hora} = R${total}")',
              runnable: true
            },
            {
              type: "explanation",
              title: "Fazendo contas dentro de f-strings",
              content: "Você pode colocar <strong>qualquer expressão Python</strong> dentro das <code>{}</code>:<br><br><code>f\"Total: {10 * 5}\"</code> → \"Total: 50\"<br><code>f\"Nome: {nome.upper()}\"</code> → \"Nome: LEON\"<br><code>f\"Dobro: {valor * 2}\"</code> → \"Dobro: 350\"<br><br>Muito útil pra não precisar criar variáveis extras!"
            },
            {
              type: "code-example",
              title: "Expressões em f-strings",
              code: 'valor = 1145\n\n# Fazendo contas direto:\nprint(f"Com 10% desconto: R${valor * 0.9}")\n\n# Chamando métodos:\nnome = "leon mendes"\nprint(f"Nome: {nome.title()}")\n\n# Condições (ternário):\nstatus = "aberta"\nprint(f"Status: {\'URGENTE\' if status == \'aberta\' else \'Normal\'}")\n\n# Arredondamento:\nprint(f"Valor: R${valor:.2f}")',
              runnable: true
            },
            {
              type: "explanation",
              title: "Formatação de números em f-strings",
              content: "F-strings tem <strong>formatação embutida</strong> pra números:<br><br><code>f\"{valor:.2f}\"</code> = 2 casas decimais<br><code>f\"{valor:,.2f}\"</code> = 2 casas + separador de milhar<br><code>f\"{valor:>10}\"</code> = alinha à direita (10 espaços)<br><code>f\"{percentual:.1%}\"</code> = formata como porcentagem<br><br>Muito útil pra relatórios!"
            },
            {
              type: "code-example",
              title: "Formatação avançada",
              code: 'valor = 12345.6789\npercentual = 0.15\n\n# 2 casas decimais:\nprint(f"Valor: R${valor:.2f}")\n\n# Separador de milhar:\nprint(f"Valor: R${valor:,.2f}")\n\n# Porcentagem:\nprint(f"Desconto: {percentual:.0%}")\n\n# Alinhamento (útil pra tabelas):\nprint(f"Nome:  {\'Leon\':>15}")  # alinha direita\nprint(f"Valor: {valor:>15.2f}")',
              runnable: true
            },
            {
              type: "explanation",
              title: "F-Strings multilinhas",
              content: "Pra textos grandes, use <strong>aspas triplas</strong> com f-string:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px'>mensagem = f\"\"\"<br>Cliente: {cliente}<br>OS: {numero}<br>Valor: R${valor:.2f}<br>\"\"\"</pre><br>Mantém quebras de linha e indentação!"
            },
            {
              type: "code-example",
              title: "F-String multilinha",
              code: 'numero_os = 6650\ncliente = "Minerva Usinagem"\ntecnico = "Leon Mendes"\nvalor = 1145.50\n\nrelatorio = f"""\n========== ORDEM DE SERVICO ==========\nOS: {numero_os}\nCliente: {cliente}\nTecnico: {tecnico}\nValor Total: R${valor:.2f}\n======================================\n"""\n\nprint(relatorio)',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1",
              instructions: "Crie variáveis <strong>tecnico</strong>, <strong>horas</strong> e <strong>valor_hora</strong>. Use f-string pra mostrar: <code>Leon Mendes trabalhou 6.5h a R$175/hora = R$1137.50</code>",
              starterCode: '# Crie as variáveis:\n\n\n\n# Use f-string com cálculo:\n',
              solution: 'tecnico = "Leon Mendes"\nhoras = 6.5\nvalor_hora = 175\n\nprint(f"{tecnico} trabalhou {horas}h a R${valor_hora}/hora = R${horas * valor_hora:.2f}")',
              validation: "structure",
              checks: { codeHas: ["f\"", "{", "}", "print"], outputHas: ["Leon Mendes", "6.5", "175", "1137.50"] }
            },
            {
              type: "exercise",
              title: "Exercício 2",
              instructions: "Converta o nome \"MINERVA USINAGEM\" pra Title Case dentro da f-string (sem criar variável extra). Mostre: <code>Cliente: Minerva Usinagem</code>",
              starterCode: 'nome = "MINERVA USINAGEM"\n\n# Use .title() dentro da f-string:\n',
              solution: 'nome = "MINERVA USINAGEM"\n\nprint(f"Cliente: {nome.title()}")',
              validation: "structure",
              checks: { codeHas: ["f\"", ".title()", "print"], outputHas: ["Minerva Usinagem"] }
            },
            {
              type: "exercise",
              title: "Exercício 3",
              instructions: "Crie um relatório multilinha com f-string mostrando OS, cliente, valor original (R$1145.00) e valor com 15% desconto. Use :.2f pra formatar os valores.",
              starterCode: '# Crie as variáveis:\nnumero = 6650\ncliente = "Minerva Usinagem"\nvalor = 1145.00\n\n# Crie o relatório multilinha:\n',
              solution: 'numero = 6650\ncliente = "Minerva Usinagem"\nvalor = 1145.00\n\nrelatorio = f"""\nOS {numero} - {cliente}\nValor original: R${valor:.2f}\nDesconto 15%: R${valor * 0.15:.2f}\nValor final: R${valor * 0.85:.2f}\n"""\n\nprint(relatorio)',
              validation: "structure",
              checks: { codeHas: ["f\"\"\"", "{", ":.2f", "print"], minOutput: 4 }
            }
          ],
          quiz: [
            {
              question: "Como criar uma f-string?",
              options: ["f\"texto {variavel}\"", "\"texto {variavel}\"", "format(\"texto\", variavel)", "str(\"texto\", variavel)"],
              correct: 0,
              explanation: "F-string precisa do f antes das aspas: f\"texto {var}\""
            },
            {
              question: "Pode fazer contas dentro de {}?",
              options: ["Sim, qualquer expressão Python", "Não, só variáveis", "Só soma e subtração", "Só com números"],
              correct: 0,
              explanation: "Dentro de {} pode colocar QUALQUER expressão Python (contas, métodos, etc)."
            },
            {
              question: "O que f\"{valor:.2f}\" faz?",
              options: ["Formata com 2 casas decimais", "Multiplica por 2", "Converte pra int", "Remove casas decimais"],
              correct: 0,
              explanation: ":.2f formata o número com 2 casas decimais."
            },
            {
              question: "O que esse código mostra?",
              code: 'nome = \"leon\"\nprint(f\"Nome: {nome.upper()}\")',
              options: ["\"Nome: LEON\"", "\"Nome: leon\"", "\"Nome: Leon\"", "Erro"],
              correct: 0,
              explanation: ".upper() dentro da f-string converte pra maiúsculas: LEON."
            }
          ]
        }
      ]
    },

    // ========== MÓDULO 3: LISTAS E LOOPS ==========
    {
      id: 3,
      title: "Listas e Loops",
      lessons: [
        {
          id: "3-1",
          title: "Listas (Arrays)",
          duration: "40 min",
          module: "Listas e Loops",
          sections: [
            {
              type: "explanation",
              title: "O que é uma Lista? Pensa assim...",
              content: "Imagina uma <strong>caixa de ferramentas</strong>. Dentro dela tem várias ferramentas organizadas:<br><br>🔧 Posição 0: Chave de fenda<br>🔧 Posição 1: Alicate<br>🔧 Posição 2: Martelo<br><br>Uma <strong>lista</strong> é EXATAMENTE isso: uma <strong>COLEÇÃO de valores</strong> dentro de uma variável só.<br><br>Na Helsen Service, usamos listas o tempo todo:<br>- Lista de técnicos (Leon Mendes, Dayvison Jepson, Valdinei Pereira)<br>- Lista de OS (6650, 6632, 6620)<br>- Lista de clientes<br><br><div style='background:#1a3a2a;border-left:3px solid #4caf50;padding:10px;border-radius:4px'>Lista = <strong>\"Coleção ordenada de valores\"</strong></div>"
            },
            {
              type: "explanation",
              title: "Criando sua primeira lista",
              content: "Criar uma lista é super simples! Usa colchetes <code>[]</code> e separa os valores com vírgula:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px'>tecnicos = [\"Leon Mendes\", \"Dayvison Jepson\", \"Valdinei Pereira\"]</pre><br>Pode ter:<br>✓ Textos (entre aspas)<br>✓ Números (sem aspas)<br>✓ True/False<br>✓ Até outras listas!<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Lista vazia = <code>lista = []</code></div>"
            },
            {
              type: "code-example",
              title: "Exemplo: Listas com diferentes tipos",
              code: '# Lista de textos (nomes de tecnicos):\ntecnicos = ["Leon Mendes", "Dayvison Jepson", "Valdinei Pereira"]\nprint("Tecnicos:", tecnicos)\n\n# Lista de numeros (numeros de OS):\nos_numeros = [6650, 6632, 6620, 6579]\nprint("OS:", os_numeros)\n\n# Lista de valores:\nvalores = [1145, 700, 445, 890]\nprint("Valores:", valores)\n\n# Lista vazia:\nvazia = []\nprint("Lista vazia:", vazia)',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1A - Criando uma lista",
              instructions: "Crie uma lista chamada <strong>clientes</strong> com 3 nomes de clientes da Helsen (invente os nomes). Depois mostre a lista inteira com print.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Lembra: <code>clientes = [\"Nome1\", \"Nome2\", \"Nome3\"]</code></div>",
              starterCode: '# Crie a lista clientes:\n\n\n# Mostre ela:\n',
              solution: 'clientes = ["Minerva Usinagem", "Usinagem Castro", "Off Limits"]\n\nprint(clientes)',
              validation: "structure",
              checks: { codeHas: ["clientes", "[", "]", "print"], minOutput: 1 }
            },
            {
              type: "explanation",
              title: "Acessando itens da lista (COMEÇA NO ZERO!)",
              content: "<div style='background:#3a2a1a;border-left:3px solid #f48771;padding:10px;border-radius:4px;margin-bottom:15px'>⚠️ <strong>ATENÇÃO:</strong> Listas começam na posição <strong>0</strong> (zero), NÃO no 1!</div>Imagina um prédio de 3 andares:<br><br>🏢 Andar 0 (térreo) = primeiro item<br>🏢 Andar 1 = segundo item<br>🏢 Andar 2 = terceiro item<br><br>Pra acessar um item, use colchetes com o número da posição:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px'>tecnicos = [\"Leon\", \"Dayvison\", \"Valdinei\"]<br><br>print(tecnicos[0])  # \"Leon\" (primeiro!)<br>print(tecnicos[1])  # \"Dayvison\"<br>print(tecnicos[2])  # \"Valdinei\" (último!)</pre>"
            },
            {
              type: "code-example",
              title: "Exemplo: Acessando cada item",
              code: 'tecnicos = ["Leon Mendes", "Dayvison Jepson", "Valdinei Pereira"]\n\n# IMPORTANTE: Comeca no ZERO!\nprint("Posicao 0 (primeiro):", tecnicos[0])  # Leon Mendes\nprint("Posicao 1:", tecnicos[1])            # Dayvison Jepson\nprint("Posicao 2 (ultimo):", tecnicos[2])   # Valdinei Pereira\n\n# Indice negativo = conta de tras pra frente!\nprint("\\nUltimo (-1):", tecnicos[-1])      # Valdinei Pereira\nprint("Penultimo (-2):", tecnicos[-2])      # Dayvison Jepson',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1B - Acessando itens",
              instructions: "Já tem uma lista de clientes criada. Mostre APENAS o <strong>primeiro cliente</strong> (posição 0) e o <strong>último cliente</strong> (posição -1) com print.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Use: <code>print(clientes[0])</code> e <code>print(clientes[-1])</code></div>",
              starterCode: 'clientes = ["Minerva Usinagem", "Usinagem Castro", "Off Limits"]\n\n# Mostre o primeiro:\n\n\n# Mostre o ultimo:\n',
              solution: 'clientes = ["Minerva Usinagem", "Usinagem Castro", "Off Limits"]\n\nprint(clientes[0])\nprint(clientes[-1])',
              validation: "structure",
              checks: { codeHas: ["[0]", "[-1]", "print"], outputHas: ["Minerva", "Off Limits"] }
            },
            {
              type: "explanation",
              title: "Tamanho da lista com len()",
              content: "Use <code>len()</code> pra saber <strong>quantos itens</strong> tem na lista:<br><br><code>len([\"Leon\", \"Dayvison\", \"Valdinei\"])</code> → 3<br><code>len([1145, 700, 445])</code> → 3<br><code>len([])</code> → 0<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 <code>len</code> = \"length\" (comprimento em inglês)</div>"
            },
            {
              type: "code-example",
              title: "Usando len()",
              code: 'tecnicos = ["Leon Mendes", "Dayvison Jepson", "Valdinei Pereira"]\n\nquantidade = len(tecnicos)\nprint(f"Total de tecnicos: {quantidade}")\n\n# Util pra pegar o ultimo item:\nultimo_indice = len(tecnicos) - 1  # 3 - 1 = 2\nprint(f"Ultimo: {tecnicos[ultimo_indice]}")\n\n# Ou simplesmente use [-1]:\nprint(f"Ultimo (facil): {tecnicos[-1]}")',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1C - Tamanho da lista",
              instructions: "Use <code>len()</code> pra mostrar quantas OS existem na lista. Depois mostre: <code>Total de OS: X</code>",
              starterCode: 'os_numeros = [6650, 6632, 6620, 6579, 6841, 6843]\n\n# Conte quantas OS:\n\n\n# Mostre com f-string:\n',
              solution: 'os_numeros = [6650, 6632, 6620, 6579, 6841, 6843]\n\nquantidade = len(os_numeros)\nprint(f"Total de OS: {quantidade}")',
              validation: "structure",
              checks: { codeHas: ["len(", "print"], outputHas: ["6"] }
            },
            {
              type: "explanation",
              title: "Adicionando itens com .append()",
              content: "Use <code>.append()</code> pra adicionar um item <strong>no final</strong> da lista:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px'>tecnicos = [\"Leon\", \"Dayvison\"]<br>tecnicos.append(\"Valdinei\")<br>print(tecnicos)  # [\"Leon\", \"Dayvison\", \"Valdinei\"]</pre><br>O item SEMPRE vai pro final!"
            },
            {
              type: "code-example",
              title: "Adicionando com .append()",
              code: 'tecnicos = ["Leon Mendes", "Dayvison Jepson"]\nprint("Antes:", tecnicos)\nprint(f"Tamanho: {len(tecnicos)}")\n\n# Adiciona Valdinei\ntecnicos.append("Valdinei Pereira")\nprint("\\nDepois:", tecnicos)\nprint(f"Tamanho: {len(tecnicos)}")\n\n# Pode adicionar varios:\ntecnicos.append("Carlos Silva")\ntecnicos.append("Ana Santos")\nprint("\\nFinal:", tecnicos)',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1D - Adicionando itens",
              instructions: "Comece com uma lista vazia de OS. Adicione 3 números de OS usando .append() (6650, 6632, 6620). Depois mostre a lista completa.",
              starterCode: '# Crie lista vazia:\nos_lista = []\n\n# Adicione 3 numeros:\n\n\n\n# Mostre a lista:\n',
              solution: 'os_lista = []\n\nos_lista.append(6650)\nos_lista.append(6632)\nos_lista.append(6620)\n\nprint(os_lista)',
              validation: "structure",
              checks: { codeHas: [".append(", "print"], outputHas: ["6650", "6632", "6620"] }
            },
            {
              type: "explanation",
              title: "Removendo itens",
              content: "Tem <strong>3 formas</strong> de remover itens:<br><br><code>.remove(valor)</code> = remove o PRIMEIRO item com aquele valor<br><code>.pop()</code> = remove e retorna o ÚLTIMO item<br><code>.pop(indice)</code> = remove e retorna item na posição específica<br><br><div style='background:#3a2a1a;border-left:3px solid #f48771;padding:10px;border-radius:4px'>⚠️ Se tentar remover algo que não existe, dá erro!</div>"
            },
            {
              type: "code-example",
              title: "Removendo itens",
              code: 'tecnicos = ["Leon", "Dayvison", "Valdinei", "Carlos"]\nprint("Original:", tecnicos)\n\n# Remove por valor:\ntecnicos.remove("Carlos")\nprint("Depois remove:", tecnicos)\n\n# Remove ultimo (e retorna):\nultimo = tecnicos.pop()\nprint(f"Removeu: {ultimo}")\nprint("Depois pop:", tecnicos)\n\n# Remove posicao especifica:\nprimeiro = tecnicos.pop(0)\nprint(f"Removeu: {primeiro}")\nprint("Final:", tecnicos)',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1E - Removendo itens",
              instructions: "Comece com a lista [6650, 6632, 6620, 6579]. Remova o último item com .pop() e guarde numa variável. Depois mostre a lista e o item removido.",
              starterCode: 'os_lista = [6650, 6632, 6620, 6579]\n\n# Remova o ultimo:\n\n\n# Mostre a lista:\n\n\n# Mostre o removido:\n',
              solution: 'os_lista = [6650, 6632, 6620, 6579]\n\nremovido = os_lista.pop()\n\nprint("Lista:", os_lista)\nprint(f"Removido: {removido}")',
              validation: "structure",
              checks: { codeHas: [".pop()", "print"], outputHas: ["6650", "6632", "6620", "6579"] }
            },
            {
              type: "explanation",
              title: "Verificando se item existe com in",
              content: "Use <code>in</code> pra verificar se um item <strong>está na lista</strong>:<br><br><code>\"Leon\" in tecnicos</code> → True ou False<br><code>6650 in os_lista</code> → True ou False<br><br>Muito útil antes de fazer operações!"
            },
            {
              type: "code-example",
              title: "Usando in",
              code: 'tecnicos = ["Leon Mendes", "Dayvison Jepson", "Valdinei Pereira"]\n\n# Verifica se existe:\nif "Leon Mendes" in tecnicos:\n    print("Leon esta na lista!")\nelse:\n    print("Leon NAO esta na lista")\n\n# Verifica se NAO existe:\nif "Carlos Silva" not in tecnicos:\n    print("Carlos NAO esta na lista")\n    tecnicos.append("Carlos Silva")\n    print("Adicionei Carlos!")',
              runnable: true
            }
          ],
          quiz: [
            {
              question: "Qual o índice do primeiro item de uma lista?",
              options: ["0", "1", "-1", "Depende da lista"],
              correct: 0,
              explanation: "Listas em Python (e na maioria das linguagens) começam no índice 0!"
            },
            {
              question: "O que len([1, 2, 3, 4, 5]) retorna?",
              options: ["5", "4", "6", "Erro"],
              correct: 0,
              explanation: "len() conta quantos itens tem na lista: 5 itens."
            },
            {
              question: "O que .append() faz?",
              options: ["Adiciona item no final da lista", "Remove o ultimo item", "Ordena a lista", "Conta os itens"],
              correct: 0,
              explanation: ".append(item) adiciona o item NO FINAL da lista."
            },
            {
              question: "O que esse código mostra?",
              code: 'lista = [10, 20, 30]\nprint(lista[-1])',
              options: ["30", "10", "20", "Erro"],
              correct: 0,
              explanation: "Índice -1 = último item da lista = 30."
            },
            {
              question: "Como verificar se 'Leon' está na lista?",
              options: ["'Leon' in lista", "lista.contains('Leon')", "lista.has('Leon')", "find('Leon', lista)"],
              correct: 0,
              explanation: "Use 'in' pra verificar se item existe: 'Leon' in lista."
            }
          ]
        },
        {
          id: "3-2",
          title: "Loops (For)",
          duration: "35 min",
          module: "Listas e Loops",
          sections: [
            {
              type: "explanation",
              title: "O que é um Loop?",
              content: "Loop = <strong>repetir código</strong> várias vezes.<br><br>Imagina que você tem uma lista de 100 técnicos e quer mostrar cada um. Sem loop, você teria que escrever <code>print</code> 100 vezes! 😱<br><br>Com loop, você escreve <strong>1 vez só</strong> e ele repete automaticamente!<br><br><div style='background:#1a3a2a;border-left:3px solid #4caf50;padding:10px;border-radius:4px'>Loop = \"Faça isso pra CADA item da lista\"</div>"
            },
            {
              type: "explanation",
              title: "Loop for in Python",
              content: "A estrutura do <code>for</code> em Python é <strong>muito simples</strong>:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px'>for item in lista:<br>    print(item)</pre><br>Leia assim: \"<strong>PARA CADA</strong> item NA lista, faça algo\"<br><br><div style='background:#3a2a1a;border-left:3px solid #f48771;padding:10px;border-radius:4px'>⚠️ <strong>IMPORTANTE:</strong> Em Python, a <strong>indentação</strong> (espaços) é OBRIGATÓRIA! O código dentro do loop PRECISA estar mais pra direita (geralmente 4 espaços ou 1 Tab).</div>"
            },
            {
              type: "code-example",
              title: "Primeiro loop for",
              code: 'tecnicos = ["Leon Mendes", "Dayvison Jepson", "Valdinei Pereira"]\n\nprint("=== Lista de Tecnicos ===\")\n\n# For = "para cada"\nfor tecnico in tecnicos:\n    print(tecnico)  # Repete 3 vezes!\n\nprint("\\n=== Fim ===\")',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1A - Primeiro loop",
              instructions: "Use um loop <code>for</code> pra mostrar cada cliente da lista, um por linha.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Estrutura:<br><code>for cliente in clientes:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>print(cliente)</code></div>",
              starterCode: 'clientes = ["Minerva Usinagem", "Usinagem Castro", "Off Limits"]\n\n# Loop aqui:\n',
              solution: 'clientes = ["Minerva Usinagem", "Usinagem Castro", "Off Limits"]\n\nfor cliente in clientes:\n    print(cliente)',
              validation: "structure",
              checks: { codeHas: ["for", "in", "print"], minOutput: 3 }
            },
            {
              type: "explanation",
              title: "Loop com f-strings",
              content: "Você pode usar <strong>f-strings dentro do loop</strong> pra formatar a saída:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px'>for tecnico in tecnicos:<br>    print(f\"Tecnico: {tecnico}\")</pre><br>Cada volta do loop, a variável <code>tecnico</code> muda de valor!"
            },
            {
              type: "code-example",
              title: "Loop com f-string",
              code: 'os_numeros = [6650, 6632, 6620, 6579]\n\nprint("=== Ordens de Servico ===\")\n\nfor numero in os_numeros:\n    print(f"OS #{numero}")\n\nprint(f"\\nTotal: {len(os_numeros)} OS")',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1B - Loop com f-string",
              instructions: "Use loop pra mostrar cada técnico com a mensagem: <code>Tecnico disponivel: [nome]</code>",
              starterCode: 'tecnicos = ["Leon Mendes", "Dayvison Jepson", "Valdinei Pereira"]\n\n# Loop com f-string:\n',
              solution: 'tecnicos = ["Leon Mendes", "Dayvison Jepson", "Valdinei Pereira"]\n\nfor tecnico in tecnicos:\n    print(f"Tecnico disponivel: {tecnico}")',
              validation: "structure",
              checks: { codeHas: ["for", "f\"", "print"], outputHas: ["Leon", "Dayvison", "Valdinei"] }
            },
            {
              type: "explanation",
              title: "Somando valores com loop",
              content: "Pra somar todos os valores de uma lista, crie uma variável <code>total</code> começando em 0, e vá <strong>somando cada item</strong>:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px'>total = 0<br>for valor in valores:<br>    total = total + valor</pre><br>ou use o atalho: <code>total += valor</code>"
            },
            {
              type: "code-example",
              title: "Somando com loop",
              code: 'valores = [1145, 700, 445, 890]\n\n# Comeca do zero:\ntotal = 0\n\n# Soma cada valor:\nfor valor in valores:\n    total = total + valor  # ou: total += valor\n    print(f"Somando {valor}... Total ate agora: {total}")\n\nprint(f"\\nFaturamento total: R${total}")',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 2A - Somando valores",
              instructions: "Some todos os valores da lista de OS e mostre o total. Use uma variável <code>total</code> começando em 0.",
              starterCode: 'valores_os = [1145, 700, 445, 890, 1385]\n\n# Crie variavel total:\n\n\n# Loop pra somar:\n\n\n# Mostre o total:\n',
              solution: 'valores_os = [1145, 700, 445, 890, 1385]\n\ntotal = 0\n\nfor valor in valores_os:\n    total += valor\n\nprint(f"Faturamento total: R${total}")',
              validation: "structure",
              checks: { codeHas: ["total", "for", "+=", "print"], outputHas: ["4565"] }
            },
            {
              type: "explanation",
              title: "Loop com contador",
              content: "Pra contar quantos itens passaram por uma condição, crie um <code>contador</code> começando em 0:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px'>contador = 0<br>for valor in valores:<br>    if valor > 1000:<br>        contador += 1</pre>"
            },
            {
              type: "code-example",
              title: "Contando com loop",
              code: 'valores = [1145, 700, 445, 890, 1385, 1312]\n\ncontador = 0\n\nfor valor in valores:\n    if valor > 1000:\n        contador += 1\n        print(f"OS alta: R${valor}")\n\nprint(f"\\nTotal de OS acima de R$1000: {contador}")',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 2B - Contando itens",
              instructions: "Conte quantos valores são MAIORES que 800. Use um contador começando em 0.",
              starterCode: 'valores = [1145, 700, 445, 890, 1385, 532, 1312]\n\n# Crie contador:\n\n\n# Loop com if:\n\n\n# Mostre o total:\n',
              solution: 'valores = [1145, 700, 445, 890, 1385, 532, 1312]\n\ncontador = 0\n\nfor valor in valores:\n    if valor > 800:\n        contador += 1\n\nprint(f"OS acima de R$800: {contador}")',
              validation: "structure",
              checks: { codeHas: ["contador", "for", "if", ">", "print"], outputHas: ["4"] }
            },
            {
              type: "explanation",
              title: "Loop com range()",
              content: "Às vezes você quer repetir algo <strong>N vezes</strong>, sem ter uma lista. Use <code>range()</code>:<br><br><code>range(5)</code> → 0, 1, 2, 3, 4<br><code>range(1, 6)</code> → 1, 2, 3, 4, 5<br><code>range(0, 10, 2)</code> → 0, 2, 4, 6, 8<br><br>Estrutura: <code>range(inicio, fim, passo)</code>"
            },
            {
              type: "code-example",
              title: "Loop com range()",
              code: '# Repete 5 vezes:\nfor i in range(5):\n    print(f"Volta {i}")\n\nprint()\n\n# De 1 ate 10:\nfor numero in range(1, 11):\n    print(f"OS {6600 + numero}")\n\nprint()\n\n# De 2 em 2:\nfor i in range(0, 10, 2):\n    print(f"Par: {i}")',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 2C - Loop com range",
              instructions: "Use <code>range()</code> pra gerar números de OS de 6650 até 6655 (6 OS no total). Mostre: <code>OS #6650</code>, <code>OS #6651</code>, etc.",
              starterCode: '# Loop com range:\n',
              solution: 'for i in range(6650, 6656):\n    print(f"OS #{i}")',
              validation: "structure",
              checks: { codeHas: ["range(", "for", "print"], outputHas: ["6650", "6651", "6655"], minOutput: 6 }
            }
          ],
          quiz: [
            {
              question: "O que o loop for faz?",
              options: ["Repete código para cada item da lista", "Cria uma lista", "Remove itens da lista", "Conta os itens"],
              correct: 0,
              explanation: "for percorre (itera) cada item da lista e repete o código dentro."
            },
            {
              question: "Por que a indentação é importante em Python?",
              options: ["Define quais linhas fazem parte do loop", "É só pra ficar bonito", "Não é importante", "Só pra comentários"],
              correct: 0,
              explanation: "Em Python, a indentação (espaços) define BLOCOS de código. Sem indentação, dá erro!"
            },
            {
              question: "O que range(3) gera?",
              options: ["0, 1, 2", "1, 2, 3", "0, 1, 2, 3", "3"],
              correct: 0,
              explanation: "range(3) gera: 0, 1, 2 (começa no 0, vai até 3-1=2)."
            },
            {
              question: "Como somar todos os valores de uma lista?",
              options: ["Criar total = 0, depois total += valor no loop", "Usar .sum()", "Multiplicar os valores", "Não é possível"],
              correct: 0,
              explanation: "Cria variável total = 0, depois no loop: total += valor."
            },
            {
              question: "O que esse código mostra?",
              code: 'for i in range(2, 5):\n    print(i)',
              options: ["2, 3, 4", "2, 3, 4, 5", "1, 2, 3, 4, 5", "Erro"],
              correct: 0,
              explanation: "range(2, 5) gera 2, 3, 4 (até 5-1)."
            }
          ]
        }
      ]
    },

    // ========== MÓDULO 4: FUNÇÕES ==========
    {
      id: 4,
      title: "Funções",
      lessons: [
        {
          id: "4-1",
          title: "Criando Funções",
          duration: "40 min",
          module: "Funções",
          sections: [
            {
              type: "explanation",
              title: "O que é uma função? A analogia da receita de bolo",
              content: "Imagina que você quer fazer um bolo. Você NÃO inventa a receita toda vez, né? Você:<br><br>1. Olha a <strong>receita</strong> (instruções)<br>2. Pega os <strong>ingredientes</strong> (valores)<br>3. Segue os <strong>passos</strong><br>4. <strong>Resultado:</strong> bolo pronto!<br><br>Função é EXATAMENTE isso! É uma <strong>receita de código</strong>:<br><br>📝 Você escreve a função UMA VEZ<br>🍰 Depois \"chama\" ela quantas vezes quiser<br>🎯 Cada vez pode usar ingredientes (valores) diferentes<br>✨ E ela retorna o resultado<br><br><div style='background:#1a3a2a;border-left:3px solid #4caf50;padding:10px;border-radius:4px'>Função = <strong>\"Receita de código que você pode usar várias vezes\"</strong></div>"
            },
            {
              type: "explanation",
              title: "Estrutura de uma função (super simples!)",
              content: "A estrutura mais básica é assim:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px'>def nome_da_funcao():<br>    # codigo que vai rodar quando voce chamar<br>    print(\"Ola!\")<br><br># Chamando (usando) a funcao:<br>nome_da_funcao()</pre><br>Explicando cada parte:<br><br>📌 <code>def</code> = palavra mágica pra criar função<br>📌 <code>nome_da_funcao</code> = nome que você escolhe<br>📌 <code>( )</code> = parênteses OBRIGATÓRIOS (por enquanto vazios)<br>📌 <code>:</code> = dois pontos no final<br>📌 Código dentro = <strong>indentado</strong> (4 espaços)<br>📌 Pra usar: chama o nome com <code>()</code><br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Criar a função NÃO executa ela! Você precisa CHAMAR depois.</div>"
            },
            {
              type: "code-example",
              title: "Exemplo: Função SEM parâmetros",
              code: '# 1. CRIAR a funcao (ainda nao roda!):\ndef mostrar_mensagem():\n    print("Bem-vindo a Helsen Service!")\n    print("Sistema MATH Academy")\n\n# 2. CHAMAR a funcao (agora SIM roda!):\nmostrar_mensagem()\n\n# Pode chamar quantas vezes quiser:\nmostrar_mensagem()\nmostrar_mensagem()\n\n# Cada vez que chama, roda o codigo inteiro de novo!',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1A - Função simples (sem parâmetros)",
              instructions: "Crie uma função chamada <strong>mostrar_tecnicos</strong> que mostra 3 nomes de técnicos com print. Depois CHAME a função pra rodar.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Estrutura:<br><code>def mostrar_tecnicos():</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>print(\"Leon Mendes\")</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code># ... mais 2 tecnicos</code><br><br>Depois chama: <code>mostrar_tecnicos()</code></div>",
              starterCode: '# Crie a funcao mostrar_tecnicos:\n\n\n# Chame a funcao:\n',
              solution: 'def mostrar_tecnicos():\n    print("Leon Mendes")\n    print("Dayvison Jepson")\n    print("Valdinei Pereira")\n\nmostrar_tecnicos()',
              validation: "structure",
              checks: { codeHas: ["def mostrar_tecnicos", "print", "mostrar_tecnicos()"], minOutput: 3 }
            },
            {
              type: "explanation",
              title: "Parâmetros — Os \"ingredientes\" da função",
              content: "Até agora a função faz sempre a MESMA coisa. Mas e se você quiser mudar algo? Tipo:<br><br>🍰 Fazer bolo de chocolate OU de morango?<br>🔧 Calcular serviço de 2 horas OU de 5 horas?<br><br>Pra isso usamos <strong>PARÂMETROS</strong> — são como ingredientes que você passa pra função:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px'>def saudar(nome):<br>    print(f\"Oi, {nome}!\")<br><br>saudar(\"Leon\")      # Oi, Leon!<br>saudar(\"Dayvison\")  # Oi, Dayvison!</pre><br><div style='background:#1a3a2a;border-left:3px solid #4caf50;padding:10px;border-radius:4px'>Parâmetro = variável que recebe o valor quando você chama a função!</div>"
            },
            {
              type: "code-example",
              title: "Exemplo: Função COM parâmetro",
              code: '# Funcao que recebe o nome do tecnico:\ndef mostrar_tecnico(nome):\n    print(f"Tecnico: {nome}")\n    print("Status: Disponivel")\n    print("---")\n\n# Chamando com valores diferentes:\nmostrar_tecnico("Leon Mendes")\nmostrar_tecnico("Dayvison Jepson")\nmostrar_tecnico("Valdinei Pereira")\n\n# A mesma funcao, mas cada vez mostra um tecnico diferente!',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1B - Função com 1 parâmetro",
              instructions: "Crie uma função <strong>mostrar_cliente</strong> que recebe o nome do cliente e mostra: <code>Cliente: [nome]</code>. Chame 2 vezes com clientes diferentes.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 <code>def mostrar_cliente(nome):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>print(f\"Cliente: {nome}\")</code></div>",
              starterCode: '# Crie a funcao:\n\n\n# Chame 2 vezes:\n',
              solution: 'def mostrar_cliente(nome):\n    print(f"Cliente: {nome}")\n\nmostrar_cliente("Minerva Usinagem")\nmostrar_cliente("Usinagem Castro")',
              validation: "structure",
              checks: { codeHas: ["def mostrar_cliente", "nome", "print", "mostrar_cliente("], minOutput: 2 }
            },
            {
              type: "explanation",
              title: "Vários parâmetros (vários ingredientes!)",
              content: "Função pode receber QUANTOS parâmetros você quiser! Separa com vírgula:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px'>def calcular(horas, valor_hora):<br>    total = horas * valor_hora<br>    print(f\"Total: R${total}\")<br><br>calcular(4, 175)  # Total: R$700<br>calcular(2, 175)  # Total: R$350</pre><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 A ORDEM importa! Primeiro parâmetro recebe primeiro valor, segundo parâmetro recebe segundo valor, etc.</div>"
            },
            {
              type: "code-example",
              title: "Exemplo: Função com 2 parâmetros",
              code: 'def mostrar_os(numero, cliente):\n    print(f"OS #{numero}")\n    print(f"Cliente: {cliente}")\n    print("---")\n\n# Chamando com valores diferentes:\nmostrar_os(6650, "Minerva Usinagem")\nmostrar_os(6632, "Usinagem Castro")\nmostrar_os(6620, "Off Limits")\n\n# Repara: numero sempre vem primeiro, cliente sempre segundo!',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1C - Função com 2 parâmetros",
              instructions: "Crie função <strong>calcular_servico</strong> que recebe <code>horas</code> e <code>valor_hora</code>. Calcule o total e mostre: <code>Total: R$[valor]</code>. Teste com 6.5 horas a R$175/hora.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Dentro da função:<br><code>total = horas * valor_hora</code><br><code>print(f\"Total: R${total}\")</code></div>",
              starterCode: '# Crie a funcao:\n\n\n# Chame com 6.5 horas, R$175/hora:\n',
              solution: 'def calcular_servico(horas, valor_hora):\n    total = horas * valor_hora\n    print(f"Total: R${total}")\n\ncalcular_servico(6.5, 175)',
              validation: "structure",
              checks: { codeHas: ["def calcular_servico", "horas", "valor_hora", "print"], outputHas: ["1137.5"] }
            },
            {
              type: "explanation",
              title: "return — Devolvendo um resultado",
              content: "Até agora as funções só MOSTRAM coisas (print). Mas e se você quiser GUARDAR o resultado numa variável?<br><br>Pra isso usa <strong>return</strong> pra DEVOLVER um valor:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px'>def somar(a, b):<br>    resultado = a + b<br>    return resultado  # DEVOLVE o valor<br><br>total = somar(10, 20)  # total recebe 30<br>print(total)  # 30</pre><br><div style='background:#1a3a2a;border-left:3px solid #4caf50;padding:10px;border-radius:4px'><strong>return</strong> = \"termina a função e devolve esse valor\"</div><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Depois do return, o código para! Nada mais roda naquela função.</div>"
            },
            {
              type: "code-example",
              title: "Exemplo: print vs return",
              code: '# FUNCAO 1: So mostra (nao retorna)\ndef mostrar_total(a, b):\n    total = a + b\n    print(f"Total: {total}")\n    # NAO retorna nada!\n\n# FUNCAO 2: Retorna o valor\ndef calcular_total(a, b):\n    total = a + b\n    return total  # DEVOLVE o valor\n\n# Testando:\nmostrar_total(10, 20)  # Mostra: Total: 30\nx = mostrar_total(10, 20)  # x recebe None!\nprint(f"x = {x}")\n\ny = calcular_total(10, 20)  # y recebe 30\nprint(f"y = {y}")\n\n# Viu a diferenca? Com return voce pode GUARDAR o resultado!',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1D - Função com return",
              instructions: "Crie função <strong>calcular_valor_os</strong> que recebe <code>horas</code> e <code>valor_hora</code>, calcula o total e RETORNA (return) o valor. Depois guarde o resultado numa variável e mostre.<br><br><div style='background:#1a2a3a;border-left:3px solid #4fc3f7;padding:10px;border-radius:4px'>💡 Dentro da função:<br><code>total = horas * valor_hora</code><br><code>return total</code><br><br>Depois:<br><code>valor = calcular_valor_os(8, 175)</code><br><code>print(f\"Valor: R${valor}\")</code></div>",
              starterCode: '# Crie a funcao com return:\n\n\n# Chame e guarde numa variavel:\n\n\n# Mostre o resultado:\n',
              solution: 'def calcular_valor_os(horas, valor_hora):\n    total = horas * valor_hora\n    return total\n\nvalor = calcular_valor_os(8, 175)\nprint(f"Valor: R${valor}")',
              validation: "structure",
              checks: { codeHas: ["def calcular_valor_os", "return", "calcular_valor_os(", "print"], outputHas: ["1400"] }
            }
          ],
          quiz: [
            {
              question: "O que 'return' faz numa função?",
              options: ["Devolve um valor e termina a função", "Mostra algo na tela", "Para o programa inteiro", "Cria uma variável"],
              correct: 0,
              explanation: "return devolve um valor pra quem chamou a função e termina a execução daquela função."
            },
            {
              question: "O que esse código mostra?",
              code: 'def dobrar(n):\n    return n * 2\n\nx = dobrar(5)\nprint(x)',
              options: ["10", "5", "n * 2", "None"],
              correct: 0,
              explanation: "dobrar(5) retorna 5 * 2 = 10. x recebe 10. print mostra 10."
            },
            {
              question: "Qual a diferença entre parâmetro e argumento?",
              options: ["Parâmetro é na definição, argumento é no chamado", "São a mesma coisa", "Argumento é na definição, parâmetro é no chamado", "Parâmetro é só pra números"],
              correct: 0,
              explanation: "Parâmetro é a variável na DEFINIÇÃO (def f(parametro)). Argumento é o VALOR que você passa quando CHAMA (f(argumento))."
            },
            {
              question: "O que esse código mostra?",
              code: 'def somar(a, b):\n    print(a + b)\n\nx = somar(2, 3)\nprint(x)',
              options: ["5 depois None", "5 depois 5", "None depois 5", "Erro"],
              correct: 0,
              explanation: "Primeiro mostra 5 (print dentro da função). x recebe None (função não tem return). Depois mostra None."
            }
          ]
        },
        {
          id: "4-2",
          title: "List Comprehension",
          duration: "35 min",
          module: "Funções",
          sections: [
            {
              type: "explanation",
              title: "O que é List Comprehension?",
              content: "List Comprehension é uma forma <strong>super compacta</strong> de criar listas em Python. É como um loop for, mas em <strong>UMA linha só</strong>!<br><br>Ao invés de escrever:<br><pre style='background:#1e1e1e;padding:15px;border-radius:8px'>nova_lista = []<br>for item in lista:<br>    nova_lista.append(item * 2)</pre><br>Você escreve:<br><pre style='background:#1e1e1e;padding:15px;border-radius:8px'>nova_lista = [item * 2 for item in lista]</pre><br>Muito mais rápido e pythônico!"
            },
            {
              type: "explanation",
              title: "Estrutura básica",
              content: "A estrutura é assim:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px'>[<span style='color:#4ec9b0'>expressao</span> for <span style='color:#9cdcfe'>item</span> in <span style='color:#9cdcfe'>lista</span>]</pre><br>Leia assim: \"Pra CADA item NA lista, faça essa expressão\"<br><br>Exemplos:<br><code>[x * 2 for x in numeros]</code> → dobra cada número<br><code>[nome.upper() for nome in nomes]</code> → maiúsculas<br><code>[len(texto) for texto in textos]</code> → tamanho de cada texto"
            },
            {
              type: "code-example",
              title: "List Comprehension básica",
              code: '# Lista original:\nnumeros = [1, 2, 3, 4, 5]\n\n# JEITO TRADICIONAL (com loop):\ndobrados_loop = []\nfor n in numeros:\n    dobrados_loop.append(n * 2)\n\nprint("Com loop:", dobrados_loop)\n\n# JEITO PYTHÔNICO (list comprehension):\ndobrados_comp = [n * 2 for n in numeros]\n\nprint("Com comprehension:", dobrados_comp)\n\n# Resultado é o MESMO!',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1A - Primeira List Comprehension",
              instructions: "Use list comprehension pra criar uma lista com os nomes dos técnicos em MAIÚSCULAS. Use o método <code>.upper()</code>.",
              starterCode: 'tecnicos = ["Leon Mendes", "Dayvison Jepson", "Valdinei Pereira"]\n\n# Use list comprehension:\n\n\n# Mostre:\n',
              solution: 'tecnicos = ["Leon Mendes", "Dayvison Jepson", "Valdinei Pereira"]\n\nmaiusculas = [nome.upper() for nome in tecnicos]\n\nprint(maiusculas)',
              validation: "structure",
              checks: { codeHas: ["[", "for", "in", ".upper()", "print"], outputHas: ["LEON", "DAYVISON", "VALDINEI"] }
            },
            {
              type: "explanation",
              title: "List Comprehension com condição (if)",
              content: "Você pode FILTRAR itens adicionando <code>if</code> no final:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px'>[expressao for item in lista if condicao]</pre><br>Exemplos:<br><code>[x for x in numeros if x > 10]</code> → só maiores que 10<br><code>[n for n in nomes if len(n) > 5]</code> → só nomes com mais de 5 letras<br><code>[v for v in valores if v % 2 == 0]</code> → só pares"
            },
            {
              type: "code-example",
              title: "List Comprehension com filtro",
              code: 'valores = [1145, 700, 445, 890, 1385, 532, 1312]\n\n# Pegar SO os valores maiores que 800:\naltos = [v for v in valores if v > 800]\n\nprint("Valores altos:", altos)\nprint(f"Total: {len(altos)} OS")\n\n# Calcular 10% de desconto nos valores altos:\ncom_desconto = [v * 0.9 for v in valores if v > 800]\nprint("\\nCom 10% desconto:", com_desconto)',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1B - Comprehension com filtro",
              instructions: "Use list comprehension pra pegar APENAS os números de OS que começam com 66 (6650, 6632, 6620). Use <code>str(num).startswith(\"66\")</code> no if.",
              starterCode: 'os_numeros = [6650, 6632, 6620, 6579, 6841, 6843]\n\n# Filtre os que comecam com 66:\n\n\n# Mostre:\n',
              solution: 'os_numeros = [6650, 6632, 6620, 6579, 6841, 6843]\n\nos_66 = [num for num in os_numeros if str(num).startswith("66")]\n\nprint(os_66)',
              validation: "structure",
              checks: { codeHas: ["[", "for", "if", "startswith", "print"], outputHas: ["6650", "6632", "6620"] }
            },
            {
              type: "explanation",
              title: "List Comprehension com if/else (ternário)",
              content: "Pra usar <code>if/else</code> (não só filtrar), a estrutura muda:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px'>[expressao_true if condicao else expressao_false for item in lista]</pre><br>Repara que o <code>if/else</code> vem ANTES do <code>for</code>!<br><br>Exemplo:<br><code>[\"alto\" if v > 1000 else \"baixo\" for v in valores]</code>"
            },
            {
              type: "code-example",
              title: "Comprehension com if/else",
              code: 'valores = [1145, 700, 445, 890, 1385]\n\n# Classifica cada valor:\nclassificacao = [\n    "Alto" if v > 1000 else "Baixo"\n    for v in valores\n]\n\nprint("Valores:", valores)\nprint("Classificacao:", classificacao)\n\n# Juntando tudo:\nfor i in range(len(valores)):\n    print(f"R${valores[i]} = {classificacao[i]}")',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1C - Comprehension com if/else",
              instructions: "Use list comprehension com if/else pra criar lista de status: \"Urgente\" se valor > 1000, \"Normal\" caso contrário.",
              starterCode: 'valores = [1145, 700, 445, 890, 1385, 532]\n\n# Crie lista de status:\n\n\n# Mostre cada valor com seu status:\n',
              solution: 'valores = [1145, 700, 445, 890, 1385, 532]\n\nstatus = ["Urgente" if v > 1000 else "Normal" for v in valores]\n\nfor i in range(len(valores)):\n    print(f"R${valores[i]} - {status[i]}")',
              validation: "structure",
              checks: { codeHas: ["if", "else", "for", "print"], outputHas: ["Urgente", "Normal"] }
            },
            {
              type: "explanation",
              title: "List Comprehension aninhada",
              content: "Você pode usar list comprehension <strong>dentro de outra</strong>! Útil pra trabalhar com listas de listas (matrizes):<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px'>matriz = [[1, 2], [3, 4], [5, 6]]<br>achatada = [num for linha in matriz for num in linha]</pre><br>Resultado: <code>[1, 2, 3, 4, 5, 6]</code>"
            },
            {
              type: "code-example",
              title: "Comprehension aninhada",
              code: '# Lista de listas (OS por tecnico):\nos_por_tecnico = [\n    [6650, 6632],  # Leon\n    [6620, 6579],  # Dayvison\n    [6841, 6843]   # Valdinei\n]\n\n# Achatar tudo numa lista so:\ntodas_os = [os for tecnico in os_por_tecnico for os in tecnico]\n\nprint("OS por tecnico:", os_por_tecnico)\nprint("Todas as OS:", todas_os)\nprint(f"Total: {len(todas_os)} OS")',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 2A - Comprehension prática",
              instructions: "Dados os valores das OS, crie uma lista com o valor FINAL após aplicar 15% de desconto. Arredonde pra 2 casas com <code>round(valor, 2)</code>.",
              starterCode: 'valores_originais = [1145, 700, 445, 890]\n\n# Calcule valores com desconto:\n\n\n# Mostre antes e depois:\n',
              solution: 'valores_originais = [1145, 700, 445, 890]\n\nvalores_desconto = [round(v * 0.85, 2) for v in valores_originais]\n\nfor i in range(len(valores_originais)):\n    print(f"R${valores_originais[i]} -> R${valores_desconto[i]}")',
              validation: "structure",
              checks: { codeHas: ["[", "for", "in", "0.85", "print"], minOutput: 4 }
            }
          ],
          quiz: [
            {
              question: "O que list comprehension faz?",
              options: ["Cria lista em uma linha usando for", "Remove itens da lista", "Ordena a lista", "Conta os itens"],
              correct: 0,
              explanation: "List comprehension cria uma NOVA lista usando for, mas em uma linha só!"
            },
            {
              question: "Qual a sintaxe básica de list comprehension?",
              options: ["[expressao for item in lista]", "[for item in lista expressao]", "[item for lista in expressao]", "[lista for expressao in item]"],
              correct: 0,
              explanation: "Sintaxe: [expressao for item in lista] - expressão ANTES do for."
            },
            {
              question: "Como filtrar itens em list comprehension?",
              options: ["Adiciona if no final", "Adiciona filter() antes", "Usa where", "Não dá pra filtrar"],
              correct: 0,
              explanation: "Adiciona if NO FINAL: [x for x in lista if x > 10]"
            },
            {
              question: "O que esse código cria?",
              code: '[x * 2 for x in [1, 2, 3]]',
              options: ["[2, 4, 6]", "[1, 2, 3]", "[2, 2, 2]", "Erro"],
              correct: 0,
              explanation: "Multiplica cada número por 2: [2, 4, 6]"
            }
          ]
        }
      ]
    },

    // ========== MÓDULO 5: DICIONÁRIOS ==========
    {
      id: 5,
      title: "Dicionários",
      lessons: [
        {
          id: "5-1",
          title: "Dicionários (Objetos)",
          duration: "35 min",
          module: "Dicionários",
          sections: [
            {
              type: "explanation",
              title: "O que é um Dicionário?",
              content: "Dicionário = uma coleção de dados relacionados organizados em <strong>pares chave-valor</strong>.<br><br>Pensa assim: uma OS da Helsen tem MUITAS informações:<br>- Número da OS<br>- Cliente<br>- Técnico<br>- Valor<br>- Status<br><br>Ao invés de criar 5 variáveis separadas, você cria <strong>1 dicionário</strong> com 5 propriedades!<br><br><div style='background:#1a3a2a;border-left:3px solid #4caf50;padding:10px;border-radius:4px'>Dicionário = <strong>\"Coleção de pares chave: valor\"</strong></div>"
            },
            {
              type: "explanation",
              title: "Criando um dicionário",
              content: "Usa chaves <code>{}</code> e separa chave de valor com <code>:</code>:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px'>os = {<br>    \"numero\": 6650,<br>    \"cliente\": \"Minerva Usinagem\",<br>    \"valor\": 1145<br>}</pre><br>Cada linha é um <strong>par chave: valor</strong>.<br>A chave é tipo o \"nome\" do dado.<br>O valor é o dado em si."
            },
            {
              type: "code-example",
              title: "Estrutura REAL de uma OS da Helsen",
              code: '# Assim que uma OS e armazenada!\nos = {\n    "numero": 6650,\n    "cliente": "Minerva Usinagem",\n    "tecnico_id": 41,  # Leon Mendes\n    "status": "completed",\n    "valor": 1145,\n    "horas": 6.5\n}\n\n# Acessando as propriedades:\nprint(f"OS: {os[\'numero\']}")\nprint(f"Cliente: {os[\'cliente\']}")\nprint(f"Valor: R${os[\'valor\']}")\nprint(f"Status: {os[\'status\']}")',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1A - Primeiro dicionário",
              instructions: "Crie um dicionário <strong>tecnico</strong> com as chaves: \"nome\", \"id\" e \"valor_hora\". Use dados do Leon Mendes (id: 41, valor: 175). Mostre o nome e o valor/hora.",
              starterCode: '# Crie o dicionario:\n\n\n\n\n\n# Mostre nome e valor/hora:\n',
              solution: 'tecnico = {\n    "nome": "Leon Mendes",\n    "id": 41,\n    "valor_hora": 175\n}\n\nprint(f"Tecnico: {tecnico[\'nome\']}")\nprint(f"Valor/hora: R${tecnico[\'valor_hora\']}")',
              validation: "structure",
              checks: { codeHas: ["{", ":", "nome", "id", "valor_hora", "print"], minOutput: 2 }
            },
            {
              type: "explanation",
              title: "Acessando valores",
              content: "Tem <strong>2 formas</strong> de acessar valores:<br><br><code>dicionario[\"chave\"]</code> → dá erro se chave não existir<br><code>dicionario.get(\"chave\")</code> → retorna None se não existir<br><br>Use <code>[]</code> quando tem certeza que a chave existe.<br>Use <code>.get()</code> quando não tem certeza."
            },
            {
              type: "code-example",
              title: "Acessando com [] e .get()",
              code: 'os = {\n    "numero": 6650,\n    "cliente": "Minerva Usinagem",\n    "valor": 1145\n}\n\n# Com colchetes []:\nprint(f"Numero: {os[\'numero\']}")  # 6650\n\n# Com .get():\nprint(f"Cliente: {os.get(\'cliente\')}")  # Minerva Usinagem\n\n# Chave que nao existe:\nprint(f"Status: {os.get(\'status\')}")  # None\nprint(f"Status ou padrao: {os.get(\'status\', \'N/A\')}")  # N/A\n\n# Se tentar [] com chave inexistente, da ERRO:\n# print(os[\'status\'])  # KeyError!',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1B - Acessando valores",
              instructions: "Use <code>.get()</code> pra acessar \"status\" do dicionário. Se não existir, use \"aberta\" como padrão. Mostre o status.",
              starterCode: 'os = {\n    "numero": 6650,\n    "cliente": "Minerva Usinagem",\n    "valor": 1145\n}\n\n# Acesse status com get (padrao "aberta"):\n\n\n# Mostre:\n',
              solution: 'os = {\n    "numero": 6650,\n    "cliente": "Minerva Usinagem",\n    "valor": 1145\n}\n\nstatus = os.get("status", "aberta")\nprint(f"Status: {status}")',
              validation: "structure",
              checks: { codeHas: [".get(", "aberta", "print"], outputHas: ["aberta"] }
            },
            {
              type: "explanation",
              title: "Modificando e adicionando valores",
              content: "Pra <strong>modificar</strong> um valor existente ou <strong>adicionar</strong> uma nova chave:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px'>os[\"status\"] = \"completed\"  # modifica ou adiciona</pre><br>Se a chave já existe, <strong>modifica</strong>.<br>Se não existe, <strong>adiciona</strong>."
            },
            {
              type: "code-example",
              title: "Modificando dicionários",
              code: 'os = {\n    "numero": 6650,\n    "cliente": "Minerva Usinagem",\n    "status": "aberta"\n}\n\nprint("Antes:", os)\n\n# Modificar valor existente:\nos["status"] = "completed"\nprint("\\nDepois de mudar status:", os)\n\n# Adicionar nova chave:\nos["valor"] = 1145\nprint("\\nDepois de adicionar valor:", os)\n\n# Modificar varias de uma vez:\nos["tecnico_id"] = 41\nos["horas"] = 6.5\nprint("\\nFinal:", os)',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1C - Modificando dicionário",
              instructions: "Comece com um dicionário de OS com \"numero\" e \"cliente\". Adicione \"status\" (\"aberta\") e \"valor\" (1145). Depois mude o status pra \"completed\". Mostre o dicionário final.",
              starterCode: 'os = {\n    "numero": 6650,\n    "cliente": "Minerva Usinagem"\n}\n\n# Adicione status e valor:\n\n\n# Mude status pra completed:\n\n\n# Mostre:\n',
              solution: 'os = {\n    "numero": 6650,\n    "cliente": "Minerva Usinagem"\n}\n\nos["status"] = "aberta"\nos["valor"] = 1145\n\nos["status"] = "completed"\n\nprint(os)',
              validation: "structure",
              checks: { codeHas: ["os[", "status", "valor", "completed", "print"], outputHas: ["6650", "completed", "1145"] }
            },
            {
              type: "explanation",
              title: "Percorrendo dicionários",
              content: "Tem <strong>3 formas</strong> de percorrer um dicionário com loop:<br><br><code>for chave in dict:</code> → percorre só as CHAVES<br><code>for valor in dict.values():</code> → percorre só os VALORES<br><code>for chave, valor in dict.items():</code> → percorre AMBOS<br><br>Use <code>.items()</code> quando precisar de chave E valor."
            },
            {
              type: "code-example",
              title: "Loops em dicionários",
              code: 'os = {\n    "numero": 6650,\n    "cliente": "Minerva Usinagem",\n    "valor": 1145,\n    "status": "completed"\n}\n\nprint("=== So as CHAVES ===\")\nfor chave in os:\n    print(chave)\n\nprint("\\n=== So os VALORES ===\")\nfor valor in os.values():\n    print(valor)\n\nprint("\\n=== CHAVE e VALOR ===\")\nfor chave, valor in os.items():\n    print(f"{chave}: {valor}")',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1D - Loop em dicionário",
              instructions: "Use loop com <code>.items()</code> pra mostrar cada propriedade do técnico no formato: <code>chave: valor</code>",
              starterCode: 'tecnico = {\n    "nome": "Leon Mendes",\n    "id": 41,\n    "valor_hora": 175,\n    "ativo": True\n}\n\n# Loop com .items():\n',
              solution: 'tecnico = {\n    "nome": "Leon Mendes",\n    "id": 41,\n    "valor_hora": 175,\n    "ativo": True\n}\n\nfor chave, valor in tecnico.items():\n    print(f"{chave}: {valor}")',
              validation: "structure",
              checks: { codeHas: [".items()", "for", "in", "print"], minOutput: 4 }
            }
          ],
          quiz: [
            {
              question: "O que é um dicionário em Python?",
              options: ["Coleção de pares chave: valor", "Lista ordenada", "Só pra guardar números", "Função especial"],
              correct: 0,
              explanation: "Dicionário = coleção de pares chave: valor (como objeto em JavaScript)."
            },
            {
              question: "Como acessar valor de forma segura (sem erro)?",
              options: [".get('chave')", "['chave']", ".value('chave')", ".find('chave')"],
              correct: 0,
              explanation: ".get() retorna None se chave não existe, ao invés de dar erro."
            },
            {
              question: "Como adicionar nova chave ao dicionário?",
              options: ["dict['nova_chave'] = valor", "dict.add('nova_chave', valor)", "dict.append('nova_chave')", "dict.insert('nova_chave')"],
              correct: 0,
              explanation: "dict['chave'] = valor adiciona se não existir, modifica se existir."
            },
            {
              question: "O que .items() retorna?",
              options: ["Pares (chave, valor)", "Só chaves", "Só valores", "Tamanho do dict"],
              correct: 0,
              explanation: ".items() retorna tuplas de (chave, valor) - útil pra loops."
            }
          ]
        },
        {
          id: "5-2",
          title: "Listas de Dicionários",
          duration: "35 min",
          module: "Dicionários",
          sections: [
            {
              type: "explanation",
              title: "O que é uma Lista de Dicionários?",
              content: "No sistema real da Helsen, você tem <strong>várias OS</strong>, <strong>vários técnicos</strong>, <strong>vários clientes</strong>.<br><br>Cada OS é um <strong>dicionário</strong>.<br>Todas as OS juntas = <strong>lista de dicionários</strong>!<br><br>É assim que bancos de dados funcionam:<br>Cada linha = um dicionário (registro)<br>Todas as linhas = lista de dicionários (tabela)"
            },
            {
              type: "code-example",
              title: "Lista REAL de OS da Helsen",
              code: '# Assim que as OS sao guardadas no banco!\nordens = [\n    {\n        "numero": 6650,\n        "cliente": "Minerva Usinagem",\n        "tecnico_id": 41,\n        "valor": 1145,\n        "status": "completed"\n    },\n    {\n        "numero": 6632,\n        "cliente": "Usinagem Castro",\n        "tecnico_id": 42,\n        "valor": 700,\n        "status": "avulso"\n    },\n    {\n        "numero": 6620,\n        "cliente": "Off Limits",\n        "tecnico_id": 41,\n        "valor": 445,\n        "status": "completed"\n    }\n]\n\nprint(f"Total de OS: {len(ordens)}")\nprint(f"\\nPrimeira OS: {ordens[0][\'numero\']} - {ordens[0][\'cliente\']}")',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1A - Criando lista de dicts",
              instructions: "Crie uma lista chamada <strong>tecnicos</strong> com 3 dicionários. Cada um com \"nome\", \"id\" e \"valor_hora\". Use dados da Helsen (Leon id 41, Dayvison id 48, Valdinei id 42, todos R$175/h).",
              starterCode: '# Crie a lista de tecnicos:\ntecnicos = [\n\n\n\n]\n\n# Mostre quantos tem:\n',
              solution: 'tecnicos = [\n    {"nome": "Leon Mendes", "id": 41, "valor_hora": 175},\n    {"nome": "Dayvison Jepson", "id": 48, "valor_hora": 175},\n    {"nome": "Valdinei Pereira", "id": 42, "valor_hora": 175}\n]\n\nprint(f"Total de tecnicos: {len(tecnicos)}")',
              validation: "structure",
              checks: { codeHas: ["[", "{", "nome", "id", "valor_hora", "print"], minOutput: 1 }
            },
            {
              type: "explanation",
              title: "Percorrendo lista de dicionários",
              content: "Usa loop <code>for</code> pra percorrer a lista, e acessa cada propriedade com <code>[]</code>:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px'>for os in ordens:<br>    print(os[\"numero\"])<br>    print(os[\"cliente\"])</pre>"
            },
            {
              type: "code-example",
              title: "Loop em lista de dicionários",
              code: 'ordens = [\n    {"numero": 6650, "cliente": "Minerva Usinagem", "valor": 1145},\n    {"numero": 6632, "cliente": "Usinagem Castro", "valor": 700},\n    {"numero": 6620, "cliente": "Off Limits", "valor": 445}\n]\n\nprint("=== TODAS AS OS ===\")\nfor os in ordens:\n    print(f"OS {os[\'numero\']} - {os[\'cliente\']} - R${os[\'valor\']}")\n\n# Somar valores:\ntotal = 0\nfor os in ordens:\n    total += os["valor"]\n\nprint(f"\\nFaturamento total: R${total}")',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 1B - Loop em lista de dicts",
              instructions: "Percorra a lista de técnicos e mostre cada um no formato: <code>Tecnico #[id]: [nome] - R$[valor]/hora</code>",
              starterCode: 'tecnicos = [\n    {"nome": "Leon Mendes", "id": 41, "valor_hora": 175},\n    {"nome": "Dayvison Jepson", "id": 48, "valor_hora": 175},\n    {"nome": "Valdinei Pereira", "id": 42, "valor_hora": 175}\n]\n\n# Loop pra mostrar cada tecnico:\n',
              solution: 'tecnicos = [\n    {"nome": "Leon Mendes", "id": 41, "valor_hora": 175},\n    {"nome": "Dayvison Jepson", "id": 48, "valor_hora": 175},\n    {"nome": "Valdinei Pereira", "id": 42, "valor_hora": 175}\n]\n\nfor tec in tecnicos:\n    print(f"Tecnico #{tec[\'id\']}: {tec[\'nome\']} - R${tec[\'valor_hora\']}/hora")',
              validation: "structure",
              checks: { codeHas: ["for", "in", "tecnicos", "print"], minOutput: 3 }
            },
            {
              type: "explanation",
              title: "Filtrando lista de dicionários",
              content: "Pra <strong>filtrar</strong> (pegar só alguns itens), use list comprehension com <code>if</code>:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px'>completas = [os for os in ordens if os[\"status\"] == \"completed\"]</pre><br>Isso cria uma NOVA lista só com as OS completas!"
            },
            {
              type: "code-example",
              title: "Filtrando com list comprehension",
              code: 'ordens = [\n    {"numero": 6650, "cliente": "Minerva", "valor": 1145, "status": "completed"},\n    {"numero": 6632, "cliente": "Castro", "valor": 700, "status": "avulso"},\n    {"numero": 6620, "cliente": "Off Limits", "valor": 445, "status": "completed"},\n    {"numero": 6579, "cliente": "JMF", "valor": 545, "status": "archived"}\n]\n\n# Filtrar so as completed:\ncompletas = [os for os in ordens if os["status"] == "completed"]\n\nprint(f"OS completas: {len(completas)}")\n\nfor os in completas:\n    print(f"OS {os[\'numero\']} - {os[\'cliente\']} - R${os[\'valor\']}")',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 2A - Filtrando",
              instructions: "Filtre a lista de OS pra pegar APENAS as que tem valor MAIOR que 800. Mostre quantas são e liste cada uma.",
              starterCode: 'ordens = [\n    {"numero": 6650, "valor": 1145},\n    {"numero": 6632, "valor": 700},\n    {"numero": 6620, "valor": 445},\n    {"numero": 6841, "valor": 1385},\n    {"numero": 6579, "valor": 545}\n]\n\n# Filtre valor > 800:\n\n\n# Mostre quantidade e liste:\n',
              solution: 'ordens = [\n    {"numero": 6650, "valor": 1145},\n    {"numero": 6632, "valor": 700},\n    {"numero": 6620, "valor": 445},\n    {"numero": 6841, "valor": 1385},\n    {"numero": 6579, "valor": 545}\n]\n\naltas = [os for os in ordens if os["valor"] > 800]\n\nprint(f"OS acima de R$800: {len(altas)}")\n\nfor os in altas:\n    print(f"OS {os[\'numero\']} - R${os[\'valor\']}")',
              validation: "structure",
              checks: { codeHas: ["[", "for", "if", ">", "800", "print"], minOutput: 3 }
            },
            {
              type: "explanation",
              title: "Buscando um item específico",
              content: "Pra achar <strong>UM item específico</strong>, use loop com <code>break</code> ou list comprehension com <code>[0]</code>:<br><br><pre style='background:#1e1e1e;padding:15px;border-radius:8px'># Jeito 1: Loop com break<br>for os in ordens:<br>    if os[\"numero\"] == 6650:<br>        print(os)<br>        break<br><br># Jeito 2: List comprehension<br>resultado = [os for os in ordens if os[\"numero\"] == 6650][0]</pre>"
            },
            {
              type: "code-example",
              title: "Buscando item específico",
              code: 'ordens = [\n    {"numero": 6650, "cliente": "Minerva", "valor": 1145},\n    {"numero": 6632, "cliente": "Castro", "valor": 700},\n    {"numero": 6620, "cliente": "Off Limits", "valor": 445}\n]\n\n# Buscar OS 6632:\nprocurada = None\n\nfor os in ordens:\n    if os["numero"] == 6632:\n        procurada = os\n        break\n\nif procurada:\n    print(f"Achei! Cliente: {procurada[\'cliente\']}")\nelse:\n    print("OS nao encontrada")',
              runnable: true
            },
            {
              type: "exercise",
              title: "Exercício 2B - Buscando item",
              instructions: "Busque o técnico com id 41 na lista. Se achar, mostre o nome dele. Se não achar, mostre \"Tecnico nao encontrado\".",
              starterCode: 'tecnicos = [\n    {"nome": "Leon Mendes", "id": 41},\n    {"nome": "Dayvison Jepson", "id": 48},\n    {"nome": "Valdinei Pereira", "id": 42}\n]\n\n# Busque tecnico id 41:\n\n\n# Mostre resultado:\n',
              solution: 'tecnicos = [\n    {"nome": "Leon Mendes", "id": 41},\n    {"nome": "Dayvison Jepson", "id": 48},\n    {"nome": "Valdinei Pereira", "id": 42}\n]\n\nencontrado = None\n\nfor tec in tecnicos:\n    if tec["id"] == 41:\n        encontrado = tec\n        break\n\nif encontrado:\n    print(f"Encontrado: {encontrado[\'nome\']}")\nelse:\n    print("Tecnico nao encontrado")',
              validation: "structure",
              checks: { codeHas: ["for", "if", "==", "41", "print"], outputHas: ["Leon"] }
            },
            {
              type: "exercise",
              title: "Exercício 2C - Estatísticas",
              instructions: "Calcule e mostre: 1) Total de OS, 2) Valor total (soma), 3) Valor médio (total / quantidade). Use a lista de OS fornecida.",
              starterCode: 'ordens = [\n    {"numero": 6650, "valor": 1145},\n    {"numero": 6632, "valor": 700},\n    {"numero": 6620, "valor": 445},\n    {"numero": 6841, "valor": 1385},\n    {"numero": 6839, "valor": 1312}\n]\n\n# Calcule total de OS:\n\n\n# Calcule valor total:\n\n\n# Calcule media:\n\n\n# Mostre tudo:\n',
              solution: 'ordens = [\n    {"numero": 6650, "valor": 1145},\n    {"numero": 6632, "valor": 700},\n    {"numero": 6620, "valor": 445},\n    {"numero": 6841, "valor": 1385},\n    {"numero": 6839, "valor": 1312}\n]\n\nquantidade = len(ordens)\n\ntotal = 0\nfor os in ordens:\n    total += os["valor"]\n\nmedia = total / quantidade\n\nprint(f"Total de OS: {quantidade}")\nprint(f"Valor total: R${total}")\nprint(f"Valor medio: R${media:.2f}")',
              validation: "structure",
              checks: { codeHas: ["len(", "for", "total", "media", "print"], outputHas: ["5", "4987"], minOutput: 3 }
            }
          ],
          quiz: [
            {
              question: "O que é uma lista de dicionários?",
              options: ["Lista onde cada item é um dicionário", "Dicionário dentro de outro", "Lista de chaves", "Não existe em Python"],
              correct: 0,
              explanation: "Lista de dicionários = array de objetos. Cada item da lista é um dicionário completo."
            },
            {
              question: "Como acessar propriedade de item na lista?",
              options: ["lista[0]['chave']", "lista.0.chave", "lista['chave'][0]", "lista->chave"],
              correct: 0,
              explanation: "Primeiro acessa o índice [0], depois a chave ['chave']."
            },
            {
              question: "Como filtrar lista de dicionários?",
              options: ["List comprehension com if", ".filter()", ".where()", "Não dá pra filtrar"],
              correct: 0,
              explanation: "Use list comprehension: [item for item in lista if condicao]"
            },
            {
              question: "Como calcular soma de valores em lista de dicts?",
              options: ["Loop somando item['valor']", ".sum()", "reduce()", "Automático"],
              correct: 0,
              explanation: "Usa loop: total = 0; for item in lista: total += item['valor']"
            }
          ]
        }
      ]
    },

    // ========== MÓDULO 6: CLASSES ==========
    {
      id: 6,
      title: "Classes",
      lessons: [
        {
          id: "6-1",
          title: "Classes em Python",
          duration: "25 min",
          module: "Classes",
          sections: [
            {
              type: "text",
              content: `
          <h2>📖 O que são Classes?</h2>
          <p>Classes são <strong>moldes para criar objetos</strong>. Como uma receita que você pode usar para criar vários objetos similares.</p>
          <p>Em Python, classes são muito usadas para organizar código. Na Helsen Service, podemos ter uma classe <code>Tecnico</code>, uma classe <code>OrdemServico</code>, etc.</p>
          <p><strong>Exemplo básico:</strong></p>
          <pre><code>class Tecnico:
    def __init__(self, nome, valor_hora):
        self.nome = nome
        self.valor_hora = valor_hora

# Criando um técnico
leon = Tecnico("Leon Mendes", 175)
print(leon.nome)  # Leon Mendes</code></pre>
        `
            },
            {
              type: "text",
              content: `
          <h2>💻 Entendendo __init__ e self</h2>
          <p><code>__init__</code> é o <strong>construtor</strong> da classe. É chamado automaticamente quando você cria um objeto.</p>
          <p><code>self</code> representa <strong>o próprio objeto</strong>. É como dizer "eu mesmo".</p>
          <pre><code>class Tecnico:
    def __init__(self, nome, valor_hora):
        self.nome = nome           # guarda nome neste objeto
        self.valor_hora = valor_hora  # guarda valor_hora neste objeto

tecnico1 = Tecnico("Leon Mendes", 175)
tecnico2 = Tecnico("Dayvison Jepson", 175)

print(tecnico1.nome)  # Leon Mendes
print(tecnico2.nome)  # Dayvison Jepson</code></pre>
        `
            },
            {
              type: "exercise",
              badge: "1A",
              instructions: "Crie uma classe <code>OrdemServico</code> com <code>__init__</code> que recebe <code>numero</code> e <code>cliente</code>. Crie uma OS com número <code>6650</code> e cliente <code>&quot;Minerva Usinagem&quot;</code>. Exiba o número.",
              starterCode: "# Crie a classe\n\n# Crie uma OS\n\n# Exiba o numero\n",
              solution: 'class OrdemServico:\n    def __init__(self, numero, cliente):\n        self.numero = numero\n        self.cliente = cliente\n\nos = OrdemServico(6650, "Minerva Usinagem")\nprint(os.numero)',
              validation: (code) => {
                return code.includes('class') && code.includes('__init__') && code.includes('self')
              }
            },
            {
              type: "text",
              content: `
          <h2>📖 Métodos de Classe</h2>
          <p>Métodos são <strong>funções dentro de classes</strong>. Eles definem o que o objeto pode fazer.</p>
          <pre><code>class Tecnico:
    def __init__(self, nome, valor_hora):
        self.nome = nome
        self.valor_hora = valor_hora

    def calcular_custo(self, horas):
        return self.valor_hora * horas

    def apresentar(self):
        return f"Técnico: {self.nome} - R$ {self.valor_hora}/hora"

leon = Tecnico("Leon Mendes", 175)
print(leon.apresentar())
print(f"Custo por 8 horas: R$ {leon.calcular_custo(8)}")</code></pre>
          <p><strong>Saída:</strong></p>
          <pre>Técnico: Leon Mendes - R$ 175/hora
Custo por 8 horas: R$ 1400</pre>
        `
            },
            {
              type: "exercise",
              badge: "1B",
              instructions: "Adicione um método <code>mostrar_info</code> na classe <code>OrdemServico</code> que retorna: <code>OS [numero] - [cliente]</code>. Chame o método e exiba.",
              starterCode: 'class OrdemServico:\n    def __init__(self, numero, cliente):\n        self.numero = numero\n        self.cliente = cliente\n    \n    # Adicione o método aqui\n\nos = OrdemServico(6650, "Minerva Usinagem")\n# Chame o método\n',
              solution: 'class OrdemServico:\n    def __init__(self, numero, cliente):\n        self.numero = numero\n        self.cliente = cliente\n    \n    def mostrar_info(self):\n        return f"OS {self.numero} - {self.cliente}"\n\nos = OrdemServico(6650, "Minerva Usinagem")\nprint(os.mostrar_info())',
              validation: (code) => {
                return code.includes('def mostrar_info') && code.includes('return')
              }
            }
          ]
        },
        {
          id: "6-2",
          title: "Classes com Dados da Helsen",
          duration: "28 min",
          module: "Classes",
          sections: [
            {
              type: "text",
              content: `
          <h2>📖 Classe completa de Técnico</h2>
          <p>Vamos criar uma classe completa baseada nos dados reais da Helsen Service:</p>
          <pre><code>class Tecnico:
    def __init__(self, id, nome, valor_hora, ativo=True):
        self.id = id
        self.nome = nome
        self.valor_hora = valor_hora
        self.ativo = ativo
        self.os_ativas = []

    def atribuir_os(self, numero_os):
        if not self.ativo:
            return "Técnico inativo não pode receber OS"

        if len(self.os_ativas) >= 5:
            return f"{self.nome} já tem 5 OS ativas (limite)"

        self.os_ativas.append(numero_os)
        return f"OS {numero_os} atribuída para {self.nome}"

    def listar_os(self):
        if len(self.os_ativas) == 0:
            return f"{self.nome} não tem OS ativas"

        return f"{self.nome} tem {len(self.os_ativas)} OS: {self.os_ativas}"

# Testando
leon = Tecnico(41, "Leon Mendes", 175)
print(leon.atribuir_os(6650))
print(leon.atribuir_os(6632))
print(leon.listar_os())</code></pre>
        `
            },
            {
              type: "exercise",
              badge: "1A",
              instructions: "Crie uma classe <code>OrdemServico</code> completa com: <code>numero</code>, <code>cliente</code>, <code>valor</code> e <code>status</code> (padrão: <code>&quot;aberta&quot;</code>). Adicione método <code>finalizar</code> que muda status para <code>&quot;completed&quot;</code>.",
              starterCode: "# Crie a classe completa\n\n# Crie uma OS\n\n# Finalize e exiba status\n",
              solution: 'class OrdemServico:\n    def __init__(self, numero, cliente, valor, status="aberta"):\n        self.numero = numero\n        self.cliente = cliente\n        self.valor = valor\n        self.status = status\n    \n    def finalizar(self):\n        self.status = "completed"\n        return f"OS {self.numero} finalizada"\n\nos = OrdemServico(6650, "Minerva Usinagem", 1145)\nprint(os.finalizar())\nprint(f"Status: {os.status}")',
              validation: (code) => {
                return code.includes('class OrdemServico') && code.includes('def finalizar')
              }
            },
            {
              type: "text",
              content: `
          <h2>📖 Trabalhando com listas de objetos</h2>
          <p>Podemos criar múltiplos objetos e guardá-los em listas:</p>
          <pre><code>class Tecnico:
    def __init__(self, id, nome, valor_hora):
        self.id = id
        self.nome = nome
        self.valor_hora = valor_hora

# Lista de técnicos
tecnicos = [
    Tecnico(41, "Leon Mendes", 175),
    Tecnico(42, "Valdinei Pereira", 175),
    Tecnico(48, "Dayvison Jepson", 175)
]

# Percorrendo
for tec in tecnicos:
    print(f"{tec.nome} - R$ {tec.valor_hora}/hora")

# Buscando um específico
leon = [t for t in tecnicos if t.id == 41][0]
print(f"\\nEncontrado: {leon.nome}")</code></pre>
        `
            },
            {
              type: "exercise",
              badge: "2A",
              instructions: "Crie uma lista com 3 objetos <code>OrdemServico</code> usando dados da Helsen. Use list comprehension para filtrar apenas as OS com <code>status == &quot;completed&quot;</code>. Exiba quantas são.",
              starterCode: "class OrdemServico:\n    def __init__(self, numero, cliente, valor, status):\n        self.numero = numero\n        self.cliente = cliente\n        self.valor = valor\n        self.status = status\n\n# Crie lista de 3 OS\n\n# Filtre as completed\n\n# Exiba quantidade\n",
              solution: 'class OrdemServico:\n    def __init__(self, numero, cliente, valor, status):\n        self.numero = numero\n        self.cliente = cliente\n        self.valor = valor\n        self.status = status\n\ntodas_os = [\n    OrdemServico(6650, "Minerva Usinagem", 1145, "completed"),\n    OrdemServico(6632, "Usinagem Castro", 700, "avulso"),\n    OrdemServico(6620, "Off Limits", 445, "completed")\n]\n\ncompletas = [os for os in todas_os if os.status == "completed"]\nprint(f"OS completas: {len(completas)}")',
              validation: (code) => {
                return code.includes('[') && code.includes('for') && code.includes('if') && code.includes('status')
              }
            },
            {
              type: "text",
              content: `
          <h2>📖 Método que calcula valores</h2>
          <p>Classes podem ter métodos que fazem cálculos:</p>
          <pre><code>class OrdemServico:
    def __init__(self, numero, cliente, horas, valor_hora):
        self.numero = numero
        self.cliente = cliente
        self.horas = horas
        self.valor_hora = valor_hora

    def calcular_total(self):
        return self.horas * self.valor_hora

    def calcular_comissao(self, percentual):
        total = self.calcular_total()
        return total * (percentual / 100)

os = OrdemServico(6650, "Minerva Usinagem", 6.5, 175)
print(f"Total: R$ {os.calcular_total()}")
print(f"Comissão 10%: R$ {os.calcular_comissao(10)}")</code></pre>
        `
            },
            {
              type: "exercise",
              badge: "2B",
              instructions: "Adicione um método <code>calcular_desconto</code> na classe que recebe um percentual e retorna o valor total com desconto aplicado. Teste com 15% de desconto.",
              starterCode: 'class OrdemServico:\n    def __init__(self, numero, cliente, valor):\n        self.numero = numero\n        self.cliente = cliente\n        self.valor = valor\n    \n    # Adicione o método calcular_desconto\n\nos = OrdemServico(6650, "Minerva Usinagem", 1145)\n# Calcule com 15% desconto\n',
              solution: 'class OrdemServico:\n    def __init__(self, numero, cliente, valor):\n        self.numero = numero\n        self.cliente = cliente\n        self.valor = valor\n    \n    def calcular_desconto(self, percentual):\n        desconto = self.valor * (percentual / 100)\n        return self.valor - desconto\n\nos = OrdemServico(6650, "Minerva Usinagem", 1145)\nvalor_com_desconto = os.calcular_desconto(15)\nprint(f"Valor com 15% desconto: R$ {valor_com_desconto}")',
              validation: (code) => {
                return code.includes('def calcular_desconto') && code.includes('percentual')
              }
            }
          ]
        }
      ]
    },

    // ========== MÓDULO 7: ASYNC/AWAIT ==========
    {
      id: 7,
      title: "Async/Await",
      lessons: [
        {
          id: "7-1",
          title: "Asyncio Básico",
          duration: "22 min",
          module: "Async/Await",
          sections: [
            {
              type: "text",
              content: `
          <h2>📖 Por que async em Python?</h2>
          <p>Muitas operações <strong>demoram</strong>: buscar dados no banco PostgreSQL, fazer requisições HTTP, ler arquivos grandes.</p>
          <p>Python tem o módulo <code>asyncio</code> para lidar com operações assíncronas. Na Helsen Service, todas as consultas ao banco usam <code>async/await</code>.</p>
          <p><strong>Comparação:</strong></p>
          <pre><code># Código SÍNCRONO (espera terminar)
def buscar_dados():
    time.sleep(2)  # Bloqueia por 2 segundos
    return "dados"

# Código ASSÍNCRONO (não bloqueia)
async def buscar_dados_async():
    await asyncio.sleep(2)  # Libera para outras tarefas
    return "dados"</code></pre>
        `
            },
            {
              type: "text",
              content: `
          <h2>💻 Primeiro exemplo async</h2>
          <pre><code>import asyncio

async def buscar_tecnico(id):
    print(f"Buscando técnico ID {id}...")
    await asyncio.sleep(1)  # Simula busca no banco

    if id == 41:
        return {"id": 41, "nome": "Leon Mendes", "valor_hora": 175}
    elif id == 42:
        return {"id": 42, "nome": "Valdinei Pereira", "valor_hora": 175}
    else:
        return None

async def main():
    tecnico = await buscar_tecnico(41)
    print(f"Encontrado: {tecnico['nome']}")

# Executando
asyncio.run(main())</code></pre>
          <p><strong>Saída:</strong></p>
          <pre>Buscando técnico ID 41...
Encontrado: Leon Mendes</pre>
        `
            },
            {
              type: "exercise",
              badge: "1A",
              instructions: "Crie uma função <code>async def buscar_os(numero)</code> que simula busca no banco com <code>await asyncio.sleep(1)</code>. Se número for <code>6650</code>, retorna dicionário da OS da Minerva. Crie <code>main()</code> que busca e exibe o cliente.",
              starterCode: "import asyncio\n\n# Crie buscar_os\n\n# Crie main\n\n# Execute\n",
              solution: 'import asyncio\n\nasync def buscar_os(numero):\n    await asyncio.sleep(1)\n    if numero == 6650:\n        return {"numero": 6650, "cliente": "Minerva Usinagem", "valor": 1145}\n    return None\n\nasync def main():\n    os = await buscar_os(6650)\n    print(f"Cliente: {os[\'cliente\']}")\n\nasyncio.run(main())',
              validation: (code) => {
                return code.includes('async def') && code.includes('await') && code.includes('asyncio')
              }
            }
          ]
        },
        {
          id: "7-2",
          title: "Múltiplas tarefas assíncronas",
          duration: "25 min",
          module: "Async/Await",
          sections: [
            {
              type: "text",
              content: `
          <h2>📖 Executando múltiplas tarefas</h2>
          <p>O poder do <code>async</code> é executar várias operações ao mesmo tempo:</p>
          <pre><code>import asyncio

async def buscar_tecnico(id):
    await asyncio.sleep(1)
    return f"Técnico {id}"

async def buscar_os(numero):
    await asyncio.sleep(1)
    return f"OS {numero}"

async def main():
    # Executar em paralelo
    resultado = await asyncio.gather(
        buscar_tecnico(41),
        buscar_os(6650),
        buscar_os(6632)
    )

    print(resultado)

asyncio.run(main())</code></pre>
          <p>Com <code>asyncio.gather()</code>, todas as 3 buscas rodam ao mesmo tempo! Total: ~1 segundo em vez de 3.</p>
        `
            },
            {
              type: "exercise",
              badge: "1A",
              instructions: "Crie duas funções async: <code>buscar_tecnico</code> e <code>buscar_cliente</code>. Use <code>asyncio.gather()</code> para buscar os dois ao mesmo tempo e exiba os resultados.",
              starterCode: "import asyncio\n\nasync def buscar_tecnico(id):\n    await asyncio.sleep(1)\n    return {\"id\": id, \"nome\": \"Leon Mendes\"}\n\nasync def buscar_cliente(id):\n    await asyncio.sleep(1)\n    return {\"id\": id, \"nome\": \"Minerva Usinagem\"}\n\n# Crie main com gather\n\n# Execute\n",
              solution: 'import asyncio\n\nasync def buscar_tecnico(id):\n    await asyncio.sleep(1)\n    return {"id": id, "nome": "Leon Mendes"}\n\nasync def buscar_cliente(id):\n    await asyncio.sleep(1)\n    return {"id": id, "nome": "Minerva Usinagem"}\n\nasync def main():\n    tecnico, cliente = await asyncio.gather(\n        buscar_tecnico(41),\n        buscar_cliente(100)\n    )\n    print(f"Técnico: {tecnico[\'nome\']}")\n    print(f"Cliente: {cliente[\'nome\']}")\n\nasyncio.run(main())',
              validation: (code) => {
                return code.includes('asyncio.gather') && code.includes('await')
              }
            },
            {
              type: "text",
              content: `
          <h2>📖 Try/Except com Async</h2>
          <p>Tratamento de erros funciona igual:</p>
          <pre><code>import asyncio

async def buscar_os(numero):
    await asyncio.sleep(1)

    if numero == 6650:
        return {"numero": 6650, "cliente": "Minerva Usinagem"}
    else:
        raise Exception(f"OS {numero} não encontrada")

async def main():
    try:
        os = await buscar_os(9999)
        print(os)
    except Exception as e:
        print(f"Erro: {e}")

asyncio.run(main())</code></pre>
        `
            },
            {
              type: "exercise",
              badge: "1B",
              instructions: "Adicione tratamento de erro na função de busca. Se o número da OS não for <code>6650</code> ou <code>6632</code>, levante uma exceção. Use <code>try/except</code> na <code>main()</code>.",
              starterCode: "import asyncio\n\nasync def buscar_os(numero):\n    await asyncio.sleep(1)\n    # Adicione lógica com exceção\n\nasync def main():\n    # Use try/except\n    pass\n\nasyncio.run(main())\n",
              solution: 'import asyncio\n\nasync def buscar_os(numero):\n    await asyncio.sleep(1)\n    \n    if numero == 6650:\n        return {"numero": 6650, "cliente": "Minerva Usinagem"}\n    elif numero == 6632:\n        return {"numero": 6632, "cliente": "Usinagem Castro"}\n    else:\n        raise Exception(f"OS {numero} não encontrada")\n\nasync def main():\n    try:\n        os = await buscar_os(9999)\n        print(os)\n    except Exception as e:\n        print(f"Erro: {e}")\n\nasyncio.run(main())',
              validation: (code) => {
                return code.includes('raise Exception') && code.includes('try') && code.includes('except')
              }
            }
          ]
        }
      ]
    },

    // ========== MÓDULO 8: FLASK API ==========
    {
      id: 8,
      title: "Flask API",
      lessons: [
        {
          id: "8-1",
          title: "Flask Básico",
          duration: "28 min",
          module: "Flask API",
          sections: [
            {
              type: "text",
              content: `
          <h2>📖 O que é Flask?</h2>
          <p>Flask é um framework web para Python. É o equivalente do Express em JavaScript!</p>
          <p>Com Flask, você cria um <strong>servidor web</strong> que recebe requisições HTTP e retorna respostas.</p>
          <p>Na Helsen Service, poderíamos usar Flask no backend para:</p>
          <ul>
            <li>Criar rotas para buscar técnicos, OS e clientes</li>
            <li>Salvar dados no banco PostgreSQL</li>
            <li>Retornar dados em formato JSON</li>
          </ul>
        `
            },
            {
              type: "text",
              content: `
          <h2>💻 Primeira aplicação Flask</h2>
          <pre><code>from flask import Flask, jsonify

app = Flask(__name__)

# Dados simulados da Helsen
tecnicos = [
    {"id": 41, "nome": "Leon Mendes", "valor_hora": 175},
    {"id": 42, "nome": "Valdinei Pereira", "valor_hora": 175},
    {"id": 48, "nome": "Dayvison Jepson", "valor_hora": 175}
]

# Rota GET - listar todos técnicos
@app.route('/tecnicos', methods=['GET'])
def listar_tecnicos():
    return jsonify(tecnicos)

# Rota GET - buscar técnico por ID
@app.route('/tecnicos/&lt;int:id&gt;', methods=['GET'])
def buscar_tecnico(id):
    tecnico = next((t for t in tecnicos if t['id'] == id), None)

    if tecnico:
        return jsonify(tecnico)
    else:
        return jsonify({"error": "Técnico não encontrado"}), 404

if __name__ == '__main__':
    app.run(debug=True, port=5000)</code></pre>
          <p>Este código cria um servidor na porta 5000 com duas rotas!</p>
        `
            },
            {
              type: "exercise",
              badge: "1A",
              instructions: "Crie uma aplicação Flask com uma lista de OS. Adicione uma rota <code>/os</code> que retorna todas as OS em JSON. Use <code>jsonify()</code>.",
              starterCode: "from flask import Flask, jsonify\n\napp = Flask(__name__)\n\n# Crie lista de OS\n\n# Crie rota /os\n\nif __name__ == '__main__':\n    app.run(debug=True)\n",
              solution: 'from flask import Flask, jsonify\n\napp = Flask(__name__)\n\nos_list = [\n    {"numero": 6650, "cliente": "Minerva Usinagem", "valor": 1145},\n    {"numero": 6632, "cliente": "Usinagem Castro", "valor": 700},\n    {"numero": 6620, "cliente": "Off Limits", "valor": 445}\n]\n\n@app.route(\'/os\', methods=[\'GET\'])\ndef listar_os():\n    return jsonify(os_list)\n\nif __name__ == \'__main__\':\n    app.run(debug=True)',
              validation: (code) => {
                return code.includes('Flask') && code.includes('@app.route') && code.includes('jsonify')
              }
            },
            {
              type: "text",
              content: `
          <h2>📖 Rotas com parâmetros</h2>
          <p>Podemos criar rotas dinâmicas que recebem parâmetros na URL:</p>
          <pre><code>@app.route('/os/&lt;int:numero&gt;', methods=['GET'])
def buscar_os(numero):
    os = next((o for o in os_list if o['numero'] == numero), None)

    if os:
        return jsonify(os)
    else:
        return jsonify({"error": "OS não encontrada"}), 404</code></pre>
          <p>Agora podemos acessar: <code>http://localhost:5000/os/6650</code></p>
        `
            },
            {
              type: "exercise",
              badge: "1B",
              instructions: "Adicione uma rota <code>/os/&lt;int:numero&gt;</code> que busca uma OS específica pelo número. Se não encontrar, retorne erro 404.",
              starterCode: 'from flask import Flask, jsonify\n\napp = Flask(__name__)\n\nos_list = [\n    {"numero": 6650, "cliente": "Minerva Usinagem", "valor": 1145},\n    {"numero": 6632, "cliente": "Usinagem Castro", "valor": 700}\n]\n\n# Adicione rota com parâmetro\n\nif __name__ == \'__main__\':\n    app.run(debug=True)\n',
              solution: 'from flask import Flask, jsonify\n\napp = Flask(__name__)\n\nos_list = [\n    {"numero": 6650, "cliente": "Minerva Usinagem", "valor": 1145},\n    {"numero": 6632, "cliente": "Usinagem Castro", "valor": 700}\n]\n\n@app.route(\'/os/<int:numero>\', methods=[\'GET\'])\ndef buscar_os(numero):\n    os = next((o for o in os_list if o[\'numero\'] == numero), None)\n    \n    if os:\n        return jsonify(os)\n    else:\n        return jsonify({"error": "OS não encontrada"}), 404\n\nif __name__ == \'__main__\':\n    app.run(debug=True)',
              validation: (code) => {
                return code.includes('@app.route') && code.includes('<int:numero>') && code.includes('404')
              }
            }
          ]
        },
        {
          id: "8-2",
          title: "REST API com Flask",
          duration: "30 min",
          module: "Flask API",
          sections: [
            {
              type: "text",
              content: `
          <h2>📖 Criando uma API REST completa</h2>
          <p>Uma API REST tem diferentes métodos HTTP:</p>
          <ul>
            <li><strong>GET</strong> - Buscar/Listar dados</li>
            <li><strong>POST</strong> - Criar novos dados</li>
            <li><strong>PUT</strong> - Atualizar dados existentes</li>
            <li><strong>DELETE</strong> - Deletar dados</li>
          </ul>
          <p>Vamos criar uma API completa para gerenciar OS!</p>
        `
            },
            {
              type: "text",
              content: `
          <h2>💻 API REST - POST para criar OS</h2>
          <pre><code>from flask import Flask, jsonify, request

app = Flask(__name__)

os_list = []
contador_id = 1

@app.route('/os', methods=['POST'])
def criar_os():
    global contador_id

    dados = request.get_json()

    nova_os = {
        "id": contador_id,
        "numero": dados.get('numero'),
        "cliente": dados.get('cliente'),
        "valor": dados.get('valor'),
        "status": "aberta"
    }

    os_list.append(nova_os)
    contador_id += 1

    return jsonify(nova_os), 201

@app.route('/os', methods=['GET'])
def listar_os():
    return jsonify(os_list)</code></pre>
          <p>Agora podemos criar OS via POST!</p>
        `
            },
            {
              type: "exercise",
              badge: "1A",
              instructions: "Adicione uma rota <code>PUT /os/&lt;int:id&gt;</code> que atualiza o status de uma OS. Receba o novo status via JSON no body da requisição.",
              starterCode: 'from flask import Flask, jsonify, request\n\napp = Flask(__name__)\n\nos_list = [\n    {"id": 1, "numero": 6650, "cliente": "Minerva", "status": "aberta"},\n    {"id": 2, "numero": 6632, "cliente": "Castro", "status": "aberta"}\n]\n\n# Adicione rota PUT\n\nif __name__ == \'__main__\':\n    app.run(debug=True)\n',
              solution: 'from flask import Flask, jsonify, request\n\napp = Flask(__name__)\n\nos_list = [\n    {"id": 1, "numero": 6650, "cliente": "Minerva", "status": "aberta"},\n    {"id": 2, "numero": 6632, "cliente": "Castro", "status": "aberta"}\n]\n\n@app.route(\'/os/<int:id>\', methods=[\'PUT\'])\ndef atualizar_os(id):\n    os = next((o for o in os_list if o[\'id\'] == id), None)\n    \n    if not os:\n        return jsonify({"error": "OS não encontrada"}), 404\n    \n    dados = request.get_json()\n    os[\'status\'] = dados.get(\'status\', os[\'status\'])\n    \n    return jsonify(os)\n\nif __name__ == \'__main__\':\n    app.run(debug=True)',
              validation: (code) => {
                return code.includes('PUT') && code.includes('request.get_json')
              }
            },
            {
              type: "text",
              content: `
          <h2>📖 Filtrando dados com query params</h2>
          <p>Podemos receber parâmetros na URL para filtrar:</p>
          <pre><code>@app.route('/os', methods=['GET'])
def listar_os():
    status = request.args.get('status')

    if status:
        filtradas = [o for o in os_list if o['status'] == status]
        return jsonify(filtradas)

    return jsonify(os_list)</code></pre>
          <p>Agora podemos chamar: <code>/os?status=completed</code></p>
        `
            },
            {
              type: "exercise",
              badge: "1B",
              instructions: "Modifique a rota <code>GET /os</code> para aceitar filtro por <code>status</code> via query params. Se não houver filtro, retorna todas.",
              starterCode: 'from flask import Flask, jsonify, request\n\napp = Flask(__name__)\n\nos_list = [\n    {"numero": 6650, "cliente": "Minerva", "status": "completed"},\n    {"numero": 6632, "cliente": "Castro", "status": "aberta"},\n    {"numero": 6620, "cliente": "Off Limits", "status": "completed"}\n]\n\n# Modifique para aceitar filtro\n@app.route(\'/os\', methods=[\'GET\'])\ndef listar_os():\n    pass\n\nif __name__ == \'__main__\':\n    app.run(debug=True)\n',
              solution: 'from flask import Flask, jsonify, request\n\napp = Flask(__name__)\n\nos_list = [\n    {"numero": 6650, "cliente": "Minerva", "status": "completed"},\n    {"numero": 6632, "cliente": "Castro", "status": "aberta"},\n    {"numero": 6620, "cliente": "Off Limits", "status": "completed"}\n]\n\n@app.route(\'/os\', methods=[\'GET\'])\ndef listar_os():\n    status = request.args.get(\'status\')\n    \n    if status:\n        filtradas = [o for o in os_list if o[\'status\'] == status]\n        return jsonify(filtradas)\n    \n    return jsonify(os_list)\n\nif __name__ == \'__main__\':\n    app.run(debug=True)',
              validation: (code) => {
                return code.includes('request.args.get') && code.includes('status')
              }
            }
          ]
        }
      ]
    },

    // ========== MÓDULO 9: SQL ==========
    {
      id: 9,
      title: "SQL e Banco de Dados",
      lessons: [
        {
          id: "9-1",
          title: "Introdução ao SQL",
          duration: "25 min",
          module: "SQL e Banco de Dados",
          sections: [
            {
              type: "text",
              content: `
          <h2>📖 Por que banco de dados?</h2>
          <p>Até agora guardamos dados em listas Python. Mas quando o programa fecha, <strong>tudo some!</strong></p>
          <p>Banco de dados = guardar dados <strong>permanentemente</strong>.</p>
          <p>A Helsen Service usa <strong>PostgreSQL</strong>. Todas as OS, técnicos, clientes ficam salvos lá.</p>
          <p>SQL (Structured Query Language) é a linguagem para comunicar com bancos de dados.</p>
        `
            },
            {
              type: "text",
              content: `
          <h2>💻 Estrutura do banco da Helsen</h2>
          <pre><code>-- Tabela de técnicos
CREATE TABLE technicians (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    hourly_rate NUMERIC(10,2),
    active BOOLEAN DEFAULT true
);

-- Tabela de OS
CREATE TABLE os (
    id SERIAL PRIMARY KEY,
    order_number INTEGER UNIQUE,
    client_name VARCHAR(255),
    technician_id INTEGER REFERENCES technicians(id),
    status VARCHAR(50),
    grand_total NUMERIC(10,2),
    created_at TIMESTAMP DEFAULT NOW()
);</code></pre>
          <p>Essas são as tabelas REAIS do sistema Helsen!</p>
        `
            },
            {
              type: "text",
              content: `
          <h2>📖 Comandos SQL básicos</h2>
          <p><strong>SELECT</strong> - Buscar dados:</p>
          <pre><code>-- Buscar todos os técnicos
SELECT * FROM technicians;

-- Buscar técnicos ativos
SELECT * FROM technicians WHERE active = true;

-- Buscar técnico específico
SELECT * FROM technicians WHERE id = 41;</code></pre>

          <p><strong>INSERT</strong> - Inserir dados:</p>
          <pre><code>INSERT INTO technicians (username, hourly_rate, active)
VALUES ('Leon Mendes', 175, true);</code></pre>

          <p><strong>UPDATE</strong> - Atualizar dados:</p>
          <pre><code>UPDATE os
SET status = 'completed'
WHERE order_number = 6650;</code></pre>

          <p><strong>DELETE</strong> - Deletar dados:</p>
          <pre><code>DELETE FROM os
WHERE order_number = 9999;</code></pre>
        `
            },
            {
              type: "exercise",
              badge: "1A",
              instructions: "Escreva uma query SQL para buscar todas as OS com <code>status = 'completed'</code>. Use <code>SELECT</code> e <code>WHERE</code>.",
              starterCode: "-- Escreva a query aqui\n",
              solution: "SELECT * FROM os WHERE status = 'completed';",
              validation: (code) => {
                return code.includes('SELECT') && code.includes('WHERE') && code.includes('completed')
              }
            },
            {
              type: "text",
              content: `
          <h2>📖 Funções agregadas</h2>
          <p>SQL tem funções para calcular sobre conjuntos de dados:</p>
          <pre><code>-- Contar quantas OS existem
SELECT COUNT(*) FROM os;

-- Somar valor total das OS
SELECT SUM(grand_total) FROM os WHERE status = 'completed';

-- Calcular média
SELECT AVG(grand_total) FROM os;

-- Maior e menor valor
SELECT MAX(grand_total), MIN(grand_total) FROM os;</code></pre>
        `
            },
            {
              type: "exercise",
              badge: "1B",
              instructions: "Escreva uma query SQL para calcular a <strong>soma total</strong> de todas as OS com status <code>'completed'</code>. Use <code>SUM()</code>.",
              starterCode: "-- Calcule a soma total\n",
              solution: "SELECT SUM(grand_total) FROM os WHERE status = 'completed';",
              validation: (code) => {
                return code.includes('SUM') && code.includes('grand_total') && code.includes('completed')
              }
            }
          ]
        },
        {
          id: "9-2",
          title: "SQL com Python",
          duration: "28 min",
          module: "SQL e Banco de Dados",
          sections: [
            {
              type: "text",
              content: `
          <h2>📖 Conectando Python com PostgreSQL</h2>
          <p>Para usar PostgreSQL em Python, usamos a biblioteca <code>psycopg2</code>:</p>
          <pre><code>import psycopg2

# Conectar ao banco
conn = psycopg2.connect(
    host="localhost",
    database="helsen_db",
    user="postgres",
    password="senha123"
)

# Criar cursor (executor de queries)
cursor = conn.cursor()

# Executar query
cursor.execute("SELECT * FROM technicians WHERE active = true")

# Buscar resultados
tecnicos = cursor.fetchall()

for tec in tecnicos:
    print(tec)

# Fechar conexões
cursor.close()
conn.close()</code></pre>
        `
            },
            {
              type: "text",
              content: `
          <h2>💻 Inserindo dados</h2>
          <pre><code>import psycopg2

conn = psycopg2.connect(database="helsen_db")
cursor = conn.cursor()

# Inserir novo técnico
cursor.execute("""
    INSERT INTO technicians (username, hourly_rate, active)
    VALUES (%s, %s, %s)
""", ("Leon Mendes", 175, True))

# IMPORTANTE: Commit para salvar
conn.commit()

print("Técnico inserido!")

cursor.close()
conn.close()</code></pre>
          <p><code>%s</code> são placeholders para evitar SQL injection!</p>
        `
            },
            {
              type: "exercise",
              badge: "1A",
              instructions: "Escreva código Python que busca todas as OS com <code>status = 'completed'</code> usando <code>psycopg2</code>. Use <code>cursor.execute()</code> e <code>fetchall()</code>.",
              starterCode: 'import psycopg2\n\nconn = psycopg2.connect(database="helsen_db")\ncursor = conn.cursor()\n\n# Execute a query\n\n# Busque resultados\n\n# Exiba\n\ncursor.close()\nconn.close()\n',
              solution: 'import psycopg2\n\nconn = psycopg2.connect(database="helsen_db")\ncursor = conn.cursor()\n\ncursor.execute("SELECT * FROM os WHERE status = %s", (\'completed\',))\nos_list = cursor.fetchall()\n\nfor os in os_list:\n    print(os)\n\ncursor.close()\nconn.close()',
              validation: (code) => {
                return code.includes('cursor.execute') && code.includes('fetchall') && code.includes('completed')
              }
            },
            {
              type: "text",
              content: `
          <h2>📖 Usando com Flask</h2>
          <p>Podemos integrar banco de dados com Flask:</p>
          <pre><code>from flask import Flask, jsonify
import psycopg2

app = Flask(__name__)

def get_db():
    return psycopg2.connect(database="helsen_db")

@app.route('/tecnicos', methods=['GET'])
def listar_tecnicos():
    conn = get_db()
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM technicians WHERE active = true")
    tecnicos = cursor.fetchall()

    cursor.close()
    conn.close()

    return jsonify(tecnicos)

if __name__ == '__main__':
    app.run(debug=True)</code></pre>
        `
            },
            {
              type: "exercise",
              badge: "1B",
              instructions: "Crie uma rota Flask <code>GET /os</code> que busca todas as OS do banco PostgreSQL e retorna em JSON. Use <code>psycopg2</code>.",
              starterCode: 'from flask import Flask, jsonify\nimport psycopg2\n\napp = Flask(__name__)\n\n# Crie a rota\n\nif __name__ == \'__main__\':\n    app.run(debug=True)\n',
              solution: 'from flask import Flask, jsonify\nimport psycopg2\n\napp = Flask(__name__)\n\n@app.route(\'/os\', methods=[\'GET\'])\ndef listar_os():\n    conn = psycopg2.connect(database="helsen_db")\n    cursor = conn.cursor()\n    \n    cursor.execute("SELECT * FROM os")\n    os_list = cursor.fetchall()\n    \n    cursor.close()\n    conn.close()\n    \n    return jsonify(os_list)\n\nif __name__ == \'__main__\':\n    app.run(debug=True)',
              validation: (code) => {
                return code.includes('@app.route') && code.includes('psycopg2') && code.includes('cursor.execute')
              }
            }
          ]
        }
      ]
    },

    // ========== MÓDULO 10: PROJETO FINAL ==========
    {
      id: 10,
      title: "Projeto Final",
      lessons: [
        {
          id: "10-1",
          title: "Sistema MATH em Python",
          duration: "120 min",
          module: "Projeto Final",
          sections: [
            {
              type: "text",
              content: `
          <h2>🎯 Desafio Final - Sistema MATH Helsen</h2>
          <p>Parabéns! Você chegou ao final do curso de Python!</p>
          <p>Agora o desafio: <strong>criar um sistema completo de gerenciamento de OS usando Python, Flask e PostgreSQL</strong>.</p>
          <p>Use tudo que você aprendeu:</p>
          <ul>
            <li>Variáveis, loops, funções</li>
            <li>Listas e dicionários</li>
            <li>Classes</li>
            <li>Async/await</li>
            <li>Flask API</li>
            <li>SQL e PostgreSQL</li>
          </ul>
        `
            },
            {
              type: "text",
              content: `
          <h2>📋 Requisitos do Projeto</h2>
          <p><strong>Backend Flask com as seguintes rotas:</strong></p>
          <ul>
            <li><code>GET /tecnicos</code> - Listar todos os técnicos ativos</li>
            <li><code>GET /tecnicos/:id</code> - Buscar técnico específico</li>
            <li><code>POST /tecnicos</code> - Criar novo técnico</li>
            <li><code>GET /os</code> - Listar todas as OS (com filtro por status)</li>
            <li><code>GET /os/:numero</code> - Buscar OS específica</li>
            <li><code>POST /os</code> - Criar nova OS</li>
            <li><code>PUT /os/:id</code> - Atualizar status da OS</li>
            <li><code>GET /dashboard</code> - Estatísticas (total OS, faturamento, etc)</li>
          </ul>
        `
            },
            {
              type: "text",
              content: `
          <h2>🗄️ Estrutura do Banco de Dados</h2>
          <pre><code>-- Tabela de técnicos
CREATE TABLE technicians (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    hourly_rate NUMERIC(10,2),
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Tabela de clientes
CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    cnpj VARCHAR(20),
    created_at TIMESTAMP DEFAULT NOW()
);

-- Tabela de OS
CREATE TABLE os (
    id SERIAL PRIMARY KEY,
    order_number INTEGER UNIQUE NOT NULL,
    client_id INTEGER REFERENCES clients(id),
    technician_id INTEGER REFERENCES technicians(id),
    status VARCHAR(50) DEFAULT 'aberta',
    grand_total NUMERIC(10,2),
    total_hours NUMERIC(5,2),
    scheduled_date DATE,
    created_at TIMESTAMP DEFAULT NOW()
);</code></pre>
        `
            },
            {
              type: "text",
              content: `
          <h2>⚙️ Regras de Negócio</h2>
          <ul>
            <li><strong>Não pode criar OS sem cliente:</strong> Validar que client_id existe</li>
            <li><strong>Técnico não pode ter mais de 5 OS ativas:</strong> Verificar antes de atribuir</li>
            <li><strong>Valor mínimo de OS:</strong> R$ 100,00</li>
            <li><strong>Status válidos:</strong> aberta, atribuida, em_andamento, completed, cancelada</li>
            <li><strong>Só técnicos ativos podem receber OS:</strong> Verificar active = true</li>
          </ul>
        `
            },
            {
              type: "text",
              content: `
          <h2>🚀 Como começar</h2>
          <p><strong>Passo 1:</strong> Criar pasta do projeto</p>
          <pre><code>mkdir sistema-math-python
cd sistema-math-python</code></pre>

          <p><strong>Passo 2:</strong> Criar ambiente virtual</p>
          <pre><code>python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\\Scripts\\activate     # Windows</code></pre>

          <p><strong>Passo 3:</strong> Instalar dependências</p>
          <pre><code>pip install flask psycopg2-binary python-dotenv</code></pre>

          <p><strong>Passo 4:</strong> Criar estrutura de arquivos</p>
          <pre><code>sistema-math-python/
├── app.py              # Servidor Flask
├── database.py         # Conexão com PostgreSQL
├── models.py           # Classes (Tecnico, OS, Cliente)
├── routes/
│   ├── tecnicos.py     # Rotas de técnicos
│   ├── os.py           # Rotas de OS
│   └── dashboard.py    # Rota dashboard
└── .env                # Variáveis de ambiente</code></pre>
        `
            },
            {
              type: "text",
              content: `
          <h2>💡 Dicas de Implementação</h2>
          <p><strong>1. Comece pelo banco:</strong> Crie as tabelas primeiro</p>
          <p><strong>2. Crie as classes:</strong> Use POO para organizar</p>
          <p><strong>3. Implemente rota por rota:</strong> Teste cada uma antes da próxima</p>
          <p><strong>4. Use try/except:</strong> Trate erros de banco de dados</p>
          <p><strong>5. Valide os dados:</strong> Verifique se campos obrigatórios existem</p>
          <p><strong>6. Use variáveis de ambiente:</strong> Nunca commite senhas!</p>

          <p><strong>Exemplo de app.py inicial:</strong></p>
          <pre><code>from flask import Flask
from routes import tecnicos, os, dashboard

app = Flask(__name__)

# Registrar blueprints
app.register_blueprint(tecnicos.bp)
app.register_blueprint(os.bp)
app.register_blueprint(dashboard.bp)

if __name__ == '__main__':
    app.run(debug=True, port=5000)</code></pre>
        `
            },
            {
              type: "text",
              content: `
          <h2>✅ Checklist do Projeto</h2>
          <p>Marque conforme você completa cada parte:</p>
          <ul>
            <li>☐ Banco de dados PostgreSQL criado</li>
            <li>☐ Tabelas criadas (technicians, clients, os)</li>
            <li>☐ Classes Python criadas (models.py)</li>
            <li>☐ Conexão com banco funcionando</li>
            <li>☐ Rota GET /tecnicos</li>
            <li>☐ Rota POST /tecnicos</li>
            <li>☐ Rota GET /os com filtro por status</li>
            <li>☐ Rota POST /os com validações</li>
            <li>☐ Rota PUT /os/:id</li>
            <li>☐ Rota GET /dashboard com estatísticas</li>
            <li>☐ Tratamento de erros em todas as rotas</li>
            <li>☐ Testes manuais com Postman/Insomnia</li>
          </ul>
        `
            },
            {
              type: "text",
              content: `
          <h2>🎓 Você completou o curso!</h2>
          <p>Parabéns por chegar até aqui! Você agora sabe:</p>
          <ul>
            <li>✅ Fundamentos de Python (variáveis, loops, funções)</li>
            <li>✅ Estruturas de dados (listas, dicionários)</li>
            <li>✅ Programação Orientada a Objetos (classes)</li>
            <li>✅ Programação assíncrona (async/await)</li>
            <li>✅ Desenvolvimento web com Flask</li>
            <li>✅ Banco de dados com PostgreSQL e SQL</li>
          </ul>
          <p><strong>Próximos passos:</strong></p>
          <ul>
            <li>Complete o projeto final</li>
            <li>Estude mais sobre ORMs (SQLAlchemy)</li>
            <li>Aprenda sobre autenticação (JWT)</li>
            <li>Explore testes automatizados (pytest)</li>
            <li>Deploy na nuvem (Heroku, Railway, AWS)</li>
          </ul>
          <p>O código do sistema real da Helsen Service está disponível para você estudar e se inspirar!</p>
        `
            },
            {
              type: "exercise",
              badge: "FINAL",
              instructions: "Complete o projeto final seguindo todos os requisitos acima. Crie um repositório no GitHub e compartilhe o link quando terminar. Boa sorte!",
              starterCode: "# Este é seu desafio final!\n# Crie o sistema completo seguindo os requisitos\n# Boa sorte! 🚀\n",
              solution: "# Não há uma solução única!\n# O importante é implementar todas as funcionalidades\n# Consulte a documentação do Flask e PostgreSQL\n# E use tudo que você aprendeu no curso!",
              validation: (code) => {
                return true  // Este exercício não tem validação automática
              }
            }
          ]
        }
      ]
    }
  ]
};

// Exportar para uso no sistema
if (typeof module !== 'undefined' && module.exports) {
  module.exports = COURSE_DATA_PYTHON;
}
