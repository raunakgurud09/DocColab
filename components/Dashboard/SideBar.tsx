"use client"

import React, { useState } from 'react'
import Logo from '../Logo'
import SubSideBar from './SubSideBar'
import AccountSubSideBar from './SubSideBar/Account'
import Documentation from './SubSideBar/Documentation'

export default function DashbaordSidebar() {
  return (
    <div className="w-64 border-r hidden md:flex flex-col items-center justify-start flex-grow min-h-screen">
      <div className="w-64 border-r flex items-center justify-start px-6 h-12 border-b">
        <Logo />
      </div>
      <div className='w-full'>
        <SubSideBar 
          heading="Projects"
        />
        <SubSideBar 
          heading="Organizations"
        />
        <AccountSubSideBar />
        <Documentation />
      </div>
      <div>
        
      </div>
    </div>
  )
}
