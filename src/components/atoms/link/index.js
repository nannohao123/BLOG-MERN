import React from 'react'
import './link.scss'

function Link({tittle, onClick}) {
  return (
    <p className='link' onClick={onClick}>{tittle}</p>
  )
}

export default Link
