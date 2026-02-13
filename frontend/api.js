// ============================================
// MATH Academy - API Client (Frontend)
// ============================================

const API = {
  // Em producao, mude pra URL do Railway
  BASE_URL: window.location.origin,

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

    return res.json()
  },

  // ---- AUTH ----

  async register(email, password, name) {
    return this.request('POST', '/api/auth/register', { email, password, name })
  },

  async login(email, password) {
    return this.request('POST', '/api/auth/login', { email, password })
  },

  // ---- PROGRESSO ----

  async loadProgress() {
    return this.request('GET', '/api/progress')
  },

  async saveProgress(currentLesson, lessons) {
    return this.request('PUT', '/api/progress', { currentLesson, lessons })
  },

  // ---- CODE DRAFTS ----

  async loadAllCodeDrafts() {
    return this.request('GET', '/api/progress/code-drafts')
  },

  async saveCodeDraft(lessonId, exerciseIdx, code) {
    return this.request('PUT', `/api/progress/code-drafts/${lessonId}/${exerciseIdx}`, { code })
  },

  async deleteCodeDraft(lessonId, exerciseIdx) {
    return this.request('DELETE', `/api/progress/code-drafts/${lessonId}/${exerciseIdx}`)
  },

  // ---- IA ----

  async chat(message, sessionId, context) {
    return this.request('POST', '/api/chat', { message, sessionId, context })
  },

  async revisar(data) {
    return this.request('POST', '/api/revisar', data)
  }
}
