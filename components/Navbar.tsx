import Link from "next/link";
import { Hexagon } from "lucide-react";
import { getCurrentUser } from "@/lib/session";
import { buttonVariants } from "./ui/button";
import { UserAccountNav } from "./UserAccountNav";


const Navbar = async () => {
  const user = await getCurrentUser()
  return (
    <nav className='flex w-full items-center justify-between px-4 py-2 border-b'>
      <div className='text-lg font-bold'>
        <Link href={'/'}>
          <Hexagon />
        </Link>
      </div>
      <div>
        {
          user
            ? <UserAccountNav
              user={{
                name: user.name,
                email: user.email,
                image: user.image
              }}
            />
            : <Link href={'/sign-in'} className={buttonVariants()}>Sign In</Link>
        }
      </div>
    </nav>
  )
}

export default Navbar