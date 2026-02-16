// ============================================
// MATH Academy - API Client (Frontend)
// ============================================

const API = {
  // Detecta automaticamente: se ta no localhost, usa a mesma origem
  // Em producao na Vercel, aponta pro Railway via RAILWAY_URL
  // Troque 'COLE_URL_DO_RAILWAY_AQUI' pela URL real apos o deploy
  BASE_URL: window.location.hostname === 'localhost'
    ? window.location.origin
    : (window.__RAILWAY_URL__ || window.location.origin),

  // ---- TOKEN ----

  getToken() {
    return localStorage.getItem('math_jwt')
  },

  setToken(token) {
    localStorage.setItem('math_jwt', token)
  },

  clearToken() {
    localStorage.removeItem('math_jwt')
  },

  getStudent() {
    const raw = localStorage.getItem('math_student')
    return raw ? JSON.parse(raw) : null
  },

  setStudent(student) {
    localStorage.setItem('math_student', JSON.stringify(student))
  },

  clearStudent() {
    localStorage.removeItem('math_student')
  },

  isLoggedIn() {
    return !!(this.getToken() && this.getStudent())
  },

  // ---- FETCH ----

  async request(method, path, body = null) {
    const headers = { 'Content-Type': 'application/json' }
    const token = this.getToken()
    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }

    const options = { method, headers }
    if (body) options.body = JSON.stringify(body)

    const res = await fetch(`${this.BASE_URL}${path}`, options)

    if (res.status === 401) {
      this.clearToken()
      this.clearStudent()
      window.location.reload()
      return
    }

    // Verifica se a resposta e JSON antes de parsear
    const contentType = res.headers.get('content-type') || ''
    if (!contentType.includes('application/json')) {
      throw new Error(`Erro ${res.status}: servidor nao retornou JSON`)
    }

    const data = await res.json()
    if (!res.ok && data.error) {
      throw new Error(data.error)
    }
    return data
  },

  // ---- AUTH ----

  async register(name, email, password) {
    const data = await this.request('POST', '/api/auth/register', { name, email, password })
    this.setToken(data.token)
    this.setStudent(data.student)
    return data
  },

  async login(email, password) {
    const data = await this.request('POST', '/api/auth/login', { email, password })
    this.setToken(data.token)
    this.setStudent(data.student)
    return data
  },

  clearAuth() {
    this.clearToken()
    this.clearStudent()
  },

  // ---- PROGRESSO ----

  async loadProgress(language = 'javascript') {
    return this.request('GET', `/api/progress?language=${language}`)
  },

  async saveProgress(currentLesson, lessons, language = 'javascript') {
    return this.request('PUT', '/api/progress', { currentLesson, lessons, language })
  },

  // ---- CODE DRAFTS ----

  async loadAllCodeDrafts(language = 'javascript') {
    return this.request('GET', `/api/progress/code-drafts?language=${language}`)
  },

  async saveCodeDraft(lessonId, exerciseIdx, code, language = 'javascript') {
    return this.request('PUT', `/api/progress/code-drafts/${lessonId}/${exerciseIdx}`, { code, language })
  },

  async deleteCodeDraft(lessonId, exerciseIdx, language = 'javascript') {
    return this.request('DELETE', `/api/progress/code-drafts/${lessonId}/${exerciseIdx}?language=${language}`)
  },

  // ---- IA ----

  async chat(message, sessionId, context, language = 'javascript') {
    return this.request('POST', '/api/chat', { message, sessionId, context, language })
  },

  async revisar(data) {
    return this.request('POST', '/api/revisar', data)
  }
}
