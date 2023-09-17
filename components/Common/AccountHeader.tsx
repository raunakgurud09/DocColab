import React from 'react'

export default function AccountHeader({ heading, text, children }: {
  heading: string,
  text: string,
  children: React.ReactNode
}) {
  return (
    <div className='flex flex-col space-y-8 px-0 md:px-4 lg:px-8'>
      <div className='flex flex-col '>
        <h1 className='text-xl font-medium'>{heading}</h1>
        <p className='text-sm text-muted-foreground'>{text}</p>
      </div>
      <div className=''>{children}</div>
    </div>
  )
}
