import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[Herofont1] flex items-center justify-center gap-2'>
        <Link to={'/projects'} className='text-[6vw] leading-[5vw] border-3 border-white rounded-full px-7 pt-3 uppercase hover:border-lime-400 hover:text-lime-400'>Projects</Link>
        <Link to={'/agency'} className='text-[6vw] leading-[5vw] border-3 border-white rounded-full px-7 pt-3 uppercase hover:border-lime-400 hover:text-lime-400'>Agency</Link>
    </div>
  )
}

export default HomeBottomText