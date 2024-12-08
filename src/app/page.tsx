import React from 'react'
import Main from './components/productlist'
import Hero from './components/Hero'
import Divs from './components/Divs'

export default function page() {
  return (
    <div>
      <Hero/>
      <Divs/>
      <Main/>
    </div>
  )
}
