import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import About from './pages/About'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/Order-Confirmation'
import Login from './components/Login'
import Register from './components/Register'
import FilteredData from './pages/FilteredData'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [order, setOrder] = useState(null)
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/checkout' element={<Checkout setOrder={setOrder}/>}/>
        <Route path='/order-confirmation' element={<OrderConfirmation order={order}/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/filtered-data' element={<FilteredData />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App