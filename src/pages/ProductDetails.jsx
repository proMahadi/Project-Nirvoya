import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import CatagorySlider from '../components/CatagorySlider/CatagorySlider'
import ProductInfo from '../components/ProductInfo/ProductInfo'
import Service from '../components/Service/Service'
import Footer from '../components/Footer/Footer'

const ProductDetails = () => {
  return (
    <div className='bg-[#FAFAFA]'>
      <Navbar />
      <CatagorySlider />
      <ProductInfo/>
      <Service />
      <Footer />
    </div>
  )
}

export default ProductDetails