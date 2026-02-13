// ============================================
// MATH Academy - Rotas de Autenticacao
// ============================================

const express = require('express')
const bcrypt = require('bcrypt')
const { pool } = require('../db')
const { generateToken } = require('../middleware/auth')

const router = express.Router()

// POST /api/auth/register
router.post('/register', async (req, res) => {
  const { email, password, name } = req.body

  if (!email || !password || !name) {
    return res.status(400).json({ error: 'Email, senha e nome sao obrigatorios' })
  }

  if (password.length < 6) {
    return res.status(400).json({ error: 'Senha precisa ter pelo menos 6 caracteres' })
  }

  try {
    const existing = await pool.query(
      'SELECT id FROM students WHERE email = $1', [email.toLowerCase()]
    )
    if (existing.rows.length > 0) {
      return res.status(409).json({ error: 'Email ja cadastrado' })
    }

    const passwordHash = await bcrypt.hash(password, 10)

    const result = await pool.query(
      `INSERT INTO students (email, password_hash, name)
       VALUES ($1, $2, $3) RETURNING id, email, name`,
      [email.toLowerCase(), passwordHash, name]
    )
    const student = result.rows[0]

    await pool.query(
      'INSERT INTO progress (student_id) VALUES ($1)',
      [student.id]
    )

    const token = generateToken(student)

    res.status(201).json({
      token,
      student: { id: student.id, email: student.email, name: student.name }
    })
  } catch (err) {
    console.error('[Register] Erro:', err.message)
    res.status(500).json({ error: 'Erro interno ao registrar' })
  }
})

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: 'Email e senha sao obrigatorios' })
  }

  try {
    const result = await pool.query(
      'SELECT id, email, name, password_hash FROM students WHERE email = $1',
      [email.toLowerCase()]
    )

    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Email ou senha incorretos' })
    }

    const student = result.rows[0]
    const valid = await bcrypt.compare(password, student.password_hash)

    if (!valid) {
      return res.status(401).json({ error: 'Email ou senha incorretos' })
    }

    await pool.query(
      'UPDATE students SET last_login = NOW() WHERE id = $1',
      [student.id]
    )

    const token = generateToken({
      id: student.id, email: student.email, name: student.name
    })

    res.json({
      token,
      student: { id: student.id, email: student.email, name: student.name }
    })
  } catch (err) {
    console.error('[Login] Erro:', err.message)
    res.status(500).json({ error: 'Erro interno ao fazer login' })
  }
})

module.exports = router
