function MovieList({ movies }) {
  return (
    <ul className="movie-list">
      {movies.map((movie, index) => (
        <li key={index}>{movie}</li>
      ))}
    </ul>
  )
}

export default MovieList
