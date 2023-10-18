import React from 'react'
import { Register } from './Components/Register'
import {BrowserRouter ,Routes,Route } from 'react-router-dom'
import Login from './Components/Login'
import PostProduct from './Components/PostProduct'
import PostCustomer from './Components/PostCustomer'
import GetCustomers from './Components/GetCustomers'
import GetProduct from './Components/GetProduct'
import UpdateProduct from './Components/UpdateProduct'
import Home from './Components/Home'
import Customer from './Components/Customer'
import Product from './Components/Product'
import UpdateCustomer from './Components/UpdateCustomer'

import NavbaHome from './Components/NavbaHome'
export const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path='/'element={<NavbaHome/>}/>
   <Route exact path='/home' element={<Home/>}/>
    <Route exact path='/register' element={<Register/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/customers' element={<Customer/>}/>
    
    <Route exact path='/products' element={<Product/>}/>
    <Route exact path='/pproducts' element={<PostProduct/>}/>
    <Route exact path='/pcustomers' element={<PostCustomer />}/>
    <Route exact path='/gcustomers' element={<GetCustomers/>}/>
    <Route exact path='/gproducts' element={<GetProduct/>}/>
    <Route exact path='/customers/edit/:customerID' element={<UpdateCustomer/>}/>
    <Route exact path='/products/edit/:productID' element={<UpdateProduct/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}
