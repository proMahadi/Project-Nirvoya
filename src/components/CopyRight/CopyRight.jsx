import React from 'react'
import Container from '../../layoutItems/Container'
import paymentMethods from '../../assets/paymentMethods.png'

const CopyRight = () => {
  return (
    <div className='border-t-[1px] border-[#E5E5E5]'>
        <Container className='pt-5 pb-4'>
            <div className='flex items-center justify-between '>
                <div className='mx-auto lg:mx-0'>
                    <p className='text-[#757575] font-pops text-sm lg:text-base'>Projectnirvoya -   © 2021 All Rights Reserved</p>
                </div>
                <div className='flex items-center '>
                    <div>
                        <p className='text-primary text-lg font-medium font-pops hidden lg:block'>Pay With</p>
                    </div>
                    <div className='hidden lg:block'>
                        <img src={paymentMethods} alt="paymentMethods" />
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default CopyRight