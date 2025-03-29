import React, { useContext, useEffect, useState } from 'react'
import style from "./Wishlist.module.css"


import toast from "react-hot-toast";
import { WishlistContext } from '../Context/WishlistContext/WishlistContext';
import { CartContext } from '../Context/CartContext/CartContext';


export default function Wishlist() {

  const [wishlistData, setwishlistData] = useState([])
  const [curentId, setcurentId] = useState(0)
  const [loading, setloading] = useState(false)


let {GetWishlist , RemoveWishlist , setwishlistCounter , wishlistCounter  } = useContext(WishlistContext)
let { addCart ,setnumItems , numItems } = useContext(CartContext)


  async function addProductToCart(id){
    setloading(true)
    setcurentId(id)
    let result = await addCart(id)



    if(result.data.status == "success") {
      toast.success(result.data.message)
      setloading(false)
      setnumItems(numItems + 1)
    }
    else{toast.error(result.data.message)
      setloading(false)
    }


    
  }






  async function DeleteWishlisst(id){
    setcurentId(id)
   let del = await RemoveWishlist(id)
  
   setwishlistData(del)
  
   if(del.data.status == "success") {
    toast.success(del.data.message)
    setwishlistCounter(wishlistCounter -=1)

    setwishlistData(wishlistData )
  
    
    
  }
  else{toast.error(del.data.message)
    
  }
  

}






async function getWishlist(){
 let {data} = await GetWishlist()
//  console.log(data.data);
 setwishlistData(data?.data)
 

 
}













useEffect(()=>{
  getWishlist()
} , [wishlistCounter])







  return <>
     <h1 className='text-white font-bold mt-6 text-center sm:text-5xl text-4xl mb-20'> MY <span><i className='fa-solid sm:text-4xl text-red-600 fa-heart'></i>
     </span> <span className='text-emerald-500'>WishList</span> </h1>




    { wishlistData?.length > 0 ? wishlistData?.map((wish)=><div className='lg:flex' key={wish._id}>



<div className=' lg:w-full flex'>

<div className=' sm:w-[20%] w-[30%] sm:me-6 me-6 lg:m-1' >  <img src={wish?.imageCover} className=' lg:w-full  lg:ms-1 mt-3 sm:ms-5 ms-5 ' alt="" /> </div>

<div className=' mt-5 ms-5 capitalize' > <span className='text-emerald-600 font-bold sm:text-xl '> {wish?.category?.name.split(" ").slice(0 , 2 ).join(" ")}</span>
      <p className='text-white font-bold mt-2 '> {wish?.price} EGP</p>
      <button onClick={()=>(DeleteWishlisst(wish?.id))} className='text-red-600 cursor-pointer mt-5 '> Remove<i className="fa-solid ms-2 cursor-pointer text-red-600 fa-trash-can"></i></button>
      </div>

</div>





<div className='lg:w-1/6 flex items-center justify-center sm:w-full '>
<div className='lg:w-full sm:w-[90%] w-full px-6  sm:mt-5 mt-14 mb-8'><button onClick={()=>addProductToCart(wish?.id)} className='btn cursor-pointer  p-5 '>
  {loading && curentId == wish.id ? <i className='fas fa-spinner fa-spin'></i>:"Add To Cart"}</button> </div>

</div>



     
    </div>) : <div className='text-red-600 sm:text-6xl text-3xl text-center mt-40'> Not Found Products </div>  }
    
    
    
    </>
  
}
