import React from 'react'
import style from "./Notfound.module.css"
import err from "../../assets/finalProject/404.png"
export default function Notfound() {
  return <>
  <h1 className='text-white text-5xl mt-8 text-center mb-11' >Not <span className='text-emerald-500'>Found?</span> </h1>
     <div className=''>
      <img src={err} alt="" />
     </div>
    
    
    
    
    </>
  
}