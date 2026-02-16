// ============================================
// INLINE SUGGESTIONS - PYTHON
// Sugestões estilo Copilot para exercícios Python
// ============================================

const PYTHON_SUGGESTIONS = {
  // ============================================
  // MÓDULO 1
  // ============================================
  "1-1": {
    0: {
      trigger: "print",
      suggestion: 'print("Olá, Helsen!")',
      description: "Use print() para exibir texto"
    }
  },

  "1-2": {
    0: {
      trigger: "nome",
      suggestion: 'nome = "Seu Nome"\nprint(nome)',
      description: "Crie a variável e exiba"
    },
    1: {
      trigger: "tecnico",
      suggestion: 'tecnico = "Leon Mendes"\nvalor_hora = 175\nprint(tecnico)\nprint(valor_hora)',
      description: "Duas variáveis: texto e número"
    }
  },

  "1-3": {
    0: {
      trigger: "horas",
      suggestion: 'horas = 8\nvalor_hora = 175\ntotal = horas * valor_hora\nprint(total)',
      description: "Multiplicação para calcular total"
    }
  },

  // ============================================
  // MÓDULO 2
  // ============================================
  "2-1": {
    0: {
      trigger: "cliente",
      suggestion: 'cliente = "Minerva"\ntipo = "Usinagem"\nnome_completo = cliente + " " + tipo\nprint(nome_completo)',
      description: "Concatenação com +"
    }
  },

  "2-2": {
    0: {
      trigger: "f\"",
      suggestion: 'tecnico = "Leon Mendes"\nvalor_hora = 175\nprint(f"Técnico: {tecnico} - R$ {valor_hora}/hora")',
      description: "F-string com variáveis dentro de {}"
    }
  },

  // ============================================
  // MÓDULO 3
  // ============================================
  "3-1": {
    0: { // 1A
      trigger: "[",
      suggestion: 'tecnicos = ["Leon Mendes", "Valdinei Pereira", "Dayvison Jepson"]\nprint(tecnicos)',
      description: "Lista com três nomes"
    },
    1: { // 1B
      trigger: "[0]",
      suggestion: 'tecnicos = ["Leon Mendes", "Valdinei Pereira", "Dayvison Jepson"]\nprint(tecnicos[0])',
      description: "Primeiro item (índice 0)"
    },
    2: { // 1C
      trigger: "[-1]",
      suggestion: 'tecnicos = ["Leon Mendes", "Valdinei Pereira", "Dayvison Jepson"]\nprint(tecnicos[0])\nprint(tecnicos[-1])',
      description: "Primeiro e último"
    },
    3: { // 1D
      trigger: "len",
      suggestion: 'tecnicos = ["Leon Mendes", "Valdinei Pereira", "Dayvison Jepson"]\nprint(len(tecnicos))',
      description: "Tamanho da lista"
    },
    4: { // 1E
      trigger: ".append",
      suggestion: 'tecnicos = ["Leon Mendes", "Valdinei Pereira", "Dayvison Jepson"]\ntecnicos.append("Carlos Silva")\nprint(tecnicos)',
      description: "Adiciona item no final"
    }
  },

  "3-2": {
    0: { // 1A
      trigger: "for",
      suggestion: 'tecnicos = ["Leon Mendes", "Valdinei Pereira", "Dayvison Jepson"]\n\nfor tecnico in tecnicos:\n    print(tecnico)',
      description: "Loop básico"
    },
    1: { // 1B
      trigger: "f\"",
      suggestion: 'tecnicos = ["Leon Mendes", "Valdinei Pereira", "Dayvison Jepson"]\n\nfor tecnico in tecnicos:\n    print(f"Técnico: {tecnico}")',
      description: "Loop com f-string"
    },
    2: { // 2A
      trigger: "contador",
      suggestion: 'tecnicos = ["Leon Mendes", "Valdinei Pereira", "Dayvison Jepson"]\ncontador = 0\n\nfor tecnico in tecnicos:\n    contador = contador + 1\n\nprint(contador)',
      description: "Contar com variável"
    },
    3: { // 2B
      trigger: "total",
      suggestion: 'valores_os = [1145, 700, 445, 890]\ntotal = 0\n\nfor valor in valores_os:\n    total = total + valor\n\nprint(total)',
      description: "Somar valores"
    },
    4: { // 2C
      trigger: "if",
      suggestion: 'valores_os = [1145, 700, 445, 890]\n\nfor valor in valores_os:\n    if valor > 600:\n        print(valor)',
      description: "Loop com filtro"
    }
  },

  // ============================================
  // MÓDULO 4
  // ============================================
  "4-1": {
    0: { // 1A
      trigger: "def",
      suggestion: 'def mostrar_empresa():\n    print("Helsen Service")\n\nmostrar_empresa()',
      description: "Função sem parâmetros"
    },
    1: { // 1B
      trigger: "def",
      suggestion: 'def mostrar_tecnico(nome):\n    print(f"Técnico: {nome}")\n\nmostrar_tecnico("Leon Mendes")',
      description: "Função com 1 parâmetro"
    },
    2: { // 1C
      trigger: "def",
      suggestion: 'def mostrar_os(numero, cliente):\n    print(f"OS {numero} - {cliente}")\n\nmostrar_os(6650, "Minerva Usinagem")',
      description: "Função com 2 parâmetros"
    },
    3: { // 1D
      trigger: "return",
      suggestion: 'def calcular_comissao(valor_os):\n    return valor_os * 0.10\n\nresultado = calcular_comissao(1145)\nprint(resultado)',
      description: "Função com retorno"
    }
  },

  "4-2": {
    0: { // 1A
      trigger: "[",
      suggestion: 'valores_os = [1145, 700, 445, 890]\naltos = [v for v in valores_os if v > 700]\nprint(altos)',
      description: "List comprehension com filtro"
    },
    1: { // 1B
      trigger: "[",
      suggestion: 'valores_os = [1145, 700, 445, 890]\ncomissoes = [v * 0.10 for v in valores_os]\nprint(comissoes)',
      description: "List comprehension com transformação"
    },
    2: { // 2A
      trigger: "sum",
      suggestion: 'valores_os = [1145, 700, 445, 890]\ntotal = sum(valores_os)\nprint(total)',
      description: "Somar todos os valores"
    },
    3: { // 2B
      trigger: "max",
      suggestion: 'valores_os = [1145, 700, 445, 890]\nprint(max(valores_os))\nprint(min(valores_os))',
      description: "Maior e menor valor"
    },
    4: { // 3A
      trigger: "sum",
      suggestion: 'valores_os = [1145, 700, 445, 890]\ntotal_baixos = sum([v for v in valores_os if v < 800])\nprint(total_baixos)',
      description: "Filtrar e somar"
    }
  },

  // ============================================
  // MÓDULO 5
  // ============================================
  "5-1": {
    0: { // 1A
      trigger: "{",
      suggestion: 'os_info = {\n    "numero": 6650,\n    "cliente": "Minerva Usinagem",\n    "valor": 1145\n}\n\nprint(os_info["cliente"])',
      description: "Dicionário básico"
    },
    1: { // 1B
      trigger: "[",
      suggestion: 'os_info = {\n    "numero": 6650,\n    "cliente": "Minerva Usinagem",\n    "valor": 1145\n}\n\nos_info["status"] = "completed"\nprint(os_info)',
      description: "Adicionar chave"
    },
    2: { // 1C
      trigger: "{",
      suggestion: 'os_completa = {\n    "numero": 6650,\n    "cliente": "Minerva Usinagem",\n    "tecnico_id": 41,\n    "valor": 1145,\n    "status": "completed"\n}\n\nprint(os_completa["numero"])\nprint(os_completa["valor"])',
      description: "Dicionário completo"
    }
  },

  "5-2": {
    0: { // 1A
      trigger: "[",
      suggestion: 'todas_os = [\n    {"numero": 6650, "cliente": "Minerva Usinagem", "valor": 1145},\n    {"numero": 6632, "cliente": "Usinagem Castro", "valor": 700},\n    {"numero": 6620, "cliente": "Off Limits", "valor": 445}\n]\n\nfor os in todas_os:\n    print(os["numero"])',
      description: "Lista de dicionários"
    },
    1: { // 1B
      trigger: "[",
      suggestion: 'todas_os = [\n    {"numero": 6650, "valor": 1145},\n    {"numero": 6632, "valor": 700},\n    {"numero": 6620, "valor": 445}\n]\n\naltas = [os for os in todas_os if os["valor"] > 600]\nprint(altas)',
      description: "Filtrar dicionários"
    }
  }
}

// Função para obter sugestão
function getPythonSuggestion(lessonId, exerciseIndex, currentCode) {
  const lessonSuggestions = PYTHON_SUGGESTIONS[lessonId]
  if (!lessonSuggestions) return null

  const exerciseSuggestion = lessonSuggestions[exerciseIndex]
  if (!exerciseSuggestion) return null

  // Verifica se o código atual contém o trigger
  if (currentCode.toLowerCase().includes(exerciseSuggestion.trigger.toLowerCase())) {
    return exerciseSuggestion
  }

  // Se o código está vazio ou muito curto, mostra a sugestão
  if (currentCode.trim().length < 5) {
    return exerciseSuggestion
  }

  return null
}
