import React from 'react'
import Container from '../../layoutItems/Container'
import footerLogo from '../../assets/FooterLogo.png'
import footerContact from '../../assets/footerContact.png'
import SocialMedia from '../../layoutItems/SocialMedia'
import List from '../../layoutItems/List'
import Listitem from '../../layoutItems/Listitem'
import CopyRight from '../CopyRight/CopyRight'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-white'>
            <Container className='pt-[59px] pb-[62px] px-5 xl:px-0'>
                <div className='flex flex-col-reverse xl:flex-row'>
                    <div>
                        <div className='hidden xl:block'>
                            <Link to='/'>
                                <img src={footerLogo} alt="footerLogo" />
                            </Link>
                        </div>
                        <div className='hidden xl:block'>
                            <p className='w-[400px] mt-9 mb-[26px] ml-4 text-lg text-[#5C5C5C] font-pops'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div>
                            <SocialMedia className='mt-[30px] xl:mt-0' />
                        </div>
                    </div>
                    <div className='xl:ml-[97px] xl:mr-[124px]'>
                        <List>
                            <h4 className='font-pops text-xl font-medium text-secondary mb-6'>QUICK LINKS</h4>
                            <Listitem className='font-pops text-lg text-[#5C5C5C]' itemName='About us' />
                            <Listitem className='font-pops text-lg text-[#5C5C5C] mt-6' itemName='Contact us' />
                            <Listitem className='font-pops text-lg text-[#5C5C5C] mt-6' itemName='Products' />
                            <Listitem className='font-pops text-lg text-[#5C5C5C] mt-6' itemName='Login' />
                            <Listitem className='font-pops text-lg text-[#5C5C5C] mt-6' itemName='Sign Up' />
                        </List>
                    </div>
                    <div>
                        <List>
                            <h4 className='font-pops text-xl font-medium text-secondary mb-6 xl:mr-[135px]'>CUSTOMER AREA</h4>
                            <Listitem className='font-pops text-lg text-[#5C5C5C] ' itemName='My Account' />
                            <Listitem className='font-pops text-lg text-[#5C5C5C] mt-6' itemName='Orders' />
                            <Listitem className='font-pops text-lg text-[#5C5C5C] mt-6' itemName='Terms' />
                            <Listitem className='font-pops text-lg text-[#5C5C5C] mt-6' itemName='Privacy Policy' />
                            <Listitem className='font-pops text-lg text-[#5C5C5C] mt-6' itemName='Shipping Information' />
                        </List>
                    </div>
                    <div>
                        <h4 className='font-pops text-xl font-medium text-secondary mb-6'>CONTACT</h4>
                        <p className='w-[340px] text-base font-pops text-[#5C5C5C]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                        <div className='mt-[34px] flex item-center gap-x-6'>
                            <div>
                                <img src={footerContact} alt="footerContact" />
                            </div>
                            <div>
                                <p className='font-pops text-lg text-secondary'>Have any question?</p>
                                <p className='text-primary font-pops font-semibold text-[28px]'>099 456 789</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div>
                <CopyRight />
            </div>
        </div>
    )
}

export default Footer