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
  <h2 className=' sm:mt-10 lg:mt-20 my-3 capitalize font-semibold text-2xl text-gray-300'>shop popular categories.</h2>
   <Slider {...settings}>
   {allCategory.map((category)=>
  <div key={category._id}>
    <img src={category.image} className='w-full p-1 rounded-lg sm:h-[150px] lg:h-[250px] object-cover   ' alt="categories" />
     <div className='text-center mt-3'><span className=' text-white'>{category.name}</span></div>
  </div>)}
   </Slider>


  
  </>
   
  
}
