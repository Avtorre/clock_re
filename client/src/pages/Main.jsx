import React from 'react'
import './pageStyles/Main.css'
import Posts from '../components/Posts'
import Clock from '../components/Clock'
import Tasks from '../components/Tasks'
import Alarm from '../components/Alarm'
import ToDos from '../components/ToDos'

const Main = () => {
  return (
    <div className="App">
        <Posts/>
        <Clock/>
        <ToDos/>
    </div>
  )
}

export default Main
