import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agency from './pages/Agency'

const App = () => {
  return (
    <div className='text-white'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/agency' element={<Agency/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </div>

  )
}

export default App