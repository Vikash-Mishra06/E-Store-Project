import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import About from './pages/About'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/home' element={<Home />}/>
        
        <Route path='/shop' element={<Shop />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App