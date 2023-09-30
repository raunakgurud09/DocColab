import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import HeroBackground from '../Common/HeroBackground'
import MaxContainer from '../Common/MaxContainer'

export default function Hero() {
  return (
    <MaxContainer>
      <div className='flex flex-col w-full h-screen'>
        <HeroBackground />
        <div className='flex flex-col  w-full justify-center items-center'>
          <div className="w-[60%]">
            <h1 className='text-6xl my-10 text-center'>
              <span className='block'>
                Collaborate with others
              </span>
              <span className='block text-accent'>
                Document your API
              </span>
            </h1>
            <p className='text-lg selection:bg-accent text-center'>Docolab is a open-source project which focuses on helping developers on API documentation with other team member and AI</p>
          </div>
        </div>
        <div className='flex flex-row space-x-6 justify-center items-center'>
          <Button className={buttonVariants({ size: 'xs', })}>Start your project</Button>
          <Button className={buttonVariants({ size: 'xs', variant: 'default' })}>Documentation</Button>
        </div>
      </div>
    </MaxContainer>
  )
}
