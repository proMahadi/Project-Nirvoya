import React from 'react'
import Container from '../../layoutItems/Container'
import FreeShiping from '../../assets/FreeShiping.png'
import BestPrice from '../../assets/BestPrice.png'
import FreeReturn from '../../assets/FreeReturn.png'
import SecurePayment from '../../assets/SecurePayment.png'

const Service = () => {
  return (
    <div className='bg-white'>
        <Container className='pt-[53px] pb-[50px] px-5 xl:px-[50px]'>
            <div className='lg:flex items-center gap-x-[99px]'>
                <div className='flex  gap-x-[18px] items-center mt-6 lg:mt-0'>
                    <div>
                        <img src={FreeShiping} alt="service1" />
                    </div>
                    <div>
                        <h5 className='text-secondary font-pops font-medium text-xl'>FREE SHIPPING</h5>
                        <p className='font-pops text-base text-[#757575]'>Order via Campaign</p>
                    </div>
                </div>
                <div className='flex gap-x-[18px] items-center mt-6 lg:mt-0'>
                    <div>
                        <img src={BestPrice} alt="service2" />
                    </div>
                    <div>
                        <h5 className='text-secondary font-pops font-medium text-xl'>Best Price</h5>
                        <p className='font-pops text-base text-[#757575]'>Quality products</p>
                    </div>
                </div>
                <div className='flex gap-x-[18px] items-center mt-6 lg:mt-0'>
                    <div>
                        <img src={FreeReturn} alt="service3" />
                    </div>
                    <div>
                        <h5 className='text-secondary font-pops font-medium text-xl'>Free Retern</h5>
                        <p className='font-pops text-base text-[#757575]'>Within 7 days returns</p>
                    </div>
                </div>
                <div className='flex gap-x-[18px] items-center mt-6 lg:mt-0'>
                    <div>
                        <img src={SecurePayment} alt="service4" />
                    </div>
                    <div>
                        <h5 className='text-secondary font-pops font-medium text-xl'>Secure Payment</h5>
                        <p className='font-pops text-base text-[#757575]'>100% secure payment</p>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Service