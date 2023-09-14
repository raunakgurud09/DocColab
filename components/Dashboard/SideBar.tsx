import React from 'react'
import Logo from '../Logo'

export default function DashbaordSidebar() {
  return (
    <div className="w-60  border-r flex flex-col items-center justify-start px-4 h-full">
      <div className="w-60 border-r flex items-center justify-start px-4 h-12 border-b">
        <Logo />
      </div>
      <span>
        SideBar
      </span>
    </div>
  )
}
