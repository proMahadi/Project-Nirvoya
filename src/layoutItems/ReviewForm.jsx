import React, { useState } from 'react'
import { IoStar } from "react-icons/io5";

const ReviewForm = () => {
    const [name, setName] = useState('')
    const [nameErr, setNameErr] = useState('')

    const [email, setEmail] = useState('')
    const [emailErr, setEmailErr] = useState('')





    const handleName = (e) => {
        setName(e.target.value);
        setNameErr('')
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailErr('')

    }






    const handleClick = () => {

        if (!name) {
            setNameErr('Enter Your Name !')
        }
        if (!email) {
            setEmailErr('Enter Your Email !')
        }
        else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmailErr(['Email is invalid'])
        }
    }
    return (
        <div >
            <div className='mt-[28px]'>
                <p className='font-pops text-lg text-[#383838] mb-4'>Name *</p>
                <input onChange={handleName} className='border-[1px] border-[#A7A7A7] outline-none rounded-[5px] w-[286px] lg:w-[530px] xl:w-[745px] h-[60px]' type="text" />
                {
                    nameErr &&
                    <p className='text-red-500'>{nameErr}</p>
                }
            </div>
            <div className='mt-[28px]'>
                <p className='font-pops text-lg text-[#383838] mb-4'>Email *</p>
                <input onChange={handleEmail} className='border-[1px] border-[#A7A7A7] outline-none rounded-[5px] w-[286px] lg:w-[530px] xl:w-[745px] h-[60px]' type="text" />
                {
                    emailErr &&
                    <p className='text-red-500'>{emailErr}</p>
                }
            </div>
            <div className='mt-[28px]'>
                <p className='font-pops text-lg text-[#383838] mb-4'>Review *</p>
                <input className='border-[1px] border-[#A7A7A7] outline-none rounded-[5px] w-[286px] lg:w-[530px] xl:w-[745px] pb-[119px]' type="text" />
            </div>
            <div className='mt-[42px]'>
                <div className='flex items-center gap-x-4'>
                    <p className='font-pops text-lg text-[#383838] font-medium'>Rating</p>
                    <div className='flex'>
                        <IoStar className='text-[#FAC96B] text-2xl' />
                        <IoStar className='text-[#FAC96B] text-2xl' />
                        <IoStar className='text-[#FAC96B] text-2xl' />
                        <IoStar className='text-[#FAC96B] text-2xl' />
                        <IoStar className='text-[#FAC96B] text-2xl' />
                    </div>
                </div>
                <div className='mt-10'>
                    <button onClick={handleClick} className='py-3 px-11 bg-primary rounded-[3px] border-2 border-primary text-white font-pops font-medium '>Submit </button>
                </div>
            </div>
        </div>
    )
}

export default ReviewForm