import React, { useContext, useState } from 'react'
import style from './Register.module.css'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

import { UserContext } from '../Context/UserContext/UserContext'
import toast from 'react-hot-toast'




export default function Register() {

let navigate = useNavigate()
const [apiErr, setapiErr] = useState("")
const [isLoding, setisLoding] = useState(false)
let {UserLogin , setUserLogin} = useContext(UserContext)


 async function handleRegister(values){
  setisLoding(true)
    // api
   await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup` , values)
   .then((res)=>{
    if(res.data.message =="success" ){
      // localStorage.setItem("token" , res.data.token )
      // setUserLogin(res.data.token)
      setisLoding(false)
      navigate('/Fresh-Cart/login')
      toast.success("Rigester Successfully")
    }
    
   })

   .catch((err)=>{
     setisLoding(false)
   setapiErr(err.response.data.message)
    
   })
    
  }



  let validationSchema = yup.object().shape({
    name: yup.string().min(3 , "min length is 3-char").max(10 , "max length is 10-char").required("User Name is required"),
    email: yup.string().email("not valid email").required("email is required"),
    password: yup.string().required("password is required").min(8 , "password min length is 8").max(15 ,"password max length is 15" ),
    rePassword: yup.string().required("rePassword is required").oneOf([yup.ref("password")] , "not match whith password " ),
    phone: yup.string().required("phone is required").matches(/^01[1025][0-9]{8}$/ , "phone not valid")
  })


let formik = useFormik({


  initialValues: {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
  },
  validationSchema,
  onSubmit:handleRegister
})












  return <>
  
{apiErr ?   <div className='w-1/2 mx-auto bg-red-600 text-white font-bold text-center rounded-lg p-2'>
  {apiErr}
  </div> : null}
  

<div className='border-2 border-emerald-500 shadow-emerald-700 bg-slate-900  rounded-xl shadow-lg mx-auto mt-5 w-[95%] lg:w-[50%] py-11 '>


<h1 className='font-semibold text-white text-center text-4xl mt-3 mb-5' >Register <span className='text-emerald-500'>Now</span> </h1>



<form onSubmit={formik.handleSubmit} className="max-w-md mt-8 mx-auto">


  

  <div className="relative z-0 w-full sm:px-3 px-4 mb-5 group">
    <input
     type="text" 
     name="name"
     value={formik.values.name}
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     id="name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
    <label htmlFor="floating_Name" className="peer-focus:font-medium left-0 absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 px-4 sm:px-2 ">User Name
    <span className='sm:ms-72'>    <i className="fa-solid text-xl sm:ms-10 ms-40 text-slate-400 fa-user"></i>   </span> </label>

  {formik.errors.name && formik.touched.name ? <div className="p-2 mb-4 text-md text-center  text-red-800 rounded-lg " role="alert">
  <span className="font-medium ">{formik.errors.name}</span> 
</div> : null}
  </div>



  <div className="relative z-0 w-full sm:px-3 px-4 mb-5 group">
    <input
     type="email"
     name="email"
     value={formik.values.email}
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
    id="email" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
    <label htmlFor="floating_email" className="peer-focus:font-medium  absolute left-0 text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 px-4 sm:px-2 ">Email Address
    <span className='sm:ms-72'>    <i className="fa-solid text-xl text-slate-400 sm:ms-6 ms-36 fa-at"></i>   </span> </label>

    {formik.errors.email && formik.touched.email  ? <div className="p-2 mb-4 text-md text-center  text-red-800 rounded-lg " role="alert">
  <span className="font-medium ">{formik.errors.email}</span> 
</div> : null}
  </div>

  

  <div className="relative z-0 w-full sm:px-3 px-4 mb-5 group">
    <input
     type="password"
      name="password"
      value={formik.values.password}
      onChange={formik.handleChange}
     onBlur={formik.handleBlur}
       id="password" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white   focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
    <label htmlFor="floating_password" className="peer-focus:font-medium absolute left-0 text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 px-4 sm:px-2">Password
    <span className='sm:ms-72'>    <i className="fa-solid sm:ms-12 ms-[11rem] text-slate-400 text-xl  fa-lock"></i>   </span></label>

    {formik.errors.password && formik.touched.password  ? <div className="p-2 mb-4 text-md text-center  text-red-800 rounded-lg " role="alert">
  <span className="font-medium ">{formik.errors.password}</span> 
</div> : null}
  </div>


  <div className="relative z-0 w-full mb-5 sm:px-3 px-4 group">
    <input
     type="password"
      name="rePassword"
      value={formik.values.rePassword}
      onChange={formik.handleChange}
     onBlur={formik.handleBlur}
       id="rePassword" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
    <label htmlFor="floating_re-password" className="peer-focus:font-medium absolute left-0 text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 px-4 sm:px-2">re-Password
    </label>

    {formik.errors.rePassword  && formik.touched.rePassword  ? <div className="p-2 mb-4 text-md text-center  text-red-800 rounded-lg " role="alert">
  <span className="font-medium ">{formik.errors.rePassword}</span> 
</div> : null}
  </div>


  <div className="relative z-0 w-full mb-5 sm:px-3 px-4 group">
    <input
     type="tel" 
     name="phone"
     value={formik.values.phone}
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
      id="phone" className="block py-2.5 px-0 w-full text-sm  text-white bg-transparent border-0 border-b-2 border-gray-50 appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
    <label htmlFor="floating_phone" className="peer-focus:font-medium  absolute left-0 text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 px-4 sm:px-2">Phone Number
    <span className='sm:ms-72'>    <i className="fa-solid text-slate-400 sm:ms-6 ms-36  text-xl fa-phone"></i>   </span> </label>

    {formik.errors.phone  && formik.touched.phone  ?  <div className="p-2 mb-4 text-md text-center  text-red-800 rounded-lg " role="alert">
  <span className="font-medium ">{formik.errors.phone}</span> 
</div> : null}
  </div>


<div className='text-center mt-8 '>
<button type="submit" className="text-white bg-emerald-700 px-11 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emborder-emerald-300 font-bold rounded-lg text-sm  sm:w-auto  py-2.5 text-center ">{isLoding ? <i className='fas fa-spinner fa-spin'></i> : "Register" }</button>
</div>
<div className='mt-5 text-center'><Link to="/Fresh-Cart/login"><span className='text-emerald-600 hover:text-white underline '>Do You Have Account? Login Now</span></Link> </div>

  
</form>
</div>



  
  </>
   
  
}
