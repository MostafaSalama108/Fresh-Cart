import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Products from './Components/Products/Products';
import Categories from './Components/Categories/Categories';
import Brands from './Components/Brands/Brands';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Notfound from './Components/Notfound/Notfound';
import { Toaster } from 'react-hot-toast'
import CartContextProvider from './Components/Context/CartContext/CartContext';
import UserContextProvider from './Components/Context/UserContext/UserContext';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import WishlistContextProvider from './Components/Context/WishlistContext/WishlistContext';
import Wishlist from './Components/Wishlist/Wishlist';
import Chekout from './Components/Chekout/Chekout';
import AllOrders from './Components/AllOrders/AllOrders';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import Resetcode from './Components/Resetcode/Resetcode';
import UpdatePassword from './Components/UpdatePassword/UpdatePassword';









let pro = createBrowserRouter([
  {path:"/Fresh-Cart" , element: <Layout/>, children: [
  {path:"/Fresh-Cart", element:    <ProtectedRoute><Home/></ProtectedRoute> },
  {path: "/Fresh-Cart/cart" , element: <ProtectedRoute><Cart/></ProtectedRoute> },
  {path: "/Fresh-Cart/products" , element: <ProtectedRoute><Products/></ProtectedRoute> },
  {path: "/Fresh-Cart/categories" , element: <ProtectedRoute><Categories/></ProtectedRoute> },
  {path: "/Fresh-Cart/brands" , element: <ProtectedRoute><Brands/></ProtectedRoute> },
  {path: "/Fresh-Cart/wishlist" , element: <ProtectedRoute><Wishlist/></ProtectedRoute> },
  {path: "/Fresh-Cart/chekout" , element: <ProtectedRoute><Chekout/></ProtectedRoute> },
  {path: "/Fresh-Cart/allorders" , element: <ProtectedRoute><AllOrders/></ProtectedRoute> },
  {path: "/Fresh-Cart/productdetails/:id/:type" , element: <ProtectedRoute><ProductDetails/></ProtectedRoute> },
  {path: "/Fresh-Cart/login" , element: <Login/>},
  {path: "/Fresh-Cart/register" , element: <Register/>}, 
  {path: "/Fresh-Cart/forgetpassword" , element: <ForgetPassword/>},
  {path: "/Fresh-Cart/resetcode" , element: <Resetcode/>},
  {path: "/Fresh-Cart/updatePassword" , element: <UpdatePassword/>},
  {path: "*" , element: <Notfound/>}, 



]},
])















function App() {


  return <>
<WishlistContextProvider>
<UserContextProvider>
<CartContextProvider>
  <RouterProvider router={pro}></RouterProvider>
  <Toaster />
  </CartContextProvider>
    
</UserContextProvider>
</WishlistContextProvider>
 
    </>
   
}

export default App
