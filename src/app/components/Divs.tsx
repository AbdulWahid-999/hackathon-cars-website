import React from 'react'
import Image from 'next/image'
import Wrap from './Wrap'

export default function Divs() {
  return (
    <Wrap>
    <section className="w-full  flex flex-wrap sm:flex-nowrap flex-col lg:flex-row items-center justify-center sm:justify-between gap-4 sm:gap-8">
<Image src={"/Pick - Up.png"} alt="" width={582} height={132} className="md:max-w-full " />
<Image src={"/Switch.png"} alt="" width={100} height={100} className="max-w-full" />
<Image src={"/Drop - Off.jpg"} alt="" width={582} height={132} className="max-w-full" />
</section>
</Wrap>
  )
}

