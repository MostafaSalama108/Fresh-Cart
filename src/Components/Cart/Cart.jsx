import React, { useContext, useEffect } from 'react'
import style from "./Cart.module.css"
import Products from '../Products/Products'

import { useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext/CartContext'







export default function Cart() {

  const [cartDetiels, setcartDetiels] = useState(null)

let {getLoggedUserCart , updateProductCart, deleteProduct , setnumItems , numItems } = useContext(CartContext)


async function getCart(){
 let result = await getLoggedUserCart()



if(result?.data?.status == "success"){
  setcartDetiels(result?.data?.data)
 
  
}

}


async function updateCart(id , num){
 let res = await updateProductCart(id , num )
if(res.data.status == "success"){
  setcartDetiels(res.data.data)
  
  toast.success("Mission Succesfully")
}
else{
  toast.error("Mission Filld")

}

 
}






async function deleteCart(cartId){

 let result = await deleteProduct(cartId)

 
 
 setcartDetiels(result.data.data)

 
 if(result.data.status == "success"){
  setcartDetiels(result.data.data)
  setnumItems(numItems - 1)
  toast.success("Product Deleted Succesfully to cart")
}
else{
  toast.error("Mission Filld")

}

 
}



useEffect(()=>{
  getCart()

} , [])



  return <>

  {cartDetiels?.products.length > 0 ? <>
    <div className='py-5 text-center mt-8'>
<h2 className='text-emerald-600 sm:text-3xl text-md font-bold'> <span className='text-red-600 font-bold text-md sm:text-3xl' >Total Cart Price:</span> {cartDetiels?.totalCartPrice} EGP</h2>
</div>
  
<div className="relative overflow-x-auto shadow-md sm:rounded-lg rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-50 dark:text-gray-400">
    <thead className="text-xs  uppercase  bg-gray-700 text-gray-300">

      <tr>
        <th scope="col" className="px-10 sm:px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="sm:px-6 px-6 sm:py-3 py-3">
          Product
        </th>
        <th scope="col" className="sm:px-10 px-10 sm:py-3 py-3">
          Qty
        </th>
        <th scope="col" className="sm:px-6 px-6 sm:py-3 py-3">
          Price
        </th>
        <th scope="col" className="sm:px-6 px-6 sm:py-3 py-3">
          Action
        </th>
      </tr>
    </thead>


    <tbody>

    {cartDetiels?.products?.map((product)=>
       <tr key={product.product._id} className=" border-b bg-gray-800 border-gray-600  hover:bg-gray-600">
        <td className="sm:p-3 p-2">
          <img src={product?.product?.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Woman Shawl" />
        </td>

        <td className="px-1 py-4 font-semibold text-white">
        {product?.product?.title.split(" ").slice(0 , 2 ).join(" ")}
        </td>


        <td className="px-6 py-4">
          <div className="flex items-center">
            
            <button onClick={()=>updateCart(product.product._id , product.count- 1)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-bold  h-6 w-6 text-gray-50 bg-gray-800 border rounded-full focus:outline-none hover:bg-gray-700 focus:ring-4  dark:bg-gray-800 dark:text-gray-400 border-gray-600  focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
              </svg>
            </button>


            <div>
              <span>{product?.count}</span>
            </div>
            <button onClick={()=>updateCart(product.product._id , product.count+ 1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-50 bg-gray-800 border border-gray-600 rounded-full focus:outline-none hover:bg-gray-700 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
              </svg>
            </button>
          </div>
        </td>


        <td className="px-6 py-4 font-semibold  text-white">
          {product.price} EGP
        </td>

        <td className="px-6 py-4">
          <button onClick={()=>deleteCart(product.product._id)} className=" cursor-pointer text-red-600 dark:text-red-500  hover:underline font-bold"> <i className="fa-solid text-red-600 fa-trash-can text-lg sm:text-2xl"></i> </button>
        </td>

      </tr> )}

      

    </tbody>
  </table>

</div>
<Link to={"/Fresh-Cart/chekout"}>  <button className='w-full text-white mt-8 bg-emerald-600 rounded-md cursor-pointer font-bold py-2 '>Chekout</button></Link>


</> :  <h2 className='text-red-700 font-bold text-center mt-24 sm:text-6xl text-3xl  py-24'>  Not Found Products</h2> }




    </>
}










