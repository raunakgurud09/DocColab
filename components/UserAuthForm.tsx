"use client"

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { signIn } from "next-auth/react"
import { Button } from './ui/button'

export default function UserAuthForm() {

  const [loading, setLoading] = useState(false)

  const loginWithGoogle = async () => {
    setLoading(true)
    try {
      await signIn('google')
    } catch (error) {
      alert('toast')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={cn('flex justify-center')}>
      <Button onClick={loginWithGoogle} variant={"secondary"} className='w-full' size={'icon'}>Google</Button>
    </div>
  )
}
