import React, { useState } from 'react'
import Container from '../../layoutItems/Container'
import SectionName from '../../layoutItems/SectionName'
import ViewMore from '../../layoutItems/ViewMore'
import Product from '../../layoutItems/Product'
import product1 from '../../assets/product1.png'
import product2 from '../../assets/product2.png'
import product3 from '../../assets/product3.png'
import product4 from '../../assets/product4.png'
import product5 from '../../assets/product5.png'
import product6 from '../../assets/product6.png'
import product7 from '../../assets/product7.png'
import { FaAngleDown } from "react-icons/fa6";
import DiscountBadge from '../../layoutItems/DiscountBadge'
import { Link } from 'react-router-dom'


const FeaturedProducts = () => {
    const [showMoreProduct, setShowMoreProduct] = useState(false)
    const showMore = () => {
        setShowMoreProduct(true)
    }
    return (
        <div className='bg-[#FAFAFA]'>
            <Container className='pb-[40px] sm:px-5 lg:px-0'>
                <div className='flex justify-between items-center'>
                    <SectionName className='text-[#2E2E2E] mb-6' title='Featured Product' />
                    <Link to='/shop'>
                        <ViewMore />
                    </Link>
                </div>
                <div className='flex flex-wrap justify-around xl:gap-x-5'>

                    <Product imgsrc={product5} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                    <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product6} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                    <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product7} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                    <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product1} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                    <Product imgsrc={product2} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                    <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product3} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                    <Product imgsrc={product4} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                    <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product5} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                    <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product6} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                    <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product7} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                    <Product imgsrc={product1} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                    <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product2} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                    <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product3} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                    <Product imgsrc={product4} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                    <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product5} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                    <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product6} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />

                    {
                        showMoreProduct &&
                        <div className='flex flex-wrap justify-between xl:gap-x-5'>
                            <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product1} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                            <Product imgsrc={product2} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                            <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product3} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                            <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product4} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                            <Product imgsrc={product5} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                            <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product6} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                            <Product imgsrc={product7} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                            <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product1} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                        </div>
                    }
                </div>
                <div className=' mt-[50px]'>
                    <button onClick={showMore} className={`mx-auto py-[10px] px-[26px] bg-primary rounded-[81px] text-white font-pops font-semibold ${showMoreProduct ? 'hidden' : 'block'}`}>Show more <FaAngleDown className='inline-block ml-1' /></button>
                </div>
            </Container>
        </div>
    )
}

export default FeaturedProducts