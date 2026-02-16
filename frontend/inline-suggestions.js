// ============================================
// INLINE SUGGESTIONS - Tipo Copilot
// ============================================

const InlineSuggestions = {
  currentSuggestion: null,
  currentEditor: null,
  ghostTextMarker: null,

  // Sugestoes baseadas no exercicio
  getSuggestion(lessonId, exerciseIdx, currentCode) {
    const lines = currentCode.trim().split('\n')
    const lastLine = lines[lines.length - 1].trim()

    // Sugestoes especificas por licao
    const suggestions = {
      // Licao 3-1 - Arrays (micro-passos)
      '3-1': {
        0: [
          { trigger: 'let clientes = [', suggestion: '"Fabrica ABC", "Metalurgica XYZ", "Industria 123"]' },
          { trigger: 'console.log(clientes', suggestion: ')' }
        ],
        1: [
          { trigger: 'console.log(clientes[', suggestion: '0])' }
        ],
        2: [
          { trigger: 'console.log("Primeiro:"', suggestion: ', clientes[0])' },
          { trigger: 'console.log("Ultimo:"', suggestion: ', clientes[2])' }
        ],
        3: [
          { trigger: 'console.log(clientes.length', suggestion: ')' }
        ],
        4: [
          { trigger: 'clientes.push(', suggestion: '"JMS Industria")' },
          { trigger: 'console.log(clientes', suggestion: ')' }
        ]
      },

      // Licao 3-2 - Loops (micro-passos)
      '3-2': {
        0: [
          { trigger: 'for (let cliente of', suggestion: ' clientes) {\n  console.log(cliente)\n}' }
        ],
        1: [
          { trigger: 'for (let nome of', suggestion: ' tecnicos) {\n  console.log(`Tecnico: ${nome}`)\n}' }
        ],
        2: [
          { trigger: 'for (let c of', suggestion: ' clientes) {\n  total++\n}' }
        ],
        3: [
          { trigger: 'for (let v of', suggestion: ' valores) {\n  soma += v\n}' }
        ],
        4: [
          { trigger: 'for (let v of valores) {', suggestion: '\n  if (v > 1000) {\n    maiores++\n  }\n}' }
        ]
      },

      // Licao 4-1 - Funcoes (micro-passos)
      '4-1': {
        0: [
          { trigger: 'function mostrarTecnicos() {', suggestion: '\n  console.log("Leon Mendes")\n  console.log("Dayvison Jepson")\n  console.log("Valdinei Pereira")\n}' },
          { trigger: 'mostrarTecnicos(', suggestion: ')' }
        ],
        1: [
          { trigger: 'function mostrarCliente(nome) {', suggestion: '\n  console.log(`Cliente: ${nome}`)\n}' },
          { trigger: 'mostrarCliente(', suggestion: '"Minerva Usinagem")' }
        ],
        2: [
          { trigger: 'function calcularServico(horas, valorHora) {', suggestion: '\n  let total = horas * valorHora\n  console.log(`Total: R$${total}`)\n}' },
          { trigger: 'calcularServico(', suggestion: '4, 175)' }
        ],
        3: [
          { trigger: 'function calcularValorOS(horas, valorHora) {', suggestion: '\n  let total = horas * valorHora\n  return total\n}' },
          { trigger: 'let valor = calcularValorOS(', suggestion: '6, 175)' },
          { trigger: 'console.log(`Valor: R$${', suggestion: 'valor}`)' }
        ]
      },

      // Licao 4-2 - Metodos de Array (micro-passos)
      '4-2': {
        0: [
          { trigger: 'let tecnico = tecnicos.find(', suggestion: 't => t.nome === "Leon Mendes")' },
          { trigger: 'console.log(tecnico.nome', suggestion: ')' }
        ],
        1: [
          { trigger: 'let os = ordens.find(', suggestion: 'os => os.numero === 6632)' },
          { trigger: 'console.log("Cliente:", os.cliente', suggestion: ')' },
          { trigger: 'console.log("Valor: R$", os.valor', suggestion: ')' }
        ],
        2: [
          { trigger: 'let taxaAlta = tecnicos.filter(', suggestion: 't => t.taxa > 150)' },
          { trigger: 'console.log("Tecnicos com taxa alta:", taxaAlta.length', suggestion: ')' }
        ],
        3: [
          { trigger: 'let pendentes = ordens.filter(', suggestion: 'os => os.status === "pending_review")' },
          { trigger: 'for (let os of pendentes) {', suggestion: '\n  console.log(`OS ${os.numero} - ${os.cliente}`)\n}' }
        ],
        4: [
          { trigger: 'let nomes = tecnicos.map(', suggestion: 't => t.nome)' },
          { trigger: 'console.log(nomes', suggestion: ')' }
        ],
        5: [
          { trigger: 'let valores = ordens.map(', suggestion: 'os => os.valor)' },
          { trigger: 'let total = 0', suggestion: '\nfor (let valor of valores) {\n  total += valor\n}' }
        ]
      },

      // Licao 5-1 - Objetos e JSON (micro-passos)
      '5-1': {
        0: [
          { trigger: 'let tecnico = {', suggestion: '\n  nome: "Leon Mendes",\n  taxa: 175\n}' },
          { trigger: 'console.log("Nome:", tecnico.nome', suggestion: ')' },
          { trigger: 'console.log("Taxa:", tecnico.taxa', suggestion: ')' }
        ],
        1: [
          { trigger: 'let { nome', suggestion: ', taxa } = tecnico' },
          { trigger: 'console.log("Nome:", nome', suggestion: ')' },
          { trigger: 'console.log("Taxa:", taxa', suggestion: ')' }
        ],
        2: [
          { trigger: 'let tecnico = {', suggestion: '\n  id: 41,\n  username: "Leon Mendes",\n  hourly_rate: 175,\n  disponivel: true\n}' },
          { trigger: 'let { username', suggestion: ', hourly_rate, disponivel } = tecnico' },
          { trigger: 'let status = disponivel', suggestion: ' ? "Disponivel" : "Indisponivel"' },
          { trigger: 'console.log(`Tecnico ${username}', suggestion: ' - R$ ${hourly_rate}/hora - ${status}`)' }
        ]
      },

      // Licao 6-1 - Lendo Codigo REAL da Helsen
      '6-1': {
        0: [
          { trigger: 'function calcularFaturamento(', suggestion: 'lista) {' },
          { trigger: 'let finalizadas =', suggestion: ' lista.filter(os => os.status === "completed")' },
          { trigger: 'let total = 0', suggestion: '\n  for (let os of finalizadas) {\n    total += os.valor\n  }' },
          { trigger: 'return', suggestion: ' total' }
        ]
      },

      // Licao 7-1 - Promises e Async
      '7-1': {
        0: [
          { trigger: 'function buscarOS(', suggestion: 'numero) {' },
          { trigger: 'return new Promise(', suggestion: '(resolve, reject) => {' },
          { trigger: 'setTimeout(() => {', suggestion: '\n      if (numero === 6650) {\n        resolve({ order_number: 6650, client_name: "Minerva Usinagem e Servicos LDTA", grand_total: 1145 })\n      } else if (numero === 6632) {\n        resolve({ order_number: 6632, client_name: "Usinagem Castro LTDA", grand_total: 700 })\n      } else {\n        reject(new Error("OS nao encontrada"))\n      }\n    }, 600)' },
          { trigger: 'async function', suggestion: ' buscarEMostrar() {' },
          { trigger: 'try {', suggestion: '\n    let os = await buscarOS(6650)\n    console.log(`Cliente: ${os.client_name}`)\n    console.log(`Valor: R$ ${os.grand_total}`)' },
          { trigger: 'catch (erro)', suggestion: ' {\n    console.log(`Erro: ${erro.message}`)' }
        ]
      }
    }

    const lessonSuggestions = suggestions[lessonId]
    if (!lessonSuggestions) return null

    const exerciseSuggestions = lessonSuggestions[exerciseIdx]
    if (!exerciseSuggestions) return null

    // Verifica se algum trigger casa
    for (const item of exerciseSuggestions) {
      if (lastLine.includes(item.trigger)) {
        return item.suggestion
      }
    }

    return null
  },

  // Mostra sugestao como texto fantasma no final da linha
  show(editor, suggestion) {
    this.hide() // Remove sugestao anterior

    const cursor = editor.getCursor()
    const currentLine = editor.getLine(cursor.line)

    // Cria marcador de texto com estilo cinza
    const from = { line: cursor.line, ch: currentLine.length }
    const to = { line: cursor.line, ch: currentLine.length }

    this.ghostTextMarker = editor.markText(from, to, {
      replacedWith: (() => {
        const span = document.createElement('span')
        span.className = 'inline-suggestion'
        span.textContent = suggestion
        span.style.cssText = 'color: #555; opacity: 0.6; font-style: italic;'
        return span
      })(),
      handleMouseEvents: false
    })

    this.currentSuggestion = suggestion
    this.currentEditor = editor
  },

  // Remove sugestao
  hide() {
    if (this.ghostTextMarker) {
      this.ghostTextMarker.clear()
      this.ghostTextMarker = null
    }
    this.currentSuggestion = null
    this.currentEditor = null
  },

  // Aceita sugestao (Tab)
  accept() {
    if (!this.currentSuggestion || !this.currentEditor) return false

    const cursor = this.currentEditor.getCursor()
    this.currentEditor.replaceRange(
      this.currentSuggestion,
      cursor
    )

    this.hide()
    return true
  },

  // Inicializa listeners no editor
  attach(editor, lessonId, exerciseIdx) {
    let debounceTimer = null

    // Listener de mudanca de codigo
    editor.on('change', () => {
      clearTimeout(debounceTimer)
      debounceTimer = setTimeout(() => {
        const code = editor.getValue()
        const suggestion = this.getSuggestion(lessonId, exerciseIdx, code)

        if (suggestion) {
          this.show(editor, suggestion)
        } else {
          this.hide()
        }
      }, 500)
    })

    // Esconde ao mover cursor
    editor.on('cursorActivity', () => {
      // Mantem sugestao se cursor ainda na mesma linha
      const cursor = editor.getCursor()
      if (this.ghostTextMarker) {
        const markerPos = this.ghostTextMarker.find()
        if (!markerPos || markerPos.from.line !== cursor.line) {
          this.hide()
        }
      }
    })
  }
}
