const { Client } = require('pg')

const client = new Client({
  connectionString: 'postgresql://postgres:WRysPJvZeGOBIjOOFsGBNBfzfKsojoWG@shortline.proxy.rlwy.net:41889/railway'
})

async function getData() {
  try {
    await client.connect()
    console.log('✓ Conectado ao banco Helsen Service\n')

    // Buscar técnicos
    console.log('=== TÉCNICOS ===')
    const tecnicos = await client.query('SELECT id, username, hourly_rate FROM technicians ORDER BY id LIMIT 10')
    console.log(JSON.stringify(tecnicos.rows, null, 2))

    // Buscar OS
    console.log('\n=== ORDENS DE SERVIÇO ===')
    const os = await client.query(`
      SELECT order_number, status, client_name, technician_id, created_at, grand_total
      FROM os
      WHERE order_number IN (6579, 6632, 6418, 6620, 6650)
      ORDER BY order_number DESC
      LIMIT 10
    `)
    console.log(JSON.stringify(os.rows, null, 2))

    // Buscar mais OS com status variados
    console.log('\n=== OS POR STATUS ===')
    const osStatus = await client.query(`
      SELECT order_number, status, client_name, grand_total, technician_id
      FROM os
      WHERE order_number >= 6500 AND deleted_at IS NULL
      ORDER BY order_number DESC
      LIMIT 20
    `)
    console.log(JSON.stringify(osStatus.rows, null, 2))

    // Buscar empresas
    console.log('\n=== EMPRESAS/CLIENTES ===')
    const empresas = await client.query(`
      SELECT id, name
      FROM companies
      WHERE name IN ('Hseven LTDA', 'JMS Industria', 'IMPAR', 'ITAMBE', 'TRIUNFO')
      ORDER BY name
      LIMIT 10
    `)
    console.log(JSON.stringify(empresas.rows, null, 2))

    // Buscar estatísticas reais de OS por status
    console.log('\n=== ESTATÍSTICAS POR STATUS ===')
    const statusCount = await client.query(`
      SELECT status, COUNT(*) as total
      FROM os
      WHERE order_number >= 6500 AND deleted_at IS NULL
      GROUP BY status
      ORDER BY total DESC
    `)
    console.log(JSON.stringify(statusCount.rows, null, 2))

  } catch (err) {
    console.error('Erro:', err.message)
  } finally {
    await client.end()
  }
}

getData()
