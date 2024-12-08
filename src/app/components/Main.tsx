import React from 'react'
import Wrap from "./Wrap";
import Link from 'next/link';

export default function Main() {
  return (
    <Wrap>
        <section>
            <div>
                <p className='text-gray-400 text-base font-medium'>Popular Cars</p>
                <Link href="/"><p className='text-[#3563E9]'>View all</p></Link>
            </div>
        </section>

    </Wrap>
  )
}
