import cx from 'classnames'
import Link from 'next/link'
import React, { useState } from 'react'

export default function SubSideBar({ heading }: any) {
  const [show, setShow] = useState(false)

  return (
    <div className='border-b py-3 flex flex-col w-full space-y-2'>
      <h4 className='text-primary text-sm opacity-60 px-4 '>{heading}</h4>
      <div className={cx('flex flex-col space-y-1 overflow-y-hidden px-4 ', show ? 'h-fit' : 'h-16')}>
        {
          [...Array(1)].map((_, i) => (
            <Link href={`/dashboard/projects/${i}`} key={i} className='text-sm opacity-90 hover:opacity-100'>Project name {i}</Link>
          ))
        }
      </div>
      <button className='w-full hover:bg-foreground/10 py-1 text-xs my-2' onClick={() => setShow(!show)}>
        {show
          ? "show less"
          : "show more"
        }
      </button>
    </div>
  )
}
