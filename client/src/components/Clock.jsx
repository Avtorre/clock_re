import React, { useState } from 'react'
import './compStyles/Clock.css'

const Clock = () => {
  const [time, setTime] = useState('- - : - - : - -')
  const getTime = () => {
    setTime(new Date().toLocaleTimeString())
  }
  setInterval(getTime, 1000)
  return (
    <div className='clock'>
      {time}
    </div>
  )
}

export default Clock
