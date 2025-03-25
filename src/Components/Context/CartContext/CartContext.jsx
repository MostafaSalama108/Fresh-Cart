import axios from "axios";
import { createContext, useEffect, useState } from "react";




export let CartContext = createContext()



export default function CartContextProvider(props){
    let headers = {token :localStorage.getItem("token")}

    const [numItems, setnumItems] = useState(0)

    const [cartId, setcartId] = useState("")



   function addCart(id){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/cart` , {productId : id} , {headers})
    .then((res)=>res)
    .catch((err)=>err)
   }


   function getLoggedUserCart(){
   return axios.get(`https://ecommerce.routemisr.com/api/v1/cart` , {headers} )
    .then((res)=>{
        setnumItems(res.data.numOfCartItems)
        setcartId(res.data.data._id)
        return res
    })
    .catch((err)=>err)
   }


   function updateProductCart(id , num){
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}` , {count: num} , {headers})
    .then((res)=>res)
    .catch((err)=>err)
   }

  function deleteProduct(cartId){
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${cartId}` , {headers} )

    .then((res)=>res)
    .catch((err)=>err)
   }



   function chekout(cartId , url , formData){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}` , {shippingAddress :formData} , {headers})
    .then((res)=>res)
    .catch((err)=>err)
   }



 


   useEffect(()=>{
    getLoggedUserCart()

   }, [])








    return <CartContext.Provider value={{addCart , getLoggedUserCart , updateProductCart  , deleteProduct , setnumItems , chekout , cartId , numItems}}>
        {props.children}
    </CartContext.Provider>
}