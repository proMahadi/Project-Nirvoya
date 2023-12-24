import React, { useState } from 'react'
import Container from '../../layoutItems/Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bannerSliderImg from '../../assets/bannerSliderImg.png'
import bannerCollectionImgOne from '../../assets/bannerCollectionImgOne.png'
import bannerCollectionImgTwo from '../../assets/bannerCollectionImgTwo.png'

const Banner = () => {
    const [dots, setActiveDots] = useState(0)
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "none"}}
            onClick={onClick}
          />
        );
      }
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 6000,
        cssEase: "linear",
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (prev, next) => {
            setActiveDots(next);
        },
        appendDots: dots => (
            <div
                style={{
                    backgroundColor: "transparent",
                    position: 'absolute',
                    bottom: '20px',
                    left: '40%',
                    width: 'fit-content',
                    height: 'fit-content',
                }}
            >
                <ul>
                    {dots.map((item, index) => {
                        return (
                            <li key={index} style={{
                                marginRight: '8px',
                                marginleft: '8px',
                            }}>{item.props.children}</li>
                        );
                    })}
                </ul>

            </div>
        ),
        customPaging: i => (
            <div
                style={
                    // this is state decleared dots
                    i == dots ? {   

                        width: "24px",
                        height: "12px",
                        background: "#0198E9",
                        border: "1px #0198E9 solid",
                        borderRadius: "8px",
                    } : {

                        width: "12px",
                        height: "12px",
                        background: "#fff",
                        border: "1px #fff solid",
                        borderRadius: "50%"
                    }
                }
            />
        ),
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    beforeChange: (prev, next) => {
                        setActiveDots(next);
                    },
                    appendDots: dots => (
                        <div
                            style={{
                                backgroundColor: "transparent",
                                position: 'absolute',
                                bottom: '10px',
                                left: '20%',
                                width: 'fit-content',
                                height: 'fit-content',
                            }}
                        >
                            <ul>
                                {dots.map((item, index) => {
                                    return (
                                        <li key={index} style={{
                                            marginRight: '4px',
                                            marginleft: '4px',
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

                                    width: "16px",
                                    height: "8px",
                                    background: "#0198E9",
                                    border: "1px #0198E9 solid",
                                    borderRadius: "8px",
                                } : {

                                    width: "8px",
                                    height: "8px",
                                    background: "#fff",
                                    border: "1px #fff solid",
                                    borderRadius: "50%"
                                }
                            }
                        />
                    ),
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    beforeChange: (prev, next) => {
                        setActiveDots(next);
                    },
                    appendDots: dots => (
                        <div
                            style={{
                                backgroundColor: "transparent",
                                position: 'absolute',
                                bottom: '4px',
                                left: '23%',
                                width: 'fit-content',
                                height: 'fit-content',
                            }}
                        >
                            <ul>
                                {dots.map((item, index) => {
                                    return (
                                        <li key={index} style={{
                                            marginRight: '4px',
                                            marginleft: '4px',
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

                                    width: "16px",
                                    height: "8px",
                                    background: "#0198E9",
                                    border: "1px #0198E9 solid",
                                    borderRadius: "8px",
                                } : {

                                    width: "8px",
                                    height: "8px",
                                    background: "#fff",
                                    border: "1px #fff solid",
                                    borderRadius: "50%"
                                }
                            }
                        />
                    ),
                }
            }
        ]
    };
    return (
        <div className='bg-[#FAFAFA]'>
            <Container className='pt-1 lg:pt-3 px-2 lg:px-0'>
                <div className='flex'>
                    <div className='w-full lg:w-2/3'>
                        <Slider {...settings}>
                            <div>
                                <img src={bannerSliderImg} alt="bannerSliderImg" />
                            </div>
                            <div>
                                <img src={bannerSliderImg} alt="bannerSliderImg" />
                            </div>
                            <div>
                                <img src={bannerSliderImg} alt="bannerSliderImg" />
                            </div>
                            <div>
                                <img src={bannerSliderImg} alt="bannerSliderImg" />
                            </div>
                            <div>
                                <img src={bannerSliderImg} alt="bannerSliderImg" />
                            </div>
                        </Slider>
                    </div>
                    <div className='hidden lg:block xl:w-1/3 ml-4 xl:ml-7 '>
                        <div className='relative hover:scale-105 duration-300'>
                            <img src={bannerCollectionImgOne} alt="bannerCollectionImg" />
                            <button className='py-2.5 px-3.5 xl:py-4 xl:px-8 text-primary text-xl font-semibold font-mont backdrop-blur-sm bg-[#FAFAFA]/70 absolute left-[50px] xl:left-[90px] bottom-[18px] rounded-[5px]'>Groceries collection</button>
                        </div>
                        <div className='mt-7 relative hover:scale-105 duration-300'>
                            <img src={bannerCollectionImgTwo} alt="bannerCollectionImg" />
                            <button className='py-2.5 px-3.5 xl:py-4 xl:px-8 text-primary text-xl font-semibold font-mont backdrop-blur-sm bg-[#FAFAFA]/70 absolute left-[10px] xl:left-[48px] bottom-[18px] rounded-[5px]'>Health & Beauty collection</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Banner