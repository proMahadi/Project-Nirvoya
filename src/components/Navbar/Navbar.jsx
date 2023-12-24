import React from 'react'
import Container from '../../layoutItems/Container'
import logo from '../../assets/logo.png'
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='bg-[#FBFBFB]'>
            <Container className='pt-8 px-2 xl:px-0'>
                <div className='flex justify-between items-center'>
                    <div>
                        <Link to='/'>
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>

                    {/* input div start */}
                    <div className='hidden md:block'>
                        <div className='relative'>
                            <input type="text" placeholder="I'm looking for..." className='outline-none bg-[#F6F6F6] py-4 pl-5 w-[286px] lg:w-[530px] xl:w-[778px] rounded-[5px] border-[1px] border-[#F1F1F1] placeholder:text-[#9B9B9B] placeholder:text-base placeholder:font-pops ' />
                            <button className='py-3.5 px-[18px] bg-primary absolute right-0 rounded-r-[5px] '><IoSearch className='text-white text-[28px]' /></button>
                        </div>
                    </div>
                    {/* input div end */}

                    <div className='flex  gap-x-3 sm:gap-x-5 lg:gap-x-10 items-center'>


                        {/* profile login div start */}
                        <div className='flex items-center sm:gap-1.5'>
                            <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9847 15.3462C8.11706 15.3462 4.81421 15.931 4.81421 18.2729C4.81421 20.6148 8.09611 21.2205 11.9847 21.2205C15.8523 21.2205 19.1542 20.6348 19.1542 18.2938C19.1542 15.9529 15.8732 15.3462 11.9847 15.3462Z" stroke="#4D4D4D" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9846 12.0059C14.5227 12.0059 16.5799 9.94779 16.5799 7.40969C16.5799 4.8716 14.5227 2.81445 11.9846 2.81445C9.44655 2.81445 7.38845 4.8716 7.38845 7.40969C7.37988 9.93922 9.42369 11.9973 11.9523 12.0059H11.9846Z" stroke="#4D4D4D" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <p className='text-base text-[#29292E] font-pops hidden sm:block'>Login</p>
                            </div>
                        </div>
                        {/* profile login div end */}


                        {/* wishlist div start */}
                        <div className='flex items-center sm:gap-1.5'>
                            <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.87187 11.5983C1.79887 8.24832 3.05287 4.41932 6.56987 3.28632C8.41987 2.68932 10.4619 3.04132 11.9999 4.19832C13.4549 3.07332 15.5719 2.69332 17.4199 3.28632C20.9369 4.41932 22.1989 8.24832 21.1269 11.5983C19.4569 16.9083 11.9999 20.9983 11.9999 20.9983C11.9999 20.9983 4.59787 16.9703 2.87187 11.5983Z" stroke="#4D4D4D" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <p className='text-base text-[#29292E] font-pops hidden sm:block'>Wishlist</p>
                            </div>
                        </div>
                        {/* wishlist div end */}


                        {/* wishlist div end */}
                        <div className='flex items-center sm:gap-1.5'>
                            <div>
                                <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8361 6.5456L15.7257 0.374327C15.6019 0.188765 15.4095 0.0599751 15.1907 0.0162902C14.972 -0.0273946 14.7448 0.0176037 14.5593 0.141386C14.3737 0.265168 14.2449 0.457595 14.2012 0.676335C14.1576 0.895075 14.2026 1.12221 14.3263 1.30777L17.8155 6.5456H5.68427L9.17691 1.30781C9.30069 1.12224 9.34572 0.895074 9.30203 0.676335C9.25835 0.457595 9.12956 0.265168 8.94399 0.141386C8.75843 0.0176036 8.5313 -0.0273946 8.31256 0.0162902C8.09385 0.0599699 7.90144 0.188734 7.77766 0.37426L3.6638 6.5456H0.840909C0.617886 6.5456 0.403998 6.63419 0.246297 6.79189C0.0885955 6.94959 0 7.16348 0 7.38651C0 7.60953 0.0885954 7.82342 0.246297 7.98112C0.403998 8.13882 0.617887 8.22742 0.840909 8.22742H2.18182V17.2047C2.18182 18.0064 2.50028 18.7752 3.06715 19.3421C3.63403 19.909 4.40287 20.2274 5.20455 20.2274H18.2955C19.0971 20.2274 19.866 19.909 20.4328 19.3421C20.9997 18.7752 21.3182 18.0064 21.3182 17.2047V8.22742H22.6591C22.8821 8.22742 23.096 8.13882 23.2537 7.98112C23.4114 7.82342 23.5 7.60953 23.5 7.38651C23.5 7.16348 23.4114 6.94959 23.2537 6.79189C23.096 6.63419 22.8821 6.5456 22.6591 6.5456H19.8361ZM3.86364 8.22742H19.6364V17.2047C19.6364 17.5603 19.4951 17.9014 19.2436 18.1529C18.9922 18.4043 18.6511 18.5456 18.2955 18.5456H5.20455C4.84891 18.5456 4.50785 18.4043 4.25638 18.1529C4.00491 17.9014 3.86364 17.5603 3.86364 17.2047V8.22742ZM7.6 9.74995C7.13056 9.74995 6.75 10.1305 6.75 10.5999V15.3999C6.75 15.8694 7.13056 16.2499 7.6 16.2499C8.06944 16.2499 8.45 15.8694 8.45 15.3999V10.5999C8.45 10.1305 8.06944 9.74995 7.6 9.74995ZM10.75 10.5999C10.75 10.1305 11.1306 9.74995 11.6 9.74995C12.0694 9.74995 12.45 10.1305 12.45 10.5999V15.3999C12.45 15.8694 12.0694 16.2499 11.6 16.2499C11.1306 16.2499 10.75 15.8694 10.75 15.3999V10.5999ZM15.6 9.74995C15.1306 9.74995 14.75 10.1305 14.75 10.5999V15.3999C14.75 15.8694 15.1306 16.2499 15.6 16.2499C16.0694 16.2499 16.45 15.8694 16.45 15.3999V10.5999C16.45 10.1305 16.0694 9.74995 15.6 9.74995Z" fill="#4C4C4C" />
                                </svg>
                            </div>
                            <div className='text-base text-[#29292E] font-pops hidden sm:block'>My cart</div>
                        </div>
                        {/* wishlist div end */}


                    </div>
                </div>
                {/* input div start */}
                <div className='md:hidden block mt-5'>
                    <div className='relative'>
                        <input type="text" placeholder="I'm looking for..." className='outline-none bg-[#F6F6F6] py-4 pl-5 w-full  rounded-[5px] border-[1px] border-[#F1F1F1] placeholder:text-[#9B9B9B] placeholder:text-base placeholder:font-pops ' />
                        <button className='py-3.5 px-[18px] bg-primary absolute right-0 rounded-r-[5px] '><IoSearch className='text-white text-[28px]' /></button>
                    </div>
                </div>
                {/* input div end */}
            </Container>
        </div>
    )
}

export default Navbar