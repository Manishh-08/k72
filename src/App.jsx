import React, { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agency from './pages/Agency'
import Navbar from './components/navigation/Navbar'
import FullScreenNav from './components/navigation/FullScreenNav'

const App = () => {
  return (
    <div>
      <div className='text-white overflow-x-hidden'>
        <Navbar/>
        <FullScreenNav/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/agency' element={<Agency />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>
    </div>


  )
}

export default App