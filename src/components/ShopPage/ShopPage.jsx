import React, { useState } from 'react'
import Container from '../../layoutItems/Container'
import { GoDotFill } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";
import { FaSquareCheck } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoFilterSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import Product from '../../layoutItems/Product';
import product1 from '../../assets/product1.png'
import product2 from '../../assets/product2.png'
import product3 from '../../assets/product3.png'
import product4 from '../../assets/product4.png'
import DiscountBadge from '../../layoutItems/DiscountBadge';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";







const ShopPage = () => {
    const [checkOneStar, setCheckOneStar] = useState(false)
    const [checkTwoStar, setCheckTwoStar] = useState(false)
    const [checkThreeStar, setCheckThreeStar] = useState(false)
    const [checkFourStar, setCheckFourStar] = useState(false)
    const [checkFiveStar, setCheckFiveStar] = useState(false)
    const [showFilter, setShowFilter] = useState(false)
    const handleFilter = () => {
        setShowFilter(!showFilter);
    }
    const handleOneStar = () => {
        setCheckOneStar(!checkOneStar);
    }
    const handleTwoStar = () => {
        setCheckTwoStar(!checkTwoStar);
    }
    const handleThreeStar = () => {
        setCheckThreeStar(!checkThreeStar);
    }
    const handleFourStar = () => {
        setCheckFourStar(!checkFourStar);
    }
    const handleFiveStar = () => {
        setCheckFiveStar(!checkFiveStar);
    }

    return (
        <div className='bg-[#FAFAFA]'>
            <Container className='pt-[60px] pb-[50px] px-2 lg:px-0'>
                        <div onClick={handleFilter}>
                            <IoFilterSharp className={`lg:hidden block text-3xl mb-10 ${showFilter ? 'hidden' : 'block'}`} />
                        </div>
                <div className='flex lg:gap-x-[53px]'>
                    <div>
                        <div className={`z-10 py-6 px-5 bg-white w-[300px] absolute lg:static ${showFilter ? ' top-[256px] left-0' : 'top-[256px] -left-72'}`}>
                            <div className='flex justify-between'>
                                <h4 className='font-pops text-lg font-medium text-[#3D3D3F]'>Related Categories</h4>
                                <RxCross1 onClick={() => { setShowFilter(!showFilter) }} className='lg:hidden block text-3xl' />
                            </div>
                            <div className='flex items-center'>
                                <GoDotFill className='text-[#757575]' />
                                <p className='font-pops text-base text-[#757575]'>Men’s fashion</p>
                            </div>
                            <div className='ml-[14px]'>
                                <p className='font-pops text-base text-[#757575] hover:text-primary'>Men’s Jacket</p>
                                <p className='font-pops text-base text-[#757575] hover:text-primary'>Men's T-Shirtst</p>
                                <p className='font-pops text-base text-[#757575] hover:text-primary'>Casual Shirts</p>
                                <p className='font-pops text-base text-[#757575] hover:text-primary'>Summer T-Shirts</p>
                            </div>
                            <div className='border-t-2 border-[#F4F4F4] mt-[18px] mb-[22px]'></div>
                            <div>
                                <div className='flex justify-between'>
                                    <h4 className='font-pops text-lg font-medium text-[#3D3D3F]'>Filter by Price</h4>
                                    <FaAngleDown />
                                </div>
                                <div className='mt-10 mb-8'>
                                    <input type="range" className='bg-[#D0D0D2]' />
                                </div>
                                <div>
                                    <p className='font-pops text-lg text-[#A7A7A7]'>Price: <span className='text-[#383838] font-medium'> ৳1000 - ৳2500</span> </p>
                                </div>
                            </div>
                            <div className='border-t-2 border-[#F4F4F4] mt-[18px] mb-[22px]'></div>
                            <div>
                                <div className='flex justify-between'>
                                    <h4 className='font-pops text-lg font-medium text-[#3D3D3F]'>Filter by Rating</h4>
                                    <FaAngleDown />
                                </div>
                                <div>
                                    <div onClick={handleOneStar} className='flex items-center gap-x-4'>
                                        <div>
                                            {
                                                checkOneStar ? <FaSquareCheck className='text-2xl text-primary' /> : <MdCheckBoxOutlineBlank className='text-2xl text-[#D0D0D2]' />
                                            }
                                        </div>
                                        <div>
                                            <IoStar className='text-[#FAC96B] text-2xl' />
                                        </div>
                                    </div>
                                    <div onClick={handleTwoStar} className='flex items-center gap-x-4'>
                                        <div>
                                            {
                                                checkTwoStar ? <FaSquareCheck className='text-2xl text-primary' /> : <MdCheckBoxOutlineBlank className='text-2xl text-[#D0D0D2]' />
                                            }
                                        </div>
                                        <div className='flex'>
                                            <IoStar className='text-[#FAC96B] text-2xl' />
                                            <IoStar className='text-[#FAC96B] text-2xl' />
                                        </div>
                                    </div>
                                    <div onClick={handleThreeStar} className='flex items-center gap-x-4'>
                                        <div>
                                            {
                                                checkThreeStar ? <FaSquareCheck className='text-2xl text-primary' /> : <MdCheckBoxOutlineBlank className='text-2xl text-[#D0D0D2]' />
                                            }
                                        </div>
                                        <div className='flex'>
                                            <IoStar className='text-[#FAC96B] text-2xl' />
                                            <IoStar className='text-[#FAC96B] text-2xl' />
                                            <IoStar className='text-[#FAC96B] text-2xl' />
                                        </div>
                                    </div>
                                    <div onClick={handleFourStar} className='flex items-center gap-x-4'>
                                        <div>
                                            {
                                                checkFourStar ? <FaSquareCheck className='text-2xl text-primary' /> : <MdCheckBoxOutlineBlank className='text-2xl text-[#D0D0D2]' />
                                            }
                                        </div>
                                        <div className='flex'>
                                            <IoStar className='text-[#FAC96B] text-2xl' />
                                            <IoStar className='text-[#FAC96B] text-2xl' />
                                            <IoStar className='text-[#FAC96B] text-2xl' />
                                            <IoStar className='text-[#FAC96B] text-2xl' />
                                        </div>
                                    </div>
                                    <div onClick={handleFiveStar} className='flex items-center gap-x-4'>
                                        <div>
                                            {
                                                checkFiveStar ? <FaSquareCheck className='text-2xl text-primary' /> : <MdCheckBoxOutlineBlank className='text-2xl text-[#D0D0D2]' />
                                            }
                                        </div>
                                        <div className='flex'>
                                            <IoStar className='text-[#FAC96B] text-2xl' />
                                            <IoStar className='text-[#FAC96B] text-2xl' />
                                            <IoStar className='text-[#FAC96B] text-2xl' />
                                            <IoStar className='text-[#FAC96B] text-2xl' />
                                            <IoStar className='text-[#FAC96B] text-2xl' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='sm:flex items-center '>
                            <div className='lg:mb-[30px]'>
                                <p className='font-pops font-medium text-lg text-[#9E9E9D]'>Showing <span className='text-[#424241]'>20</span> of <span className='text-[#424241]'>160</span> product</p>
                            </div>
                            <div className='flex items-center gap-x-4 ml-auto'>
                                <p className='font-pops  text-lg text-[#9E9E9D]'>Sort by:</p>
                                <div>
                                    <button className='py-[6px] px-4 border-[1px] border-[#E9E9E9] rounded-[3px] font-pops  text-lg text-[#424241]'> Newest Items <FaAngleDown className='inline-block' /></button>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-wrap lg:gap-x-6 justify-around'>
                            <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product1} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                            <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product2} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                            <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product3} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                            <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product4} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                            <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product1} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                            <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product2} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                            <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product3} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                            <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product4} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />
                            <Product AddDiscount={<DiscountBadge discountAmmount='-25% OFF' />} imgsrc={product4} reviews='(0)' title='Headrest Executive Mesh Office Chairset' price='৳10500' />

                        </div>
                        <div className='flex items-center gap-x-[18px] mt-10 md:justify-end '>
                            <div>
                                <button className='py-2 px-4 md:py-3 md:px-6 bg-white border-[1px] border-[#E9E9E9] rounded-[5px] text-primary text-lg font-semibold font-pops'> <FaAngleLeft className='inline-block' />Previous</button>
                            </div>
                            <div className='flex'>
                                <div>
                                    <button className='py-2 px-4 md:py-3 md:px-6 border-[1px] border-[#E9E9E9] text-white bg-primary text-lg font-semibold font-pops rounded-l-[5px]'>1</button>
                                </div>
                                <div>
                                    <button className='py-2 px-4 md:py-3 md:px-6 border-[1px] border-[#E9E9E9] text-primary text-lg font-semibold font-pops'>2</button>
                                </div>
                                <div>
                                    <button className='py-2 px-4 md:py-3 md:px-6 border-[1px] border-[#E9E9E9] text-primary text-lg font-semibold font-pops rounded-r-[5px]'>3</button>
                                </div>
                            </div>
                            <div>
                                <button className='py-2 px-4 md:py-3 md:px-6 bg-white border-[1px] border-[#E9E9E9] rounded-[5px] text-primary text-lg font-semibold font-pops'> Next <FaAngleRight className='inline-block' /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ShopPage