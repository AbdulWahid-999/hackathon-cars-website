'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='w-full flex'>
      <div className="first hidden sm:flex w-[20%]">
        <Image src={'/Nav Bar Side.png'} alt='' width={360} height={1600}/>
      </div>
      <div className="sec w-full sm:w-[80%]  p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        <section className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between ">
          <Image src={"/Pick - Up.png"} alt="" width={582} height={132} className="w-[200px] md:w-[270px] lg:w-[582px]" />
          <Image src={"/Switch.png"} alt="" width={60} height={60} className="w-[80px]" />
          <Image src={"/Drop - Off.png"} alt="" width={582} height={132} className=' w-[200px] md:w-[270px] lg:w-[582px]' />
        </section>
        <section className="popular w-full flex flex-col gap-4">
          <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {  image: '/koen.png', },
              {  image: '/gtr.png',  },
              { image: '/rolls.png', },
              {  image: '/newrush.png', },
              {  image: '/crv.png', },
              {  image: '/terios.png', },
              {  image: '/mgzx.png', },
              {  image: '/newmgzx.png', },
            ].map((car, index) => (
              <Card key={index} className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="w-full flex items-center justify-between">
                    
                  </CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent className="w-full flex md:flex-col items-center justify-center gap-4">
                  <Image src={car.image} alt="" width={220} height={68} />
                </CardContent>
                <CardFooter className="w-full flex items-center justify-between">
                  <p>
                    $99.00/<span className="text-gray-500">day</span>
                  </p>
                  <Link href={'/details'}>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md hover:bg-blue-400 duration-300 hover:scale-105">Rent Now</button></Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          {showMore && (
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {  image: '/mgzx.png', },
                {image: '/newmgzx.png',},
                {  image: '/exc.png',  },
                {  image: '/newmgzx.png',  },
              ].map((car, index) => (
                <Card key={index} className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle className="w-full flex items-center justify-between">
                     
                    </CardTitle>
                    <CardDescription></CardDescription>
                  </CardHeader>
                  <CardContent className="w-full flex md:flex-col items-center justify-center gap-4">
                    <Image src={car.image} alt="" width={220} height={68} />
                  </CardContent>
                  <CardFooter className="w-full flex items-center justify-between">
                    <p>
                      $99.00/<span className="text-gray-500">day</span>
                    </p>
                    <button className="bg-[#3563e9] p-2 text-white rounded-md  hover:bg-blue-400 duration-300 hover:scale-105 ">Rent Now</button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </section>

        <section className="button w-full text-center">
          <button 
            onClick={toggleShowMore} 
            className="bg-[#3563e9]   hover:bg-blue-400 duration-300 hover:scale-105 px-4 py-2 text-white rounded-md mt-5"
          >
            {showMore ? "Show Less Cars" : "Show More Cars"}
          </button>
        </section>
      </div>
    </div>
  );
}
