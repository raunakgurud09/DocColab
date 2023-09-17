import cx from 'classnames'
import Link from 'next/link'
import React, { useState } from 'react'

export default function SubSideBar({ heading, link }: any) {
  const [show, setShow] = useState(false)

  return (
    <div className='border-b py-3 flex flex-col w-full space-y-2'>
      <Link href={link} className='text-muted-foreground/50 text-sm  px-6' >{heading}</Link>
      <div className={cx('flex flex-col space-y-1 overflow-y-hidden px-6 ', show ? 'h-fit' : 'h-16')}>
        {
          [...Array(1)].map((_, i) => (
            <Link href={`/project/${i}`} key={i} className='text-sm text-muted-foreground hover:text-foreground'>Project name {i}</Link>
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
