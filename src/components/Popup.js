/** @format */

import React, { useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/all'
import { imageLink } from '../utils/noPoster'
import axios from 'axios'

function Popup({ nominations }) {
  const [popup, setPopup] = useState(false)
  const [popupData, setPopupData] = useState([])
  const API_KEY = process.env.REACT_APP_API_KEY

  const closePopup = () => {
    setPopup(false)
  }

  useEffect(() => {
    if (nominations.length === 5) {
      Promise.all(
        nominations.map(async (nomination) => {
          const { data } = await axios.get(
            `https://www.omdbapi.com/?t=${nomination.title}&apikey=${API_KEY}`
          )
          return data
        })
      ).then((response) => {
        setPopupData(response)
      })

      setPopup(true)
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nominations])

  return popup ? (
    <div className='popup-container'>
      <div className='popup'>
        <div className='popup-header'>Here Are Your Five Nominees!</div>
        <div className='title-header-container'>
          <div className='t-title'>Title</div>
          <div className='t-year'>Year</div>
          <div className='t-rating'>iMDb Rating</div>
        </div>

        {popupData.map((p, i) => (
          <div key={i} className='popupdata-container'>
            <img
              src={p.Poster !== 'N/A' ? p.Poster : imageLink}
              alt={p.Title}
            />
            <div className='p-title'>{p.Title}</div>
            <div className='p-year'>{p.Year}</div>
            <div className='p-rating'>{p.imdbRating}</div>
          </div>
        ))}
        <AiOutlineClose className='pop-close-icon' onClick={closePopup} />
      </div>
    </div>
  ) : (
    ''
  )
}

export default Popup
