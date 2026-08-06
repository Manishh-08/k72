import React from 'react'
import Video from './Video'

const HomeTopText = () => {
    return (
        <div className='font-[HeroFont2] pt-5 text-center'>
            <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[9.5vw]'>L'étincelle</div>
            <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[9.5vw]'>
                qui
                <div className='h-[8vw] w-[16vw] -mt-3 rounded-full overflow-hidden'>
                    <Video/>
                </div>
                génère
                </div>
            <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[9.5vw]'>la créativité</div>
        </div>
    )
}

export default HomeTopText