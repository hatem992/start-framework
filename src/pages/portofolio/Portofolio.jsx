import React from 'react'
import Card from '../../components/Card/Card.jsx'
import Header from '../../components/Header/Header.jsx'
import { Button, Modal } from "flowbite-react";
import { useState } from "react";


export default function () {


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
    <div className="container flex items-center flex-col py-20 ">

    <Header head="portfolio component" className="text-[#2C3E50]" styles="icon w-fit  my-4 mx-2 relative before:bg-[#2C3E50] after:bg-[#2C3E50] star-before star-after"/>
    <div className="cards flex flex-wrap">

      {images.map((ele)=>{
       return <Card imgInfo={ele.path} id={ele.id}/>
      })}

    </div>
    

    {images.map((ele)=>{
      return  <Modal show={openModal=== ele.id} onClose={() => setOpenModal(false)}>  
      <img src={ele.path} alt="" />
    </Modal>
    })}

</div>
    </>
  )
}
