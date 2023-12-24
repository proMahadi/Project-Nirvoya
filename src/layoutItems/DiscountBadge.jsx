import React from 'react'

const DiscountBadge = ({discountAmmount,className}) => {
  return (
    <div className={`py-1 px-3 rounded-sm rounded-tl-[9px] w-[91px]  bg-gradient-to-r from-[#FF7A00] to-[#FFB800] ${className}`}>
        <p className='font-pops text-sm font-semibold text-[#FAFAFA]'>{discountAmmount}</p>
    </div>
  )
}

export default DiscountBadge