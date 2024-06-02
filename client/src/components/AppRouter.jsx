import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../pages/Main'
import { routes } from '../routes'

const AppRouter = () => {
  return (
    <Routes>
        {routes.map(({path, Component}) => 
            <Route key={path} path={path} Component={Component}/>
        )}
        <Route key={'default'} path='*' Component={Main}/>
    </Routes>
  )
}

export default AppRouter
