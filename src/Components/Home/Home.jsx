import React from 'react'
import style from './Home.module.css'
import RecentProducts from './../RecentProducts/RecentProducts';
import SliderCategories from '../SliderCategories/SliderCategories';
import SliderMain from '../SliderMain/SliderMain';



export default function Home() {
  return <>
  <SliderMain/>
  <SliderCategories/>
<RecentProducts/>
  
  </>
   
  
}
