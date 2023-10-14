import React from 'react'
import MaxContainer from '../Common/MaxContainer'
import { Hexagon } from 'lucide-react'
import AI from './Features/AI'
import Realtime from './Features/Realtime'
import Versioning from './Features/Versioning'

export default function Features() {
  return (
    <MaxContainer>
      <div className='w-full grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <div className='min-h-[300px] rounded-md md:col-span-2 border p-6 flex flex-row group/ai hover:cursor-pointer'><AI /></div>
        <div className='min-h-[300px] rounded-md  border p-6'><Versioning /></div>
        <div className='min-h-[300px] rounded-md  border'>Documentation</div>
        <div className='min-h-[300px] rounded-md  border'>Storage</div>
        <div className='min-h-[300px] rounded-md  border'>Easy</div>
        <div className='min-h-[300px] rounded-md  md:col-span-2 border p-6 hover:cursor-fancy'><Realtime /></div>
      </div>
    </MaxContainer>
  )
}

/*
  - AI
  - Versioning
  - Documentation
  - Storage X
  - Easy
  - Realtime
*/