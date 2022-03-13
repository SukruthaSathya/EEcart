import React from 'react'
import Announcement from '../Components/Announcement/Announcement'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Newsletter from '../Components/Newsletter/Newsletter'
import ProductDetails from '../Components/ProductDetail/ProductDetails'

function ProductPage() {
  return (
    <div>
      <Navbar/>
      <Announcement/>
      <ProductDetails/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default ProductPage