import cors from 'cors'
const ACCEPTED_ORIGINS = [
  'http://localhost:8080',
  'http://127.0.0.7:5500',
  'http://localhost:1234',
  'https://movies.com',
  'https://midu.dev'
]

export const corsMiddlaware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    // el localhost 8080 es usado por la página que creamos con 'npx servor'
    if (acceptedOrigins.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
})

// métodos normales: GET/HEAD/POST
// métodos complejos: PUT/PATCH/DELETE

// CORS PRE-Flight
// OPTIONS
