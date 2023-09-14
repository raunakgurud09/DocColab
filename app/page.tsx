import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='p-40'>
      <p>home</p>
      <Link href={'/dashboard'} className={buttonVariants()}>Dashboard</Link>
    </div>
  )
}
