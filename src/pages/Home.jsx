import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import CatagorySlider from '../components/CatagorySlider/CatagorySlider'
import Banner from '../components/Banner/Banner'
import Catagory from '../components/Catagory/Catagory'
import FlashDeals from '../components/FlashDeals/FlashDeals'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
import Service from '../components/Service/Service'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
        <Navbar/>
        <CatagorySlider/>
        <Banner/>
        <Catagory/>
        <FlashDeals/>
        <FeaturedProducts/>
        <Service/>
        <Footer/>
    </>
  )
}

export default Home