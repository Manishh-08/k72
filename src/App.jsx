import React, { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agency from './pages/Agency'
import NavBar from './components/navigation/NavBar'
import FullScreenNav from './components/navigation/FullScreenNav'

const App = () => {
  return (
    <div>
      <div className='text-white overflow-x-hidden'>
        <NavBar/>
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