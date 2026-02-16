#!/bin/bash

cat << 'EOF' > course-data-python.js
// ============================================
// CURSO DE PYTHON - HELSEN SERVICE
// Sistema de aprendizado progressivo para funcionários
// ============================================

const COURSE_DATA_PYTHON = {
  title: "Aprender Python - Do Zero ao Sistema MATH",
  modules: [
    // ========== MÓDULO 1: PRIMEIROS PASSOS ==========
    {
      id: 1,
      title: "Primeiros Passos",
      lessons: [
        {
          id: "1-1",
          title: "Boas-vindas ao Python",
          duration: "15 min",
          module: "Primeiros Passos",
EOF

# Adiciona seções da lição 1-1
sed -n '/^  "1-1": {/,/^  },$/p' course-data-python.js.backup | sed '1d;$d' | sed 's/^  /          /' >> course-data-python.js

cat << 'EOF' >> course-data-python.js
        },
        {
          id: "1-2",
          title: "Variáveis em Python",
          duration: "20 min",
          module: "Primeiros Passos",
EOF

# Adiciona seções da lição 1-2
sed -n '/^  "1-2": {/,/^  },$/p' course-data-python.js.backup | sed '1d;$d' | sed 's/^  /          /' >> course-data-python.js

echo "Script criado!"
