/** @format */

import React from 'react'
import { RectShape } from 'react-placeholder/lib/placeholders'

function MoviesSkeleton() {
  return (
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
  )
}

export default MoviesSkeleton
