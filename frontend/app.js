// ============================================
// APP ENGINE - Motor da plataforma
// ============================================

const App = {
  progress: null,
  currentLesson: null,
  editors: [],
  allLessons: [],
  codeDrafts: {},       // cache local: { "1-1_0": "codigo..." }
  _saveTimer: null,     // debounce do progresso

  // ---- INICIALIZACAO ----

  init() {
    this.allLessons = []
    COURSE_DATA.modules.forEach(m => {
      m.lessons.forEach(l => this.allLessons.push(l))
    })
    if (API.isLoggedIn()) {
      this.showApp()
    }
  },

  async showApp() {
    document.getElementById('auth-screen').classList.add('hidden')
    document.getElementById('app').classList.remove('hidden')

    const student = API.getStudent()
    document.getElementById('student-display-name').textContent = student ? student.name : ''

    // Carrega progresso do servidor
    try {
      const data = await API.loadProgress()
      this.progress = {
        currentLesson: data.currentLesson || '1-1',
        lessons: data.lessons || {}
      }

      // Carrega rascunhos de codigo
      this.codeDrafts = await API.loadAllCodeDrafts()
    } catch (err) {
      // Se falhar (token expirado etc), volta pro login
      if (err.message && err.message.includes('401')) {
        Auth.logout()
        return
      }
      // Fallback: progresso vazio
      this.progress = { currentLesson: '1-1', lessons: {} }
      this.codeDrafts = {}
    }

    // Migracao localStorage -> servidor (primeira vez)
    this.migrateLocalStorage()

    this.renderSidebar()
    this.updateProgress()
    const current = this.progress.currentLesson || '1-1'
    this.navigateTo(current)
  },

  async migrateLocalStorage() {
    const raw = localStorage.getItem('math_js_progress')
    if (!raw) return
    const old = JSON.parse(raw)

    // So migra se o servidor estiver vazio e o localStorage tiver dados
    const hasServerData = Object.keys(this.progress.lessons).length > 0
    const hasLocalData = old.lessons && Object.keys(old.lessons).length > 0
    if (hasServerData || !hasLocalData) {
      // Limpa localStorage antigo de qualquer forma
      localStorage.removeItem('math_js_progress')
      return
    }

    // Migra progresso
    this.progress.currentLesson = old.currentLesson || '1-1'
    this.progress.lessons = old.lessons || {}
    this.saveProgress()

    // Migra rascunhos de codigo
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key && key.startsWith('math_code_')) {
        const parts = key.replace('math_code_', '').split('_')
        const lessonId = parts[0]
        const exIdx = parseInt(parts[1])
        const code = localStorage.getItem(key)
        if (code) {
          this.codeDrafts[`${lessonId}_${exIdx}`] = code
          API.saveCodeDraft(lessonId, exIdx, code).catch(() => {})
        }
      }
    }

    // Limpa localStorage antigo
    localStorage.removeItem('math_js_progress')
    const keysToRemove = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key && key.startsWith('math_code_')) keysToRemove.push(key)
    }
    keysToRemove.forEach(k => localStorage.removeItem(k))

    // Re-renderiza com dados migrados
    this.renderSidebar()
    this.updateProgress()
  },

  // ---- NAVEGACAO ----

  navigateTo(lessonId) {
    this.destroyEditors()
    this.currentLesson = this.allLessons.find(l => l.id === lessonId)
    if (!this.currentLesson) return

    this.progress.currentLesson = lessonId
    if (!this.progress.lessons[lessonId]) {
      this.progress.lessons[lessonId] = { started: true, completed: false, exercisesDone: [], quizScore: null }
    }
    this.progress.lessons[lessonId].started = true
    this.saveProgress()

    document.getElementById('lesson-content').classList.remove('hidden')
    document.getElementById('quiz-content').classList.add('hidden')
    document.getElementById('lesson-footer').classList.remove('hidden')

    this.renderLesson(this.currentLesson)
    this.updateSidebarActive(lessonId)
    this.updateNavButtons()
    this.updateProgress()

    document.getElementById('content').scrollTop = 0
  },

  prevLesson() {
    const idx = this.allLessons.findIndex(l => l.id === this.currentLesson.id)
    if (idx > 0) this.navigateTo(this.allLessons[idx - 1].id)
  },

  nextLesson() {
    const idx = this.allLessons.findIndex(l => l.id === this.currentLesson.id)
    if (idx < this.allLessons.length - 1) this.navigateTo(this.allLessons[idx + 1].id)
  },

  updateNavButtons() {
    const idx = this.allLessons.findIndex(l => l.id === this.currentLesson.id)
    document.getElementById('btn-prev').disabled = idx === 0
    document.getElementById('btn-next').disabled = idx === this.allLessons.length - 1
  },

  // ---- SIDEBAR ----

  renderSidebar() {
    const nav = document.getElementById('module-nav')
    nav.innerHTML = ''
    COURSE_DATA.modules.forEach(mod => {
      const group = document.createElement('div')
      group.className = 'module-group'
      const header = document.createElement('div')
      header.className = 'module-header expanded'
      header.innerHTML = `<span class="module-arrow">&#9654;</span> ${mod.id}. ${mod.title}`
      header.onclick = () => {
        header.classList.toggle('expanded')
        lessonsDiv.classList.toggle('expanded')
      }
      const lessonsDiv = document.createElement('div')
      lessonsDiv.className = 'module-lessons expanded'

      mod.lessons.forEach(lesson => {
        const link = document.createElement('div')
        link.className = 'lesson-link'
        link.dataset.lessonId = lesson.id
        const lp = this.progress.lessons[lesson.id]
        const completed = lp && lp.completed
        let icon = '<span class="lesson-status status-available">&#9675;</span>'
        if (completed) {
          icon = '<span class="lesson-status status-completed">&#10003;</span>'
          link.classList.add('completed')
        }
        link.innerHTML = `${icon}<span>${lesson.title}</span>`
        link.onclick = () => this.navigateTo(lesson.id)
        lessonsDiv.appendChild(link)
      })

      group.appendChild(header)
      group.appendChild(lessonsDiv)
      nav.appendChild(group)
    })
  },

  updateSidebarActive(lessonId) {
    document.querySelectorAll('.lesson-link').forEach(el => {
      el.classList.toggle('active', el.dataset.lessonId === lessonId)
    })
  },

  toggleSidebar() {
    const sidebar = document.getElementById('sidebar')
    if (window.innerWidth <= 768) {
      sidebar.classList.toggle('mobile-open')
    } else {
      sidebar.classList.toggle('collapsed')
    }
  },

  // ---- RENDER LESSON ----

  renderLesson(lesson) {
    const container = document.getElementById('lesson-content')
    container.innerHTML = ''

    // Header
    const header = document.createElement('div')
    header.className = 'lesson-header'
    header.innerHTML = `
      <h1>${lesson.title}</h1>
      <div class="lesson-meta">
        <span class="tag">${lesson.module}</span>
        <span>${lesson.duration}</span>
      </div>
    `
    container.appendChild(header)

    // Conceptual warning
    if (lesson.conceptual) {
      const note = document.createElement('div')
      note.className = 'conceptual-note'
      note.innerHTML = `<span class="icon">&#9888;</span><span>Este modulo e conceitual. Pra executar o codigo, salve como arquivo .js e rode com <strong>node arquivo.js</strong> no terminal.</span>`
      container.appendChild(note)
    }

    // Sections
    let exerciseIdx = 0
    lesson.sections.forEach((section, sIdx) => {
      if (section.type === 'explanation') {
        this.renderExplanation(container, section)
      } else if (section.type === 'code-example') {
        this.renderCodeExample(container, section, sIdx)
      } else if (section.type === 'exercise') {
        this.renderExercise(container, section, lesson.id, exerciseIdx)
        exerciseIdx++
      }
    })

    // Quiz CTA
    if (lesson.quiz && lesson.quiz.length > 0) {
      const cta = document.createElement('div')
      cta.className = 'section-block'
      cta.style.textAlign = 'center'
      cta.style.padding = '32px 0'
      const lp = this.progress.lessons[lesson.id]
      const quizDone = lp && lp.completed
      cta.innerHTML = `
        <h2 style="border:none;padding:0;text-align:center">Pronto pro Quiz?</h2>
        <p style="color:var(--text-secondary);margin-bottom:20px">${quizDone ? 'Voce ja completou este quiz! Pode refazer se quiser.' : 'Responda as perguntas pra completar esta aula.'}</p>
        <button class="btn-action run" onclick="App.startQuiz('${lesson.id}')" style="padding:12px 40px;font-size:15px">${quizDone ? 'Refazer Quiz' : 'Iniciar Quiz'}</button>
      `
      container.appendChild(cta)
    }

    // Init CodeMirror editors after DOM
    requestAnimationFrame(() => this.initEditors())
  },

  renderExplanation(container, section) {
    const div = document.createElement('div')
    div.className = 'section-block'
    div.innerHTML = `<h2>${section.title}</h2><div class="text-content">${section.content}</div>`
    container.appendChild(div)
  },

  renderCodeExample(container, section, idx) {
    const id = `code-example-${idx}`
    const block = document.createElement('div')
    block.className = 'code-block'

    let actions = '<button class="btn-small" onclick="App.copyCode(this)">Copiar</button>'
    if (section.runnable) {
      actions += `<button class="btn-small btn-run" onclick="App.runExample('${id}')">Executar</button>`
    }

    block.innerHTML = `
      <div class="code-block-header">
        <span class="code-block-title">${section.title}</span>
        <div class="code-block-actions">${actions}</div>
      </div>
      <pre id="${id}"><code class="language-javascript">${this.escapeHtml(section.code)}</code></pre>
      <div class="output-panel" id="${id}-output">
        <div class="output-header">Saida</div>
        <pre class="output-content"></pre>
      </div>
    `
    container.appendChild(block)

    // Aplica Prism.js syntax highlighting
    if (typeof Prism !== 'undefined') {
      const codeEl = block.querySelector('code')
      if (codeEl) Prism.highlightElement(codeEl)
    }
  },

  renderExercise(container, section, lessonId, exIdx) {
    const id = `exercise-${lessonId}-${exIdx}`
    const lp = this.progress.lessons[lessonId]
    const done = lp && lp.exercisesDone && lp.exercisesDone.includes(exIdx)

    const block = document.createElement('div')
    block.className = 'exercise-block'
    block.innerHTML = `
      <div class="exercise-header">
        <span class="exercise-number">${section.title}</span>
        <span class="exercise-badge ${done ? 'done' : 'pending'}" id="${id}-badge">${done ? 'Concluido' : 'Pendente'}</span>
      </div>
      <div class="exercise-instructions">${section.instructions}</div>
      <div class="exercise-editor">
        <textarea id="${id}-editor">${this.getSavedCode(lessonId, exIdx) || section.starterCode}</textarea>
      </div>
      <div class="exercise-actions">
        <button class="btn-action run" onclick="App.runExercise('${id}', '${lessonId}', ${exIdx})">Executar</button>
        <button class="btn-action review" onclick="App.reviewCode('${id}', '${lessonId}', ${exIdx})">Revisar Codigo</button>
        <button class="btn-action solution" onclick="App.toggleSolution('${id}')">Ver Resposta</button>
        <button class="btn-action reset" onclick="App.resetExercise('${id}', '${lessonId}', ${exIdx})">Limpar</button>
      </div>
      <div class="output-panel" id="${id}-output">
        <div class="output-header">Saida</div>
        <pre class="output-content"></pre>
      </div>
      <div class="ia-review-panel" id="${id}-review">
        <div class="ia-review-header">
          <span class="ia-review-icon">AI</span>
          <span>Revisao do Tutor</span>
        </div>
        <div class="ia-review-content" id="${id}-review-content"></div>
      </div>
      <div class="solution-panel" id="${id}-solution">
        <div class="solution-header">Resposta</div>
        <pre class="solution-code">${this.escapeHtml(section.solution)}</pre>
      </div>
    `
    container.appendChild(block)
    this.editors.push({
      id: `${id}-editor`,
      instance: null,
      starterCode: section.starterCode,
      lessonId: lessonId,
      exerciseIdx: exIdx
    })
  },

  // ---- EDITORS ----

  initEditors() {
    this.editors.forEach(ed => {
      const textarea = document.getElementById(ed.id)
      if (!textarea) return
      if (typeof CodeMirror !== 'undefined') {
        ed.instance = CodeMirror.fromTextArea(textarea, {
          mode: 'javascript',
          theme: 'material-darker',
          lineNumbers: true,
          autoCloseBrackets: true,
          matchBrackets: true,
          tabSize: 2,
          indentWithTabs: false,
          lineWrapping: true,
          viewportMargin: Infinity,
          extraKeys: {
            'Tab': function(cm) {
              // Se tem sugestao inline, aceita
              if (typeof InlineSuggestions !== 'undefined' && InlineSuggestions.accept()) {
                return
              }
              // Senao, indent normal
              cm.execCommand('defaultTab')
            }
          }
        })

        // Ativa sugestoes inline se estiver disponivel
        if (typeof InlineSuggestions !== 'undefined' && ed.lessonId && ed.exerciseIdx !== undefined) {
          InlineSuggestions.attach(ed.instance, ed.lessonId, ed.exerciseIdx)
        }
      }
    })
  },

  destroyEditors() {
    this.editors.forEach(ed => {
      if (ed.instance) {
        ed.instance.toTextArea()
        ed.instance = null
      }
    })
    this.editors = []
  },

  getEditorValue(editorId) {
    const ed = this.editors.find(e => e.id === editorId)
    if (ed && ed.instance) return ed.instance.getValue()
    const textarea = document.getElementById(editorId)
    return textarea ? textarea.value : ''
  },

  // ---- CODE EXECUTION ----

  executeCode(code) {
    const output = []
    const mockConsole = {
      log: (...args) => output.push(args.map(a => this.formatArg(a)).join(' ')),
      error: (...args) => output.push('ERRO: ' + args.map(a => this.formatArg(a)).join(' ')),
      warn: (...args) => output.push('AVISO: ' + args.map(a => this.formatArg(a)).join(' '))
    }

    try {
      const safe = this.protectLoops(code)
      const fn = new Function('console', '"use strict";\n' + safe)
      fn(mockConsole)
      return { success: true, output: output.join('\n') || '(sem saida)' }
    } catch (error) {
      return { success: false, output: output.join('\n'), error: `${error.name}: ${error.message}` }
    }
  },

  async executeCodeAsync(code) {
    const output = []
    const mockConsole = {
      log: (...args) => output.push(args.map(a => this.formatArg(a)).join(' ')),
      error: (...args) => output.push('ERRO: ' + args.map(a => this.formatArg(a)).join(' ')),
      warn: (...args) => output.push('AVISO: ' + args.map(a => this.formatArg(a)).join(' '))
    }

    try {
      const safe = this.protectLoops(code)
      const AsyncFn = Object.getPrototypeOf(async function(){}).constructor
      const fn = new AsyncFn('console', '"use strict";\n' + safe)

      await Promise.race([
        fn(mockConsole),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Tempo esgotado (5s)')), 5000))
      ])

      // Aguarda mais 1 segundo para garantir que setTimeout internos terminaram
      await new Promise(resolve => setTimeout(resolve, 1000))

      return { success: true, output: output.join('\n') || '(sem saida)' }
    } catch (error) {
      return { success: false, output: output.join('\n'), error: `${error.name}: ${error.message}` }
    }
  },

  formatArg(arg) {
    if (arg === null) return 'null'
    if (arg === undefined) return 'undefined'
    if (typeof arg === 'object') {
      try { return JSON.stringify(arg, null, 2) } catch { return String(arg) }
    }
    return String(arg)
  },

  protectLoops(code) {
    let id = 0
    let declarations = ''
    const result = code.replace(/(for\s*\([^)]*\)\s*\{|while\s*\([^)]*\)\s*\{)/g, (match) => {
      id++
      declarations += `let __lc${id}=0;\n`
      return `${match} if(++__lc${id}>50000) throw new Error("Loop infinito detectado!"); `
    })
    return declarations + result
  },

  // ---- RUN ACTIONS ----

  runExample(id) {
    const codeEl = document.querySelector(`#${id} code`)
    if (!codeEl) return
    const code = codeEl.textContent
    this.showOutput(id, code)
  },

  getExerciseSection(lessonId, exIdx) {
    const lesson = this.allLessons.find(l => l.id === lessonId)
    if (!lesson) return null
    let count = 0
    for (const s of lesson.sections) {
      if (s.type === 'exercise') {
        if (count === exIdx) return s
        count++
      }
    }
    return null
  },

  // ---- VALIDACAO DE EXERCICIOS ----

  validateExercise(code, output, exerciseSection) {
    if (!exerciseSection) return false

    const checks = exerciseSection.checks
    if (!checks) {
      return output && output.trim().length > 0 && output !== '(sem saida)'
    }

    if (checks.codeHas) {
      for (const term of checks.codeHas) {
        if (!code.includes(term)) return false
      }
    }

    if (checks.outputHas) {
      for (const val of checks.outputHas) {
        if (!output.includes(val)) return false
      }
    }

    if (checks.minOutput) {
      const lines = output.split('\n').filter(l => l.trim().length > 0 && l.trim() !== '(sem saida)')
      if (lines.length < checks.minOutput) return false
    }

    return true
  },

  getValidationHint(code, output, exerciseSection) {
    if (!exerciseSection || !exerciseSection.checks) return 'Revise seu codigo e tente de novo.'
    const checks = exerciseSection.checks
    const hints = []

    if (checks.codeHas) {
      for (const term of checks.codeHas) {
        if (!code.includes(term)) {
          if (term === 'console.log') hints.push('Faltou usar console.log pra mostrar o resultado.')
          else if (term === '${') hints.push('Faltou usar template literal com ${ } pra colocar variaveis no texto.')
          else if (term === 'if') hints.push('Faltou usar if pra tomar decisao.')
          else if (term === 'for') hints.push('Faltou usar for pra fazer o loop.')
          else if (term === 'switch') hints.push('Faltou usar switch.')
          else if (term === '?') hints.push('Faltou usar o operador ternario (?).')
          else if (term === '&&') hints.push('Faltou combinar condicoes com && (E).')
          else if (term === '.filter(') hints.push('Faltou usar .filter() pra filtrar.')
          else if (term === '.reduce(') hints.push('Faltou usar .reduce() pra calcular.')
          else if (term === '.push(') hints.push('Faltou usar .push() pra adicionar no array.')
          else if (term === 'return') hints.push('A funcao precisa de return pra devolver o valor.')
          else if (term === 'Promise') hints.push('Faltou usar Promise.')
          else if (term === 'async') hints.push('Faltou a palavra async na funcao.')
          else if (term === 'await') hints.push('Faltou usar await pra esperar a Promise.')
          else if (term === 'try') hints.push('Faltou o try/catch pra tratar erros.')
          else hints.push(`Faltou usar "${term}" no seu codigo.`)
        }
      }
    }

    if (checks.outputHas) {
      for (const val of checks.outputHas) {
        if (!output.includes(val)) {
          hints.push(`A saida deveria conter "${val}".`)
          break
        }
      }
    }

    if (checks.minOutput) {
      const lines = output.split('\n').filter(l => l.trim().length > 0 && l.trim() !== '(sem saida)')
      if (lines.length < checks.minOutput) {
        hints.push(`O exercicio pede pelo menos ${checks.minOutput} linha(s) de saida. Voce tem ${lines.length}.`)
      }
    }

    return hints.length > 0 ? hints.join('\n') : 'Revise seu codigo e tente de novo.'
  },

  async runExercise(id, lessonId, exIdx) {
    const code = this.getEditorValue(`${id}-editor`)
    this.saveCode(lessonId, exIdx, code)

    const edInfo = this.editors.find(e => e.id === `${id}-editor`)
    const mudouCodigo = edInfo ? code.trim() !== edInfo.starterCode.trim() : true

    if (!mudouCodigo) {
      const outputPanel = document.getElementById(`${id}-output`)
      const outputContent = outputPanel.querySelector('.output-content')
      outputPanel.classList.add('visible')
      outputContent.textContent = 'Escreva seu codigo primeiro! Nao vale rodar o codigo inicial sem mudar nada.'
      outputContent.className = 'output-content error'
      return
    }

    const hasAsync = code.includes('await') || code.includes('async') || code.includes('setTimeout') || code.includes('Promise')
    let result
    if (hasAsync) {
      result = await this.executeCodeAsync(code)
    } else {
      result = this.executeCode(code)
    }

    const outputPanel = document.getElementById(`${id}-output`)
    const outputContent = outputPanel.querySelector('.output-content')
    outputPanel.classList.add('visible')

    if (result.success) {
      const exerciseSection = this.getExerciseSection(lessonId, exIdx)
      const correto = this.validateExercise(code, result.output, exerciseSection)

      if (correto) {
        outputContent.textContent = result.output + '\n\n✅ Correto! Exercicio concluido!'
        outputContent.className = 'output-content'
        if (!this.progress.lessons[lessonId].exercisesDone) {
          this.progress.lessons[lessonId].exercisesDone = []
        }
        if (!this.progress.lessons[lessonId].exercisesDone.includes(exIdx)) {
          this.progress.lessons[lessonId].exercisesDone.push(exIdx)
        }
        this.saveProgress()
        const badge = document.getElementById(`${id}-badge`)
        if (badge) { badge.className = 'exercise-badge done'; badge.textContent = 'Concluido' }
      } else {
        let dica = this.getValidationHint(code, result.output, exerciseSection)
        outputContent.textContent = result.output + '\n\n❌ Quase! ' + dica
        outputContent.className = 'output-content error'
      }
    } else {
      outputContent.textContent = (result.output ? result.output + '\n' : '') + result.error
      outputContent.className = 'output-content error'
    }
  },

  // ---- REVISAO DE CODIGO PELA IA ----

  async reviewCode(id, lessonId, exIdx) {
    const code = this.getEditorValue(`${id}-editor`)
    if (!code.trim()) return

    const exerciseSection = this.getExerciseSection(lessonId, exIdx)
    if (!exerciseSection) return

    const result = this.executeCode(code)

    this.doReview(id, exerciseSection, code, result.output || '', result.error || '', null)
  },

  async autoReview(id, lessonId, exIdx, code, userOutput, userError, expectedOutput) {
    const exerciseSection = this.getExerciseSection(lessonId, exIdx)
    if (!exerciseSection) return

    this.doReview(id, exerciseSection, code, userOutput, userError, expectedOutput)
  },

  async doReview(id, exerciseSection, code, userOutput, userError, expectedOutput) {
    const reviewPanel = document.getElementById(`${id}-review`)
    const reviewContent = document.getElementById(`${id}-review-content`)

    reviewPanel.classList.add('visible')
    reviewContent.innerHTML = '<div class="ia-review-loading"><span></span><span></span><span></span> Analisando seu codigo...</div>'

    try {
      const data = await API.revisar({
        code,
        exerciseTitle: exerciseSection.title,
        instructions: exerciseSection.instructions.replace(/<[^>]*>/g, ''),
        expectedOutput: expectedOutput || '',
        userOutput: userOutput || '',
        userError: userError || '',
        solutionCode: exerciseSection.solution
      })

      let formatted = (data.revisao || 'Nao consegui revisar.')
        .replace(/```(\w*)\n?([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>')

      reviewContent.innerHTML = formatted
    } catch (err) {
      reviewContent.innerHTML = 'Erro de conexao. Certifique-se que o servidor esta rodando.'
    }
  },

  async showOutput(id, code) {
    const hasAsync = code.includes('await') || code.includes('async') || code.includes('setTimeout') || code.includes('Promise')
    let result
    if (hasAsync) {
      result = await this.executeCodeAsync(code)
    } else {
      result = this.executeCode(code)
    }

    const outputPanel = document.getElementById(`${id}-output`)
    const outputContent = outputPanel.querySelector('.output-content')
    outputPanel.classList.add('visible')
    outputContent.textContent = result.success ? result.output : (result.output ? result.output + '\n' : '') + result.error
    outputContent.className = result.success ? 'output-content' : 'output-content error'
  },

  toggleSolution(id) {
    const panel = document.getElementById(`${id}-solution`)
    panel.classList.toggle('visible')
  },

  resetExercise(id, lessonId, exIdx) {
    const ed = this.editors.find(e => e.id === `${id}-editor`)
    if (ed && ed.instance) {
      ed.instance.setValue(ed.starterCode)
    }
    const outputPanel = document.getElementById(`${id}-output`)
    if (outputPanel) outputPanel.classList.remove('visible')
    const solPanel = document.getElementById(`${id}-solution`)
    if (solPanel) solPanel.classList.remove('visible')
    const reviewPanel = document.getElementById(`${id}-review`)
    if (reviewPanel) reviewPanel.classList.remove('visible')
    this.removeCode(lessonId, exIdx)
  },

  copyCode(btn) {
    const pre = btn.closest('.code-block').querySelector('pre code')
    if (!pre) return
    navigator.clipboard.writeText(pre.textContent).then(() => {
      btn.textContent = 'Copiado!'
      setTimeout(() => { btn.textContent = 'Copiar' }, 1500)
    })
  },

  // ---- QUIZ ----

  startQuiz(lessonId) {
    const lesson = this.allLessons.find(l => l.id === lessonId)
    if (!lesson || !lesson.quiz) return

    document.getElementById('lesson-content').classList.add('hidden')
    document.getElementById('lesson-footer').classList.add('hidden')
    document.getElementById('quiz-content').classList.remove('hidden')

    const container = document.getElementById('quiz-content')
    container.innerHTML = ''

    const header = document.createElement('div')
    header.className = 'quiz-header'
    header.innerHTML = `
      <h2>Quiz: ${lesson.title}</h2>
      <p style="color:var(--text-secondary)">Acerte 70% pra completar a aula</p>
      <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:0%"></div></div>
    `
    container.appendChild(header)

    const form = document.createElement('div')
    form.id = 'quiz-form'

    lesson.quiz.forEach((q, qIdx) => {
      const card = document.createElement('div')
      card.className = 'quiz-question-card'
      card.id = `quiz-q-${qIdx}`

      let codeBlock = ''
      if (q.code) {
        codeBlock = `<pre class="quiz-question-code">${this.escapeHtml(q.code)}</pre>`
      }

      let optionsHtml = ''
      q.options.forEach((opt, oIdx) => {
        optionsHtml += `
          <label class="quiz-option" id="quiz-opt-${qIdx}-${oIdx}" onclick="App.selectQuizOption(${qIdx}, ${oIdx})">
            <input type="radio" name="quiz-${qIdx}" value="${oIdx}">
            <span class="quiz-radio"></span>
            <span>${opt}</span>
          </label>
        `
      })

      card.innerHTML = `
        <div class="quiz-question-num">Pergunta ${qIdx + 1} de ${lesson.quiz.length}</div>
        <div class="quiz-question-text">${q.question}</div>
        ${codeBlock}
        <div class="quiz-options">${optionsHtml}</div>
        <div class="quiz-explanation" id="quiz-exp-${qIdx}">${q.explanation}</div>
      `
      form.appendChild(card)
    })

    container.appendChild(form)

    const submitBtn = document.createElement('button')
    submitBtn.className = 'quiz-submit'
    submitBtn.textContent = 'Enviar Respostas'
    submitBtn.onclick = () => this.submitQuiz(lessonId)
    container.appendChild(submitBtn)

    const resultDiv = document.createElement('div')
    resultDiv.id = 'quiz-result'
    container.appendChild(resultDiv)

    document.getElementById('content').scrollTop = 0
  },

  selectQuizOption(qIdx, oIdx) {
    document.querySelectorAll(`[id^="quiz-opt-${qIdx}-"]`).forEach(el => {
      el.classList.remove('selected')
    })
    document.getElementById(`quiz-opt-${qIdx}-${oIdx}`).classList.add('selected')
  },

  submitQuiz(lessonId) {
    const lesson = this.allLessons.find(l => l.id === lessonId)
    if (!lesson) return

    let correct = 0
    let answered = 0

    lesson.quiz.forEach((q, qIdx) => {
      const selected = document.querySelector(`input[name="quiz-${qIdx}"]:checked`)
      const correctIdx = q.correct

      if (selected) {
        answered++
        const selIdx = parseInt(selected.value)
        if (selIdx === correctIdx) {
          correct++
          document.getElementById(`quiz-opt-${qIdx}-${selIdx}`).classList.add('correct')
        } else {
          document.getElementById(`quiz-opt-${qIdx}-${selIdx}`).classList.add('wrong')
          document.getElementById(`quiz-opt-${qIdx}-${correctIdx}`).classList.add('correct')
        }
      } else {
        document.getElementById(`quiz-opt-${qIdx}-${correctIdx}`).classList.add('correct')
      }

      document.getElementById(`quiz-exp-${qIdx}`).classList.add('visible')
      document.querySelectorAll(`[id^="quiz-opt-${qIdx}-"]`).forEach(el => {
        el.style.pointerEvents = 'none'
      })
    })

    const total = lesson.quiz.length
    const score = Math.round((correct / total) * 100)
    const passed = score >= 70

    if (!this.progress.lessons[lessonId]) {
      this.progress.lessons[lessonId] = { started: true, completed: false, exercisesDone: [], quizScore: null }
    }
    this.progress.lessons[lessonId].quizScore = score
    if (passed) {
      this.progress.lessons[lessonId].completed = true
    }
    this.saveProgress()
    this.renderSidebar()
    this.updateSidebarActive(lessonId)
    this.updateProgress()

    const resultDiv = document.getElementById('quiz-result')
    const idx = this.allLessons.findIndex(l => l.id === lessonId)
    const hasNext = idx < this.allLessons.length - 1
    const nextId = hasNext ? this.allLessons[idx + 1].id : null

    resultDiv.innerHTML = `
      <div class="quiz-result">
        <div class="score ${passed ? 'passed' : 'failed'}">${score}%</div>
        <div class="message">${passed ? 'Parabens! Voce completou esta aula!' : 'Quase! Voce precisa de pelo menos 70%. Tente de novo!'}</div>
        <div>
          ${passed ? '' : `<button class="btn-retry" onclick="App.startQuiz('${lessonId}')">Tentar de Novo</button>`}
          ${passed && hasNext ? `<button class="btn-continue" onclick="App.navigateTo('${nextId}')">Proxima Aula</button>` : ''}
          <button class="btn-action solution" onclick="App.navigateTo('${lessonId}')" style="margin-top:8px">Voltar pra Aula</button>
        </div>
      </div>
    `

    document.querySelector('.quiz-submit').style.display = 'none'

    const fill = document.querySelector('.quiz-progress-fill')
    if (fill) fill.style.width = '100%'

    resultDiv.scrollIntoView({ behavior: 'smooth' })
  },

  // ---- PROGRESS (debounced save to server) ----

  updateProgress() {
    const total = this.allLessons.length
    const completed = Object.values(this.progress.lessons).filter(l => l.completed).length
    const pct = Math.round((completed / total) * 100)
    document.getElementById('progress-fill').style.width = pct + '%'
    document.getElementById('progress-text').textContent = pct + '%'
  },

  saveProgress() {
    // Debounce: espera 500ms sem chamadas antes de salvar no servidor
    clearTimeout(this._saveTimer)
    this._saveTimer = setTimeout(() => {
      API.saveProgress(this.progress.currentLesson, this.progress.lessons).catch(() => {})
    }, 500)
  },

  async resetProgress() {
    if (confirm('Tem certeza? Isso vai apagar todo seu progresso!')) {
      try {
        // Salva progresso zerado no servidor
        await API.saveProgress('1-1', {})
        // Apaga todos os rascunhos (recarregando vazio)
        this.codeDrafts = {}
      } catch (err) {
        // continua mesmo se falhar
      }
      this.progress = { currentLesson: '1-1', lessons: {} }
      this.renderSidebar()
      this.updateProgress()
      this.navigateTo('1-1')
    }
  },

  // ---- CODE PERSISTENCE (cache + API) ----

  saveCode(lessonId, exIdx, code) {
    this.codeDrafts[`${lessonId}_${exIdx}`] = code
    // Fire-and-forget: salva no servidor sem esperar
    API.saveCodeDraft(lessonId, exIdx, code).catch(() => {})
  },

  getSavedCode(lessonId, exIdx) {
    return this.codeDrafts[`${lessonId}_${exIdx}`] || null
  },

  removeCode(lessonId, exIdx) {
    delete this.codeDrafts[`${lessonId}_${exIdx}`]
    API.deleteCodeDraft(lessonId, exIdx).catch(() => {})
  },

  // ---- UTILS ----

  escapeHtml(str) {
    const div = document.createElement('div')
    div.textContent = str
    return div.innerHTML
  }
}

// ============================================
// AUTH MODULE
// ============================================

const Auth = {
  async login() {
    const email = document.getElementById('login-email').value.trim()
    const password = document.getElementById('login-password').value
    const errorEl = document.getElementById('login-error')
    errorEl.textContent = ''

    if (!email || !password) {
      errorEl.textContent = 'Preencha email e senha.'
      return
    }

    try {
      await API.login(email, password)
      App.init()
    } catch (err) {
      errorEl.textContent = err.message || 'Erro ao entrar.'
    }
  },

  async register() {
    const name = document.getElementById('register-name').value.trim()
    const email = document.getElementById('register-email').value.trim()
    const password = document.getElementById('register-password').value
    const errorEl = document.getElementById('register-error')
    errorEl.textContent = ''

    if (!name || !email || !password) {
      errorEl.textContent = 'Preencha todos os campos.'
      return
    }
    if (password.length < 6) {
      errorEl.textContent = 'A senha precisa ter pelo menos 6 caracteres.'
      return
    }

    try {
      await API.register(name, email, password)
      App.init()
    } catch (err) {
      errorEl.textContent = err.message || 'Erro ao criar conta.'
    }
  },

  logout() {
    API.clearAuth()
    document.getElementById('app').classList.add('hidden')
    document.getElementById('auth-screen').classList.remove('hidden')
    // Limpa campos
    document.getElementById('login-email').value = ''
    document.getElementById('login-password').value = ''
    document.getElementById('login-error').textContent = ''
  },

  showLogin() {
    document.getElementById('login-form').classList.remove('hidden')
    document.getElementById('register-form').classList.add('hidden')
  },

  showRegister() {
    document.getElementById('login-form').classList.add('hidden')
    document.getElementById('register-form').classList.remove('hidden')
  }
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', (e) => {
  // Ctrl+Enter = run focused exercise
  if (e.ctrlKey && e.key === 'Enter') {
    const focused = document.querySelector('.CodeMirror-focused')
    if (focused) {
      const textarea = focused.querySelector('textarea') || focused.previousSibling
      if (textarea && textarea.id) {
        const parts = textarea.id.replace('-editor', '').split('-')
        // exercise-{lessonId}-{exIdx}
        if (parts[0] === 'exercise') {
          const lessonId = parts[1] + '-' + parts[2]
          const exIdx = parseInt(parts[3])
          const id = `exercise-${lessonId}-${exIdx}`
          App.runExercise(id, lessonId, exIdx)
        }
      }
    }
  }
})

// ============================================
// TUTOR IA (Chat)
// ============================================

const Tutor = {
  open: false,
  sendContext: false,
  sessionId: 'session-' + Date.now(),

  toggle() {
    this.open = !this.open
    document.getElementById('chat-panel').classList.toggle('hidden', !this.open)
    if (this.open) {
      document.getElementById('chat-input').focus()
    }
  },

  toggleContext() {
    this.sendContext = !this.sendContext
    document.getElementById('chat-context-btn').classList.toggle('active', this.sendContext)
  },

  async send() {
    const input = document.getElementById('chat-input')
    const message = input.value.trim()
    if (!message) return

    input.value = ''
    this.addMessage('user', message)

    // Monta contexto se ativado
    let context = null
    if (this.sendContext && App.currentLesson) {
      const focused = document.querySelector('.CodeMirror-focused')
      let code = ''
      let output = ''

      if (focused) {
        const cm = focused.CodeMirror
        if (cm) code = cm.getValue()
      }
      if (!code) {
        const editors = App.editors
        if (editors.length > 0) {
          const last = editors[editors.length - 1]
          if (last.instance) code = last.instance.getValue()
        }
      }

      const outputs = document.querySelectorAll('.output-panel.visible .output-content')
      if (outputs.length > 0) {
        output = outputs[outputs.length - 1].textContent
      }

      let exerciseTitle = ''
      let instructions = ''
      const exSections = App.currentLesson.sections.filter(s => s.type === 'exercise')
      if (exSections.length > 0) {
        const lastEx = exSections[exSections.length - 1]
        exerciseTitle = lastEx.title
        instructions = lastEx.instructions.replace(/<[^>]*>/g, '')
      }

      context = {
        lessonTitle: App.currentLesson.title,
        exerciseTitle,
        instructions,
        code,
        output: output.split('\n')[0] || '',
        error: output.includes('Error') || output.includes('ERRO') ? output : ''
      }
    }

    this.showTyping()

    try {
      const data = await API.chat(message, this.sessionId, context)
      this.hideTyping()
      this.addMessage('ai', data.resposta || 'Nao consegui responder.')
    } catch (err) {
      this.hideTyping()
      this.addMessage('ai', 'Erro de conexao. Certifique-se que o servidor esta rodando com: node server.js')
    }
  },

  addMessage(type, text) {
    const container = document.getElementById('chat-messages')
    const div = document.createElement('div')
    div.className = `chat-msg ${type}`

    let formatted = text
      .replace(/```(\w*)\n?([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>')

    div.innerHTML = `<div class="chat-msg-content">${formatted}</div>`
    container.appendChild(div)
    container.scrollTop = container.scrollHeight
  },

  showTyping() {
    const container = document.getElementById('chat-messages')
    const div = document.createElement('div')
    div.className = 'chat-typing'
    div.id = 'chat-typing'
    div.innerHTML = '<span></span><span></span><span></span>'
    container.appendChild(div)
    container.scrollTop = container.scrollHeight
  },

  hideTyping() {
    const el = document.getElementById('chat-typing')
    if (el) el.remove()
  }
}

// ============================================
// START
// ============================================

document.addEventListener('DOMContentLoaded', () => App.init())
