const fs = require('fs');

// Lê o backup
eval(fs.readFileSync('course-data-python.js.backup', 'utf8'));

// Mapeia as lições para módulos
const lessonMetadata = {
  '1-1': { moduleId: 1, moduleTitle: 'Primeiros Passos', title: 'Boas-vindas ao Python', duration: '15 min' },
  '1-2': { moduleId: 1, moduleTitle: 'Primeiros Passos', title: 'Variáveis em Python', duration: '20 min' },
  '1-3': { moduleId: 1, moduleTitle: 'Primeiros Passos', title: 'Números e Matemática', duration: '20 min' },
  '2-1': { moduleId: 2, moduleTitle: 'Texto e Strings', title: 'Strings (Texto)', duration: '20 min' },
  '2-2': { moduleId: 2, moduleTitle: 'Texto e Strings', title: 'F-Strings (Formatação)', duration: '15 min' },
  '3-1': { moduleId: 3, moduleTitle: 'Listas e Loops', title: 'Listas em Python', duration: '30 min' },
  '3-2': { moduleId: 3, moduleTitle: 'Listas e Loops', title: 'Loops: Percorrendo Listas', duration: '30 min' },
  '4-1': { moduleId: 4, moduleTitle: 'Funções', title: 'Funções em Python', duration: '25 min' },
  '4-2': { moduleId: 4, moduleTitle: 'Funções', title: 'Métodos de Listas', duration: '25 min' },
  '5-1': { moduleId: 5, moduleTitle: 'Dicionários', title: 'Dicionários em Python', duration: '25 min' },
  '5-2': { moduleId: 5, moduleTitle: 'Dicionários', title: 'Listas de Dicionários', duration: '20 min' }
};

// Agrupa por módulo
const modules = {};
Object.keys(lessonMetadata).forEach(lessonId => {
  const meta = lessonMetadata[lessonId];
  if (!modules[meta.moduleId]) {
    modules[meta.moduleId] = {
      id: meta.moduleId,
      title: meta.moduleTitle,
      lessons: []
    };
  }

  modules[meta.moduleId].lessons.push({
    id: lessonId,
    title: meta.title,
    duration: meta.duration,
    module: meta.moduleTitle,
    sections: COURSE_DATA_PYTHON[lessonId].sections
  });
});

// Cria estrutura final
const newStructure = {
  title: "Aprender Python - Do Zero ao Sistema MATH",
  modules: Object.values(modules)
};

// Gera o código JavaScript
const output = `// ============================================
// CURSO DE PYTHON - HELSEN SERVICE
// Sistema de aprendizado progressivo para funcionários
// ============================================

const COURSE_DATA_PYTHON = ${JSON.stringify(newStructure, null, 2)
  .replace(/"(\w+)":/g, '$1:')  // Remove aspas das chaves
  .replace(/: "(\([^)]+\) => \{[^}]+\})"/g, ': $1')  // Fix functions
  .replace(/"validation": "([^"]+)"/g, 'validation: $1')  // Fix validation functions
}
`;

fs.writeFileSync('course-data-python-new.js', output);
console.log('✓ Arquivo criado: course-data-python-new.js');
