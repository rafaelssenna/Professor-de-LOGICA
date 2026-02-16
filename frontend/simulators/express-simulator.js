// ============================================
// EXPRESS SIMULATOR - Simula servidor Express no navegador
// ============================================

class ExpressSimulator {
  constructor() {
    this.routes = {}
    this.data = {
      tecnicos: [
        { id: 41, username: "Leon Mendes", hourly_rate: 175, active: true },
        { id: 42, username: "Valdinei Pereira", hourly_rate: 175, active: true },
        { id: 48, username: "Dayvison Jepson", hourly_rate: 175, active: true }
      ],
      os: [
        { id: 1, order_number: 6650, client_name: "Minerva Usinagem", technician_id: 41, grand_total: 1145, status: "completed" },
        { id: 2, order_number: 6632, client_name: "Usinagem Castro", technician_id: 42, grand_total: 700, status: "avulso" },
        { id: 3, order_number: 6620, client_name: "Off Limits", technician_id: 41, grand_total: 445, status: "completed" }
      ]
    }
  }

  get(path, handler) {
    this.routes[`GET ${path}`] = handler
  }

  post(path, handler) {
    this.routes[`POST ${path}`] = handler
  }

  put(path, handler) {
    this.routes[`PUT ${path}`] = handler
  }

  delete(path, handler) {
    this.routes[`DELETE ${path}`] = handler
  }

  async request(method, path, body = {}, query = {}) {
    // Extrai parâmetros da URL (/tecnicos/:id)
    let params = {}
    let matchedRoute = null
    let matchedHandler = null

    for (let routeKey in this.routes) {
      let [routeMethod, routePath] = routeKey.split(' ')

      if (routeMethod !== method) continue

      // Tenta casar com parâmetros
      let routePattern = routePath.replace(/:(\w+)/g, '([^/]+)')
      let regex = new RegExp(`^${routePattern}$`)
      let match = path.match(regex)

      if (match) {
        // Extrai nomes dos parâmetros
        let paramNames = (routePath.match(/:(\w+)/g) || []).map(p => p.substring(1))
        paramNames.forEach((name, i) => {
          params[name] = match[i + 1]
        })
        matchedRoute = routeKey
        matchedHandler = this.routes[routeKey]
        break
      }
    }

    if (!matchedHandler) {
      // Tenta rota exata
      matchedHandler = this.routes[`${method} ${path}`]
    }

    if (!matchedHandler) {
      return {
        status: 404,
        body: { error: "Rota não encontrada", message: `${method} ${path} não existe` }
      }
    }

    // Simula req/res do Express
    let req = {
      body,
      params,
      query,
      method,
      path
    }

    let res = {
      _status: 200,
      _body: null,
      status(code) {
        this._status = code
        return this
      },
      json(data) {
        this._body = data
        return this
      },
      send(data) {
        this._body = data
        return this
      }
    }

    try {
      await matchedHandler(req, res)
      return {
        status: res._status,
        body: res._body
      }
    } catch (error) {
      return {
        status: 500,
        body: { error: "Erro interno", message: error.message }
      }
    }
  }

  // Helper para testar rotas facilmente
  async testRoute(method, path, body = {}) {
    console.log(`\n🔵 ${method} ${path}`)
    if (Object.keys(body).length > 0) {
      console.log('Body:', JSON.stringify(body, null, 2))
    }

    let result = await this.request(method, path, body)

    if (result.status >= 200 && result.status < 300) {
      console.log(`✅ ${result.status}`)
    } else {
      console.log(`❌ ${result.status}`)
    }

    console.log('Resposta:', JSON.stringify(result.body, null, 2))
    return result
  }
}
