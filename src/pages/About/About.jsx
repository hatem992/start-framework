import React from 'react'
import Header from '../../components/Header/Header.jsx'
import AboutComponent from '../../components/About/AboutComponent.jsx'

export default function About() {
  return (
<>
<div className='h-screen w-full bg-[#1ABC9C] relative'>

    <div className=" w-3/4  flex justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

        <div className="aboutBody px-5 flex justify-center items-center flex-col text-white absolute top-1/2 -translate-y-1/2">

                <Header head="about component" className="text-white" styles="icon w-fit  my-4 mx-2 relative before:bg-[white] after:bg-[white] star-before star-after"/>
                <div className="content flex justify-between items-center gap-5">
                    <AboutComponent/>
                    <AboutComponent/>
                </div>

        </div>

    </div>

</div>



</>





  )
}
