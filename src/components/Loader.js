/** @format */

import React from 'react'
var Spinner = require('react-spinkit')

function Loader() {
  return (
    <Spinner
      style={{
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto 0',
      }}
      name='three-bounce'
      color='white'
    />
  )
}

export default Loader
