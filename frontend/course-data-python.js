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
          title: "Boas-vindas ao Python",
          duration: "15 min",
          module: "Primeiros Passos",
          sections: [
            {
              type: "text",
              content: `
          <h2>📖 Bem-vindo ao curso de Python!</h2>
          <p>Python é uma linguagem de programação <strong>poderosa e fácil de aprender</strong>, usada por milhões de desenvolvedores no mundo todo.</p>
          <p>Neste curso, você vai aprender Python do zero, usando dados reais da Helsen Service.</p>
          <p><strong>Por que Python?</strong></p>
          <ul>
            <li>Sintaxe limpa e legível</li>
            <li>Muito usado em ciência de dados e automação</li>
            <li>Excelente para iniciantes</li>
            <li>Comunidade gigantesca</li>
          </ul>
        `
            },
            {
              type: "text",
              content: `
          <h2>💻 Seu primeiro código Python</h2>
          <p>Vamos começar com o clássico "Olá, Mundo!":</p>
          <pre><code>print("Olá, Mundo!")</code></pre>
          <p>No Python, usamos <code>print()</code> para exibir mensagens na tela.</p>
        `
            },
            {
              type: "exercise",
              instructions: "Digite <code>print(&quot;Olá, Helsen!&quot;)</code> e execute o código.",
              starterCode: "# Digite seu código aqui\n",
              solution: 'print("Olá, Helsen!")',
              validation: (code) => {
                return code.includes('print') && code.includes('Helsen')
              }
            }
          ]
        },
        {
          id: "1-2",
          title: "Variáveis em Python",
          duration: "20 min",
          module: "Primeiros Passos",
          sections: [
            {
              type: "text",
              content: `
          <h2>📖 O que são variáveis?</h2>
          <p>Variáveis são <strong>caixinhas que guardam informações</strong>.</p>
          <p>Em Python, não precisamos declarar o tipo da variável. Basta escrever:</p>
          <pre><code>nome = "Leon Mendes"
idade = 30
valor_hora = 175</code></pre>
          <p>Python descobre automaticamente se é texto, número, etc.</p>
        `
            },
            {
              type: "text",
              content: `
          <h2>💻 Exemplo com dados da Helsen</h2>
          <pre><code>tecnico = "Dayvison Jepson"
valor_hora = 175

print("Técnico:", tecnico)
print("Valor/hora:", valor_hora)</code></pre>
          <p><strong>Saída:</strong></p>
          <pre>Técnico: Dayvison Jepson
Valor/hora: 175</pre>
        `
            },
            {
              type: "exercise",
              instructions: "Crie uma variável chamada <code>nome</code> com seu nome e use <code>print()</code> para exibi-la.",
              starterCode: "# Crie a variável 'nome' aqui\n\n# Exiba com print()\n",
              solution: 'nome = "Seu Nome"\nprint(nome)',
              validation: (code) => {
                return code.includes('nome') && code.includes('print')
              }
            },
            {
              type: "exercise",
              instructions: "Agora crie duas variáveis: <code>tecnico</code> com o valor <code>&quot;Leon Mendes&quot;</code> e <code>valor_hora</code> com o valor <code>175</code>. Exiba ambas.",
              starterCode: "# Crie as variáveis aqui\n\n# Exiba ambas\n",
              solution: 'tecnico = "Leon Mendes"\nvalor_hora = 175\nprint(tecnico)\nprint(valor_hora)',
              validation: (code) => {
                return code.includes('tecnico') && code.includes('valor_hora') && code.includes('175')
              }
            }
          ]
        },
        {
          id: "1-3",
          title: "Números e Matemática",
          duration: "18 min",
          module: "Primeiros Passos",
          sections: [
            {
              type: "text",
              content: `
          <h2>📖 Operações matemáticas em Python</h2>
          <p>Python pode fazer cálculos facilmente:</p>
          <pre><code># Soma
total = 1145 + 700
print(total)  # 1845

# Subtração
diferenca = 1145 - 700
print(diferenca)  # 445

# Multiplicação
dobro = 175 * 2
print(dobro)  # 350

# Divisão
metade = 1000 / 2
print(metade)  # 500.0</code></pre>
        `
            },
            {
              type: "exercise",
              instructions: "Crie uma variável <code>horas</code> com valor <code>8</code> e outra <code>valor_hora</code> com <code>175</code>. Calcule o total multiplicando as duas e exiba o resultado.",
              starterCode: "# Crie as variáveis\n\n# Calcule o total\n\n# Exiba\n",
              solution: 'horas = 8\nvalor_hora = 175\ntotal = horas * valor_hora\nprint(total)',
              validation: (code) => {
                return code.includes('horas') && code.includes('valor_hora') && code.includes('*')
              }
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
          title: "Strings (Texto)",
          duration: "20 min",
          module: "Texto e Strings",
          sections: [
            {
              type: "text",
              content: `
          <h2>📖 Trabalhando com texto</h2>
          <p>Em Python, texto é chamado de <strong>string</strong>. Pode usar aspas simples ou duplas:</p>
          <pre><code>nome1 = "Leon Mendes"
nome2 = 'Valdinei Pereira'</code></pre>
          <p>Ambos funcionam igual!</p>
        `
            },
            {
              type: "text",
              content: `
          <h2>💻 Concatenação (juntar textos)</h2>
          <pre><code>nome = "Leon"
sobrenome = "Mendes"
nome_completo = nome + " " + sobrenome
print(nome_completo)  # Leon Mendes</code></pre>
          <p>Usamos <code>+</code> para juntar strings.</p>
        `
            },
            {
              type: "exercise",
              instructions: "Crie duas variáveis: <code>cliente</code> com <code>&quot;Minerva&quot;</code> e <code>tipo</code> com <code>&quot;Usinagem&quot;</code>. Junte as duas com um espaço e exiba.",
              starterCode: "# Crie as variáveis\n\n# Junte e exiba\n",
              solution: 'cliente = "Minerva"\ntipo = "Usinagem"\nnome_completo = cliente + " " + tipo\nprint(nome_completo)',
              validation: (code) => {
                return code.includes('cliente') && code.includes('tipo') && code.includes('+')
              }
            }
          ]
        },
        {
          id: "2-2",
          title: "F-Strings (Formatação)",
          duration: "22 min",
          module: "Texto e Strings",
          sections: [
            {
              type: "text",
              content: `
          <h2>📖 F-Strings: a forma moderna</h2>
          <p>F-strings são a melhor forma de misturar variáveis com texto em Python:</p>
          <pre><code>nome = "Leon Mendes"
valor = 175

mensagem = f"O técnico {nome} cobra R$ {valor}/hora"
print(mensagem)</code></pre>
          <p><strong>Saída:</strong></p>
          <pre>O técnico Leon Mendes cobra R$ 175/hora</pre>
          <p>Note o <code>f</code> antes das aspas e as variáveis dentro de <code>{}</code>.</p>
        `
            },
            {
              type: "exercise",
              instructions: "Crie variáveis <code>tecnico</code> e <code>valor_hora</code>. Use f-string para exibir: <code>Técnico: [nome] - R$ [valor]/hora</code>",
              starterCode: "# Crie as variáveis\n\n# Use f-string para exibir\n",
              solution: 'tecnico = "Leon Mendes"\nvalor_hora = 175\nprint(f"Técnico: {tecnico} - R$ {valor_hora}/hora")',
              validation: (code) => {
                return code.includes('f"') && code.includes('{') && code.includes('}')
              }
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
          title: "Listas em Python",
          duration: "25 min",
          module: "Listas e Loops",
          sections: [
            {
              type: "text",
              content: `
          <h2>📖 O que são listas?</h2>
          <p>Listas são <strong>coleções ordenadas</strong> de itens. Como uma lista de compras:</p>
          <pre><code>tecnicos = ["Leon Mendes", "Valdinei Pereira", "Dayvison Jepson"]</code></pre>
          <p>Em Python, listas usam <code>[]</code> (colchetes) e itens separados por vírgula.</p>
        `
            },
            {
              type: "text",
              content: `
          <h2>💻 Exemplo prático</h2>
          <pre><code>tecnicos = ["Leon Mendes", "Valdinei Pereira", "Dayvison Jepson"]
print(tecnicos)</code></pre>
          <p><strong>Saída:</strong></p>
          <pre>['Leon Mendes', 'Valdinei Pereira', 'Dayvison Jepson']</pre>
        `
            },
            {
              type: "exercise",
              badge: "1A",
              instructions: "Crie uma lista chamada <code>tecnicos</code> com três nomes: <code>&quot;Leon Mendes&quot;</code>, <code>&quot;Valdinei Pereira&quot;</code> e <code>&quot;Dayvison Jepson&quot;</code>. Exiba a lista.",
              starterCode: "# Crie a lista aqui\n\n# Exiba\n",
              solution: 'tecnicos = ["Leon Mendes", "Valdinei Pereira", "Dayvison Jepson"]\nprint(tecnicos)',
              validation: (code) => {
                return code.includes('[') && code.includes(']') && code.includes('Leon')
              }
            },
            {
              type: "text",
              content: `
          <h2>📖 Acessando itens da lista</h2>
          <p>Cada item tem um <strong>índice</strong> (posição). O primeiro é <code>0</code>:</p>
          <pre><code>tecnicos = ["Leon Mendes", "Valdinei Pereira", "Dayvison Jepson"]

print(tecnicos[0])  # Leon Mendes
print(tecnicos[1])  # Valdinei Pereira
print(tecnicos[2])  # Dayvison Jepson</code></pre>
        `
            },
            {
              type: "exercise",
              badge: "1B",
              instructions: "Use a lista de técnicos e exiba apenas o <strong>primeiro técnico</strong> usando <code>[0]</code>.",
              starterCode: 'tecnicos = ["Leon Mendes", "Valdinei Pereira", "Dayvison Jepson"]\n\n# Exiba o primeiro\n',
              solution: 'tecnicos = ["Leon Mendes", "Valdinei Pereira", "Dayvison Jepson"]\nprint(tecnicos[0])',
              validation: (code) => {
                return code.includes('[0]')
              }
            },
            {
              type: "text",
              content: `
          <h2>📖 Primeiro e último item</h2>
          <p>Para pegar o <strong>último</strong> item, use índice <code>-1</code>:</p>
          <pre><code>tecnicos = ["Leon", "Valdinei", "Dayvison"]

primeiro = tecnicos[0]
ultimo = tecnicos[-1]

print(f"Primeiro: {primeiro}")
print(f"Último: {ultimo}")</code></pre>
          <p><strong>Saída:</strong></p>
          <pre>Primeiro: Leon
Último: Dayvison</pre>
        `
            },
            {
              type: "exercise",
              badge: "1C",
              instructions: "Exiba o <strong>primeiro</strong> e o <strong>último</strong> técnico da lista usando <code>[0]</code> e <code>[-1]</code>.",
              starterCode: 'tecnicos = ["Leon Mendes", "Valdinei Pereira", "Dayvison Jepson"]\n\n# Exiba primeiro e último\n',
              solution: 'tecnicos = ["Leon Mendes", "Valdinei Pereira", "Dayvison Jepson"]\nprint(tecnicos[0])\nprint(tecnicos[-1])',
              validation: (code) => {
                return code.includes('[0]') && code.includes('[-1]')
              }
            },
            {
              type: "text",
              content: `
          <h2>📖 Tamanho da lista</h2>
          <p>Use <code>len()</code> para saber quantos itens tem na lista:</p>
          <pre><code>tecnicos = ["Leon", "Valdinei", "Dayvison"]
quantidade = len(tecnicos)
print(quantidade)  # 3</code></pre>
        `
            },
            {
              type: "exercise",
              badge: "1D",
              instructions: "Use <code>len()</code> para exibir quantos técnicos existem na lista.",
              starterCode: 'tecnicos = ["Leon Mendes", "Valdinei Pereira", "Dayvison Jepson"]\n\n# Exiba a quantidade\n',
              solution: 'tecnicos = ["Leon Mendes", "Valdinei Pereira", "Dayvison Jepson"]\nprint(len(tecnicos))',
              validation: (code) => {
                return code.includes('len(')
              }
            },
            {
              type: "text",
              content: `
          <h2>📖 Adicionando itens</h2>
          <p>Use <code>.append()</code> para adicionar um novo item no final:</p>
          <pre><code>tecnicos = ["Leon", "Valdinei"]
tecnicos.append("Dayvison")
print(tecnicos)  # ['Leon', 'Valdinei', 'Dayvison']</code></pre>
        `
            },
            {
              type: "exercise",
              badge: "1E",
              instructions: "Adicione um novo técnico chamado <code>&quot;Carlos Silva&quot;</code> na lista usando <code>.append()</code> e exiba a lista completa.",
              starterCode: 'tecnicos = ["Leon Mendes", "Valdinei Pereira", "Dayvison Jepson"]\n\n# Adicione e exiba\n',
              solution: 'tecnicos = ["Leon Mendes", "Valdinei Pereira", "Dayvison Jepson"]\ntecnicos.append("Carlos Silva")\nprint(tecnicos)',
              validation: (code) => {
                return code.includes('.append(')
              }
            }
          ]
        },
        {
          id: "3-2",
          title: "Loops: Percorrendo Listas",
          duration: "28 min",
          module: "Listas e Loops",
          sections: [
            {
              type: "text",
              content: `
          <h2>📖 O que é um loop?</h2>
          <p>Loop é quando fazemos o código <strong>repetir várias vezes</strong>.</p>
          <p>Em Python, usamos <code>for</code> para percorrer listas:</p>
          <pre><code>tecnicos = ["Leon", "Valdinei", "Dayvison"]

for tecnico in tecnicos:
    print(tecnico)</code></pre>
          <p><strong>Saída:</strong></p>
          <pre>Leon
Valdinei
Dayvison</pre>
          <p><strong>Importante:</strong> Em Python, usamos <strong>indentação</strong> (espaços) para definir blocos de código!</p>
        `
            },
            {
              type: "exercise",
              badge: "1A",
              instructions: "Use um loop <code>for</code> para exibir cada técnico da lista, um por linha.",
              starterCode: 'tecnicos = ["Leon Mendes", "Valdinei Pereira", "Dayvison Jepson"]\n\n# Loop aqui\n',
              solution: 'tecnicos = ["Leon Mendes", "Valdinei Pereira", "Dayvison Jepson"]\n\nfor tecnico in tecnicos:\n    print(tecnico)',
              validation: (code) => {
                return code.includes('for') && code.includes('in')
              }
            },
            {
              type: "text",
              content: `
          <h2>📖 Loop com mensagem personalizada</h2>
          <p>Podemos usar f-strings dentro do loop:</p>
          <pre><code>tecnicos = ["Leon", "Valdinei"]

for tecnico in tecnicos:
    print(f"Olá, {tecnico}!")</code></pre>
          <p><strong>Saída:</strong></p>
          <pre>Olá, Leon!
Olá, Valdinei!</pre>
        `
            },
            {
              type: "exercise",
              badge: "1B",
              instructions: "Use loop para exibir cada técnico com a mensagem: <code>Técnico: [nome]</code>",
              starterCode: 'tecnicos = ["Leon Mendes", "Valdinei Pereira", "Dayvison Jepson"]\n\n# Loop com f-string\n',
              solution: 'tecnicos = ["Leon Mendes", "Valdinei Pereira", "Dayvison Jepson"]\n\nfor tecnico in tecnicos:\n    print(f"Técnico: {tecnico}")',
              validation: (code) => {
                return code.includes('for') && code.includes('f"')
              }
            },
            {
              type: "text",
              content: `
          <h2>📖 Contando itens no loop</h2>
          <p>Podemos usar uma variável para contar:</p>
          <pre><code>tecnicos = ["Leon", "Valdinei", "Dayvison"]
total = 0

for tecnico in tecnicos:
    total = total + 1

print(f"Total de técnicos: {total}")</code></pre>
          <p><code>total = total + 1</code> aumenta o contador a cada volta do loop.</p>
        `
            },
            {
              type: "exercise",
              badge: "2A",
              instructions: "Crie uma variável <code>contador</code> começando em <code>0</code>. Use loop para contar quantos técnicos existem e exiba o total.",
              starterCode: 'tecnicos = ["Leon Mendes", "Valdinei Pereira", "Dayvison Jepson"]\n\n# Crie o contador e loop\n',
              solution: 'tecnicos = ["Leon Mendes", "Valdinei Pereira", "Dayvison Jepson"]\ncontador = 0\n\nfor tecnico in tecnicos:\n    contador = contador + 1\n\nprint(contador)',
              validation: (code) => {
                return code.includes('contador') && code.includes('for')
              }
            },
            {
              type: "text",
              content: `
          <h2>📖 Somando valores</h2>
          <p>Podemos somar números de uma lista:</p>
          <pre><code>valores = [1145, 700, 445]
total = 0

for valor in valores:
    total = total + valor

print(f"Total: R$ {total}")</code></pre>
          <p><strong>Saída:</strong> <code>Total: R$ 2290</code></p>
        `
            },
            {
              type: "exercise",
              badge: "2B",
              instructions: "Some todos os valores da lista de OS e exiba o total.",
              starterCode: 'valores_os = [1145, 700, 445, 890]\n\n# Some tudo e exiba\n',
              solution: 'valores_os = [1145, 700, 445, 890]\ntotal = 0\n\nfor valor in valores_os:\n    total = total + valor\n\nprint(total)',
              validation: (code) => {
                return code.includes('total') && code.includes('for') && code.includes('+')
              }
            },
            {
              type: "text",
              content: `
          <h2>📖 Loop com condição (if)</h2>
          <p>Podemos filtrar itens dentro do loop:</p>
          <pre><code>valores = [1145, 700, 445, 890]

for valor in valores:
    if valor > 800:
        print(f"OS alta: R$ {valor}")</code></pre>
          <p><strong>Saída:</strong></p>
          <pre>OS alta: R$ 1145
OS alta: R$ 890</pre>
        `
            },
            {
              type: "exercise",
              badge: "2C",
              instructions: "Use loop para exibir apenas os valores <strong>maiores que 600</strong>.",
              starterCode: 'valores_os = [1145, 700, 445, 890]\n\n# Loop com if\n',
              solution: 'valores_os = [1145, 700, 445, 890]\n\nfor valor in valores_os:\n    if valor > 600:\n        print(valor)',
              validation: (code) => {
                return code.includes('for') && code.includes('if') && code.includes('>')
              }
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
          title: "Funções em Python",
          duration: "24 min",
          module: "Funções",
          sections: [
            {
              type: "text",
              content: `
          <h2>📖 O que são funções?</h2>
          <p>Funções são <strong>blocos de código reutilizáveis</strong>. Como uma receita que você pode usar várias vezes.</p>
          <p>Em Python, criamos funções com <code>def</code>:</p>
          <pre><code>def saudar():
    print("Olá!")</code></pre>
          <p>Para executar a função, chamamos ela:</p>
          <pre><code>saudar()  # Olá!</code></pre>
        `
            },
            {
              type: "exercise",
              badge: "1A",
              instructions: "Crie uma função chamada <code>mostrar_empresa</code> que exibe <code>&quot;Helsen Service&quot;</code>. Chame a função.",
              starterCode: "# Crie a função\n\n# Chame a função\n",
              solution: 'def mostrar_empresa():\n    print("Helsen Service")\n\nmostrar_empresa()',
              validation: (code) => {
                return code.includes('def') && code.includes('mostrar_empresa')
              }
            },
            {
              type: "text",
              content: `
          <h2>📖 Funções com parâmetros</h2>
          <p>Podemos passar informações para a função:</p>
          <pre><code>def saudar(nome):
    print(f"Olá, {nome}!")

saudar("Leon")  # Olá, Leon!
saudar("Valdinei")  # Olá, Valdinei!</code></pre>
          <p><code>nome</code> é um <strong>parâmetro</strong>. A função recebe um valor e usa ele.</p>
        `
            },
            {
              type: "exercise",
              badge: "1B",
              instructions: "Crie uma função <code>mostrar_tecnico</code> que recebe um <code>nome</code> e exibe <code>Técnico: [nome]</code>. Chame com <code>&quot;Leon Mendes&quot;</code>.",
              starterCode: "# Crie a função\n\n# Chame a função\n",
              solution: 'def mostrar_tecnico(nome):\n    print(f"Técnico: {nome}")\n\nmostrar_tecnico("Leon Mendes")',
              validation: (code) => {
                return code.includes('def') && code.includes('nome') && code.includes('mostrar_tecnico')
              }
            },
            {
              type: "text",
              content: `
          <h2>📖 Múltiplos parâmetros</h2>
          <p>Funções podem receber vários valores:</p>
          <pre><code>def calcular_total(horas, valor_hora):
    total = horas * valor_hora
    print(f"Total: R$ {total}")

calcular_total(8, 175)  # Total: R$ 1400</code></pre>
        `
            },
            {
              type: "exercise",
              badge: "1C",
              instructions: "Crie uma função <code>mostrar_os</code> que recebe <code>numero</code> e <code>cliente</code>, e exibe: <code>OS [numero] - [cliente]</code>. Chame com <code>6650</code> e <code>&quot;Minerva Usinagem&quot;</code>.",
              starterCode: "# Crie a função\n\n# Chame a função\n",
              solution: 'def mostrar_os(numero, cliente):\n    print(f"OS {numero} - {cliente}")\n\nmostrar_os(6650, "Minerva Usinagem")',
              validation: (code) => {
                return code.includes('def') && code.includes('numero') && code.includes('cliente')
              }
            },
            {
              type: "text",
              content: `
          <h2>📖 Retornando valores</h2>
          <p>Funções podem <strong>devolver</strong> valores com <code>return</code>:</p>
          <pre><code>def calcular_total(horas, valor_hora):
    return horas * valor_hora

resultado = calcular_total(8, 175)
print(resultado)  # 1400</code></pre>
          <p><code>return</code> envia o valor de volta para quem chamou a função.</p>
        `
            },
            {
              type: "exercise",
              badge: "1D",
              instructions: "Crie uma função <code>calcular_comissao</code> que recebe <code>valor_os</code> e retorna <code>10%</code> desse valor. Chame com <code>1145</code> e exiba o resultado.",
              starterCode: "# Crie a função\n\n# Chame e exiba\n",
              solution: 'def calcular_comissao(valor_os):\n    return valor_os * 0.10\n\nresultado = calcular_comissao(1145)\nprint(resultado)',
              validation: (code) => {
                return code.includes('def') && code.includes('return') && code.includes('0.10')
              }
            }
          ]
        },
        {
          id: "4-2",
          title: "Métodos de Listas",
          duration: "26 min",
          module: "Funções",
          sections: [
            {
              type: "text",
              content: `
          <h2>📖 List comprehension (compreensão de lista)</h2>
          <p>Python tem uma forma super elegante de filtrar e transformar listas:</p>
          <pre><code># Forma tradicional
valores = [1145, 700, 445, 890]
altos = []

for valor in valores:
    if valor > 600:
        altos.append(valor)

print(altos)  # [1145, 700, 890]</code></pre>
          <pre><code># Com list comprehension
valores = [1145, 700, 445, 890]
altos = [v for v in valores if v > 600]
print(altos)  # [1145, 700, 890]</code></pre>
          <p>Muito mais curto e legível!</p>
        `
            },
            {
              type: "text",
              content: `
          <h2>💻 Sintaxe básica</h2>
          <pre><code># [EXPRESSÃO for ITEM in LISTA]
numeros = [1, 2, 3]
dobrados = [n * 2 for n in numeros]
print(dobrados)  # [2, 4, 6]

# [EXPRESSÃO for ITEM in LISTA if CONDIÇÃO]
numeros = [1, 2, 3, 4, 5]
pares = [n for n in numeros if n % 2 == 0]
print(pares)  # [2, 4]</code></pre>
        `
            },
            {
              type: "exercise",
              badge: "1A",
              instructions: "Use list comprehension para criar uma lista apenas com valores de OS <strong>maiores que 700</strong>.",
              starterCode: 'valores_os = [1145, 700, 445, 890]\n\n# Use list comprehension\n',
              solution: 'valores_os = [1145, 700, 445, 890]\naltos = [v for v in valores_os if v > 700]\nprint(altos)',
              validation: (code) => {
                return code.includes('[') && code.includes('for') && code.includes('if')
              }
            },
            {
              type: "text",
              content: `
          <h2>📖 Transformando valores</h2>
          <p>Podemos aplicar operações em cada item:</p>
          <pre><code>valores = [100, 200, 300]
com_taxa = [v * 1.10 for v in valores]
print(com_taxa)  # [110.0, 220.0, 330.0]</code></pre>
        `
            },
            {
              type: "exercise",
              badge: "1B",
              instructions: "Use list comprehension para calcular <code>10%</code> de comissão sobre cada valor da lista.",
              starterCode: 'valores_os = [1145, 700, 445, 890]\n\n# Calcule 10% de cada\n',
              solution: 'valores_os = [1145, 700, 445, 890]\ncomissoes = [v * 0.10 for v in valores_os]\nprint(comissoes)',
              validation: (code) => {
                return code.includes('[') && code.includes('for') && code.includes('0.10')
              }
            },
            {
              type: "text",
              content: `
          <h2>📖 Métodos úteis de listas</h2>
          <p>Python tem funções prontas para trabalhar com listas:</p>
          <pre><code>valores = [1145, 700, 445, 890]

# Somar todos
total = sum(valores)
print(total)  # 3180

# Maior valor
maior = max(valores)
print(maior)  # 1145

# Menor valor
menor = min(valores)
print(menor)  # 445

# Média
media = sum(valores) / len(valores)
print(media)  # 795.0</code></pre>
        `
            },
            {
              type: "exercise",
              badge: "2A",
              instructions: "Use <code>sum()</code> para calcular o total de todas as OS.",
              starterCode: 'valores_os = [1145, 700, 445, 890]\n\n# Calcule o total\n',
              solution: 'valores_os = [1145, 700, 445, 890]\ntotal = sum(valores_os)\nprint(total)',
              validation: (code) => {
                return code.includes('sum(')
              }
            },
            {
              type: "exercise",
              badge: "2B",
              instructions: "Use <code>max()</code> e <code>min()</code> para exibir o maior e menor valor de OS.",
              starterCode: 'valores_os = [1145, 700, 445, 890]\n\n# Exiba maior e menor\n',
              solution: 'valores_os = [1145, 700, 445, 890]\nprint(max(valores_os))\nprint(min(valores_os))',
              validation: (code) => {
                return code.includes('max(') && code.includes('min(')
              }
            },
            {
              type: "text",
              content: `
          <h2>📖 Combinando tudo</h2>
          <p>Podemos combinar comprehension com funções:</p>
          <pre><code>valores = [1145, 700, 445, 890]

# Filtrar > 600 e somar
total_altos = sum([v for v in valores if v > 600])
print(total_altos)  # 2735</code></pre>
        `
            },
            {
              type: "exercise",
              badge: "3A",
              instructions: "Use list comprehension para filtrar valores <strong>menores que 800</strong> e depois use <code>sum()</code> para somar esses valores.",
              starterCode: 'valores_os = [1145, 700, 445, 890]\n\n# Filtre e some\n',
              solution: 'valores_os = [1145, 700, 445, 890]\ntotal_baixos = sum([v for v in valores_os if v < 800])\nprint(total_baixos)',
              validation: (code) => {
                return code.includes('[') && code.includes('for') && code.includes('if') && code.includes('sum(')
              }
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
          title: "Dicionários em Python",
          duration: "22 min",
          module: "Dicionários",
          sections: [
            {
              type: "text",
              content: `
          <h2>📖 O que são dicionários?</h2>
          <p>Dicionários são coleções de <strong>pares chave-valor</strong>. Como uma ficha de cadastro:</p>
          <pre><code>tecnico = {
    "id": 41,
    "nome": "Leon Mendes",
    "valor_hora": 175,
    "ativo": True
}</code></pre>
          <p>Usamos <code>{}</code> (chaves) e cada item tem <code>"chave": valor</code>.</p>
        `
            },
            {
              type: "text",
              content: `
          <h2>💻 Acessando valores</h2>
          <pre><code>tecnico = {
    "nome": "Leon Mendes",
    "valor_hora": 175
}

print(tecnico["nome"])  # Leon Mendes
print(tecnico["valor_hora"])  # 175</code></pre>
        `
            },
            {
              type: "exercise",
              badge: "1A",
              instructions: "Crie um dicionário <code>os_info</code> com as chaves: <code>&quot;numero&quot;</code> (6650), <code>&quot;cliente&quot;</code> (&quot;Minerva Usinagem&quot;) e <code>&quot;valor&quot;</code> (1145). Exiba o cliente.",
              starterCode: "# Crie o dicionário\n\n# Exiba o cliente\n",
              solution: 'os_info = {\n    "numero": 6650,\n    "cliente": "Minerva Usinagem",\n    "valor": 1145\n}\n\nprint(os_info["cliente"])',
              validation: (code) => {
                return code.includes('{') && code.includes('}') && code.includes('numero')
              }
            },
            {
              type: "text",
              content: `
          <h2>📖 Modificando e adicionando</h2>
          <pre><code>tecnico = {"nome": "Leon", "valor_hora": 175}

# Modificar
tecnico["valor_hora"] = 180

# Adicionar nova chave
tecnico["ativo"] = True

print(tecnico)</code></pre>
          <p><strong>Saída:</strong></p>
          <pre>{'nome': 'Leon', 'valor_hora': 180, 'ativo': True}</pre>
        `
            },
            {
              type: "exercise",
              badge: "1B",
              instructions: "Adicione uma nova chave <code>&quot;status&quot;</code> com valor <code>&quot;completed&quot;</code> no dicionário e exiba o dicionário completo.",
              starterCode: 'os_info = {\n    "numero": 6650,\n    "cliente": "Minerva Usinagem",\n    "valor": 1145\n}\n\n# Adicione status e exiba\n',
              solution: 'os_info = {\n    "numero": 6650,\n    "cliente": "Minerva Usinagem",\n    "valor": 1145\n}\n\nos_info["status"] = "completed"\nprint(os_info)',
              validation: (code) => {
                return code.includes('status') && code.includes('=')
              }
            },
            {
              type: "text",
              content: `
          <h2>📖 Dicionário completo de técnico</h2>
          <p>Vamos criar um dicionário com todos os dados de um técnico da Helsen:</p>
          <pre><code>tecnico = {
    "id": 41,
    "nome": "Leon Mendes",
    "valor_hora": 175,
    "ativo": True,
    "especialidade": "Automação Industrial"
}

print(f"Técnico: {tecnico['nome']}")
print(f"Valor/hora: R$ {tecnico['valor_hora']}")
print(f"Especialidade: {tecnico['especialidade']}")</code></pre>
        `
            },
            {
              type: "exercise",
              badge: "1C",
              instructions: "Crie um dicionário completo de uma OS com: <code>numero</code>, <code>cliente</code>, <code>tecnico_id</code>, <code>valor</code> e <code>status</code>. Use dados reais da Helsen. Exiba o número e o valor.",
              starterCode: "# Crie o dicionário completo\n\n# Exiba numero e valor\n",
              solution: 'os_completa = {\n    "numero": 6650,\n    "cliente": "Minerva Usinagem",\n    "tecnico_id": 41,\n    "valor": 1145,\n    "status": "completed"\n}\n\nprint(os_completa["numero"])\nprint(os_completa["valor"])',
              validation: (code) => {
                return code.includes('{') && code.includes('numero') && code.includes('cliente') && code.includes('valor')
              }
            }
          ]
        },
        {
          id: "5-2",
          title: "Listas de Dicionários",
          duration: "24 min",
          module: "Dicionários",
          sections: [
            {
              type: "text",
              content: `
          <h2>📖 Combinando listas e dicionários</h2>
          <p>Podemos criar listas de dicionários, como um banco de dados:</p>
          <pre><code>tecnicos = [
    {"id": 41, "nome": "Leon Mendes", "valor_hora": 175},
    {"id": 42, "nome": "Valdinei Pereira", "valor_hora": 175},
    {"id": 48, "nome": "Dayvison Jepson", "valor_hora": 175}
]

print(tecnicos[0]["nome"])  # Leon Mendes</code></pre>
        `
            },
            {
              type: "exercise",
              badge: "1A",
              instructions: "Crie uma lista <code>todas_os</code> com 3 dicionários de OS. Use loop para exibir o número de cada uma.",
              starterCode: "# Crie a lista de OS\n\n# Loop para exibir números\n",
              solution: 'todas_os = [\n    {"numero": 6650, "cliente": "Minerva Usinagem", "valor": 1145},\n    {"numero": 6632, "cliente": "Usinagem Castro", "valor": 700},\n    {"numero": 6620, "cliente": "Off Limits", "valor": 445}\n]\n\nfor os in todas_os:\n    print(os["numero"])',
              validation: (code) => {
                return code.includes('[') && code.includes('{') && code.includes('for')
              }
            },
            {
              type: "text",
              content: `
          <h2>📖 Filtrando dicionários</h2>
          <p>Podemos usar list comprehension com dicionários:</p>
          <pre><code>os_list = [
    {"numero": 6650, "valor": 1145, "status": "completed"},
    {"numero": 6632, "valor": 700, "status": "avulso"},
    {"numero": 6620, "valor": 445, "status": "completed"}
]

# Apenas completed
completas = [os for os in os_list if os["status"] == "completed"]
print(len(completas))  # 2</code></pre>
        `
            },
            {
              type: "exercise",
              badge: "1B",
              instructions: "Filtre apenas as OS com <code>valor</code> maior que 600 usando list comprehension.",
              starterCode: 'todas_os = [\n    {"numero": 6650, "valor": 1145},\n    {"numero": 6632, "valor": 700},\n    {"numero": 6620, "valor": 445}\n]\n\n# Filtre e exiba\n',
              solution: 'todas_os = [\n    {"numero": 6650, "valor": 1145},\n    {"numero": 6632, "valor": 700},\n    {"numero": 6620, "valor": 445}\n]\n\naltas = [os for os in todas_os if os["valor"] > 600]\nprint(altas)',
              validation: (code) => {
                return code.includes('[') && code.includes('for') && code.includes('if') && code.includes('>')
              }
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
