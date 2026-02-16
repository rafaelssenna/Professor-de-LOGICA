// ============================================
// PYTHON EXECUTOR - Executa Python no navegador usando Pyodide
// ============================================

class PythonExecutor {
  constructor() {
    this.pyodide = null
    this.loading = false
    this.loaded = false
  }

  // Carrega Pyodide (apenas uma vez)
  async load() {
    if (this.loaded) return
    if (this.loading) {
      // Aguarda o carregamento em andamento
      while (this.loading) {
        await new Promise(resolve => setTimeout(resolve, 100))
      }
      return
    }

    this.loading = true

    try {
      // Verifica se loadPyodide está disponível
      if (typeof loadPyodide === 'undefined') {
        throw new Error('Pyodide não está disponível. Verifique se o script foi carregado.')
      }

      console.log('🐍 Carregando Pyodide...')
      this.pyodide = await loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/'
      })
      this.loaded = true
      console.log('✅ Pyodide carregado!')
    } catch (error) {
      console.error('❌ Erro ao carregar Pyodide:', error)
      this.loading = false
      throw new Error('Falha ao carregar Python: ' + error.message)
    } finally {
      this.loading = false
    }
  }

  // Executa código Python
  async run(code) {
    try {
      if (!this.loaded) {
        await this.load()
      }

      // Setup para capturar print()
      await this.pyodide.runPythonAsync(`
import sys
import io
_stdout = io.StringIO()
sys.stdout = _stdout
`)

      // Executa o código do usuário
      await this.pyodide.runPythonAsync(code)

      // Captura o output
      const output = await this.pyodide.runPythonAsync(`
_stdout.getvalue()
`)

      // Reseta stdout
      await this.pyodide.runPythonAsync(`
sys.stdout = sys.__stdout__
`)

      console.log('Output Python:', output)

      return {
        success: true,
        output: output || '(sem saída)',
        error: null
      }
    } catch (error) {
      console.error('Erro ao executar Python:', error)

      // Reseta stdout em caso de erro também
      try {
        await this.pyodide.runPythonAsync('sys.stdout = sys.__stdout__')
      } catch (e) {}

      return {
        success: false,
        output: '',
        error: this._formatError(error)
      }
    }
  }

  // Formata erros Python de forma amigável
  _formatError(error) {
    const errorStr = error.toString()

    // Extrai a parte importante do erro (linha com SyntaxError, NameError, etc)
    const lines = errorStr.split('\n')
    let errorLine = ''
    let errorMsg = ''

    // Procura pela linha do erro
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]

      // Pega a linha com SyntaxError, NameError, etc
      if (line.match(/^(SyntaxError|NameError|TypeError|ValueError|IndentationError|KeyError|IndexError|ZeroDivisionError|AttributeError):/)) {
        errorLine = line
        break
      }

      // Pega mensagem do tipo "File "<exec>", line X"
      if (line.includes('File "<exec>"')) {
        const match = line.match(/line (\d+)/)
        if (match) {
          errorMsg = `Linha ${match[1]}: `
        }
      }
    }

    // Traduz erros comuns
    const translations = {
      'SyntaxError': 'Erro de Sintaxe',
      'NameError': 'Variável não definida',
      'TypeError': 'Erro de Tipo',
      'IndentationError': 'Erro de Indentação',
      'ValueError': 'Valor inválido',
      'KeyError': 'Chave não encontrada',
      'IndexError': 'Índice fora do alcance',
      'ZeroDivisionError': 'Divisão por zero',
      'AttributeError': 'Atributo não existe'
    }

    let finalError = errorLine || errorStr

    // Aplica traduções
    for (const [eng, pt] of Object.entries(translations)) {
      finalError = finalError.replace(eng, pt)
    }

    // Traduz mensagens comuns
    finalError = finalError.replace('cannot assign to expression', 'não pode atribuir a uma expressão')
    finalError = finalError.replace("Maybe you meant '==' instead of '='?", "Talvez você quis usar '==' ao invés de '='?")
    finalError = finalError.replace('is not defined', 'não está definida')
    finalError = finalError.replace('invalid syntax', 'sintaxe inválida')

    return errorMsg + finalError
  }

  // Valida código sem executar (verifica sintaxe)
  async validate(code) {
    if (!this.loaded) {
      await this.load()
    }

    try {
      // Tenta compilar o código
      this.pyodide.runPython(`compile('''${code.replace(/'/g, "\\'")}''', '<string>', 'exec')`)
      return { valid: true, error: null }
    } catch (error) {
      return { valid: false, error: this._formatError(error) }
    }
  }

  // Helper para checar se está pronto
  isReady() {
    return this.loaded
  }

  // Reseta o ambiente Python
  async reset() {
    if (!this.loaded) return

    // Limpa todas as variáveis globais
    this.pyodide.runPython(`
# Limpa variáveis do usuário
for var in list(globals().keys()):
    if not var.startswith('_'):
        del globals()[var]
`)
  }
}

// Instância global
const pythonExecutor = new PythonExecutor()
