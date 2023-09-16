import HomeNavbar from '@/components/Home/Navbar'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className=''>
      <HomeNavbar />
      <p>home</p>
      <Link href={'/dashboard'} className={buttonVariants()}>Dashboard</Link>
    </div>
  )
}
