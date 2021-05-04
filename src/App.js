/** @format */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { data } = await axios.get(
      `http://www.omdbapi.com/?s=${input}&type=movie&page=${page}&apikey=e5e99dbd`
    )
    console.log(data.Search)
    setMovies(data)
    setInput('')
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <div className='movies-container'>
        {movies.Search &&
          movies.Search.map((movie, i) => (
            <div className='movies' key={i}>
              <div>
                <img
                  className='movie-img'
                  src={movie.Poster !== 'N/A' ? movie.Poster : ''}
                  alt={movie.title}
                />
              </div>
              <div>{movie.Title}</div>
              <div>{movie.Year}</div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default App
