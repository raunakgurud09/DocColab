import Link from "next/link";
import { Hexagon } from "lucide-react";
import { getCurrentUser } from "@/lib/session";
import { buttonVariants } from "./ui/button";


const Navbar = async () => {
  const user = await getCurrentUser()
  return (
    <nav className='flex w-full items-center justify-between px-4 py-2 border-b border-white/[0.1] '>
      <div className='text-lg font-bold'>
        <Link href={'/'}>
          <Hexagon />
        </Link>
      </div>
      <div>{
        user ? <div>logged in</div> :
          <Link href={'/sign-in'} className={buttonVariants()}>Sign In</Link>
      }
      </div>
    </nav>
  )
}

export default Navbar