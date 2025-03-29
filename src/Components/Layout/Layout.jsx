import React from 'react'
import style from './Layout.module.css'
import MyNavbar from './../MyNavbar/MyNavbar';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return <>
 
  <MyNavbar/>

<div className="container my-24 mx-auto w-[90%]    py-20 lg:py-22 ">

  <Outlet/>
</div>

 
  
<Footer/>
  
  </>
   
  
}
