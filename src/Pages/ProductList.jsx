import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Announcement from '../Components/Announcement/Announcement'
import Filter from '../Components/Filter/Filter'
import Products from '../Components/Products/Products'
import Newsletter from '../Components/Newsletter/Newsletter'
import Footer from '../Components/Footer/Footer'

function ProductList() {
  return (
    <div className='productList-container'>
        <Navbar/>
        <Announcement/>
        <Filter/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default ProductList