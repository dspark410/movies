/** @format */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  const API_KEY = process.env.REACT_APP_API_KEY;

  const getMovies = async (page) => {
   const { data } = await axios.get(`http://www.omdbapi.com/?s=${input}&type=movie&page=${page}&apikey=${API_KEY}`)
   setMovies(data)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    getMovies()
   
   
  }

  const getPreviousPage = () => {
    if(page > 1) {
      setPage(prev => prev - 1)
    }
  }

  const getNextPage = () => {
      setPage(prev => prev + 1)    
  }

  useEffect(() => {
    getMovies(page)
  },[page])

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      {movies.Response === "False" ? '':
      <div> 
        <button disabled={page === 1} onClick={getPreviousPage} >prev page</button>
        <button onClick={getNextPage} >next page</button>
      </div>}
      
      <div className='movies-container'>
        {movies.Search ?
          movies.Search.map((movie, i) => (
            <div className='movies' key={i}>
              <div>
                <img
                  className='movie-img'
                  src={movie.Poster !== 'N/A' ? movie.Poster : 'data:image/png;base64,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'}
                  alt={movie.title}
                />
              </div>
              <div>{movie.Title}</div>
              <div>{movie.Year}</div>
            </div>
          )) : movies.Error === "Movie not found!" && 'no more movies'}
      </div>
    </div>
  )
}

export default App
