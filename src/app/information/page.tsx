'use client'
import { useEffect, useState } from 'react'

export default function Information() {
  const [movies, setMovies] = useState([])

  const url =
    'https://api.themoviedb.org/3/discover/tv?include_adult=true&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc'
  const options = {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWI2NmIyOGZhOTNiMzViMjgyZGQyZjU3MmI5NGYzZSIsInN1YiI6IjY0NzBiOWQ0MTNhMzIwMDEzMzg2MWViMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gjye9BThz4UeO-oe533oPzUEQhXOixAa-GD08vs0tm8',
    },
  }

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
  }, [])

  return (
    <main>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <span>{movie.name}</span>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
