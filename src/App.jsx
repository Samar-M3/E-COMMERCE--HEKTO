import React from 'react'
import { Route, Routes } from 'react-router'
import Header from './Components/Header'
import Home from './Pages/Home'
import Pages from './Pages/Pages'
import Blog from './Pages/Blog'
import Product from './Pages/Product'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import Login from './Components/Login'
import Footer from './Components/Footer'
import DetailPage from './Pages/DetailPage'
import ProtectedLayout from './Pages/ProtectedLayout'
import Dashboard from './Pages/Dashboard'
import Cart from './Layers/cart'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pages' element={<Pages/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/product/:id' element={<DetailPage/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/contact' element={<Contact/>}/> 
      <Route path='/login' element={<Login/>}/>
      <Route path='/*' element={<div>page not found</div>}/>
      <Route path='/mycart' element={<Cart/>}/>
      <Route path='/dashboard' element={<ProtectedLayout/>}
      >
        <Route  index element={<Dashboard/>}/>
        <Route  path="user" element={<div>THis is user</div>}/>
        <Route  path="order" element={<div>THis is user</div>}/>
        <Route  path="wish" element={<div>THis is user</div>}/>
        <Route  path="myproduct" element={<div>THis is user</div>}/>
        <Route  path="myOrder" element={<div>THis is user</div>}/>
        

      </Route>
      
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
