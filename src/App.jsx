import { useState, useEffect } from 'react'
import MovieList from './MovieList.jsx'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])
  const [movieTitle, setMovieTitle] = useState('')

  useEffect(() => {
    setMovies(['Shrek', 'Król Lew', 'Toy Story'])
  }, [])

  const handleAdd = () => {
    const title = movieTitle.trim()
    if (title === '') return

    setMovies((prev) => [...prev, title])
    setMovieTitle('')
  }

  return (
    <div className="app">
      <h1>Filmy do obejrzenia</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Podaj tytuł filmu"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
        />
        <button onClick={handleAdd}>Dodaj film</button>
      </div>

      <MovieList movies={movies} />
    </div>
  )
}

export default App
