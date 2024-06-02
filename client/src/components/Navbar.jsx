import React from 'react'
import './compStyles/Navbar.css'
import { ABOUT_ROUTE, MAIN_ROUTE } from '../utils/consts'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="topnav">
        <div className='links'>
            <NavLink  to={MAIN_ROUTE}>Home</NavLink>
            <NavLink  to={ABOUT_ROUTE}>About</NavLink>
        </div>
    </div>
  )
}

export default Navbar
