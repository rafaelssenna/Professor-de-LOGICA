// ============================================
// MATH Academy - JWT Authentication Middleware
// ============================================

const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET || 'math-academy-secret-dev'

function generateToken(student) {
  return jwt.sign(
    { id: student.id, email: student.email, name: student.name },
    JWT_SECRET,
    { expiresIn: '7d' }
  )
}

function authenticate(req, res, next) {
  const header = req.headers.authorization
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ erro: 'Token nao fornecido' })
  }

  const token = header.split(' ')[1]
  try {
    const payload = jwt.verify(token, JWT_SECRET)
    req.student = payload
    next()
  } catch (err) {
    return res.status(401).json({ erro: 'Token invalido ou expirado' })
  }
}

module.exports = { generateToken, authenticate, JWT_SECRET }
