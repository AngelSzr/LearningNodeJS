const express = require('express')
const movies = require('./movies.json')

const app = express()
app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.status(200).send('<h1>Hola a mi página web</h1>')
})

app.get('/movies', (req, res) => {
  const { genre } = req.query
  if (genre) {
    const moviesFiltered = movies.filter(
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(moviesFiltered)
  }
  return res.json(movies)
})

app.get('/movies/:id', (req, res) => {
  const { id } = req.params
  const movie = movies.find(movie => movie.id === id)
  if (movie) return res.json(movie)
  res.status('404').send('Pelicula no encontrada')
}
)

const PORT = process.env.PORT ?? 3003

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`)
})
