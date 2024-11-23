import React from 'react'
import Contact from '../../components/Contact/Contact.jsx'
import Header from '../../components/Header/Header.jsx'

export default function Contacts() {
  return (
    <>
    <div className="container flex items-center flex-col py-20 ">

    <Header head="conatct section" className="text-[#2C3E50]" styles="icon w-fit  my-4 mx-2 relative before:bg-[#2C3E50] after:bg-[#2C3E50] star-before star-after"/>
    <Contact/>

    </div>

    </>
  )
}
