// ============================================
// MATH ACADEMY - Backend
// ============================================
// Roda com: node server.js
// ============================================

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const { initDatabase } = require('./db')

const app = express()

// ---- CORS ----
const allowedOrigins = [
  'http://localhost:4001',
  'https://professor-de-logica-production.up.railway.app',
  process.env.FRONTEND_URL
].filter(Boolean)

app.use(cors({
  origin(origin, cb) {
    // Permite requests sem origin (Postman, mesmo servidor, etc)
    if (!origin || allowedOrigins.includes(origin)) return cb(null, true)
    cb(null, true) // Libera tudo por enquanto (ajustar depois se quiser restringir)
  },
  credentials: true
}))

app.use(express.json())

// ---- ARQUIVOS ESTATICOS (frontend) ----
app.use(express.static(path.join(__dirname, 'frontend')))

// ---- ROTAS ----
const aiRouter = require('./routes/ai')
app.use('/api/auth', require('./routes/auth'))
app.use('/api/progress', require('./routes/progress'))
app.use('/api', aiRouter)

// ---- INICIAR ----
const PORT = process.env.PORT || 4001

async function start() {
  await initDatabase()

  app.listen(PORT, () => {
    console.log('')
    console.log('===========================================')
    console.log('  MATH Academy - Backend')
    console.log(`  http://localhost:${PORT}`)
    console.log('===========================================')
    if (aiRouter.isAIConfigured()) {
      console.log('  IA Tutor: ATIVADA (Gemini)')
    } else {
      console.log('  IA Tutor: DESATIVADA (sem GOOGLE_API_KEY)')
    }
    console.log('  [DB] PostgreSQL conectado')
    console.log('')
  })
}

start().catch(err => {
  console.error('Erro ao iniciar servidor:', err.message)
  process.exit(1)
})
