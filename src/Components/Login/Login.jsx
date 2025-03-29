import React, { useContext, useState } from 'react'
import style from './Login.module.css'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/UserContext/UserContext'







export default function Login() {

let navigate = useNavigate()

const [isLoding, setisLoding] = useState(false)


let { setUserLogin , UserLogin } = useContext(UserContext)

const [apiErr, setapiErr] = useState("")

 async function handleLogin(values){
  setisLoding(true)
    // api
   await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin` , values)
   .then((res)=>{
    if(res.data.message =="success" ){
      localStorage.setItem("token" , res.data.token )
      setUserLogin(res.data.token)
      setisLoding(false)
      navigate("/Fresh-Cart/")
     
    }
    
   })

   .catch((err)=>{
     setisLoding(false)
   setapiErr(err.response.data.message)

  
   
  
    
   })
    
  }



  let validationSchema = yup.object().shape({
    
    email: yup.string().email("not valid email").required("email is required"),
    password: yup.string().required("password is required").min(8 , "password min length is 8").max(15 ,"password max length is 15" ),
    
   
  })


let formik = useFormik({


  initialValues: {
   
    email: "",
    password: "",
   
   
  },
  validationSchema,
  onSubmit:handleLogin
})












  return <>

{apiErr ?   <div className='w-1/2 mx-auto bg-red-600 text-white font-bold text-center rounded-lg p-2'>
  {apiErr}
  </div> : null}
  

  <div className='border-2 border-emerald-500 shadow-emerald-700 shadow-lg  bg-slate-900 mx-auto mt-5 w-[95%] sm:w-[90%] rounded-xl lg:w-[40%] py-11'>
    
<h1 className='font-semibold text-white text-center text-4xl mt-3 mb-5' >Login <span className='text-emerald-500'>Now</span> </h1>

<form onSubmit={formik.handleSubmit} className="max-w-md mt-8 mx-auto">



  <div className="relative z-0 w-full sm:px-3 px-4 mb-5 group">
    <input
     type="email"
     name="email"
     value={formik.values.email}
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
    id="email" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
    <label htmlFor="floating_email" className="peer-focus:font-medium  absolute left-0 text-sm text-gray-500  duration-300 transform -translate-y-6  scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 px-4 sm:px-2 peer-focus:-translate-y-6 ">Email Address
     <span className=' sm:ms-56'>    <i className="fa-solid text-xl  ms-36 sm:ms-20 text-slate-400 fa-at"></i></span></label>
  
   

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
    <label htmlFor="floating_password" className="peer-focus:font-medium absolute left-0 text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 px-4 sm:px-2   ">Password
    <span className=' sm:ms-64'>    <i className="fa-solid ms-[11rem] sm:ms-20 text-slate-400 text-xl fa-lock"></i>   </span> </label>


    {formik.errors.password && formik.touched.password  ? <div className="p-2 mb-4 text-md text-center  text-red-800 rounded-lg " role="alert">
  <span className="font-medium ">{formik.errors.password}</span> 
</div> : null}
  </div>



<div className='text-center mt-11 '>
<button type="submit" className="text-white bg-emerald-700 px-11 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emborder-emerald-300 font-bold rounded-lg text-sm  sm:w-auto  py-2.5 text-center ">{isLoding ? <i className='fas fa-spinner fa-spin'></i> : "Login" }</button>
</div>


<div className='mt-8 text-center'><Link to="/Fresh-Cart/ForgetPassword"><span className='text-emerald-600 hover:text-white underline '>Forget Password?</span></Link> </div>
<div className='mt-3 text-center'><Link to="/Fresh-Cart/Register"><span className='text-emerald-600 hover:text-white underline '>Don't Have Account? Register Now</span></Link> </div>


  
</form>

  </div>

  
  </>
   
  
}
