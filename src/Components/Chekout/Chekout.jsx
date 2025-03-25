import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { UserContext } from '../Context/UserContext/UserContext'
import { CartContext } from '../Context/CartContext/CartContext'






export default function Chekout() {

const [isLoding, setisLoding] = useState(false)

let {chekout , cartId} = useContext(CartContext)



let formik = useFormik({


  initialValues: {
   
    details: "",
    phone: "",
    city: "",
   
   
  },

  onSubmit:()=>handleChekout(cartId , `http://localhost:5173`)
})




async function handleChekout(cartId , url ){
  
 let {data} = await chekout(cartId , url , formik.values)
//  console.log(data.session.url);
 window.location.href = data.session.url
 


  }







  return <>
  <div className='border-2 border-emerald-500 shadow-emerald-700 shadow-lg  bg-slate-900 mx-auto mt-5 sm:w-[90%] rounded-xl lg:w-[40%] py-11'>
    
<h1 className='font-semibold text-white text-center text-4xl mt-3 mb-5' >Chekout <span className='text-emerald-500'>Now</span> </h1>

<form onSubmit={formik.handleSubmit} className="max-w-md mt-8 mx-auto">





  <div className="relative z-0 w-full mb-5 group">
    <input
     type="text"
     name="details"
     value={formik.values.details}
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
    id="details" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
    <label htmlFor="floating_email" className="peer-focus:font-medium  absolute left-0 text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Enter Your Details
    </label>

    {formik.errors.details && formik.touched.details  ? <div className="p-2 mb-4 text-md text-center  text-red-800 rounded-lg " role="alert">
  <span className="font-medium ">{formik.errors.details}</span> 
</div> : null}
  </div>

  

  <div className="relative z-0 w-full mb-5 group">
    <input
     type="tel"
      name="phone"
      value={formik.values.phone}
      onChange={formik.handleChange}
     onBlur={formik.handleBlur}
       id="phone" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white   focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
    <label htmlFor="floating_password" className="peer-focus:font-medium absolute left-0 text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Phone
    </label>

    {formik.errors.phone && formik.touched.phone  ? <div className="p-2 mb-4 text-md text-center  text-red-800 rounded-lg " role="alert">
  <span className="font-medium ">{formik.errors.phone}</span> 
</div> : null}
  </div>



  <div className="relative z-0 w-full mb-5 group">
    <input
     type="text"
      name="city"
      value={formik.values.city}
      onChange={formik.handleChange}
     onBlur={formik.handleBlur}
       id="city" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white   focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
    <label htmlFor="floating_password" className="peer-focus:font-medium absolute left-0 text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your City
    </label>

    {formik.errors.city && formik.touched.city  ? <div className="p-2 mb-4 text-md text-center  text-red-800 rounded-lg " role="alert">
  <span className="font-medium ">{formik.errors.city}</span> 
</div> : null}
  </div>









<div className='text-center mt-11 '>
<button type="submit" className="text-white cursor-pointer bg-emerald-700 px-11 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emborder-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto  py-2.5 text-center ">{isLoding ? <i className='fas fa-spinner fa-spin'></i> : "Submit" }</button>
</div>


  
</form>

  </div>

  
  </>
   
  
}
