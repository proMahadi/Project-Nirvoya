import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { baseUrl } from '../../layoutItems/config';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";


const ProductInfoSlider = () => {
    const [dots, setActiveDots] = useState(0)
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                style={{
                    ...style,
                    position: "absolute",
                    bottom: "0px",
                    right: "59px",
                }}
                onClick={onClick}
            ><FaAngleDown className='text-[#949494] hover:text-primary text-base font-bold hidden xl:block' />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                style={{
                    ...style,
                    position: "absolute",
                    top: "0px",
                    right: "59px",
                    zIndex: '99999'
                }}
                onClick={onClick}
            ><FaAngleUp className='text-[#949494] hover:text-primary text-base font-bold hidden xl:block' />
            </div>
        );
    }
    const settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (prev, next) => {
            setActiveDots(next);
        },
        appendDots: dots => (
            <div
                style={{
                    backgroundColor: "trasparent",
                    borderRadius: "10px",
                    width: '104px',
                    height: 'fit-content',
                    position: 'absolute',
                    top: '-42px',
                    right: '20px',
                }}
            >
                <ul>
                    {dots.map((item, index) => {
                        return (
                            <li key={index} style={{
                                display: 'block',
                                marginTop: '90px',
                                marginBottom: '90px',
                            }}>{item.props.children}</li>
                        );
                    })}
                </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={
                    i == dots ? {
                        width: "104px",
                        border: "2px #0198E9 solid"
                    } : {
                        width: "104px",
                        border: "none"
                    }
                }
            >
                <img src={`${baseUrl}/product${i + 1}.png`} />
            </div>
        ),
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    dotsClass: "slick-dots slick-thumb",
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical: true,
                    verticalSwiping: true,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                    beforeChange: (prev, next) => {
                        setActiveDots(next);
                    },
                    appendDots: dots => (
                        <div
                            style={{
                                backgroundColor: "trasparent",
                                borderRadius: "10px",
                                width: '60px',
                                height: 'fit-content',
                                position: 'absolute',
                                top: '-22px',
                                right: '20px',
                            }}
                        >
                            <ul>
                                {dots.map((item, index) => {
                                    return (
                                        <li key={index} style={{
                                            display: 'inline',
                                            marginTop: '30px',
                                            marginBottom: '30px',
                                        }}>{item.props.children}</li>
                                    );
                                })}
                            </ul>
                        </div>
                    ),
                    customPaging: i => (
                        <div
                            style={
                                i == dots ? {
                                    width: "60px",
                                    border: "2px #0198E9 solid"
                                } : {
                                    width: "60px",
                                    border: "none"
                                }
                            }
                        >
                            <img src={`${baseUrl}/product${i + 1}.png`} />
                        </div>
                    ),
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    dotsClass: "slick-dots slick-thumb",
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical: true,
                    verticalSwiping: true,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                    beforeChange: (prev, next) => {
                        setActiveDots(next);
                    },
                    appendDots: dots => (
                        <div
                            style={{
                                backgroundColor: "trasparent",
                                borderRadius: "10px",
                                width: '60px',
                                height: 'fit-content',
                                position: 'absolute',
                                top: '-20px',
                                right: '10px',
                            }}
                        >
                            <ul>
                                {dots.map((item, index) => {
                                    return (
                                        <li key={index} style={{
                                            display: 'inline',
                                            marginTop: '30px',
                                            marginBottom: '30px',
                                        }}>{item.props.children}</li>
                                    );
                                })}
                            </ul>
                        </div>
                    ),
                    customPaging: i => (
                        <div
                            style={
                                i == dots ? {
                                    width: "60px",
                                    border: "2px #0198E9 solid"
                                } : {
                                    width: "60px",
                                    border: "none"
                                }
                            }
                        >
                            <img src={`${baseUrl}/product${i + 1}.png`} />
                        </div>
                    ),
                }
            }
        ]
    };
    return (
        <div>
            <div>
                <Slider {...settings} className='lg:w-[678px] w-auto'>
                    <div>
                        <img className='lg:w-[519px] sm:w-[350px]  md:w-full object-cover' src={"https://i.ibb.co/NSzqfbp/product1.png"} />
                    </div>
                    <div>
                        <img className='lg:w-[519px] sm:w-[350px] md:w-full object-cover' src={"https://i.ibb.co/YLSWBWv/product2.png"} />
                    </div>
                    <div>
                        <img className='lg:w-[519px] sm:w-[350px] md:w-full object-cover' src={"https://i.ibb.co/2SVBpFW/product3.png"} />
                    </div>
                    <div>
                        <img className='lg:w-[519px] sm:w-[350px] md:w-full object-cover' src={"https://i.ibb.co/wBq7sSv/product4.png"} />
                    </div>
                    {/* <div>
                        <img className='lg:w-[519px] sm:w-[350px]  md:w-full object-cover' src={baseUrl + "/product1.png"} />
                    </div>
                    <div>
                        <img className='lg:w-[519px] sm:w-[350px] md:w-full object-cover' src={baseUrl + "/product2.png"} />
                    </div>
                    <div>
                        <img className='lg:w-[519px] sm:w-[350px] md:w-full object-cover' src={baseUrl + "/product3.png"} />
                    </div>
                    <div>
                        <img className='lg:w-[519px] sm:w-[350px] md:w-full object-cover' src={baseUrl + "/product4.png"} />
                    </div> */}
                </Slider>
            </div>
        </div>
    )
}

export default ProductInfoSlider