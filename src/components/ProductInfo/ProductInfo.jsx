import React, { useState } from 'react'
import Container from '../../layoutItems/Container'
import ProductInfoSlider from '../ProductInfoSlider/ProductInfoSlider'
import { IoStar } from "react-icons/io5";
import tick from '../../assets/tick.png'
import { TiHeartFullOutline } from "react-icons/ti";
import checkFill from '../../assets/checkFill.png'
import { GoDotFill } from "react-icons/go";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import reviewProfileImg from '../../assets/reviewProfileImg.png'
import ReviewForm from '../../layoutItems/ReviewForm';
import { FaAngleRight } from "react-icons/fa6";




const ProductInfo = () => {
  const [wishList, setWishList] = useState(false)
  const [sizeConfig_S, setSizeConfig_S] = useState(false)
  const [sizeConfig_M, setSizeConfig_M] = useState(false)
  const [sizeConfig_L, setSizeConfig_L] = useState(false)
  const [sizeConfig_X, setSizeConfig_X] = useState(false)
  const [sizeConfig_XL, setSizeConfig_XL] = useState(false)
  const [sizeConfig_XXL, setSizeConfig_XXL] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [addReview, setAddReview] = useState(false)
  const handleReview = () => {
    setAddReview(true);
  }
  const handleIncrement = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1)
    }
  }
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  const handleWish = () => {
    setWishList(!wishList);
  }
  const handleSizeConfig_S = () => {
    setSizeConfig_S(!sizeConfig_S)
    setSizeConfig_M(false)
    setSizeConfig_L(false)
    setSizeConfig_X(false)
    setSizeConfig_XL(false)
    setSizeConfig_XXL(false)

  }
  const handleSizeConfig_M = () => {
    setSizeConfig_S(false)
    setSizeConfig_M(!sizeConfig_M)
    setSizeConfig_L(false)
    setSizeConfig_X(false)
    setSizeConfig_XL(false)
    setSizeConfig_XXL(false)
  }
  const handleSizeConfig_L = () => {
    setSizeConfig_S(false)
    setSizeConfig_M(false)
    setSizeConfig_L(!sizeConfig_L)
    setSizeConfig_X(false)
    setSizeConfig_XL(false)
    setSizeConfig_XXL(false)
  }
  const handleSizeConfig_X = () => {
    setSizeConfig_S(false)
    setSizeConfig_M(false)
    setSizeConfig_L(false)
    setSizeConfig_X(!sizeConfig_X)
    setSizeConfig_XL(false)
    setSizeConfig_XXL(false)
  }
  const handleSizeConfig_XL = () => {
    setSizeConfig_S(false)
    setSizeConfig_M(false)
    setSizeConfig_L(false)
    setSizeConfig_X(false)
    setSizeConfig_XL(!sizeConfig_XL)
    setSizeConfig_XXL(false)
  }
  const handleSizeConfig_XXL = () => {
    setSizeConfig_S(false)
    setSizeConfig_M(false)
    setSizeConfig_L(false)
    setSizeConfig_X(false)
    setSizeConfig_XL(false)
    setSizeConfig_XXL(!sizeConfig_XXL)
  }
  return (
    <div className='bg-[#FAFAFA]'>
      <Container className='pt-14 pb-[110] px-2 xl:px-0'>
        <div className='mb-6'>
          <p className='text-[#02344F] text-base font-pops'>Home <FaAngleRight className='inline-block' /> Men’s fashion <FaAngleRight className='inline-block'  /> <span className='text-[#757575]'>Men's Stand Collar Leather Jacket</span> </p>
        </div>
        <div className='xl:flex gap-x-[118px]'>
          <ProductInfoSlider />
          <div>
            <div>
              <h3 className='text-secondary font-pops font-medium text-[26px]'>Super Skinny Rib Trouser & Joggers for Men By Sowdagar Trouser</h3>
            </div>
            <div className='md:flex items-center gap-x-[17px]'>
              <div className='flex items-center gap-x-1 mt-6'>
                <p className='text-secondary font-pops font-medium text-lg'>4.0</p>
                <div className='flex'>
                  <IoStar className='text-[#FAC96B] text-2xl' />
                  <IoStar className='text-[#FAC96B] text-2xl' />
                  <IoStar className='text-[#FAC96B] text-2xl' />
                  <IoStar className='text-[#FAC96B] text-2xl' />
                  <IoStar className='text-[#D3D3D3] text-2xl' />
                </div>
                <p className='text-[#BABABA] font-pops font-medium text-lg'>(223)</p>
              </div>
              <div className='flex items-center gap-x-[10px] px-4 border-r-2 border-l-2 border-[#F2F2F2] mt-6'>
                <div><img src={tick} alt="tick" /></div>
                <div>
                  <p className='font-pops text-secondary font-semibold text-lg'>4,320 <span className='font-normal'>Sold</span></p>
                </div>
              </div>
              <div onClick={handleWish} className='flex items-center gap-x-4 mt-6'>
                <TiHeartFullOutline className={wishList ? 'text-red-500 text-2xl' : 'text-[#C7C7C7] text-2xl'} />
                <p className='font-pops font-bold text-lg text-primary'>Add to wishlist</p>
              </div>
            </div>
            <div className='flex items-center mt-9'>
              <p className='font-pops font-semibold text-primary text-4xl'>$976.33</p>
              <p className='text-[#8D8D8D] text-xl font-pops ml-6 mr-4'><del>$1,020.99</del></p>
              <span className='py-1 px-[10px] bg-gradient-to-r from-[#FF7A00] to-[#FFB800] text-white font-pops text-sm rounded-sm font-semibold leading-7'>20%</span>
            </div>
            <div className='flex gap-x-5 mt-6 border-b-[1px] border-[#EAEAEA] pb-[18px]'>
              <div>
                <p className='font-pops text-base text-[#757575]'><span className='font-medium text-[#3D3D3F]'>SKU:</span> 12314124124</p>
              </div>
              <div className='flex items-center gap-x-[3px]'>
                <div>
                  <img src={checkFill} alt="checkFill" />
                </div>
                <p className='font-pops text-base text-[#757575]'>In Stock</p>
              </div>
            </div>
            <div className='mt-3'>
              <p className='text-secondary text-lg font-pops'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
            <div className='mt-2'>
              <div className='flex items-center gap-x-4'>
                <GoDotFill />
                <p className='text-secondary text-lg font-pops'> Direct Full Array</p>
              </div>
              <div className='flex items-center gap-x-4'>
                <GoDotFill />
                <p className='text-secondary text-lg font-pops'> Quantum Dot Technology</p>
              </div>
              <div className='flex items-center gap-x-4'>
                <GoDotFill />
                <p className='text-secondary text-lg font-pops'> Ambient Mode</p>
              </div>
              <div className='flex items-center gap-x-4'>
                <GoDotFill />
                <p className='text-secondary text-lg font-pops'> One Remote Control</p>
              </div>
            </div>
            <div className='flex gap-x-3 md:gap-x-4 mt-8'>
              <p className='text-secondary font-pops text-lg '>Size</p>
              <div>
                <button onClick={handleSizeConfig_S} className={`py-1 px-3 border-[1px] border-[#EAEAEA] font-pops text-sm ${sizeConfig_S ? 'text-white bg-primary' : 'text-[#6E6E6F;] bg-white'} `}>S</button>
              </div>
              <div>
                <button onClick={handleSizeConfig_M} className={`py-1 px-3 border-[1px] border-[#EAEAEA] font-pops text-sm ${sizeConfig_M ? 'text-white bg-primary' : 'text-[#6E6E6F;] bg-white'} `}>M</button>
              </div>
              <div>
                <button onClick={handleSizeConfig_L} className={`py-1 px-3 border-[1px] border-[#EAEAEA] font-pops text-sm ${sizeConfig_L ? 'text-white bg-primary' : 'text-[#6E6E6F;] bg-white'} `}>L</button>
              </div>
              <div>
                <button onClick={handleSizeConfig_X} className={`py-1 px-3 border-[1px] border-[#EAEAEA] font-pops text-sm ${sizeConfig_X ? 'text-white bg-primary' : 'text-[#6E6E6F;] bg-white'} `}>X</button>
              </div>
              <div>
                <button onClick={handleSizeConfig_XL} className={`py-1 px-3 border-[1px] border-[#EAEAEA] font-pops text-sm ${sizeConfig_XL ? 'text-white bg-primary' : 'text-[#6E6E6F;] bg-white'} `}>XL</button>
              </div>
              <div>
                <button onClick={handleSizeConfig_XXL} className={`py-1 px-3 border-[1px] border-[#EAEAEA] font-pops text-sm ${sizeConfig_XXL ? 'text-white bg-primary' : 'text-[#6E6E6F;] bg-white'} `}>XXL</button>
              </div>
            </div>
            <div className='lg:flex gap-x-9'>
              <div className='flex items-center gap-x-4  mt-8'>
                <p className='font-pops text-sm text-[#3D3D3F]'>Quantity: </p>
                <div className='flex border-[1px] border-[#EAEAEA] rounded-sm'>
                  <button onClick={handleDecrement} className='py-[10px] px-3 bg-[#EFEFEF]'>-</button>
                  <p className='py-[10px] px-3 font-pops text-base text-[#3D3D3F] font-medium'>{quantity}</p>
                  <button onClick={handleIncrement} className='py-[10px] px-3 bg-[#EFEFEF]'>+</button>
                </div>
              </div>
              <div className='flex gap-x-9  mt-8'>
                <div>
                  <button className='py-3 px-11 bg-primary rounded-[3px] border-2 border-primary text-white font-pops font-medium '>Add cart</button>
                </div>
                <div>
                  <button className='py-3 px-11 border-2 border-primary rounded-[3px] bg-[#EBF4F9] font-pops font-medium text-primary '>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-[84px]'>
          <div className='py-5 lg:pl-12 bg-[#FCFCFC] border-[1px] border-[#F1F1F1]'>
            <h4 className='font-pops text-2xl text-primary font-medium'>Producr details of LED Monitor With High Quality In The World</h4>
          </div>
          <div className='lg:pt-6 lg:pl-12 pb-10 bg-white'>
            <div>
              <h4 className='text-2xl font-pops font-bold text-secondary'>See the best picture no matter where you sit</h4>
            </div>
            <div className='lg:flex justify-between'>
              <div className='mt-5'>
                <div className='flex items-center gap-x-4'>
                  <GoDotFill />
                  <p className='text-secondary text-lg font-pops'>Size : M, L, XL</p>
                </div>
                <div className='flex items-center gap-x-4'>
                  <GoDotFill />
                  <p className='text-secondary text-lg font-pops'>Product Type : Jogger</p>
                </div>
                <div className='flex items-center gap-x-4'>
                  <GoDotFill />
                  <p className='text-secondary text-lg font-pops'>Main Material : Cotton</p>
                </div>
                <div className='flex items-center gap-x-4'>
                  <GoDotFill />
                  <p className='text-secondary text-lg font-pops'>Gender : Male</p>
                </div>
                <div className='flex items-center gap-x-4'>
                  <GoDotFill />
                  <p className='text-secondary text-lg font-pops'>Waist : Mid-rise</p>
                </div>
                <div className='flex items-center gap-x-4'>
                  <GoDotFill />
                  <p className='text-secondary text-lg font-pops'>Zip : Fly</p>
                </div>
              </div>
              <div className='mt-5'>
                <div className='flex items-center gap-x-4'>
                  <GoDotFill />
                  <p className='text-secondary text-lg font-pops'>Zipper : Yes</p>
                </div>
                <div className='flex items-center gap-x-4'>
                  <GoDotFill />
                  <p className='text-secondary text-lg font-pops'>Pocket : Two front and One Back Pockets.</p>
                </div>
                <div className='flex items-center gap-x-4'>
                  <GoDotFill />
                  <p className='text-secondary text-lg font-pops'>100% Authentic Product</p>
                </div>
                <div className='flex items-center gap-x-4'>
                  <GoDotFill />
                  <p className='text-secondary text-lg font-pops xl:w-[618px] w-auto '>Product color may slightly vary due to our photography and Sometimes it’s vary on our devices</p>
                </div>
              </div>
            </div>
            <div className='border-t-2 border-[#F1F1F1] mt-9 mb-6 mr-[49px]'></div>
            <div>
              <h4 className='text-2xl font-pops font-bold text-secondary'>Powerful intelligence for perfection</h4>
            </div>
            <div className='mt-[18px]'>
              <p className='text-secondary text-lg font-pops'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita </p>
            </div>
          </div>
          <div className='pt-[46px] lg:pl-[47px] pb-[60px] bg-white mt-[30px] mb-[50px]'>
            <div className='md:flex items-center  gap-x-6 lg:gap-x-[75px]'>
              <div>
                <div>
                  <p className='text-[#3D3D3F] font-pops text-lg font-medium'>Customer reviews</p>
                </div>
                <div className='flex items-center gap-x-2'>
                  <div className='flex '>
                    <IoStar className='text-[#FAC96B] text-sm' />
                    <IoStar className='text-[#FAC96B] text-sm' />
                    <IoStar className='text-[#FAC96B] text-sm' />
                    <IoStar className='text-[#FAC96B] text-sm' />
                    <FaRegStarHalfStroke className='text-[#FAC96B] text-sm' />
                  </div>
                  <div>
                    <p className='font-pops text-sm text-[#3D3D3F]'>4.6 out of 5</p>
                  </div>
                </div>
              </div>
              <div className='mt-10 lg:mt-0 mb-10 lg:mb-0'>
                <div className='flex items-center gap-x-3'>
                  <p className='font-pops text-sm text-[#3D3D3F]'>5 Stars</p>
                  <div className='bg-[#DBDEDF] rounded-[5px] relative w-[200px] h-[8px]'>
                    <div className='bg-[#FFB340] py-1 rounded-[5px] w-[79%] h-[8px] absolute top-0 left-0'></div>
                  </div>
                  <p className='font-pops text-sm text-[#3D3D3F]'>79%</p>
                </div>
                <div className='flex items-center gap-x-3'>
                  <p className='font-pops text-sm text-[#3D3D3F]'>4 Stars</p>
                  <div className='bg-[#DBDEDF] rounded-[5px] relative w-[200px] h-[8px]'>
                    <div className='bg-[#FFB340] py-1 rounded-[5px] w-[12%] h-[8px] absolute top-0 left-0'></div>
                  </div>
                  <p className='font-pops text-sm text-[#3D3D3F]'>12%</p>
                </div>
                <div className='flex items-center gap-x-3'>
                  <p className='font-pops text-sm text-[#3D3D3F]'>3 Stars</p>
                  <div className='bg-[#DBDEDF] rounded-[5px] relative w-[200px] h-[8px]'>
                    <div className='bg-[#FFB340] py-1 rounded-[5px] w-[4%] h-[8px] absolute top-0 left-0'></div>
                  </div>
                  <p className='font-pops text-sm text-[#3D3D3F]'>4%</p>
                </div>
                <div className='flex items-center gap-x-3'>
                  <p className='font-pops text-sm text-[#3D3D3F]'>2 Stars</p>
                  <div className='bg-[#DBDEDF] rounded-[5px] relative w-[200px] h-[8px]'>
                    <div className='bg-[#FFB340] py-1 rounded-[5px] w-[2%] h-[8px] absolute top-0 left-0'></div>
                  </div>
                  <p className='font-pops text-sm text-[#3D3D3F]'>2%</p>
                </div>
                <div className='flex items-center gap-x-3'>
                  <p className='font-pops text-sm text-[#3D3D3F]'>1 Stars</p>
                  <div className='bg-[#DBDEDF] rounded-[5px] relative w-[200px] h-[8px]'>
                    <div className='bg-[#FFB340] py-1 rounded-[5px] w-[4%] h-[8px] absolute top-0 left-0'></div>
                  </div>
                  <p className='font-pops text-sm text-[#3D3D3F]'>4%</p>
                </div>
              </div>
              <div>
                <button onClick={handleReview} className='py-3 px-11 bg-primary rounded-[3px] border-2 border-primary text-white font-pops font-medium '>Write a Review</button>
              </div>
            </div>
            <div className='mt-9'>
              <h4 className='text-2xl font-pops font-medium text-secondary'>Reviews (4)</h4>
            </div>
            <div className='border-t-2 border-[#F1F1F1] mt-9 mb-6 mr-[49px]'></div>
            <div className='pt-5'>
              <div>
                <div className='flex gap-x-4'>
                  <div>
                    <img src={reviewProfileImg} alt="" />
                  </div>
                  <div>
                    <p className='font-pops text-lg font-medium text-[#383838]'>Roveria</p>
                    <div className='flex gap-x-4'>
                      <p className='font-pops text-lg font-medium text-[#636363]'>5.0</p>
                      <div className='flex'>
                        <IoStar className='text-[#FAC96B] text-2xl' />
                        <IoStar className='text-[#FAC96B] text-2xl' />
                        <IoStar className='text-[#FAC96B] text-2xl' />
                        <IoStar className='text-[#FAC96B] text-2xl' />
                        <IoStar className='text-[#FAC96B] text-2xl' />
                      </div>
                      <p className='font-pops text-base md:text-lg text-[#A7A7A7]'>1 Month Ago</p>
                    </div>
                  </div>
                </div>
                <div className='mt-6'>
                  <p className='font-pops text-lg font-medium text-[#383838]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
              <div className='mt-8'>
                <div className='flex gap-x-4'>
                  <div>
                    <img src={reviewProfileImg} alt="" />
                  </div>
                  <div>
                    <p className='font-pops text-lg font-medium text-[#383838]'>Roveria</p>
                    <div className='flex gap-x-4'>
                      <p className='font-pops text-lg font-medium text-[#636363]'>5.0</p>
                      <div className='flex'>
                        <IoStar className='text-[#FAC96B] text-2xl' />
                        <IoStar className='text-[#FAC96B] text-2xl' />
                        <IoStar className='text-[#FAC96B] text-2xl' />
                        <IoStar className='text-[#FAC96B] text-2xl' />
                        <IoStar className='text-[#FAC96B] text-2xl' />
                      </div>
                      <p className='font-pops text-base md:text-lg text-[#A7A7A7]'>1 Month Ago</p>
                    </div>
                  </div>
                </div>
                <div className='mt-6'>
                  <p className='font-pops text-lg font-medium text-[#383838]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
              <div className='mt-8'>
                <div className='flex gap-x-4'>
                  <div>
                    <img src={reviewProfileImg} alt="" />
                  </div>
                  <div>
                    <p className='font-pops text-lg font-medium text-[#383838]'>Roveria</p>
                    <div className='flex gap-x-4'>
                      <p className='font-pops text-lg font-medium text-[#636363]'>5.0</p>
                      <div className='flex'>
                        <IoStar className='text-[#FAC96B] text-2xl' />
                        <IoStar className='text-[#FAC96B] text-2xl' />
                        <IoStar className='text-[#FAC96B] text-2xl' />
                        <IoStar className='text-[#FAC96B] text-2xl' />
                        <IoStar className='text-[#FAC96B] text-2xl' />
                      </div>
                      <p className='font-pops text-base md:text-lg text-[#A7A7A7]'>1 Month Ago</p>
                    </div>
                  </div>
                </div>
                <div className='mt-6'>
                  <p className='font-pops text-lg font-medium text-[#383838]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
              <div className='mt-8'>
                <div className='flex gap-x-4'>
                  <div>
                    <img src={reviewProfileImg} alt="" />
                  </div>
                  <div>
                    <p className='font-pops text-lg font-medium text-[#383838]'>Roveria</p>
                    <div className='flex gap-x-4'>
                      <p className='font-pops text-lg font-medium text-[#636363]'>5.0</p>
                      <div className='flex'>
                        <IoStar className='text-[#FAC96B] text-2xl' />
                        <IoStar className='text-[#FAC96B] text-2xl' />
                        <IoStar className='text-[#FAC96B] text-2xl' />
                        <IoStar className='text-[#FAC96B] text-2xl' />
                        <IoStar className='text-[#FAC96B] text-2xl' />
                      </div>
                      <p className='font-pops text-base md:text-lg text-[#A7A7A7]'>1 Month Ago</p>
                    </div>
                  </div>
                </div>
                <div className='mt-6'>
                  <p className='font-pops text-lg font-medium text-[#383838]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
              {
                addReview &&
                <div>
                  <div className='mt-10 lg:mt-[70px]'>
                    <h4 className='font-pops text-2xl font-semibold text-[#383838]'>Add Your Review</h4>
                  </div>
                  <div>
                    <p className='font-pops text-lg text-[#A7A7A7] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                  </div>
                  <ReviewForm />
                </div>
              }
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProductInfo