import React, { useEffect, useState } from 'react'
import style from "./Brands.module.css"
import axios from 'axios'
import "aos/dist/aos.css";
import Aos from 'aos'


export default function Brands() {

 

  const [allBrands, setallBrands] = useState([])



  

async function getBrands(){

  // setloading(true)
 await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)

  .then((res)=> {
    setallBrands(res.data.data)
    return res
  } 
  )
  .catch((res)=>res)

}







useEffect(()=>{
  getBrands()
  Aos.init({duration : 1000})
},[])



  return <>
     <h1 className='text-white text-5xl mt-8 text-center mb-11' >ALL <span className='text-emerald-500'>Brands</span> </h1>

     <div className='row'>
       
    {  allBrands.length > 0 ? allBrands?.map((brand)=> <div key={brand._id} className='w-full   sm:w-1/2 sm:px-6 sm:mb-5 md:w-1/2 lg:w-1/6 px-4 mb-5' >

    <div data-aos="zoom-out-right">
    <img src={brand?.image} className='w-full mt-5 rounded-full box' alt="brands" />
    <p className='text-emerald-600 mb-5 font-bold text-center  mt-2 text-2xl'>{brand?.name}</p>
    
    </div>
   
    </div>
  
  ) : <div className="spinner"></div> }
     </div>
   
    
    
    
    </>
  
}
