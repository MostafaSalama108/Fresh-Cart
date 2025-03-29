import React, { useEffect, useState } from 'react'
import style from "./Categories.module.css"
import axios from 'axios'

export default function Categories() {

const [allCategories, setallCategories] = useState([])

async function getAllcategories(){
 await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  .then((res)=>{
    setallCategories(res.data.data)
    
  })
  .catch((err)=>err)
}



useEffect(()=>{
  getAllcategories()
},[])











  return <>
   
    <div className='row' >

    { allCategories.length > 0 ? allCategories?.map((category)=> <div className='lg:w-1/5 sm:w-full  sm:p-28 p-12  md:w-1/2  md:p-7    ' key={category._id}>
      <img src={category.image} className=' sm:w-full box rounded-md   md:w-[300px] md:h-[300px]' alt="" />
      <p className='text-emerald-600 text-center mt-10 font-bold text-2xl'>{category.name}</p>
    </div>) : <div className="spinner"></div> }
    </div>
    
    

    
    
    </>
  
}
