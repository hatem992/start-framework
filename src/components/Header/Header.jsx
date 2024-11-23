import React from 'react'

export default function Header({head,styles}) {
  return (
    <>   
        <h1 className="font-bold text-5xl mb-2 ">{head}</h1>
        <div className="samble flex justify-center">
        <div className={styles}>
        <i class="fa-solid fa-star"></i>
        </div>
        </div>
    </>
  )
}

// icon w-fit  my-4 mx-2 relative before:bg-[{color}] star-before star-after