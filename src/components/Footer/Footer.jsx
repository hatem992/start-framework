import React from 'react'

export default function Footer() {
  return (
    <>
    <div className="footerMain flex flex-col items-center md:flex-row justify-between bg-[#2C3E50] py-32 text-white">
        <div className="location flex flex-col items-center w-1/3 px-3 mb-10 md:mb-0">
            <h2 className='text-3xl font-medium text-center'>LOCATION</h2>
            <h4 className='mb-2'>2215 John Daniel Drive</h4>
            <h4>Clark, MO 65243</h4>
        </div>

        <div className="socials w-1/3 flex flex-col items-center px-3 mb-10 md:mb-0">
        <h2 className='text-3xl font-medium mb-2 text-center'>AROUND THE WEB</h2>

        <div className="socialMedia flex  gap-3">
            <div className="socialIcon w-[40px] h-[40px] border-2 border-solid flex justify-center items-center rounded-full">
            <i class="fa-brands fa-facebook text-2xl"></i>
            </div>
            <div className="socialIcon w-[40px] h-[40px] border-2 border-solid flex justify-center items-center rounded-full">
            <i class="fa-brands fa-twitter text-2xl"></i>
            </div>
            <div className="socialIcon w-[40px] h-[40px] border-2 border-solid flex justify-center items-center rounded-full">
            <i class="fa-brands fa-linkedin-in text-2xl"></i>
            </div>
            <div className="socialIcon w-[40px] h-[40px] border-2 border-solid flex justify-center items-center rounded-full">
            <i class="fa-solid fa-globe text-2xl"></i>
            </div>
        </div>
        </div> 

        <div className="freelance w-1/3 flex flex-col items-center justify-center px-3 mb-10 md:mb-0">
        <h2 className='text-3xl font-medium mb-2 text-center'>ABOUT FREELANCER</h2>
        <p className="text-center" >Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
    </div>

    </>
  )
}
