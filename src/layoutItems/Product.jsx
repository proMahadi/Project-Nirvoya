import React, { useState } from 'react'
import { TiHeartFullOutline } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { IoStar } from "react-icons/io5";
import { Link } from 'react-router-dom';




const Product = ({ imgsrc, AddDiscount, reviews, title, price }) => {
    const [wishList, setWishList] = useState(false)
    const handleWishList = () => {
        setWishList(!wishList)
    }
    return (
        <div className='w-[174px] md:w-[332px] mt-5 px-2 pt-2 pb-4 bg-white rounded-[10px] border-[1px] border-[#E9E9E9]'>
            <div className='relative'>

                    <img className='rounded-[10px]' src={imgsrc} alt="productImg" />
                    <div className='absolute top-0 left-0'>{AddDiscount}</div>

                <div onClick={handleWishList} className='absolute top-[21px] right-[14px] text-2xl w-[25px] h-[25px] '>
                    {
                        wishList ?
                            <TiHeartFullOutline className='text-red-500' />
                            :
                            <CiHeart className='text-[#999999]' />
                    }
                </div>
            </div>
            <Link to= '/product_details'>
                <div className='pt-[18px]'>
                    <div>
                        <div className='flex items-center gap-x-0.5'>
                            <IoStar className='text-[#FAC96B]' />
                            <IoStar className='text-[#FAC96B]' />
                            <IoStar className='text-[#FAC96B]' />
                            <IoStar className='text-[#FAC96B]' />
                            <IoStar className='text-[#D3D3D3]' />
                            <p className='text-secondary font-pops text-xs ml-[10px]'>{reviews}</p>
                        </div>
                        <div className='my-[10px]'>
                            <p className='w-[165px] lg:w-[294px] text-[#383838] font-pops text-sm md:text-lg '>{title}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-primary text-base font-pops font-medium md:text-[22px]'>{price}</p>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                                    <path d="M22.9091 6.5456H20.22L16.1836 0.485595C16.0231 0.244875 15.7734 0.0778026 15.4897 0.0211325C15.2059 -0.0355376 14.9113 0.0228363 14.6705 0.183413C14.4298 0.343989 14.2628 0.593615 14.2061 0.877375C14.1494 1.16113 14.2078 1.45578 14.3684 1.6965L17.5985 6.5456H6.40145L9.63491 1.6965C9.79549 1.45578 9.85386 1.16113 9.79719 0.877375C9.74052 0.593615 9.57345 0.343989 9.33273 0.183413C9.09201 0.0228363 8.79736 -0.0355376 8.5136 0.0211325C8.22984 0.0778026 7.98021 0.244875 7.81964 0.485595L3.78 6.5456H1.09091C0.801582 6.5456 0.524105 6.66053 0.31952 6.86512C0.114935 7.0697 0 7.34718 0 7.63651C0 7.92583 0.114935 8.20331 0.31952 8.4079C0.524105 8.61248 0.801582 8.72742 1.09091 8.72742H2.18182V17.4547C2.18182 18.3227 2.52662 19.1551 3.14038 19.7689C3.75413 20.3826 4.58656 20.7274 5.45455 20.7274H18.5455C19.4134 20.7274 20.2459 20.3826 20.8596 19.7689C21.4734 19.1551 21.8182 18.3227 21.8182 17.4547V8.72742H22.9091C23.1984 8.72742 23.4759 8.61248 23.6805 8.4079C23.8851 8.20331 24 7.92583 24 7.63651C24 7.34718 23.8851 7.0697 23.6805 6.86512C23.4759 6.66053 23.1984 6.5456 22.9091 6.5456ZM19.6364 17.4547C19.6364 17.744 19.5214 18.0215 19.3168 18.2261C19.1123 18.4307 18.8348 18.5456 18.5455 18.5456H5.45455C5.16522 18.5456 4.88774 18.4307 4.68316 18.2261C4.47857 18.0215 4.36364 17.744 4.36364 17.4547V8.72742H19.6364V17.4547Z" fill="#0198E9" />
                                    <path d="M7.63632 16.9092C7.92564 16.9092 8.20312 16.7943 8.40771 16.5897C8.61229 16.3851 8.72723 16.1076 8.72723 15.8183V11.4547C8.72723 11.1654 8.61229 10.8879 8.40771 10.6833C8.20312 10.4787 7.92564 10.3638 7.63632 10.3638C7.34699 10.3638 7.06951 10.4787 6.86493 10.6833C6.66034 10.8879 6.54541 11.1654 6.54541 11.4547V15.8183C6.54541 16.1076 6.66034 16.3851 6.86493 16.5897C7.06951 16.7943 7.34699 16.9092 7.63632 16.9092Z" fill="#0198E9" />
                                    <path d="M12 16.9092C12.2893 16.9092 12.5668 16.7943 12.7714 16.5897C12.976 16.3851 13.0909 16.1076 13.0909 15.8183V11.4547C13.0909 11.1654 12.976 10.8879 12.7714 10.6833C12.5668 10.4787 12.2893 10.3638 12 10.3638C11.7106 10.3638 11.4332 10.4787 11.2286 10.6833C11.024 10.8879 10.9091 11.1654 10.9091 11.4547V15.8183C10.9091 16.1076 11.024 16.3851 11.2286 16.5897C11.4332 16.7943 11.7106 16.9092 12 16.9092Z" fill="#0198E9" />
                                    <path d="M16.3635 16.9092C16.6528 16.9092 16.9303 16.7943 17.1349 16.5897C17.3395 16.3851 17.4544 16.1076 17.4544 15.8183V11.4547C17.4544 11.1654 17.3395 10.8879 17.1349 10.6833C16.9303 10.4787 16.6528 10.3638 16.3635 10.3638C16.0742 10.3638 15.7967 10.4787 15.5921 10.6833C15.3875 10.8879 15.2726 11.1654 15.2726 11.4547V15.8183C15.2726 16.1076 15.3875 16.3851 15.5921 16.5897C15.7967 16.7943 16.0742 16.9092 16.3635 16.9092Z" fill="#0198E9" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Product