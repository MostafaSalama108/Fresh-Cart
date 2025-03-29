import React, { useContext } from 'react'

import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Slider from "react-slick";
import "aos/dist/aos.css";
import Aos from 'aos'
import toast from "react-hot-toast";
import { CartContext } from '../Context/CartContext/CartContext'




export default function ProductDetails() {

const [getproduct, setgetproduct] = useState(null)
const [allProduct, setallProduct] = useState([])
let {id  , type} = useParams();

let {addCart , setnumItems , numItems} = useContext(CartContext)



  function getDetails(id){
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    .then((res)=>{
      setgetproduct(res?.data?.data)
    })
      
    

    .catch((err)=>err)
  }




function AllCategory(){

  axios.get(`https://ecommerce.routemisr.com/api/v1/products`)

  .then((res) => {
  
   let x = res.data.data.filter((product)=> product.category.name == type )
 
  
   
   setallProduct(x)
  
   
   

    } )


  }




  
  async function addProductToCart(id){
  

    let result = await addCart(id)




    if(result.data.status == "success") {
      setnumItems(numItems + 1)
      toast.success(result.data.message)
    
    }

    else{toast.error(result.data.message)
      
    }


    
  }




  useEffect(()=>{
    getDetails(id)
    AllCategory()
    Aos.init({duration:1000});
   
  } , [id , type ])








  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed : 1500,
  };



  return( <>

<div className='row id items-center' >



<div className='md:w-1/4 px-3 w-full '>
<Slider {...settings}>

{getproduct?.images?.map((src)=> <div key={src?._id}>
<img src={src} className='md:w-full md:p-0 sm:px-28 px-5 sm:py-6 py-6'/>
</div>)}


</Slider>
</div>



     <div className='md:w-3/4 w-full'>
     <h2 className='text-white px-10 mb-3  font-bold'>{getproduct?.title}</h2>
     <h4 className='text-slate-400 px-10 mb-10'>{getproduct?.description}</h4>
     <h4 className='text-emerald-600 px-10'>{getproduct?.category?.name}</h4>
     <div className='flex justify-between text-white'>
         <span className='px-10'>{getproduct?.price} EGP  </span>
         <span> <i className='fas fa-star text-yellow-300'></i>{getproduct?.ratingsAverage} </span>
        
   </div>
   <button onClick={()=>addProductToCart(id)} className='btn cursor-pointer  mt-5   '>Add To Cart</button>
     
     </div>



    </div>





<div className='row sm:p-11 p-11 lg:p-2'>

{allProduct?.map((product)=>
 <div key={product._id} className='w-full box  mb-10 lg:mt-16 sm:mt-10 mt-16 rounded-2xl  sm:w-1/2   lg:w-1/6 '>
<div data-aos="zoom-out-right">
 <div  className='product lg:p-4 sm:p-6 p-6 ' >
 <Link to= {`/productdetails/${product.id}/${product.category.name}`} >
        <img src={product?.imageCover} className='w-full rounded-3xl  p-3 img' alt="" />
        <h3 className=' text-emerald-600 mt-3'>{product?.category?.name}</h3>
        <span className='text-white'>{product?.title.split(" ").slice(0 , 2 ).join(" ")}</span>
    <div className='flex justify-between text-white'>
          <span>{product?.price} EGP  </span>
          <span> <i className='fas fa-star text-yellow-300' ></i>{product?.ratingsAverage} </span>
    </div>
 </Link>
         <button onClick={()=>addProductToCart(id)} className='btn cursor-pointer  mt-5'>Add To Cart</button>
   </div>
   </div>


    
 </div> )  }
  
</div>






    </>)}









  


  


  












     


  

