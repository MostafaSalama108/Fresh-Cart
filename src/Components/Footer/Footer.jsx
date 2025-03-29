import React from 'react'
import style from "./Footer.module.css"
import { Link } from 'react-router-dom';

export default function Footer() {


  return <>



  

<div className=" bg-slate-400 sm:p-4 p-1  static mt-3 bottom-0 right-0 left-0 ">
            <ul className='flex justify-center items-center px-10 mt-3  mb-3 gap-6 text-xl text-slate-800 '>
           <Link to={"https://www.facebook.com/share/1Cv1SSJk87/"}><li><i className=" hover:text-emerald-600 cursor-pointer fa-brands fa-facebook"></i></li></Link>   
             <Link to={"https://www.instagram.com/mostafa_slama10?igsh=cDQ3eHBua3FveTRk"}><li><i className=" hover:text-emerald-600 cursor-pointer fa-brands fa-instagram"></i></li></Link> 
              <li><i className="hover:text-emerald-600 cursor-pointer fa-brands fa-tiktok"></i></li>
              <li><i className="hover:text-emerald-600 cursor-pointer fa-brands fa-twitter"></i></li>
             <Link to={"https://www.linkedin.com/in/mostafa-salama-01144a222"}><li><i className="hover:text-emerald-600 cursor-pointer fa-brands fa-linkedin"></i></li></Link> 
              <li><i className="hover:text-emerald-600 cursor-pointer fa-brands fa-youtube"></i></li>
             
            </ul>
         


    <p className=" text-slate-800 font-bold text-xs lg:text-lg mt-6 text-center ">© 2025 Flowbite™ is a registered trademark. All Rights Reserved.</p>
             </div>



    
    
    
    
    </>
  
}
