import React from 'react'
import { FaAngleRight } from "react-icons/fa6";


const CatagoryItem = ({className,itemName,imgsrc}) => {
    return (
        <div className={`w-[179px] lg:w-[270px] bg-white hover:scale-105 duration-300 hover:cursor-pointer py-4 pl-[18px] pr-2 shadow-cat ${className}`}>
            <div className='flex items-center'>
                <img src={imgsrc} alt="catagoryImg" />
                <p className='font-pops text-sm md:text-base text-[#394146] ml-[10px]'>{itemName}</p>
                <FaAngleRight className='ml-auto text-xl text-[#999999]'/>
            </div>
        </div>
    )
}

export default CatagoryItem