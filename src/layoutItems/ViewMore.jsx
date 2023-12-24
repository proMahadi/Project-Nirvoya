import React from 'react'
import { MdArrowForward } from "react-icons/md";
const ViewMore = () => {
  return (
    <div className='flex items-center gap-x-[18px]'>
        <p className='font-pops text-base font-medium text-[#757575]'>View more</p>
        <MdArrowForward className='text-2xl text-[#757575]' />
    </div>
  )
}

export default ViewMore