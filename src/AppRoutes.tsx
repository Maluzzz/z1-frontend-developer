import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { PhotoView } from './container/PhotoView'
import { HomeView } from './container/HomeView'

import './App.css'

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/take-photo' element={<PhotoView />} />
    </Routes>
  )
}

export default AppRoutes
