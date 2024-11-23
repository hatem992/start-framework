import React from 'react'
import notFound from "../../assets/notFoung.svg";

export default function Error404() {
  return (
    <div className='flex justify-center items-center p-20'>
        <img src={notFound} className='' alt="error page not found" />
    </div>
  )
}
