import React from 'react'

export default function Contact() {
  return (
    <>
    <div className=" w-full">
        <form className=" w-[80%] flex  flex-col items-center mx-auto ">
            <div className="main w-full flex  flex-col items-center">
            <div class="relative z-0 mb-6  w-full md:w-2/3">
                <input type="text" id="userName" class="block py-2.5 px-0 w-full  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer" placeholder="" />
                <label for="userName" class="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#42C8AD] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">userName</label>
            </div>

            <div className="relative z-0 mb-6  w-full md:w-2/3">
                <input type="email" id="email" class="block py-2.5 px-0 w-full  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer" placeholder="" />
                <label for="email" class="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#42C8AD] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">userEmail</label>
            </div>

            <div className="relative z-0 mb-6  w-full md:w-2/3">
                <input type="number" id="userAge" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer" placeholder="" />
                <label for="userAge" class="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#42C8AD] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">userAge</label>
            </div>

            <div className="relative z-0 mb-6  w-full md:w-2/3">
                <input type="password" id="userPassword" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer" placeholder="" />
                <label for="userPassword" class="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#42C8AD] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">userPassword</label>
            </div>

            <div className="relative z-0 mb-3  w-full md:w-2/3">
            <button type='button' className='mt-4 outline-none bg-[#1ABC9C] px-3 py-2 w-[100px] text-white rounded-sm '>Submit</button>

            </div>


            </div>
        </form>
    </div>

    </>
  )
}
