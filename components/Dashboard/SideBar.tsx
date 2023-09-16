"use client"

import React, { useState } from 'react'
import Logo from '../Logo'
import SubSideBar from './SubSideBar'
import AccountSubSideBar from './SubSideBar/Account'
import Documentation from './SubSideBar/Documentation'

export default function DashbaordSidebar() {
  
  return (
    <div className="w-60  border-r flex flex-col items-center justify-start h-full">
      <div className="w-60 border-r flex items-center justify-start px-4 h-12 border-b">
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
