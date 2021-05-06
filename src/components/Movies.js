/** @format */

import React, { useState, useEffect } from 'react'
import { imageLink } from '../utils/noPoster'
import {
  MdGrade,
  AiOutlineClose,
  AiOutlineSearch,
  BiRightArrow,
  BiLeftArrow,
  BiMovie,
} from 'react-icons/all'
import MoviesSkeleton from './MoviesSkeleton'

function Movies({
  movies,
  skeleton,
  handleSubmit,
  input,
  setInput,
  initial,
  page,
  getPreviousPage,
  getNextPage,
  session,
}) {
  const [nominations, setNominations] = useState(
    JSON.parse(localStorage.getItem('nominations')) || []
  )

  const addNomination = (title, year) => {
    const nominationArr = [...nominations]

    const duplicate = nominationArr
      .map((nomination) => {
        return nomination.title === title
      })
      .includes(true)

    if (!duplicate && nominations.length < 5)
      nominationArr.push({ title, year })

    setNominations(nominationArr)
  }

  const removeNomination = (title, year) => {
    const nominationArr = [...nominations]
    const filteredArr = nominationArr.filter((nomination) => {
      return title !== nomination.title || year !== nomination.year
    })
    setNominations(filteredArr)
  }

  const getActiveImg = (title) => {
    const nominationsArr = nominations.filter((nomination) => {
      return nomination.title === title
    })
    if (nominationsArr[0] === undefined) {
      return 'movie-img'
    } else {
      if (nominationsArr[0].title === title) {
        return 'movie-img-opacity'
      } else {
        return 'movie-img'
      }
    }
  }

  const getActiveStar = (title) => {
    const nominationsArr = nominations.filter((nomination) => {
      return nomination.title === title
    })
    if (nominationsArr[0] === undefined) {
      return 'star-icon-inactive'
    } else {
      if (nominationsArr[0].title === title) {
        return 'star-icon-active'
      } else {
        return 'star-icon-inactive'
      }
    }
  }

  const getNominations = (title, year) => {
    const nominationsArr = nominations.filter((nomination) => {
      return nomination.title === title
    })
    if (nominationsArr[0] !== undefined) {
      if (
        nominationsArr[0].title === title &&
        nominationsArr[0].year === year
      ) {
        removeNomination(title, year)
      }
    } else {
      addNomination(title, year)
    }
  }

  useEffect(() => {
    if (nominations.length === 5) {
      alert('Nominated Five!')
    }
    localStorage.setItem('nominations', JSON.stringify(nominations))
  }, [nominations])

  return (
    <>
      <div className='form-nomination-container'>
        <div className='text-form-container'>
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
                      className={
                        movies.Search.length < 10 ? 'disabled' : 'next'
                      }
                      disabled={movies.Search.length < 10}
                      onClick={getNextPage}>
                      <BiRightArrow />
                    </button>
                  </div>
                )}
          </div>
        </div>

        <div className='nomination-container'>
          <h2 className='nomination-header'>Nomination List</h2>

          {nominations.map((nomination, i) => (
            <div key={i} className='nomination-box-container'>
              <div
                key={i}
                className={
                  nomination.title.length > 40
                    ? 'long-nomination-title'
                    : 'nomination'
                }>
                {`${i + 1}. ${nomination.title} (${nomination.year})`}
              </div>
              <AiOutlineClose
                className='close-icon'
                onClick={() =>
                  removeNomination(nomination.title, nomination.year)
                }
              />
            </div>
          ))}
        </div>
      </div>

      <div className='movies-container'>
        {skeleton ? (
          <MoviesSkeleton />
        ) : (
          movies.Search &&
          movies.Search.map((movie, i) => (
            <div className='movies' key={i}>
              <div className='movie-img-container'>
                <img
                  className={getActiveImg(movie.Title)}
                  src={movie.Poster !== 'N/A' ? movie.Poster : imageLink}
                  alt={movie.Title}
                />

                <MdGrade
                  className={getActiveStar(movie.Title)}
                  key={i}
                  onClick={() => getNominations(movie.Title, movie.Year)}
                />
              </div>
              <div className={movie.Title.length > 30 ? 'long-title' : 'title'}>
                {movie.Title}
              </div>
              <div className='year'>{movie.Year}</div>
            </div>
          ))
        )}
      </div>

      {movies.Error === 'Movie not found!' && (
        <div className='no-movie'>
          Movie not found. Please be more specific!
        </div>
      )}
      {movies.Error === 'Too many results.' && (
        <div className='too-many-movies'>
          Too many results. Please be more specific!
        </div>
      )}
    </>
  )
}

export default Movies
