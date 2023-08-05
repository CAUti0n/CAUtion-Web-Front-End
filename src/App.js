import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Pages
import Home from './Pages/Home/Home'
import Management from './Pages/Management/Management'
import Study from './Pages/Study/Study'
import Activity from './Pages/Activity/Activity'

// Components
import './App.css'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/management' element={<Management/>}/>

        <Route path='/study' element={<Study />} />
        <Route path='/activity' element={<Activity />} />
    </Routes>
  )
}

export default App
