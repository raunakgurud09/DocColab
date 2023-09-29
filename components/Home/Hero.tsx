import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import HeroBackground from '../Common/HeroBackground'

export default function Hero() {
  return (
    <div className='flex flex-col w-full'>
      <HeroBackground />  
      <div className='flex flex-col my-28 w-full justify-center items-center'>
        <div className="w-[60%]">
          <h1 className='text-6xl my-10 text-center'>
            <span className='block'>
              Collaborate with others
            </span>
            <span className='block text-accent'>
              Document your API
            </span>
          </h1>
          <p className='text-lg selection:bg-accent mx-16 text-center'>Docolab is a open-source project which focuses on helping developers on API documentation with other team member and AI</p>
        </div>
      </div>
      <div className='flex flex-row space-x-6 justify-center items-center'>
        <Button className={buttonVariants({ size: 'xs', })}>Start your project</Button>
        <Button className={buttonVariants({ size: 'xs', variant: 'default' })}>Documentation</Button>
      </div>
    </div>

  )
}