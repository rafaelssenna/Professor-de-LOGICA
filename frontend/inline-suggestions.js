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
      // Licao 4-2 - Metodos de Array
      '4-2': {
        // Exercicio 1 - find()
        0: [
          {
            trigger: 'let os =',
            suggestion: 'ordens.find(os => os.numero === 6632)'
          },
          {
            trigger: 'console.log("Cliente:"',
            suggestion: ', os.cliente)'
          }
        ],
        // Exercicio 2 - filter()
        1: [
          {
            trigger: 'let pendentes =',
            suggestion: 'ordens.filter(os => os.status === "pending_review")'
          },
          {
            trigger: 'for (let os of',
            suggestion: ' pendentes) {\n  console.log(`OS ${os.numero} - ${os.cliente}`)\n}'
          }
        ],
        // Exercicio 3 - map()
        2: [
          {
            trigger: 'let valores =',
            suggestion: 'ordens.map(os => os.valor)'
          },
          {
            trigger: 'let total = 0',
            suggestion: '\nfor (let valor of valores) {\n  total += valor\n}'
          }
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
