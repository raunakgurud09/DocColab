import Link from "next/link";
import { Bell, HelpCircle } from "lucide-react";
import { getCurrentUser } from "@/lib/session";
import { buttonVariants } from "../ui/button";
import { UserAccountNav } from "../UserAccountNav";
import Logo from "../Logo";
import Breadcrumb from "../Breadcrumb/Breadcrumb";


const DashboardNavbar = async () => {
  const user = await getCurrentUser()
  return (
    <header className='flex w-full items-center h-12 border-b'>
      <div className="px-4 py-2 w-full">
        {
          user
            ?
            <div className="flex w-full items-center justify-between">
              <nav>
                {/* <Breadcrumb /> */}
              </nav>
              <div className="flex space-x-4">
                <div className="flex items-center justify-center space-x-2">
                  <div className="flex items-center justify-center bg-foreground/10 border-foreground/10 text-primary border-[1px] px-2 py-1 rounded-md">
                    <HelpCircle size={16} />
                    <span className="text-xs ml-2">Help</span>
                  </div>
                  <div className="flex items-center justify-center bg-foreground/10 border-foreground/10 text-primary border-[1px] px-2 py-1 rounded-md">
                    <Bell size={16} />
                  </div>
                </div>
                <UserAccountNav
                  user={{
                    name: user.name,
                    email: user.email,
                    image: user.image
                  }}
                />
              </div>
            </div>
            : <Link href={'/sign-in'} className={buttonVariants({ variant: "outline", size: "sm" })}>Sign In</Link>
        }
      </div>
    </header>
  )
}

export default DashboardNavbar