

import React, { useContext , useState } from 'react'
import logo from "../../assets/finalProject/images/freshcart-logo.svg"
import {  useNavigate } from 'react-router-dom'




import { Navbar } from "flowbite-react";
import { Link } from 'react-router-dom';
import { UserContext } from './../Context/UserContext/UserContext';
import { CartContext } from './../Context/CartContext/CartContext';

export default  function MyNavbar() {

let {UserLogin , setUserLogin} = useContext(UserContext)
  let {numItems , setnumItems } = useContext(CartContext)
  let  navigate = useNavigate()

  function handilSinout(){
    localStorage.removeItem("token")
    setUserLogin(null)
    navigate("/login")
  }

















  return  <>
    <Navbar className="bg-slate-400 fixed z-20  top-0 left-0 right-0 " >
      <Navbar.Brand as={Link} href="">
        <img src={logo} className="lg:mr-3 sm:mr-52 h-6 sm:h-9" alt="Flowbite React Logo" />
      </Navbar.Brand>


      {UserLogin != null ?
 <div className='flex'>
  <div className='lg:hidden flex justify-center mt-2 items-center gap-24'>
<div><Link to="cart"> <i className="fa-solid fa-cart-shopping text-2xl box3 cursor-pointer mt-2 relative"> <div className='bg-emerald-700 text-white  absolute top-[-18px] right-[-15px] size-5 p-3  text-sm rounded-full flex justify-center items-center '>{numItems}
        </div></i> </Link></div>   
</div>
<div> <Navbar.Toggle className='ms-11' /></div>
   
</div> :null }








  
      <div className='lg:hidden'>
         {UserLogin != null ? <span onClick={handilSinout} className='cursor-pointer hover:text-red-600 text-sm '><i className="fa-solid text-lg fa-right-from-bracket"></i> log out  </span>  :
             <ul className='flex gap-4'>
               <li><Link to="login"> <span className='font-bold hover:text-emerald-600'>Login <i className="fa-solid text-lg fa-right-to-bracket fa-flip-horizontal"></i></span> </Link></li>
               <li><Link to="register"><span className='font-bold hover:text-yellow-500'>Register <i className="fa-solid fa-pen-to-square text-lg"></i></span></Link></li>
             
            </ul>}

            
           
           </div>






        
           {UserLogin != null ? <div className=' sm:w-full lg:w-auto lg:flex lg:justify-center lg:items-center lg:gap-40'>
<Navbar.Collapse>
        <Navbar.Link className='focus:border-b-2 focus:border-black ' as={Link} to="" > <span className= 'text-slate-800 font-bold text-md hover:text-emerald-600 '>Home</span> </Navbar.Link>
        <Navbar.Link className='focus:border-b-2 focus:border-black' as={Link} to="cart" ><span className=' text-slate-800 font-bold text-md hover:text-emerald-600'>Cart</span> </Navbar.Link>
        <Navbar.Link className='focus:border-b-2 focus:border-black' as={Link} to="products" > <span className='text-slate-800 font-bold text-md hover:text-emerald-600'>Products</span></Navbar.Link>
        <Navbar.Link className='focus:border-b-2 focus:border-black' as={Link} to="categories"  ><span className='text-slate-800 font-bold text-md hover:text-emerald-600'>Categories</span></Navbar.Link>
        <Navbar.Link className='focus:border-b-2 focus:border-black' as={Link} to="wishList" ><span className='text-slate-800 font-bold text-md hover:text-emerald-600'>WishList</span></Navbar.Link>
        <Navbar.Link className='focus:border-b-2 focus:border-black' as={Link} to="brands" ><span className='text-slate-800 font-bold text-md hover:text-emerald-600'>Brands</span></Navbar.Link>

        </Navbar.Collapse>
  

<div className='sm:hidden lg:inline  mt-2'><Link to="cart"> <i className="fa-solid fa-cart-shopping text-2xl box3  cursor-pointer mt-2 relative"> <div className='bg-emerald-700 text-white  absolute top-[-18px] right-[-15px] size-5 p-3  text-sm rounded-full flex 
justify-center items-center '>{numItems}
  </div></i> </Link>

    </div> 
    
     </div> :null }









  <div className='sm:hidden lg:inline'>
         {UserLogin != null ? <span onClick={handilSinout} className='cursor-pointer  hover:text-red-600'><i className="fa-solid text-lg fa-right-from-bracket"></i> log out </span>  :
             <ul className='flex gap-4'>
              <li><Link to="login"> <span className='font-bold hover:text-emerald-600'>Login <i className="fa-solid text-lg fa-right-to-bracket fa-flip-horizontal"></i></span> </Link></li>
              <li><Link to="register"><span className='font-bold hover:text-yellow-500'>Register <i className="fa-solid fa-pen-to-square text-lg"></i></span></Link></li>
             
    
            </ul>}

            
           
           </div>
           




    

    </Navbar>
 </>
}








