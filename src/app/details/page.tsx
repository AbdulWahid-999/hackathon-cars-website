import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { Card, CardFooter, CardHeader, } from "@/components/ui/card";
import Wrap from '../components/Wrap';
import Sidebar from '../components/Sidebar';

export default function page() {
  return (
    <Wrap>
      {/* wrapper  */}
      <div className='w-full flex overflow-x-hidden'>
        <div className="first hidden sm:flex w-[25%]">
          {/* Slidebar  */}
          <Sidebar/>
        </div>
        <div className="sec w-full sm:w-[75%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
          <section className=' w-full flex flex-col md:flex-row gap-5  items-center justify-around'>
            <div className='first flex flex-col gap-4 w-full  lg:max-w-[470px]  lg:max-h-[508px]'>
              <div>
                <Image src={'/View.png'} alt='' width={492} height={360} />

              </div>
              <div className=' flex items-center justify-between gap-2 lg:gap-0'>
                <Image src={'/View 1.png'} alt='' width={148} height={124} />
                <Image src={'/View 2.png'} alt='' width={148} height={124} />
                <Image src={'/View 3.png'} alt='' width={148} height={124} />
              </div>
            </div>
            {/* car details  */}
            <div className="flex flex-col w-full  lg:max-w-[492px] h-auto lg:max-h-[508px] bg-white justify-between rounded-xl shadow-md">
              <Image
                src={"/Detail Car.png"}
                alt="Detail Car"
                width={492}
                height={392}
                className="w-full h-auto rounded-t-xl object-cover"
              />

              <div className="p-4 flex  items-center gap-4">
                <div className="flex items-center justify-between w-full">
                  <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">
                    $80.00 / <span className="text-gray-500 text-sm lg:text-base">day $100.00</span>
                  </h1>
                </div>
                <Link href={"/payment"}>
                  <button className="bg-[#3563e9]  duration-300 hover:scale-105 transition-all p-3 sm:p-4 px-6 sm:px-10 text-nowrap  text-white rounded-md w-full max-w-[180px] text-center">
                    Rent Now
                  </button>
                </Link>
              </div>
            </div>
          </section>
          <section className=' w-full flex items-center justify-center'>
            <Image src={'/Reviews.png'} alt='' width={1010} height={452} className=' hidden md:flex' />
            <Image src={'/Detail Car.png'} alt='' width={492} height={384} className=' md:hidden' />
          </section>
          <section className="popular w-full flex flex-col gap-5">
            <div className="first w-full flex items-center justify-between px-10 xl:px-14">
              <h1 className="text-gray-500 text-lg sm:text-xl">Recent Car</h1>
              {/* veiw all section  */}
              <Link href={"/"}>
                <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
                  View All
                </h1>
              </Link>
            </div>
            <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:px-5 ">

              <Card className="w-full max-w-[330px] mx-auto h-auto flex flex-col justify-between">
                <CardHeader>

                  <Image src={"/koen.png"} alt="car" width={700} height={700} />

                </CardHeader>

                <CardFooter className="w-full flex items-center justify-between">
                  <p className='text-lg font-medium'>
                    $99.00/<span className="text-gray-500">day</span>
                  </p>
                  <button className="bg-[#3563e9] p-2 text-white duration-300 hover:scale-105 rounded-md">Rent Now</button>
                </CardFooter>
              </Card>


              <Card className="w-full max-w-[330px] mx-auto h-auto flex flex-col justify-between">
                <CardHeader>

                  <Image src={"/gtr.png"} alt="car1" width={700} height={700} />


                </CardHeader>

                <CardFooter className="w-full flex items-center justify-between">
                  <p className='text-lg font-medium'>
                    $99.00/<span className="text-gray-500">day</span>
                  </p>
                  <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white duration-300 hover:scale-105 rounded-md">Rent Now</button></Link>
                </CardFooter>
              </Card>


              <Card className="w-full max-w-[330px] mx-auto h-auto flex flex-col justify-between">
                <CardHeader>

                  <Image src={"/rolls.png"} alt="car2" width={700} height={700} />


                </CardHeader>
                <CardFooter className="w-full flex items-center justify-between">
                  <p className='text-lg font-medium'>
                    $99.00/<span className="text-gray-500">day</span>
                  </p>
                  <button className="bg-[#3563e9] p-2 text-white duration-300 hover:scale-105 rounded-md">Rent Now</button>
                </CardFooter>
              </Card>
            </div>
          </section>
          <section className="popular w-full flex flex-col gap-5">
            <div className="first w-full flex items-center justify-between px-10 xl:px-14">
              <h1 className="text-gray-500 text-lg sm:text-xl">Recomendation Car</h1>
              {/* veiw all section  */}
              <Link href={"/products"}>
                <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
                  View All
                </h1>
              </Link>
              {/* car section  */}
            </div>
            <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:px-5 ">

              <Card className="w-full max-w-[330px] mx-auto h-auto flex flex-col justify-between">
                <CardHeader>

                  <Image src={"/crv.png"} alt="car3" width={700} height={700} />


                </CardHeader>
                <CardFooter className="w-full flex items-center justify-between">
                  <p className='text-lg font-medium'>
                    $99.00/<span className="text-gray-500">day</span>
                  </p>
                  <button className="bg-[#3563e9] p-2 text-white duration-300 hover:scale-105 rounded-md">Rent Now</button>
                </CardFooter>
              </Card>


              <Card className="w-full max-w-[330px] mx-auto h-auto flex flex-col justify-between">
                <CardHeader>

                  <Image src={"/mgzx.png"} alt="car4" width={700} height={700} />


                </CardHeader>

                <CardFooter className="w-full flex items-center justify-between">
                  <p className='text-lg font-medium'>
                    $99.00/<span className="text-gray-500">day</span>
                  </p>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md duration-300 hover:scale-105">Rent Now</button>
                </CardFooter>
              </Card>


              <Card className="w-full max-w-[330px] mx-auto h-auto flex flex-col justify-between">
                <CardHeader>

                  <Image src={"/newrush.png"} alt="car5" width={700} height={700} />


                </CardHeader>

                <CardFooter className="w-full flex items-center justify-between">
                  <p className='text-lg font-medium'>
                    $99.00/<span className="text-gray-500">day</span>
                  </p>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md duration-300 hover:scale-105">Rent Now</button>
                </CardFooter>
              </Card>
              <Card className="w-full max-w-[330px] mx-auto h-auto flex flex-col justify-between">
                <CardHeader>

                  <Image src={"/terios.png"} alt="car5" width={700} height={700} />


                </CardHeader>

                <CardFooter className="w-full flex items-center justify-between">
                  <p className='text-lg font-medium'>
                    $99.00/<span className="text-gray-500">day</span>
                  </p>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md duration-300 hover:scale-105">Rent Now</button>
                </CardFooter>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </Wrap>
  )
}