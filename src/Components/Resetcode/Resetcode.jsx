import React from 'react'

import { useFormik } from 'formik'
import * as yup from "yup"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useState , useContext } from 'react'

import toast from 'react-hot-toast'
import { UserContext } from '../Context/UserContext/UserContext'






export default function Resetcode() {


let navigate = useNavigate()

  const [isspiner, setisspiner] = useState(false)

  // const [getEmail, setgetEmail] = useState(null)
let {Recetpassword} = useContext(UserContext)



 async function handlResetcode(code){
  setisspiner(true)
  let res = await Recetpassword(code)
console.log(res);


  if(res.data.status == "Success" ){
    toast.success("Mission Successflly")
    navigate("/Fresh-Cart/updatePassword")
  }

 else{
  toast.error(res.data.message)
 }



   }
    
    

    
   





let formik = useFormik({
  initialValues: {

    resetCode: "",
   
    
  
  },
  

  onSubmit: handlResetcode

  
})





  return <>
 

  <h1 className='text-center sm:text-5xl text-2xl mb-12 font-bold text-white capitalize mt-8' >Reset Your Account Password</h1>

    <div>




<form onSubmit={formik.handleSubmit} className="  max-w-md mx-auto">



<div className="relative z-0 w-full mb-5 group">
 <input type="text" 
 name="resetCode"
 id="resetCode"  
 value={formik.values.resetCode}
 onChange={formik.handleChange}
 onBlur={formik.handleBlur}
 className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />



 <label htmlFor="floating_resetCode" className="peer-focus:font-medium left-0 absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-white">Enter Your ResetCode</label>

 {formik.errors.resetCode && formik.touched.resetCode? (
   <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
   <span className="font-medium">{formik.errors.resetCode}</span> 
 </div>)  : null  }

</div>




<div className=' text-center mt-11 '>

<button  type="Login" className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none  focus:ring-emerald-300 font-medium rounded-lg text-sm  sm:w-auto px-11 py-2.5" > { isspiner ? <i className='fa fa-spinner fa-spin'></i> : "Virify"  } </button>

</div>




</form>

    </div>

  
    </>
  
}
