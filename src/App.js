/** @format */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import {
  BiMovie,
  AiOutlineSearch,
  MdGrade,
  BiRightArrow,
  BiLeftArrow,
} from 'react-icons/all'

import Loader from './components/Loader'
import Aos from 'aos'
import 'aos/dist/aos.css'

import Movies from './components/Movies'

function App() {
  const [input, setInput] = useState('')
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [initial, setInitial] = useState(true)
  const [loading, setLoading] = useState(true)
  const [skeleton, setSkeleton] = useState(false)

  const API_KEY = process.env.REACT_APP_API_KEY

  const session = JSON.parse(sessionStorage.getItem('movie')) || ''

  const loadMovies = async () => {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=dark&type=movie&page=1&apikey=${API_KEY}`
    )
    setMovies(data)
  }

  const getMovies = async (page) => {
    if (input === '') {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?s=${session.trim()}&type=movie&page=${page}&apikey=${API_KEY}`
      )
      setMovies(data)
    } else {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?s=${input.trim()}&type=movie&page=${page}&apikey=${API_KEY}`
      )
      setMovies(data)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSkeleton(true)
    sessionStorage.setItem('movie', JSON.stringify(input))
    setTimeout(() => {
      getMovies()
      setInput('')
      setPage(1)
      setInitial(false)
      setSkeleton(false)
    }, 1000)
  }

  const getPreviousPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1)
    }
  }

  const getNextPage = () => {
    setPage((prev) => prev + 1)
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      loadMovies()
      setLoading(false)
      Aos.init({
        duration: 1000,
      })
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    let mounted = true
    if (mounted && page > 0) {
      getMovies(page)
    }
    return () => {
      mounted = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  if (loading) {
    return <Loader />
  } else {
    return (
      <div data-aos='fade' className='container'>
        <h1>The Shoppies</h1>

        <div className='text-container'>
          <p>Nominate your favorite movies!</p>
          <BiMovie className='movie-icon' />
        </div>

        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <input
              spellCheck={false}
              type='text'
              placeholder='search movie title... e.g. "dark"'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <AiOutlineSearch onClick={handleSubmit} className='search-icon' />
          </form>

          {input !== '' && session
            ? ''
            : initial
            ? ''
            : movies.Search && (
                <div className='button-container'>
                  <button
                    className={page === 1 ? 'disabled' : 'previous'}
                    disabled={page === 1}
                    onClick={getPreviousPage}>
                    <BiLeftArrow />
                  </button>
                  <button
                    className={movies.Search.length < 10 ? 'disabled' : 'next'}
                    disabled={movies.Search.length < 10}
                    onClick={getNextPage}>
                    <BiRightArrow />
                  </button>
                </div>
              )}
        </div>

        <div className='nomination-container'>
          {/* <div>Nomination List</div> */}
        </div>

        <Movies movies={movies} skeleton={skeleton} />
      </div>
    )
  }
}

export default App
