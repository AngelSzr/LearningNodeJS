const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 3001

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html; charset=uft-8')
    res.end('<h1>Bienvenido a la API!</h1>')
  } else if (req.url === '/imagen-pretty.png') {
    fs.readFile('./smth.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 error servidor</h1>')
      } else {
        res.statusCode = 200
        res.setHeader('Content-Type', 'image/png')
        console.log(data)
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html; charset:uft-8')
    res.end('<h1>Contacto :b</h1>')
  } else {
    res.statusCode = 404
    res.end('<h1>404</h1>')
  }
})

server.listen(desiredPort, () => {
  console.log(`Servidor activo en http://localhost:${desiredPort}`)
})
