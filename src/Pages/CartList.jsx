import React from 'react'
import Announcement from '../Components/Announcement/Announcement'
import Cart from '../Components/Cart/Cart'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'

function CartList() {
  return (
    <div>
      <Navbar/>
      <Announcement/>
      <Cart/>
      <Footer/>
    </div>
  )
}

export default CartList