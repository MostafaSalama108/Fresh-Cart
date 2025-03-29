import React from 'react'
import style from './SliderMain.module.css'
import Slider from "react-slick";
import slider1 from '../../assets/finalProject/images/slider-image-3.jpeg'
import slider2 from '../../assets/finalProject/images/slider-2.jpeg'
import slider3 from '../../assets/finalProject/images/slider-image-2.jpeg'
import slider4 from '../../assets/finalProject/images/slider-image-1.jpeg'
import slider5 from '../../assets/finalProject/images/slider-2.jpeg'
import slider6 from '../../assets/finalProject/images/grocery-banner-2.jpeg'
import slider33 from '../../assets/finalProject/images/slider-image-2.jpeg'
import slider44 from '../../assets/finalProject/images/slider-image-1.jpeg'

export default function SliderMain() {







  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true,
    autoplaySpeed: 2000,
    arrows: false
  };







  return <>
  <div className='row mb-8'>

  <div className='w-3/4'>
<Slider {...settings}>
<img src={slider1} className=' sm:w-full h-[200px] sm:h-[200px] sm:object-cover lg:w-full lg:h-[400px] lg:object-cover'   alt="FOOD" />
<img src={slider2} className=' sm:w-full h-[200px] sm:h-[200px] sm:object-cover lg:w-full lg:h-[400px] lg:object-cover'   alt="FOOD" />
<img src={slider3} className=' sm:w-full h-[200px] sm:h-[200px] sm:object-cover lg:w-full lg:h-[400px] lg:object-cover'   alt="FOOD" />
<img src={slider4} className=' sm:w-full h-[200px] sm:h-[200px] sm:object-cover lg:w-full lg:h-[400px] lg:object-cover'   alt="FOOD" />
<img src={slider5} className=' sm:w-full h-[200px] sm:h-[200px] sm:object-cover lg:w-full lg:h-[400px] lg:object-cover'   alt="FOOD" />
<img src={slider6} className=' sm:w-full h-[200px] sm:h-[200px] sm:object-cover lg:w-full lg:h-[400px] lg:object-cover'   alt="FOOD" />
</Slider>
</div>


  <div className='w-1/4' >
<img src={slider33} className=' w-full h-[100px] sm:object-cover lg:w-full lg:h-[200px] lg:object-cover '   alt="FOOD" />
<img src={slider44} className=' w-full h-[100px] sm:object-cover lg:w-full lg:h-[200px] lg:object-cover ' alt="FOOD" />
</div>
  </div>
  


  </>
   
  
}
