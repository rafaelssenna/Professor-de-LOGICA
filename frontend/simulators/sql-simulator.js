// ============================================
// SQL SIMULATOR - Simula queries SQL no navegador
// ============================================

class SQLSimulator {
  constructor() {
    // Tabelas em memória
    this.tables = {
      tecnicos: [
        { id: 41, nome: "Leon Mendes", valor_hora: 175, ativo: true },
        { id: 42, nome: "Valdinei Pereira", valor_hora: 175, ativo: true },
        { id: 48, nome: "Dayvison Jepson", valor_hora: 175, ativo: true }
      ],
      os: [
        { id: 1, numero: 6650, cliente: "Minerva Usinagem", tecnico_id: 41, valor: 1145, status: "completed" },
        { id: 2, numero: 6632, cliente: "Usinagem Castro", tecnico_id: 42, valor: 700, status: "avulso" },
        { id: 3, numero: 6620, cliente: "Off Limits", tecnico_id: 41, valor: 445, status: "completed" },
        { id: 4, numero: 6579, cliente: "Hseven LTDA", tecnico_id: 48, valor: 890, status: "completed" }
      ],
      empresas: [
        { id: 1, nome: "Hseven LTDA", cnpj: "12.345.678/0001-90" },
        { id: 2, nome: "Minerva Usinagem", cnpj: "98.765.432/0001-10" },
        { id: 3, nome: "Usinagem Castro", cnpj: "11.222.333/0001-44" }
      ]
    }

    // Histórico de queries executadas
    this.queryHistory = []
  }

  // Executa uma query SQL
  query(sql) {
    sql = sql.trim()
    this.queryHistory.push(sql)

    // Remove ponto e vírgula final
    if (sql.endsWith(';')) {
      sql = sql.slice(0, -1).trim()
    }

    try {
      // SELECT
      if (sql.toUpperCase().startsWith('SELECT')) {
        return this._executeSelect(sql)
      }

      // INSERT
      if (sql.toUpperCase().startsWith('INSERT')) {
        return this._executeInsert(sql)
      }

      // UPDATE
      if (sql.toUpperCase().startsWith('UPDATE')) {
        return this._executeUpdate(sql)
      }

      // DELETE
      if (sql.toUpperCase().startsWith('DELETE')) {
        return this._executeDelete(sql)
      }

      throw new Error('Query não suportada. Use SELECT, INSERT, UPDATE ou DELETE.')
    } catch (error) {
      return {
        error: true,
        message: error.message,
        sql: sql
      }
    }
  }

  // SELECT
  _executeSelect(sql) {
    // Parse básico: SELECT ... FROM tabela [WHERE ...]
    const selectMatch = sql.match(/SELECT\s+(.+?)\s+FROM\s+(\w+)(?:\s+WHERE\s+(.+))?/i)

    if (!selectMatch) {
      throw new Error('Sintaxe SELECT inválida. Use: SELECT colunas FROM tabela [WHERE condição]')
    }

    const [, columns, tableName, whereClause] = selectMatch
    const table = this.tables[tableName.toLowerCase()]

    if (!table) {
      throw new Error(`Tabela "${tableName}" não existe`)
    }

    let rows = [...table] // Cópia

    // WHERE
    if (whereClause) {
      rows = this._filterRows(rows, whereClause)
    }

    // Seleciona colunas
    if (columns.trim() === '*') {
      return { rows, rowCount: rows.length }
    }

    const selectedColumns = columns.split(',').map(c => c.trim())
    const projectedRows = rows.map(row => {
      const newRow = {}
      selectedColumns.forEach(col => {
        if (row[col] !== undefined) {
          newRow[col] = row[col]
        }
      })
      return newRow
    })

    return { rows: projectedRows, rowCount: projectedRows.length }
  }

