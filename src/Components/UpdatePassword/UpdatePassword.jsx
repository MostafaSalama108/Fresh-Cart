import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
import { Link, useNavigate } from 'react-router-dom'
import { useState , useContext } from 'react'
import toast from 'react-hot-toast'
import { UserContext } from '../Context/UserContext/UserContext'





export default function UpdatePassword() {

 let {Upgardpassword} = useContext(UserContext)

  const [isspiner, setisspiner] = useState(false)



  let navigate = useNavigate()






 async function handlUpdattePassword(data){
  setisspiner(true)

  let res = await Upgardpassword(data)

 
 
  if(res.statusText == "OK"){
 navigate("/Fresh-Cart/Login")
 toast.success("Updated Password Successfully")
  }

  else{
    toast.error("Faild Updated Password")

  }
  




  
}

let validationSchema = yup.object().shape({
  
  email: yup.string().email("not valid email").required("email is required"),

  newPassword: yup.string().required("password is required").min(8 , "passwoed min length is 8"),

})


let formik = useFormik({
  initialValues: {

    email: "",
    newPassword: "",
  
  },
  validationSchema,
  onSubmit: handlUpdattePassword

})



  return <>

  <h1 className='text-center sm:text-5xl text-2xl mb-12 font-bold mt-8 text-white capitalize' >Reset Your New  Password</h1>

    <div>

  

   



<form onSubmit={formik.handleSubmit} className="  max-w-md mx-auto">



<div className="relative z-0 w-full mb-5 group">
 <input type="email" 
 name="email"
 id="email"  
 value={formik.values.email}
 onChange={formik.handleChange}
 onBlur={formik.handleBlur}
 className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />



 <label htmlFor="floating_email" className="peer-focus:font-medium left-0 absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-white">UserEmail
 </label>

 {formik.errors.email && formik.touched.email ? (
   <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
   <span className="font-medium">{formik.errors.email}</span> 
 </div>)  : null  }

</div>









<div className="relative z-0 w-full mb-5 group">
 <input type="password" 
 name="newPassword"
 id="newPassword"  
 value={formik.values.newPassword}
 onChange={formik.handleChange}
 onBlur={formik.handleBlur}
 className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />



 <label htmlFor="floating_newPassword" className="peer-focus:font-medium left-0 absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-white">newPassword</label>

   {formik.errors.newPassword && formik.touched.newPassword ? (
     <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
     <span className="font-medium">{formik.errors.newPassword}</span> 
   </div>)  : null }


</div>


<div className=' text-center mt-11 '>

<button  type="Login" className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none  focus:ring-emerald-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5" > { isspiner ? <i className='fa fa-spinner fa-spin'></i> : "Recet Password"  } </button>

</div>


</form>

    </div>

  
    </>
  
}
