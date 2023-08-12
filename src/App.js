import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Pages
import Home from './Pages/Home/Home'
import Management from './Pages/Management/Management'
import About from './Pages/About/About'
import Study from './Pages/Study/Study'
import Activity from './Pages/Activity/Activity'

import ActivityPage1 from "./Pages/Activity/page1";
import ActivityPage2 from "./Pages/Activity/page2";
import ActivityPage3 from "./Pages/Activity/page3";

// Components
import './App.css'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/management' element={<Management/>}/>
        <Route path='/study' element={<Study />} />
        <Route path='/activity/*' element={<Activity />}/>
        <Route path="/activity/page1" element={<ActivityPage1 />} />
        <Route path="/activity/page2" element={<ActivityPage2 />} />
        <Route path="/activity/page3" element={<ActivityPage3 />} />
    </Routes>
  )
}

export default App
