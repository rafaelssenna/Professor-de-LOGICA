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
      student_id INTEGER NOT NULL REFERENCES students(id) ON DELETE CASCADE,
      language VARCHAR(20) DEFAULT 'javascript',
      current_lesson VARCHAR(10) DEFAULT '1-1',
      lessons JSONB DEFAULT '{}',
      started_at TIMESTAMP DEFAULT NOW(),
      last_access TIMESTAMP DEFAULT NOW(),
      UNIQUE(student_id, language)
    )
  `)

  await pool.query(`
    CREATE TABLE IF NOT EXISTS code_drafts (
      id SERIAL PRIMARY KEY,
      student_id INTEGER NOT NULL REFERENCES students(id) ON DELETE CASCADE,
      language VARCHAR(20) DEFAULT 'javascript',
      lesson_id VARCHAR(10) NOT NULL,
      exercise_idx INTEGER NOT NULL,
      code TEXT NOT NULL,
      updated_at TIMESTAMP DEFAULT NOW(),
      UNIQUE(student_id, language, lesson_id, exercise_idx)
    )
  `)

  // Migrations para adicionar colunas se nao existirem
  try {
    // Adiciona coluna language na tabela progress
    await pool.query(`
      ALTER TABLE progress
      ADD COLUMN IF NOT EXISTS language VARCHAR(20) DEFAULT 'javascript'
    `)

    // Remove constraint antiga e adiciona nova (student_id, language)
    await pool.query(`
      DO $$
      BEGIN
        IF EXISTS (
          SELECT 1 FROM pg_constraint
          WHERE conname = 'progress_student_id_key'
        ) THEN
          ALTER TABLE progress DROP CONSTRAINT progress_student_id_key;
        END IF;
      END $$;
    `)

    await pool.query(`
      DO $$
      BEGIN
        IF NOT EXISTS (
          SELECT 1 FROM pg_constraint
          WHERE conname = 'progress_student_id_language_key'
        ) THEN
          ALTER TABLE progress ADD CONSTRAINT progress_student_id_language_key UNIQUE(student_id, language);
        END IF;
      END $$;
    `)

    // Adiciona coluna language na tabela code_drafts
    await pool.query(`
      ALTER TABLE code_drafts
      ADD COLUMN IF NOT EXISTS language VARCHAR(20) DEFAULT 'javascript'
    `)

    // Remove constraint antiga e adiciona nova (student_id, language, lesson_id, exercise_idx)
    await pool.query(`
      DO $$
      BEGIN
        IF EXISTS (
          SELECT 1 FROM pg_constraint
          WHERE conname = 'code_drafts_student_id_lesson_id_exercise_idx_key'
        ) THEN
          ALTER TABLE code_drafts DROP CONSTRAINT code_drafts_student_id_lesson_id_exercise_idx_key;
        END IF;
      END $$;
    `)

    await pool.query(`
      DO $$
      BEGIN
        IF NOT EXISTS (
          SELECT 1 FROM pg_constraint
          WHERE conname = 'code_drafts_student_id_language_lesson_id_exercise_idx_key'
        ) THEN
          ALTER TABLE code_drafts ADD CONSTRAINT code_drafts_student_id_language_lesson_id_exercise_idx_key UNIQUE(student_id, language, lesson_id, exercise_idx);
        END IF;
      END $$;
    `)
  } catch (err) {
    console.error('[DB] Erro na migration:', err.message)
  }

  console.log('  [DB] Tabelas verificadas/criadas')
}

module.exports = { pool, initDatabase }
