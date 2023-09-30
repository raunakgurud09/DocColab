import React from 'react'
import MaxContainer from '../Common/MaxContainer'

export default function Testimonials() {
  return (
    <MaxContainer>
      <div className='my-20 w-full h-fit'>
        <h3>Testimonials</h3>
        <div className='grid gap-4 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row-dense'>
          <div className="min-h-20 bg-blue-400 rounded-md row-auto lg:row-span-2"></div>
          <div className="min-h-20 bg-blue-400 rounded-md"></div>
          <div className="h-20 bg-pink-400 rounded-md"></div>
          <div className="h-20 bg-blue-400 rounded-md"></div>
          <div className="h-20 bg-pink-400 rounded-md"></div>
          <div className="h-20 bg-blue-400 rounded-md"></div>
          <div className="h-20 bg-pink-400 rounded-md"></div>
          <div className="h-20 bg-pink-400 rounded-md"></div>
          <div className="h-20 bg-blue-400 rounded-md"></div>
        </div>
      </div>
    </MaxContainer>
  )
}
