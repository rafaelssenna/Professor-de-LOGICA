// ============================================
// INLINE SUGGESTIONS - Tipo Copilot
// ============================================

const InlineSuggestions = {
  currentWidget: null,
  currentEditor: null,

  // Sugestoes baseadas no exercicio
  getSuggestion(lessonId, exerciseIdx, currentCode) {
    const lines = currentCode.trim().split('\n')
    const lastLine = lines[lines.length - 1].trim()

    // Sugestoes especificas por licao
    const suggestions = {
      // Licao 3-1 - Arrays
      '3-1': {
        0: [
          { trigger: 'let numeros = [', suggestion: '10, 20, 30, 40, 50]' },
          { trigger: 'console.log(numeros', suggestion: '[2])' }
        ],
        1: [
          { trigger: 'let frutas = [', suggestion: '"Banana", "Maca", "Laranja"]' },
          { trigger: 'frutas.push(', suggestion: '"Uva")' },
          { trigger: 'console.log(frutas', suggestion: ')' }
        ]
      },

      // Licao 3-2 - Loops
      '3-2': {
        0: [
          { trigger: 'for (let numero = 1;', suggestion: ' numero <= 5; numero++) {\n  console.log(numero)\n}' }
        ],
        1: [
          { trigger: 'let tecnicos = [', suggestion: '"Leon Mendes", "Diego Henrique", "Dayvison Jepson"]' },
          { trigger: 'for (let tecnico of', suggestion: ' tecnicos) {\n  console.log(tecnico)\n}' }
        ]
      },

      // Licao 4-1 - Funcoes
      '4-1': {
        0: [
          { trigger: 'function calcularTotal(', suggestion: 'valor, horas) {' },
          { trigger: 'let total =', suggestion: ' valor * horas' },
          { trigger: 'return', suggestion: ' total' }
        ],
        1: [
          { trigger: 'function verificarStatus(', suggestion: 'os) {' },
          { trigger: 'if (os.status', suggestion: ' === "completed") {\n    return "Finalizada"\n  } else {\n    return "Em andamento"\n  }' }
        ]
      },
      // Licao 4-2 - Metodos de Array
      '4-2': {
        0: [
          { trigger: 'let os =', suggestion: 'ordens.find(os => os.numero === 6632)' },
          { trigger: 'console.log("Cliente:"', suggestion: ', os.cliente)' }
        ],
        1: [
          { trigger: 'let pendentes =', suggestion: 'ordens.filter(os => os.status === "pending_review")' },
          { trigger: 'for (let os of', suggestion: ' pendentes) {\n  console.log(`OS ${os.numero} - ${os.cliente}`)\n}' }
        ],
        2: [
          { trigger: 'let valores =', suggestion: 'ordens.map(os => os.valor)' },
          { trigger: 'let total = 0', suggestion: '\nfor (let valor of valores) {\n  total += valor\n}' }
        ]
      },

      // Licao 5-1 - Objetos e JSON
      '5-1': {
        0: [
          { trigger: 'let tecnico = {', suggestion: '\n  id: 41,\n  username: "Leon Mendes",\n  hourly_rate: 175,\n  disponivel: true\n}' },
          { trigger: 'let { username', suggestion: ', hourly_rate, disponivel } = tecnico' },
          { trigger: 'let status =', suggestion: ' disponivel ? "Disponivel" : "Indisponivel"' },
          { trigger: 'console.log(`Tecnico', suggestion: ' ${username} - R$ ${hourly_rate}/hora - ${status}`)' }
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

  // Mostra sugestao inline no editor
  show(editor, suggestion) {
    this.hide() // Remove sugestao anterior

    const cursor = editor.getCursor()
    const line = cursor.line
    const ch = editor.getLine(line).length

    // Cria widget com texto cinza transparente
    const widget = document.createElement('span')
    widget.className = 'inline-suggestion'
    widget.textContent = suggestion
    widget.style.cssText = `
      color: #666;
      opacity: 0.5;
      font-style: italic;
      pointer-events: none;
      user-select: none;
    `

    this.currentWidget = editor.addWidget(
      { line, ch },
      widget,
      false // scrollIntoView
    )
    this.currentEditor = editor
  },

  // Remove sugestao
  hide() {
    if (this.currentWidget) {
      this.currentWidget.clear()
      this.currentWidget = null
      this.currentEditor = null
    }
  },

  // Aceita sugestao (Tab)
  accept() {
    if (!this.currentWidget || !this.currentEditor) return false

    const suggestion = this.currentWidget.node.textContent
    const cursor = this.currentEditor.getCursor()

    this.currentEditor.replaceRange(
      suggestion,
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
      }, 300)
    })

    // Listener de Tab
    editor.addKeyMap({
      'Tab': (cm) => {
        // Se tem sugestao, aceita
        if (this.accept()) {
          return
        }
        // Se nao, comportamento padrao (indent)
        cm.execCommand('defaultTab')
      }
    })

    // Esconde ao mover cursor ou ESC
    editor.on('cursorActivity', () => {
      this.hide()
    })

    editor.addKeyMap({
      'Esc': () => {
        this.hide()
      }
    })
  }
}
