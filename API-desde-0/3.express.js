const express = require('express')
const app = express()
const dittoJSON = require('./pokemon/ditto.json')

app.disable('x-powered-by')

const PORT = process.env.PORT ?? 3003

// app.use(express.json())

app.use((req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

  let body = ''
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    req.body = data
    next()
  })
})

app.get('/', (req, res) => {
  res.status(200).send('<h1>Mi página</h1>')
})

app.get('/pokemon/ditto', (req, res) => {
  res.status(200).json(dittoJSON)
})

app.post('/pokemon', (req, res) => {
  res.status(200).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
  console.log(`Escuchando, servidor en: http://localhost:${PORT}`)
})
