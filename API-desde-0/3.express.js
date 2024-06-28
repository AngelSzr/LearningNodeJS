const express = require('express')
const app = express()
const dittoJSON = require('./pokemon/ditto.json')

app.disable('x-powered-by')

const PORT = process.env.PORT ?? 3003

app.get('/', (req, res) => {
  res.status(200).send('<h1>Mi página</h1>')
})

app.get('/pokemon/ditto', (req, res) => {
  res.status(200).json(dittoJSON)
})

app.post('/pokemon', (req, res) => {
  let body = ''
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    res.status(200).json(data)
  })
})

app.listen(PORT, () => {
  console.log(`Escuchando, servidor en: http://localhost:${PORT}`)
})
