import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import CatagorySlider from '../components/CatagorySlider/CatagorySlider'
import ShopPage from '../components/ShopPage/ShopPage'
import Service from '../components/Service/Service'
import Footer from '../components/Footer/Footer'

const Shop = () => {
    return (
        <div>
            <Navbar />
            <CatagorySlider />
            <ShopPage/>
            <Service />
            <Footer />
        </div>
    )
}

export default Shop