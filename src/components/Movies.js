/** @format */

import React from 'react'
import { RectShape } from 'react-placeholder/lib/placeholders'
import { imageLink } from '../utils/noPoster'

function Movies({ movies, skeleton }) {
  return (
    <>
      <div className='movies-container'>
        {skeleton ? (
          <>
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className='skeleon-container'>
                <RectShape
                  showLoadingAnimation={true}
                  color='#272f41'
                  style={{ width: 320, height: 400, marginBottom: '10px' }}
                />
                <RectShape
                  showLoadingAnimation={true}
                  color='#272f41'
                  style={{ width: 100, height: 20, marginBottom: '10px' }}
                />
                <RectShape
                  showLoadingAnimation={true}
                  color='#272f41'
                  style={{ width: 50, height: 20, marginBottom: '10px' }}
                />
              </div>
            ))}
          </>
        ) : (
          movies.Search &&
          movies.Search.map((movie, i) => (
            <div className='movies' key={i}>
              <div>
                <img
                  className='movie-img'
                  src={movie.Poster !== 'N/A' ? movie.Poster : imageLink}
                  alt={movie.title}
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
