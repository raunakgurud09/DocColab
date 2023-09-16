import { Icons } from '@/components/icons'
import Link from 'next/link'

export default function Documentation() {
  return (
    <div className='border-b py-3 flex flex-col w-full space-y-2'>
      <h4 className='text-primary text-sm opacity-60 px-6 '>Documentation</h4>
      <div className={('flex flex-col space-y-1 overflow-y-hidden px-6 ')}>
        <Link href={`/dashboard/`} className='flex flex-row items-center text-sm opacity-80 hover:opacity-95'>
          <Icons.arrowUpRight size={14} />
          <span className='ml-1'>
            Guide
          </span>
        </Link>
        <Link href={`/dashboard/`} className='flex flex-row items-center text-sm opacity-80 hover:opacity-95'>
          <Icons.arrowUpRight size={14} />
          <span className='ml-1'>
            Blogs
          </span>
        </Link>
      </div>
    </div>
  )
}
