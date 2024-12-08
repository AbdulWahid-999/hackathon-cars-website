import React from 'react'
import Image from 'next/image'
import Wrap from './Wrap'
import Link from 'next/link'

export default function Hero() {
  return (
    <Wrap>
    <div className='md:flex md:justify-evenly  md:gap-3 md:my-14 lg:gap-5 lg:justify-evenly overflow-x-hidden'>
<div className='bg-blue-400 xxs:mx-2  rounded-lg md:ml-0 '>
      <div className='ml-4  py-4 sm:ml-16 sm:py-6  md:ml-6 md:py-3 md:pr-14 md:pl-1 md:w-[400px] lg:w-[500px] lg:pr-7 '>
{/* left side  */}
<h2 className='text-sm font-medium mb-1 xxs:text-base xxs:mb-2 xs:text-xl xs:font-semibold xs:my-3 xsm:text-2xl xsm:my-4  md:text-2xl lg:text-4xl lg:font-semibold  text-white md:font-semibold md:leading-snug md:-translate-x-[0px] md:mt-1  '>The Best Platform <span className='md:block'>for Car Rental</span> </h2>

<h4 className='text-xs font-normal leading-snug my-3 xxs:text-sm xs:text-base xs:font-normal xsm:text-lg xsm:text  md:text-base md:font-medium text-white md:mt-3 md:leading-relaxed md:-translate-x-[0px] lg:text-lg lg:font-medium'>Ease of doing a car rental safely and <br /> reliably. Of course at a low price.</h4>
<Link href="/products"><button className=' text-xs py-3 px-6  xxs:text-sm xxs:py-3 xxs:px-7 xs:text-base xs:px-8 xs:py-4 xsm:text-lg xsm:px-9 xsm-py-5 md:text-lg md:py-3 md:px-7 bg-blue-700 text-white md:mt-3 rounded-md lg::-translate-x-[0px] lg:text-xl  lg:px-10 lg:py-4 hover:bg-blue-400 duration-300'>Rental Car</button></Link>
<div>
    <Image src='/image 7.png' alt='hero.img' width='100' height='100' className='translate-x-[50px] mt-5  w-[200px] xxs:w-[250px] xs:w-[340px] xsm:w-[390px] sm:w-[450px] md:w-[290px] md:translate-x-[30px] lg:translate-x-[40px] lg:w-[350px]'/>
</div>
      </div>
      </div>
      <div className='bg-blue-700 md:pr-16 rounded-lg md:mr-2 md:pl-10 hidden md:flex md:w-[400px] lg:w-[550px] lg-mr-4 lg:pl-12 box-border'>
      <div className=''>
{/* right side  */}
<h2 className='md:text-2xl lg:text-4xl text-white font-semibold md:mb-3 leading-snug md:-translate-x-[0px] md:mt-4'>Easy way to rent <br /> a car at a low price</h2>
<h4 className='md:text-base lg:text-lg font-medium text-white md:mt-2 md:-translate-x-[0px] md:mb-4'>Providing cheap car rental services <br /> and safe and comfortable facilities.</h4>
<Link href="/products"><button className='md:text-lg md:py-3 md:px-7 md:mt-4 lg:text-xl lg:px-10 lg:py-4 bg-blue-400 text-white  rounded-md md:-translate-x-[0px] hover:bg-blue-700 duration-300'>Rental Car</button></Link>
<div>
<Image src='/image 8.png' alt='hero.img' width='100' height='100' className='md:w-[270px] md:translate-x-[30px] mt-4 lg:translate-x-[60px] lg:w-[280px]'/></div>
      </div>
      </div>
    </div>
    </Wrap>

  )
}