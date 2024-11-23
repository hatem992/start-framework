import React from 'react'
import Header from '../../components/Header/Header.jsx'

export default function Home() {
  return (
    <div className='bg-[#1ABC9C] py-16 text-center text-white'>
        <div className="container flex flex-col items-center">
            <img src="	https://routeegy.github.io/startFramework/assets/images/avataaars.svg" className='w-1/4 mb-3 ' alt="personal image" />
            <Header head="start Framework" styles="icon w-fit  my-4 mx-2 relative before:bg-[white] after:bg-[white] star-before star-after"/>
            <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
  )
}
