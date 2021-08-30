import React, { useState } from 'react'


export default function Filtre({search, setRate, newRate}) {
  // Catch Rating value
  const handleRating = (rate) => {
    setRate(rate)
    
  }

  return (
    <div className='filtre'>
      <br/> <br/>
        <input type="text" placeholder="Search for a movie" 
        onChange={(e) => search(e.target.value)}/>
      
    </div>
  )
}
