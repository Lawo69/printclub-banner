import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Home = () => {
  return (
    <div className='bg-primary h-screen flex items-center justify-center text-black overflow-hidden mx-auto'>
        <div className='h-full w-full flex flex-col items-center justify-between py-3 lg:py-8'>
            <div className='px-4 md:px-8 flex flex-col md:flex-row w-full items-center md:justify-between gap-2'>
                <div className='flex text-lg md:text-2xl xl:text-3xl w-1/3 justify-center md:justify-start gap-3'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTiktok />
                </div>
                <div className='flex w-1/3 justify-center'>
                    <p className='uppercase text-xl md:text-4xl xl:text-5xl font-black reduce-letter-spacing-2'>printclub</p>
                    <p className='text-xxx md:text-xx font-bold pt-1'>TM</p>
                </div>
                <div className='flex w-1/3 items-start justify-center md:justify-end'>
                    <div className='uppercase text-xx md:text-base xl:text-lg font-bold text-white bg-black flex items-center justify-center rounded-full px-2 border-primary border-8 cursor-pointer hover:bg-primary hover:text-black'>join the club</div>
                </div>
            </div>
            <div className='relative w-full flex flex-col items-center justify-center'>
                <p className='md:absolute md:top-0 lg:-top-10 text-center flex justify-center items-center w-full uppercase font-bold italic reduce-letter-spacing-1 banner-text'>we love making stuffs.</p>
                <img className='z-10 md:pt-16' src="/assets/banner.gif" alt="" />
                <div className='md:absolute m-5 md:m-0 z-20 md:bottom-10 uppercase text-base font-bold text-black bg-white flex items-center justify-center rounded-full px-2'>inquiries</div>
                <p className='md:absolute -left-8 bottom-12 bg-black text-white uppercase px-1 italic text-xx font-semibold md:rotate-90'>printculb.com</p>
            </div>
            <div className='w-full px-8 flex flex-col md:flex-row items-center justify-between'>
                <div className='flex gap-1 uppercase text-xx xl:text-sm font-medium'>
                    <a className='italic' href=''>yalla@printclub.com </a> | <a className='italic' href=""> +971 555 610 645</a>
                </div>
                <div className='flex gap-1 uppercase text-xx xl:text-sm font-medium'>
                    <p className='italic' href=''>&#169; 2024 printclub.all right reserved</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home