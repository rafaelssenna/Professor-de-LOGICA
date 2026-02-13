// ============================================
// MATH Academy - Rotas de Progresso e Codigo
// ============================================

const express = require('express')
const { pool } = require('../db')
const { authenticate } = require('../middleware/auth')

const router = express.Router()

// Todas as rotas precisam de autenticacao
router.use(authenticate)

// GET /api/progress - Carregar progresso do aluno
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT current_lesson, lessons, started_at, last_access FROM progress WHERE student_id = $1',
      [req.student.id]
    )

    if (result.rows.length === 0) {
      await pool.query(
        'INSERT INTO progress (student_id) VALUES ($1) ON CONFLICT DO NOTHING',
        [req.student.id]
      )
      return res.json({
        currentLesson: '1-1',
        lessons: {},
        startedAt: new Date().toISOString(),
        lastAccess: new Date().toISOString()
      })
    }

    const row = result.rows[0]
    res.json({
      currentLesson: row.current_lesson,
      lessons: row.lessons,
      startedAt: row.started_at,
      lastAccess: row.last_access
    })
  } catch (err) {
    console.error('[Progress GET] Erro:', err.message)
    res.status(500).json({ erro: 'Erro ao carregar progresso' })
  }
})

// PUT /api/progress - Salvar progresso do aluno
router.put('/', async (req, res) => {
  const { currentLesson, lessons } = req.body

  try {
    await pool.query(
      `UPDATE progress
       SET current_lesson = $1, lessons = $2, last_access = NOW()
       WHERE student_id = $3`,
      [currentLesson, JSON.stringify(lessons), req.student.id]
    )
    res.json({ ok: true })
  } catch (err) {
    console.error('[Progress PUT] Erro:', err.message)
    res.status(500).json({ erro: 'Erro ao salvar progresso' })
  }
})

// GET /api/progress/code-drafts - Carregar TODOS os rascunhos
router.get('/code-drafts', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT lesson_id, exercise_idx, code FROM code_drafts WHERE student_id = $1',
      [req.student.id]
    )
    const drafts = {}
    for (const row of result.rows) {
      drafts[`${row.lesson_id}_${row.exercise_idx}`] = row.code
    }
    res.json({ drafts })
  } catch (err) {
    console.error('[CodeDrafts GET] Erro:', err.message)
    res.status(500).json({ erro: 'Erro ao carregar codigos' })
  }
})

// PUT /api/progress/code-drafts/:lessonId/:exerciseIdx - Salvar rascunho (upsert)
router.put('/code-drafts/:lessonId/:exerciseIdx', async (req, res) => {
  const { lessonId, exerciseIdx } = req.params
  const { code } = req.body

  try {
    await pool.query(
      `INSERT INTO code_drafts (student_id, lesson_id, exercise_idx, code, updated_at)
       VALUES ($1, $2, $3, $4, NOW())
       ON CONFLICT (student_id, lesson_id, exercise_idx)
       DO UPDATE SET code = $4, updated_at = NOW()`,
      [req.student.id, lessonId, parseInt(exerciseIdx), code]
    )
    res.json({ ok: true })
  } catch (err) {
    console.error('[CodeDraft PUT] Erro:', err.message)
    res.status(500).json({ erro: 'Erro ao salvar codigo' })
  }
})

// DELETE /api/progress/code-drafts/:lessonId/:exerciseIdx - Apagar rascunho
router.delete('/code-drafts/:lessonId/:exerciseIdx', async (req, res) => {
  const { lessonId, exerciseIdx } = req.params

  try {
    await pool.query(
      'DELETE FROM code_drafts WHERE student_id = $1 AND lesson_id = $2 AND exercise_idx = $3',
      [req.student.id, lessonId, parseInt(exerciseIdx)]
    )
    res.json({ ok: true })
  } catch (err) {
    console.error('[CodeDraft DELETE] Erro:', err.message)
    res.status(500).json({ erro: 'Erro ao remover codigo' })
  }
})

module.exports = router
