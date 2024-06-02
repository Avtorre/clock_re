import React from 'react'
import Tasks from './Tasks'
import Alarm from './Alarm'
import './compStyles/ToDos.css'

const ToDos = () => {
  return (
    <div className='to-dos'>
      <Tasks/>
      <Alarm/>
    </div>
  )
}

export default ToDos
