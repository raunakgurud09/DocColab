import React from 'react'
import MaxContainer from '../Common/MaxContainer'
import { Button } from '../ui/button'

export default function OSS() {
  return (
    <section className='border-y py-8'>
      <MaxContainer>
        <div className='w-full flex flex-col items-center justify-center space-y-8'>
          <div className='w-full flex flex-col items-center justify-center space-y-2 '>
            <h3 className='text-5xl'>Proudly open-source</h3>
            <p className='text-sm'>Our source code is available on GitHub - feel free to read, review, or contribute to it however you want!</p>
          </div>
          <Button variant={'secondary'}>github stars</Button>
        </div>
      </MaxContainer>
    </section>
  )
}
