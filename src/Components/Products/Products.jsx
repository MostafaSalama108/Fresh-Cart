import React, { useContext } from 'react'
import style from "./Products.module.css"
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import "aos/dist/aos.css";
import Aos from 'aos'
import { CartContext } from '../Context/CartContext/CartContext'
import { WishlistContext } from '../Context/WishlistContext/WishlistContext'
// import toast from 'react-hot-toast'
// import { useQuery } from '@tanstack/react-query'
// import useProduct from '../Hooks/useProduct'
import toast from 'react-hot-toast';








export default function Products() {



  let { addCart ,setnumItems , numItems } = useContext(CartContext)
  let {AddWishlist } = useContext(WishlistContext)
   const [curentId, setcurentId] = useState(0)

  const [loading, setloading] = useState(false)

const [products, setproducts] = useState([])

async function getProducts(){
 await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  .then((res)=> {
    // console.log(res.data.data);
    setproducts(res.data.data)
  })

  .catch((err)=>err)
}


useEffect(()=>{
  getProducts()
  Aos.init({duration:1000});
} , [])



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
  



  

async function AddWishlisst(id){
  setcurentId(id)
 let x = await AddWishlist(id)


 
 if(x.data.status == "success") {
  toast.success(x.data.message)
  setloading(false)
 
}
else{toast.error(x.data.message)
  setloading(false)
}

 
}













  return <>


<div className='row sm:p-11 p-11 lg:p-2'>

{products.length > 0 ?  products?.map((product)=>
<div key={product.id} className='w-full box  mb-10 lg:mt-16 sm:mt-5 rounded-2xl  sm:w-1/2   lg:w-1/6'>
<div data-aos="zoom-out-right">
<div  className='product lg:p-6 sm:p-8 p-8  ' >
<Link to= {`/productdetails/${product.id}/${product.category.name}`} >
        <img src={product?.imageCover} className=' w-full mt-3 sm:rounded-md  img  lg:px-0   ' alt="" />
        <h3 className=' text-emerald-600 mt-5'>{product?.category?.name}</h3>
        <div>
        <span className='text-white '>{product?.title.split(" ").slice(0 , 2 ).join(" ")} </span>
        </div>
        
    <div className='flex justify-between text-white'>
          <span>{product?.price} EGP  </span>
          <span> <i className='fas fa-star text-yellow-300' ></i>{product?.ratingsAverage} </span>
    </div>
   
</Link>
        <button onClick={()=>addProductToCart(product.id)} className='btn mt-5 font-semibold cursor-pointer'> Add To Cart {loading && curentId == product.id ? <i className='fas fa-spinner fa-spin'></i>:  <i className="fa-solid text-xl ms-5 fa-cart-shopping"></i>} </button>
        <button onClick={()=>AddWishlisst(product.id)} className='btn2 mt-3  font-bold cursor-pointer '> Add To Wishlist <i className="fa-solid text-xl  text-white  fa-heart "></i></button>
        </div>
        </div>


</div> ) : <div className="spinner"></div> }


  </div> 

    </>
  
}















