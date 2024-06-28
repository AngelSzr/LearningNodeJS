const http = require('node:http')

const dittoJSON = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
  const { method, url } = req
  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json;charset=uft-8')
          res.end(JSON.stringify(dittoJSON))
          break
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=uft-8')
          res.end('<h1>404</h1>')
      }
      break
    case 'POST':
      switch (url) {
        case '/pokemon':
          const body = ''
      }
  }
}
const server = http.createServer(processRequest)

server.listen('3003', () => {
  console.log('puerto listo en: http://localhost:3003')
})
