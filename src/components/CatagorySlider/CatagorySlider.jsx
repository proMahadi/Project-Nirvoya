import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from '../../layoutItems/Container';
import List from '../../layoutItems/List';
import Listitem from '../../layoutItems/Listitem';
import { FaAngleRight } from "react-icons/fa6";

const CatagorySlider = () => {
    // catagory dropdowns states start
    const [showWomenCatagory, setShowWomenCatagory] = useState(false)
    const [showMenCatagory, setShowMenCatagory] = useState(false)
    const [showKidsCatagory, setShowKidsCatagory] = useState(false)
    const [showHomeCatagory, setShowHomeCatagory] = useState(false)
    const [showArtsCatagory, setShowArtsCatagory] = useState(false)
    const [showComputerCatagory, setShowComputerCatagory] = useState(false)
    const [showFoodCatagory, setShowFoodCatagory] = useState(false)
    // catagory dropdowns states end


    // catagory dropdowns functions start
    const handleWomenHover = () => {
        setShowWomenCatagory(true)
    }
    const handleMenHover = () => {
        setShowMenCatagory(true)
    }
    const handleKidsHover = () => {
        setShowKidsCatagory(true)
    }
    const handleHomeHover = () => {
        setShowHomeCatagory(true)
    }
    const handleArtsHover = () => {
        setShowArtsCatagory(true)
    }
    const handleComputerHover = () => {
        setShowComputerCatagory(true)
    }
    const handleFoodHover = () => {
        setShowFoodCatagory(true)
    }
    const handleLeave = () => {
        setShowWomenCatagory(false)
        setShowMenCatagory(false)
        setShowKidsCatagory(false)
        setShowHomeCatagory(false)
        setShowArtsCatagory(false)
        setShowComputerCatagory(false)
        setShowFoodCatagory(false)
    }
    // catagory dropdowns functions end


    // slider functions start
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            style={{ ...style, 
                top: "5px",
                right: "0px",
                position:"absolute",
             }}
            onClick={onClick}
          >
            <FaAngleRight className='text-base text-[#999999] block xl:hidden' />
          </div>
        );
      }
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
        ],
    };
    // slider functions end


    return (
        <div className='bg-[#FBFBFB] border-b-[1px] border-[#EFEEEE]'>
            <Container className='pt-[34px]'>
                <div className='text-center relative'>
                    <Slider {...settings}  >
                        <div>
                            <p className={`text-secondary text-[13px] sm:text-sm xl:text-base font-medium font-pops uppercase xl:w-[148px] hover:text-primary hover:border-b-2 hover:border-primary pb-3 ${showWomenCatagory ? 'text-[#0198E9] text-primary border-b-2 border-primary' : 'text-secondary'}`} onMouseEnter={handleWomenHover} onMouseLeave={handleLeave}>Women's Fashion</p>
                        </div>
                        <div>
                            <p className={`text-secondary text-[13px] sm:text-sm xl:text-base font-medium font-pops uppercase xl:w-[120px] hover:text-primary hover:border-b-2 hover:border-primary pb-3 ${showMenCatagory ? 'text-[#0198E9] text-primary border-b-2 border-primary' : 'text-secondary'}`} onMouseEnter={handleMenHover} onMouseLeave={handleLeave}>Men's Fashion</p>
                        </div>
                        <div>
                            <p className={`text-secondary text-[13px] sm:text-sm xl:text-base font-medium font-pops uppercase xl:w-[111px] hover:text-primary hover:border-b-2 hover:border-primary pb-3 ${showKidsCatagory ? 'text-[#0198E9] text-primary border-b-2 border-primary' : 'text-secondary'}`} onMouseEnter={handleKidsHover} onMouseLeave={handleLeave}>Kid's Fashion</p>
                        </div>
                        <div>
                            <p className={`text-secondary text-[13px] sm:text-sm xl:text-base font-medium font-pops uppercase xl:w-[139px] hover:text-primary hover:border-b-2 hover:border-primary pb-3 ${showHomeCatagory ? 'text-[#0198E9] text-primary border-b-2 border-primary' : 'text-secondary'}`} onMouseEnter={handleHomeHover} onMouseLeave={handleLeave}>Home & Lifestyle</p>
                        </div>
                        <div>
                            <p className={`text-secondary text-[13px] sm:text-sm xl:text-base font-medium font-pops uppercase xl:w-[121px] hover:text-primary hover:border-b-2 hover:border-primary pb-3 ${showArtsCatagory ? 'text-[#0198E9] border-b-2 border-primary' : 'text-secondary'}`} onMouseEnter={handleArtsHover} onMouseLeave={handleLeave}>Arts & Crafts</p>
                        </div>
                        <div>
                            <p className={`text-secondary text-[13px] sm:text-sm xl:text-base font-medium font-pops uppercase xl:w-[214px] hover:text-primary hover:border-b-2 hover:border-primary pb-3 ${showComputerCatagory ? 'text-[#0198E9] text-primary border-b-2 border-primary' : 'text-secondary'}`} onMouseEnter={handleComputerHover} onMouseLeave={handleLeave}>Computer & Electronics</p>
                        </div>
                        <div>
                            <p className={`text-secondary text-[13px] sm:text-sm xl:text-base font-medium font-pops uppercase xl:w-[256px] hover:text-primary hover:border-b-2 hover:border-primary pb-3 ${showFoodCatagory ? 'text-[#0198E9] text-primary border-b-2 border-primary' : 'text-secondary'}`} onMouseEnter={handleFoodHover} onMouseLeave={handleLeave}>Food & Grocery</p>
                        </div>
                    </Slider>

                    {/* hover hidden catagory items start */}
                    {
                        showWomenCatagory &&
                        <div onMouseEnter={handleWomenHover} onMouseLeave={handleLeave} className='z-10 flex flex-wrap xl:flex-nowrap gap-x-[150px] bg-white pt-[30px] pb-[26px] px-[71px] absolute top-[42px] lg:top-[40px] left-0 text-left' >
                            <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0'>
                                <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Saree</h4>
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Cotton' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Silk' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Katan' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Muslin' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Jamdani' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Georgette' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Nakshi Kantha' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Linen' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Khadi' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Tangail Taant' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Monipuri' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Dhakai Benaroshi' />
                            </List>
                            <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0 '>
                                <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Clothes</h4>
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='T-shirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Shorts' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Shirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Tracksuit' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Jeans' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Georgette' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Waistcoat' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sweater' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='coats' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Suit' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sweatshirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Uniform' />
                            </List>
                            <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0'>
                                <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Cosmetic</h4>
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Perfume' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Eye make-up' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Skin care' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Hair care' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Make-up' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Oral Care' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Body Care' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sanitary pad' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Shower Gels & Creams' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Hair Removal Products' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Lipstick' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Suntan cream' />
                            </List>
                            <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0' >
                                <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Sports & Outdoor</h4>
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sweatshirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='T-shirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sports Bra' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Leggings' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Tracksuit' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Running Shoes' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sports Bag' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sports Equipment' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Outdoor Shoes' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Snow Boot' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Outdoor Equipment' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sports Accessories' />
                            </List>
                            <div>
                                <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0'>
                                    <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Personal Care</h4>
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Perfume' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sexual Health' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='After Shave Products' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Razor blade' />
                                </List>
                                <List className='font-pops text-sm text-[#757575] mt-8'>
                                    <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Shoes</h4>
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Heeled shoes' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='sneakers' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Casual Shoes' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Babet' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sandals' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Slipper' />
                                </List>
                            </div>
                        </div>
                    }
                    {
                        showMenCatagory &&
                        <div onMouseEnter={handleMenHover} onMouseLeave={handleLeave} className='z-10 flex flex-wrap xl:flex-nowrap gap-x-[150px] bg-white pt-[30px] pb-[26px] px-[71px] absolute top-[42px] lg:top-[40px] left-0 text-left' >
                            <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0'>
                                <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Saree</h4>
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Cotton' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Silk' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Katan' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Muslin' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Jamdani' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Georgette' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Nakshi Kantha' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Linen' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Khadi' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Tangail Taant' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Monipuri' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Dhakai Benaroshi' />
                            </List>
                            <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0'>
                                <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Clothes</h4>
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='T-shirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Shorts' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Shirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Tracksuit' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Jeans' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Georgette' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Waistcoat' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sweater' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='coats' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Suit' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sweatshirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Uniform' />
                            </List>
                            <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0'>
                                <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Cosmetic</h4>
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Perfume' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Eye make-up' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Skin care' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Hair care' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Make-up' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Oral Care' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Body Care' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sanitary pad' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Shower Gels & Creams' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Hair Removal Products' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Lipstick' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Suntan cream' />
                            </List>
                            <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0' >
                                <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Sports & Outdoor</h4>
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sweatshirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='T-shirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sports Bra' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Leggings' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Tracksuit' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Running Shoes' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sports Bag' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sports Equipment' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Outdoor Shoes' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Snow Boot' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Outdoor Equipment' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sports Accessories' />
                            </List>
                            <div>
                                <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0'>
                                    <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Personal Care</h4>
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Perfume' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sexual Health' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='After Shave Products' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Razor blade' />
                                </List>
                                <List className='font-pops text-sm text-[#757575] mt-8'>
                                    <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Shoes</h4>
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Heeled shoes' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='sneakers' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Casual Shoes' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Babet' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sandals' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Slipper' />
                                </List>
                            </div>
                        </div>
                    }
                    {
                        showKidsCatagory &&
                        <div onMouseEnter={handleKidsHover} onMouseLeave={handleLeave} className='z-10 flex flex-wrap xl:flex-nowrap gap-x-[150px] bg-white pt-[30px] pb-[26px] px-[71px] absolute top-[42px] lg:top-[40px] left-0 text-left' >
                            <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0'>
                                <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Saree</h4>
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Cotton' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Silk' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Katan' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Muslin' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Jamdani' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Georgette' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Nakshi Kantha' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Linen' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Khadi' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Tangail Taant' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Monipuri' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Dhakai Benaroshi' />
                            </List>
                            <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0'>
                                <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Clothes</h4>
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='T-shirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Shorts' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Shirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Tracksuit' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Jeans' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Georgette' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Waistcoat' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sweater' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='coats' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Suit' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sweatshirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Uniform' />
                            </List>
                            <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0'>
                                <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Cosmetic</h4>
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Perfume' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Eye make-up' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Skin care' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Hair care' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Make-up' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Oral Care' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Body Care' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sanitary pad' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Shower Gels & Creams' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Hair Removal Products' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Lipstick' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Suntan cream' />
                            </List>
                            <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0' >
                                <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Sports & Outdoor</h4>
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sweatshirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='T-shirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sports Bra' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Leggings' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Tracksuit' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Running Shoes' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sports Bag' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sports Equipment' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Outdoor Shoes' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Snow Boot' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Outdoor Equipment' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sports Accessories' />
                            </List>
                            <div>
                                <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0'>
                                    <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Personal Care</h4>
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Perfume' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sexual Health' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='After Shave Products' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Razor blade' />
                                </List>
                                <List className='font-pops text-sm text-[#757575] mt-8'>
                                    <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Shoes</h4>
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Heeled shoes' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='sneakers' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Casual Shoes' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Babet' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sandals' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Slipper' />
                                </List>
                            </div>
                        </div>
                    }
                    {
                        showHomeCatagory &&
                        <div onMouseEnter={handleHomeHover} onMouseLeave={handleLeave} className='z-10 flex flex-wrap xl:flex-nowrap gap-x-[150px] bg-white pt-[30px] pb-[26px] px-[71px] absolute top-[42px] lg:top-[40px] left-0 text-left' >
                            <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0'>
                                <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Saree</h4>
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Cotton' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Silk' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Katan' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Muslin' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Jamdani' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Georgette' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Nakshi Kantha' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Linen' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Khadi' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Tangail Taant' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Monipuri' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Dhakai Benaroshi' />
                            </List>
                            <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0'>
                                <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Clothes</h4>
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='T-shirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Shorts' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Shirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Tracksuit' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Jeans' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Georgette' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Waistcoat' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sweater' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='coats' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Suit' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sweatshirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Uniform' />
                            </List>
                            <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0'>
                                <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Cosmetic</h4>
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Perfume' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Eye make-up' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Skin care' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Hair care' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Make-up' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Oral Care' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Body Care' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sanitary pad' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Shower Gels & Creams' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Hair Removal Products' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Lipstick' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Suntan cream' />
                            </List>
                            <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0' >
                                <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Sports & Outdoor</h4>
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sweatshirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='T-shirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sports Bra' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Leggings' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Tracksuit' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Running Shoes' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sports Bag' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sports Equipment' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Outdoor Shoes' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Snow Boot' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Outdoor Equipment' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sports Accessories' />
                            </List>
                            <div>
                                <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0'>
                                    <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Personal Care</h4>
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Perfume' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sexual Health' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='After Shave Products' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Razor blade' />
                                </List>
                                <List className='font-pops text-sm text-[#757575] mt-8'>
                                    <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Shoes</h4>
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Heeled shoes' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='sneakers' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Casual Shoes' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Babet' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sandals' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Slipper' />
                                </List>
                            </div>
                        </div>
                    }
                    {
                        showArtsCatagory &&
                        <div onMouseEnter={handleArtsHover} onMouseLeave={handleLeave} className='z-10 flex flex-wrap xl:flex-nowrap gap-x-[150px] bg-white pt-[30px] pb-[26px] px-[71px] absolute top-[42px] lg:top-[40px] left-0 text-left' >
                            <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0'>
                                <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Saree</h4>
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Cotton' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Silk' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Katan' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Muslin' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Jamdani' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Georgette' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Nakshi Kantha' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Linen' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Khadi' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Tangail Taant' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Monipuri' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Dhakai Benaroshi' />
                            </List>
                            <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0'>
                                <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Clothes</h4>
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='T-shirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Shorts' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Shirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Tracksuit' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Jeans' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Georgette' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Waistcoat' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sweater' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='coats' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Suit' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sweatshirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Uniform' />
                            </List>
                            <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0'>
                                <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Cosmetic</h4>
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Perfume' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Eye make-up' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Skin care' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Hair care' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Make-up' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Oral Care' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Body Care' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sanitary pad' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Shower Gels & Creams' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Hair Removal Products' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Lipstick' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Suntan cream' />
                            </List>
                            <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0' >
                                <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Sports & Outdoor</h4>
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sweatshirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='T-shirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sports Bra' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Leggings' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Tracksuit' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Running Shoes' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sports Bag' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sports Equipment' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Outdoor Shoes' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Snow Boot' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Outdoor Equipment' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sports Accessories' />
                            </List>
                            <div>
                                <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0'>
                                    <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Personal Care</h4>
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Perfume' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sexual Health' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='After Shave Products' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Razor blade' />
                                </List>
                                <List className='font-pops text-sm text-[#757575] mt-8'>
                                    <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Shoes</h4>
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Heeled shoes' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='sneakers' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Casual Shoes' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Babet' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sandals' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Slipper' />
                                </List>
                            </div>
                        </div>
                    }
                    {
                        showComputerCatagory &&
                        <div onMouseEnter={handleComputerHover} onMouseLeave={handleLeave} className='z-10 flex flex-wrap xl:flex-nowrap gap-x-[150px] bg-white pt-[30px] pb-[26px] px-[71px] absolute top-[42px] lg:top-[40px] left-0 text-left' >
                            <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0'>
                                <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Saree</h4>
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Cotton' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Silk' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Katan' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Muslin' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Jamdani' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Georgette' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Nakshi Kantha' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Linen' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Khadi' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Tangail Taant' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Monipuri' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Dhakai Benaroshi' />
                            </List>
                            <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0'>
                                <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Clothes</h4>
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='T-shirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Shorts' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Shirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Tracksuit' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Jeans' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Georgette' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Waistcoat' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sweater' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='coats' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Suit' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sweatshirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Uniform' />
                            </List>
                            <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0'>
                                <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Cosmetic</h4>
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Perfume' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Eye make-up' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Skin care' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Hair care' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Make-up' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Oral Care' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Body Care' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sanitary pad' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Shower Gels & Creams' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Hair Removal Products' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Lipstick' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Suntan cream' />
                            </List>
                            <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0' >
                                <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Sports & Outdoor</h4>
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sweatshirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='T-shirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sports Bra' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Leggings' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Tracksuit' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Running Shoes' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sports Bag' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sports Equipment' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Outdoor Shoes' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Snow Boot' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Outdoor Equipment' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sports Accessories' />
                            </List>
                            <div>
                                <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0'>
                                    <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Personal Care</h4>
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Perfume' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sexual Health' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='After Shave Products' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Razor blade' />
                                </List>
                                <List className='font-pops text-sm text-[#757575] mt-8'>
                                    <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Shoes</h4>
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Heeled shoes' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='sneakers' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Casual Shoes' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Babet' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sandals' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Slipper' />
                                </List>
                            </div>
                        </div>
                    }
                    {
                        showFoodCatagory &&
                        <div onMouseEnter={handleFoodHover} onMouseLeave={handleLeave} className='z-10 flex flex-wrap xl:flex-nowrap gap-x-[150px] bg-white pt-[30px] pb-[26px] px-[71px] absolute top-[42px] lg:top-[40px] left-0 text-left' >
                            <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0'>
                                <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Saree</h4>
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Cotton' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Silk' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Katan' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Muslin' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Jamdani' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Georgette' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Nakshi Kantha' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Linen' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Khadi' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Tangail Taant' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Monipuri' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Dhakai Benaroshi' />
                            </List>
                            <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0'>
                                <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Clothes</h4>
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='T-shirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Shorts' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Shirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Tracksuit' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Jeans' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Georgette' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Waistcoat' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sweater' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='coats' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Suit' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sweatshirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Uniform' />
                            </List>
                            <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0'>
                                <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Cosmetic</h4>
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Perfume' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Eye make-up' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Skin care' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Hair care' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Make-up' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Oral Care' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Body Care' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sanitary pad' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Shower Gels & Creams' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Hair Removal Products' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Lipstick' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Suntan cream' />
                            </List>
                            <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0' >
                                <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Sports & Outdoor</h4>
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sweatshirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='T-shirt' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sports Bra' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Leggings' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Tracksuit' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Running Shoes' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sports Bag' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sports Equipment' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Outdoor Shoes' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Snow Boot' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Outdoor Equipment' />
                                <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sports Accessories' />
                            </List>
                            <div>
                                <List className='font-pops text-sm text-[#757575] mt-3 xl:mt-0'>
                                    <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Personal Care</h4>
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Perfume' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sexual Health' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='After Shave Products' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Razor blade' />
                                </List>
                                <List className='font-pops text-sm text-[#757575] mt-8'>
                                    <h4 className='font-pops text-base font-medium text-[#3D3D3F]'>Shoes</h4>
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Heeled shoes' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='sneakers' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Casual Shoes' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Babet' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Sandals' />
                                    <Listitem className='hover:text-primary cursor-pointer mt-1.5' itemName='Slipper' />
                                </List>
                            </div>
                        </div>
                    }
                    {/* hover hidden catagory items start */}
                </div>
            </Container>
        </div>
    )
}

export default CatagorySlider