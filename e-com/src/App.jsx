import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Collection from './pages/collection'
import Home from './pages/home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Contact from './pages/contact'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'> 
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      app
    </div>
  )
}

export default App

