import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Home = () => {
  return (
    <div className='bg-primary h-screen flex items-center justify-center text-black mx-auto'>
        <div className='h-full w-full flex flex-col items-center justify-between py-3 2xl:py-8'>
            <div className='px-4 md:px-8 flex flex-col md:flex-row w-full items-center md:justify-between gap-2'>
                <div className='flex text-lg md:text-2xl 2xl:text-3xl w-1/3 justify-center md:justify-start gap-3'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTiktok />
                </div>
                <div className='flex w-1/3 justify-center'>
                    <p className='uppercase text-xl md:text-4xl 2xl:text-5xl font-black reduce-letter-spacing-2'>prntclub</p>
                    <p className='text-xxx md:text-xx font-bold pt-1'>TM</p>
                </div>
                <div className='flex w-1/3 items-start justify-center md:justify-end'>
                    <a href='mailto:yalla@printclub.com' className='uppercase text-xx md:text-base 2xl:text-lg font-bold text-white bg-black flex items-center justify-center rounded-full px-2 border-primary border-8 cursor-pointer hover:bg-primary hover:text-black transition-all duration-500'>join the club</a>
                </div>
            </div>
            <div className='relative bg w-full flex flex-col items-center justify-center'>
                <p className='md:absolute md:top-0 2xl:-top-8 text-center flex justify-center items-center w-full uppercase font-bold italic reduce-letter-spacing-1 banner-text'>we love making stuffs.</p>
                <img className='z-10 md:pt-10 2xl:pt-16' src="/assets/Printclub.png" alt="" />
                <a href='mailto:yalla@printclub.com' className='md:absolute m-5 md:m-0 z-20 md:bottom-10 uppercase cursor-pointer text-base font-bold text-black bg-white flex items-center justify-center rounded-full px-2 border-transparent hover:border-black border-4 transition-all duration-500'>inquiries</a>
                <p className='md:absolute -left-8 bottom-12 bg-black text-white uppercase px-1 italic text-xx font-semibold md:rotate-90'>prntculb.com</p>
            </div>
            <div className='w-full px-8 flex flex-col md:flex-row items-center justify-between'>
                <div className='flex gap-1 uppercase text-xx 2xl:text-sm font-medium'>
                    <a className='italic' href='mailto:yalla@printclub.com'>yalla@prntclub.com</a> | 
                    <a className='italic' href="tel:+971555610645">+971 555 610 645</a>
                </div>
                <div className='flex gap-1 uppercase text-xx 2xl:text-sm font-medium'>
                    <p className='italic' href=''>&#169; 2024 prntclub.all right reserved</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home