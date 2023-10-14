"use client"

import { useState } from "react"
import cn from "classnames"
import { Hexagon } from "lucide-react"

export default function AI() {
  return (
    <>
      <div className='w-1/2'>
        <h5 className='text-2xl'>AI</h5>
        <p className='text-xs'>Ask AI to write documentation for your api</p>
      </div>
      <div className='w-1/2 m-2'>
        <div className={cn(`w-full h-full fcc border rounded-xl m-2 animate-in duration-[100ms] group-hover/ai:border-accent/5`)}>
          <div className={cn('w-full h-full fcc border rounded-xl m-2 animate-in duration-1000 group-hover/ai:border-accent/10')}>
            <div className={cn('w-full h-full fcc border rounded-xl m-2 animate-in duration-1000 group-hover/ai:border-accent/20')}>
              <div className={cn('w-full h-full fcc border rounded-xl m-2 animate-in duration-1000 group-hover/ai:border-accent/30')}>
                <div className={cn('w-full h-full fcc border rounded-xl m-2 animate-in duration-1000 group-hover/ai:border-accent/40')}>
                  <div className={cn('w-full h-full fcc border rounded-xl m-2 animate-in duration-1000 group-hover/ai:border-accent/50')}>
                    <div className={cn('w-full h-full fcc border rounded-xl m-2 animate-in duration-1000 group-hover/ai:border-accent/60')}>
                      <div className={cn('w-full h-full fcc border rounded-xl m-2 animate-in duration-1000 group-hover/ai:border-accent/70')}>
                        <div className={cn('w-full h-full fcc border rounded-xl m-2 animate-in duration-1000 group-hover/ai:border-accent/80 ')}>
                          <div className={cn('fcc  p-4 rounded-xl border-2 drop-shadow-xl animate-in duration-[10ms] group-hover/ai:border-accent')}>
                            <Hexagon className={cn(`group-hover/ai:text-accent animate-in duration-1000`)} size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
