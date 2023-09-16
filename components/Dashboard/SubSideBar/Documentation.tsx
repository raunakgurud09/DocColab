import Link from 'next/link'

export default function Documentation() {
  return (
    <div className='border-b py-3 flex flex-col w-full space-y-2'>
      <h4 className='text-primary text-sm opacity-60 px-6 '>Documentation</h4>
      <div className={('flex flex-col space-y-1 overflow-y-hidden px-6 ')}>
        <Link href={`/dashboard/`} className='text-sm opacity-80 hover:opacity-95'>Guide</Link>
        <Link href={`/dashboard/`} className='text-sm opacity-80 hover:opacity-95'>Blogs</Link>
      </div>
    </div>
  )
}
