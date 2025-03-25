import axios from "axios";
import { useState } from "react";
import { createContext } from "react";



  export  let UserContext = createContext()


  export default  function UserContextProvider(props){


const [UserLogin, setUserLogin] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null)


function fpassword(emailId){
   return axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords` , emailId )
    .then((res)=> res)
    .catch((res)=> res)
}

function Recetpassword(code){
   return axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode` , code )
    .then((res)=>res )
    .catch((res)=> res)
}

function Upgardpassword(data){
   return axios.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword` , data )
    .then((res)=> res)
    .catch((res)=> res)
}




    return <UserContext.Provider value={{UserLogin , setUserLogin , fpassword , Recetpassword , Upgardpassword}}>
        {props.children}
    </UserContext.Provider>
}