// ============================================
// MATH Academy - Conexao PostgreSQL
// ============================================

const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production'
    ? { rejectUnauthorized: false }
    : undefined
})

pool.on('error', (err) => {
  console.error('[DB] Erro no pool:', err.message)
})

async function initDatabase() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS students (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      name VARCHAR(100) NOT NULL,
      created_at TIMESTAMP DEFAULT NOW(),
      last_login TIMESTAMP
    )
  `)

  await pool.query(`
    CREATE TABLE IF NOT EXISTS progress (
      id SERIAL PRIMARY KEY,
      student_id INTEGER UNIQUE NOT NULL REFERENCES students(id) ON DELETE CASCADE,
      current_lesson VARCHAR(10) DEFAULT '1-1',
      lessons JSONB DEFAULT '{}',
      started_at TIMESTAMP DEFAULT NOW(),
      last_access TIMESTAMP DEFAULT NOW()
    )
  `)

  await pool.query(`
    CREATE TABLE IF NOT EXISTS code_drafts (
      id SERIAL PRIMARY KEY,
      student_id INTEGER NOT NULL REFERENCES students(id) ON DELETE CASCADE,
      lesson_id VARCHAR(10) NOT NULL,
      exercise_idx INTEGER NOT NULL,
      code TEXT NOT NULL,
      updated_at TIMESTAMP DEFAULT NOW(),
      UNIQUE(student_id, lesson_id, exercise_idx)
    )
  `)

  console.log('  [DB] Tabelas verificadas/criadas')
}

module.exports = { pool, initDatabase }