  // INSERT
  _executeInsert(sql) {
    // INSERT INTO tabela (col1, col2) VALUES (val1, val2)
    const insertMatch = sql.match(/INSERT\s+INTO\s+(\w+)\s*\(([^)]+)\)\s*VALUES\s*\(([^)]+)\)/i)

    if (!insertMatch) {
      throw new Error('Sintaxe INSERT inválida. Use: INSERT INTO tabela (colunas) VALUES (valores)')
    }

    const [, tableName, columnsStr, valuesStr] = insertMatch
    const table = this.tables[tableName.toLowerCase()]

    if (!table) {
      throw new Error(`Tabela "${tableName}" não existe`)
    }

    const columns = columnsStr.split(',').map(c => c.trim())
    const values = this._parseValues(valuesStr)

    if (columns.length !== values.length) {
      throw new Error('Número de colunas e valores não corresponde')
    }

    const newRow = {}
    columns.forEach((col, i) => {
      newRow[col] = values[i]
    })

    // Gera ID automático se não fornecido
    if (!newRow.id) {
      const maxId = Math.max(...table.map(r => r.id || 0), 0)
      newRow.id = maxId + 1
    }

    table.push(newRow)

    return {
      success: true,
      message: `1 linha inserida em ${tableName}`,
      insertedRow: newRow
    }
  }

  // UPDATE
  _executeUpdate(sql) {
    // UPDATE tabela SET col1 = val1 WHERE condição
    const updateMatch = sql.match(/UPDATE\s+(\w+)\s+SET\s+(.+?)(?:\s+WHERE\s+(.+))?$/i)

    if (!updateMatch) {
      throw new Error('Sintaxe UPDATE inválida. Use: UPDATE tabela SET coluna = valor [WHERE condição]')
    }

    const [, tableName, setClause, whereClause] = updateMatch
    const table = this.tables[tableName.toLowerCase()]

    if (!table) {
      throw new Error(`Tabela "${tableName}" não existe`)
    }

    let rows = table

    // WHERE
    if (whereClause) {
      rows = this._filterRows(rows, whereClause)
    }

    // Parse SET (col = val, col2 = val2)
    const updates = this._parseSetClause(setClause)

    // Aplica updates
    rows.forEach(row => {
      Object.assign(row, updates)
    })

    return {
      success: true,
      message: `${rows.length} linha(s) atualizada(s)`,
      affectedRows: rows.length
    }
  }

  // DELETE
  _executeDelete(sql) {
    // DELETE FROM tabela WHERE condição
    const deleteMatch = sql.match(/DELETE\s+FROM\s+(\w+)(?:\s+WHERE\s+(.+))?/i)

    if (!deleteMatch) {
      throw new Error('Sintaxe DELETE inválida. Use: DELETE FROM tabela [WHERE condição]')
    }

    const [, tableName, whereClause] = deleteMatch
    const table = this.tables[tableName.toLowerCase()]

    if (!table) {
      throw new Error(`Tabela "${tableName}" não existe`)
    }

    if (!whereClause) {
      throw new Error('DELETE sem WHERE não é permitido (segurança)')
    }

    const rowsToDelete = this._filterRows(table, whereClause)
    const count = rowsToDelete.length

    // Remove as linhas
    rowsToDelete.forEach(row => {
      const index = table.indexOf(row)
      table.splice(index, 1)
    })

    return {
      success: true,
      message: `${count} linha(s) deletada(s)`,
      affectedRows: count
    }
  }

  // Filtra linhas com WHERE
  _filterRows(rows, whereClause) {
    // Suporta operadores: =, !=, >, <, >=, <=, AND, OR
    return rows.filter(row => {
      return this._evaluateCondition(row, whereClause)
    })
  }

  // Avalia condição WHERE
  _evaluateCondition(row, condition) {
    // Remove espaços extras
    condition = condition.trim()

    // AND
    if (condition.toUpperCase().includes(' AND ')) {
      const parts = condition.split(/\s+AND\s+/i)
      return parts.every(part => this._evaluateCondition(row, part))
    }

    // OR
    if (condition.toUpperCase().includes(' OR ')) {
      const parts = condition.split(/\s+OR\s+/i)
      return parts.some(part => this._evaluateCondition(row, part))
    }

    // Operadores
    const operators = ['>=', '<=', '!=', '=', '>', '<']

    for (const op of operators) {
      if (condition.includes(op)) {
        const [left, right] = condition.split(op).map(s => s.trim())
        const leftValue = row[left]
        const rightValue = this._parseValue(right)

        switch (op) {
          case '=': return leftValue == rightValue
          case '!=': return leftValue != rightValue
          case '>': return leftValue > rightValue
          case '<': return leftValue < rightValue
          case '>=': return leftValue >= rightValue
          case '<=': return leftValue <= rightValue
        }
      }
    }

    return false
  }

  // Parse SET clause
  _parseSetClause(setClause) {
    const updates = {}
    const assignments = setClause.split(',')

    assignments.forEach(assignment => {
      const [col, val] = assignment.split('=').map(s => s.trim())
      updates[col] = this._parseValue(val)
    })

    return updates
  }

  // Parse VALUES
  _parseValues(valuesStr) {
    return valuesStr.split(',').map(v => this._parseValue(v.trim()))
  }

  // Parse valor individual
  _parseValue(value) {
    value = value.trim()

    // String (entre aspas)
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      return value.slice(1, -1)
    }

    // Número
    if (!isNaN(value)) {
      return parseFloat(value)
    }

    // Boolean
    if (value.toLowerCase() === 'true') return true
    if (value.toLowerCase() === 'false') return false

    // NULL
    if (value.toUpperCase() === 'NULL') return null

    return value
  }

  // Helper para mostrar resultados formatados
  printResults(result) {
    if (result.error) {
      console.log(`❌ ERRO: ${result.message}`)
      console.log(`Query: ${result.sql}`)
      return
    }

    if (result.rows) {
      console.log(`✅ ${result.rowCount} linha(s) retornada(s):`)
      console.table(result.rows)
    } else if (result.success) {
      console.log(`✅ ${result.message}`)
      if (result.insertedRow) {
        console.log('Linha inserida:', result.insertedRow)
      }
    }
  }

  // Reseta tabelas para estado inicial
  reset() {
    this.tables = {
      tecnicos: [
        { id: 41, nome: "Leon Mendes", valor_hora: 175, ativo: true },
        { id: 42, nome: "Valdinei Pereira", valor_hora: 175, ativo: true },
        { id: 48, nome: "Dayvison Jepson", valor_hora: 175, ativo: true }
      ],
      os: [
        { id: 1, numero: 6650, cliente: "Minerva Usinagem", tecnico_id: 41, valor: 1145, status: "completed" },
        { id: 2, numero: 6632, cliente: "Usinagem Castro", tecnico_id: 42, valor: 700, status: "avulso" },
        { id: 3, numero: 6620, cliente: "Off Limits", tecnico_id: 41, valor: 445, status: "completed" },
        { id: 4, numero: 6579, cliente: "Hseven LTDA", tecnico_id: 48, valor: 890, status: "completed" }
      ],
      empresas: [
        { id: 1, nome: "Hseven LTDA", cnpj: "12.345.678/0001-90" },
        { id: 2, nome: "Minerva Usinagem", cnpj: "98.765.432/0001-10" },
        { id: 3, nome: "Usinagem Castro", cnpj: "11.222.333/0001-44" }
      ]
    }
    this.queryHistory = []
  }
}
