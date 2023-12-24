import React from 'react'
import Container from '../../layoutItems/Container'
import SectionName from '../../layoutItems/SectionName'
import ViewMore from '../../layoutItems/ViewMore'
import Product from '../../layoutItems/Product'
import product1 from '../../assets/product1.png'
import product2 from '../../assets/product2.png'
import product3 from '../../assets/product3.png'
import product4 from '../../assets/product4.png'
import DiscountBadge from '../../layoutItems/DiscountBadge'
import { Link } from 'react-router-dom'




const FlashDeals = () => {
    return (
        <div className='bg-[#FAFAFA]'>
            <Container className='pb-[40px] sm:px-5 lg:px-0'>
                <div className='flex justify-between items-center'>
                    <SectionName className='text-[#2E2E2E] mb-6' title='Flash Deals' />
                    <Link to ='/shop'>
                        <ViewMore />
                    </Link>
                </div>
                <div className='flex flex-wrap justify-around xl:gap-x-5'>

                    <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product1} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                    <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product2} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                    <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product3} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                    <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product4} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />

                </div>
            </Container>
        </div>
    )
}

export default FlashDeals