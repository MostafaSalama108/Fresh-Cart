import React, { useEffect, useState } from 'react'
import style from './SliderCategories.module.css'
import Slider from "react-slick";
import axios from 'axios'


export default function SliderCategories() {

  const [allCategory, setallCategory] = useState([])

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    autoplay : true,
    autoplaySpeed: 2000,
  };







async function Getcategories(){
   await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
   .then((res)=>{
 
    
    setallCategory(res.data.data)
    
   })

   .catch((err)=>err)
}



useEffect(()=>{
  Getcategories()
}, [])





  return <>
  <h2 className=' sm:mt-10 lg:mt-20 my-3 capitalize font-semibold sm:text-2xl text-md text-gray-300'>shop popular categories.</h2>
   <Slider {...settings}>
   {allCategory.map((category)=>
  <div key={category._id}>
    <img src={category.image} className='sm:w-full rounded-md   sm:rounded-md h-[150px] sm:h-[150px] px-1   lg:h-[250px]   object-cover ' alt="categories" />
     <div className='text-center mt-2 mb-5'><span className=' text-[10px] sm:text-sm   text-white'>{category.name.split(" ").slice(0 , 1 ).join(" ")}</span></div>
  </div>)}
   </Slider>


  
  </>
   
  
}
