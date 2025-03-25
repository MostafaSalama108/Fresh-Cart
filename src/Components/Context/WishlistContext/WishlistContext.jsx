import axios from "axios";
import { useState } from "react";
import { createContext } from "react";




export let WishlistContext = createContext()


export default function WishlistContextProvider(props){

    let headers = {token :localStorage.getItem("token")}

    const [wishlistCounter, setwishlistCounter] = useState(0)
   




    function AddWishlist(wishId){
        return axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, {productId : wishId} , {headers}  )
    .then((res)=> res)
    .catch((err)=> err)
       
       }
       
       



function GetWishlist(){

  return  axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist` , {headers} )
    .then((res) => {
      setwishlistCounter(res.data.count)
      return res
    })
    .catch((err)=> err)
}




function RemoveWishlist(id){

  return  axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}` , {headers} )
    .then((res) => res)
    .catch((err)=> err)
}










    return <WishlistContext.Provider value={{GetWishlist , AddWishlist , RemoveWishlist , wishlistCounter , setwishlistCounter }} >
            {props.children}
        
        </WishlistContext.Provider>

}



