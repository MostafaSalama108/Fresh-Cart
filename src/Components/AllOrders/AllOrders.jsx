import React, { useContext, useEffect, useState } from 'react'
import style from './AllOrders.module.css'
import { CartContext } from '../Context/CartContext/CartContext'
import axios from 'axios'


export default function AllOrders() {
  let {cartId } = useContext(CartContext)
  let headers = {token :localStorage.getItem("token")}
  
  
  const [orders, setorders] = useState([])
  
  
  
  
  async function getAllorders(){

 let res =   await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/` )

 setorders(res.data.data)

  
   }



useEffect(()=>{
  getAllorders()
} , [])






  return <>
  
  <h1 className='font-semibold text-white text-center text-4xl mt-3 mb-5' >ALL<span className='text-emerald-500'>Orders</span> </h1>
<div className='row sm:p-11 p-11 lg:p-2'>

  { orders.length > 0 ? orders?.map((item)=> <div key={item._id} className='w-full box  mb-10 lg:mt-16 sm:mt-5 rounded-2xl  sm:w-1/2   lg:w-1/6'>

  <div  className='product lg:p-6 sm:p-8 p-8  ' >
    
  <img src={item?.cartItems[0]?.product?.imageCover} className='w-full mt-3 sm:rounded-md  img  lg:px-0' alt="" />
    <p className='text-amber-400 mt-5 '>{item?.cartItems[0]?.product?.title.split(" ").slice(0 , 2 ).join(" ")}</p>
    <p className='text-white'>{item.cartItems[0]?.price} EGP </p>
    
     </div>

    
     </div>) : <div className="spinner"></div> }

    </div>

  
  </>
   
  
}
