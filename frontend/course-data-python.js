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
    }
  ]
};

// Exportar para uso no sistema
if (typeof module !== 'undefined' && module.exports) {
  module.exports = COURSE_DATA_PYTHON;
}
