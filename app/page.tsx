import Cta from '@/components/Home/Cta'
import Features from '@/components/Home/Features'
import Hero from '@/components/Home/Hero'
import HomeNavbar from '@/components/Home/Navbar'
import OSS from '@/components/Home/Oss'
import Testimonials from '@/components/Home/Testimonials'
import WorkingVideo from '@/components/Home/WorkingVideo'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className=''>
      <HomeNavbar />
      <div className='max-w-7xl mx-auto px-4 flex  flex-col justify-center items-center h-full'>
        <Hero />
        <Cta />
        <Features />
        <Testimonials />
        <WorkingVideo />
        <OSS />
      </div>
    </div>
  )
}
