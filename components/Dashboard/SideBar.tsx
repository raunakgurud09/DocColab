import React from 'react'
import Logo from '../Logo'
import Link from 'next/link'

export default function DashbaordSidebar() {
  return (
    <div className="w-60  border-r flex flex-col items-center justify-start h-full">
      <div className="w-60 border-r flex items-center justify-start px-4 h-12 border-b">
        <Logo />
      </div>
      <div className='w-full '>
        <div className='border-b px-4'>
          <h4>Projects</h4>
          <div className='flex flex-col'>
            {
              [...Array(3)].map((_, i) => (
                <Link href={`/dashboard/projects/${i}`} key={i} className='text-xs'>Project names{i}</Link>
              ))
            }
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
