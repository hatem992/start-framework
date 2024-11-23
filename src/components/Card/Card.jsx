import React from 'react'
import { useState } from "react";
import { Button, Modal } from "flowbite-react";


export default function Card({imgInfo,id}) {

  let [images,setImages] = useState([
    {path: "https://routeegy.github.io/startFramework/assets/images/poert1.png" , id:1},
    {path: "https://routeegy.github.io/startFramework/assets/images/port2.png" , id:2},
    {path: "https://routeegy.github.io/startFramework/assets/images/port3.png" , id:3},
    {path: "https://routeegy.github.io/startFramework/assets/images/poert1.png" , id:4},
    {path: "https://routeegy.github.io/startFramework/assets/images/port2.png" , id:5},
    {path: "https://routeegy.github.io/startFramework/assets/images/port3.png", id:6}, 
])

const [openModal, setOpenModal] = useState(true);

  return (
    <>
    <div className="card sm:w-full md:w-1/2 lg:w-1/3  overflow-hidden ">
    <div className="inner relative group ">
        <img src={imgInfo} className=' w-full rounded-md cursor-pointer' alt="house" />
        <div>

        </div> 
        <div onClick={() => setOpenModal({id})} className="plus transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 flex absolute w-full h-full  justify-center items-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white bg-[#1abc9ce6] rounded-md cursor-pointer   ">
        <i class="fa-solid fa-plus text-7xl"></i>
        </div>
    </div>
    </div>

    {images.map((ele)=>{
      return  <Modal show={openModal=== ele.id} onClose={() => setOpenModal(false)}>  
      <img src={ele.path} alt="" />
    </Modal>
    })}
    
    </>
  )
}












