import { Hexagon } from "lucide-react";
import Link from "next/link";
import Logo from "../Logo";

const navList = [
  {
    name: "Product",
    href: '#product'
  },
  {
    name: "Blog",
    href: '#blog'
  },
  {
    name: "Pricing",
    href: '#pricing'
  },
  {
    name: "Docs",
    href: '#docs'
  },
]


export default function HomeNavbar() {
  return (
    <header className="select-none backdrop-blur sticky z-50 border-b border-foreground/[0.1] h-12 top-0 ">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-full">
        <div className="flex space-x-4">
          <Logo />
          <nav className="h-full">
            <ul className="flex space-x-6 text-white/60 hover:text-white/80">
              {
                navList.map((nav, i) => (
                  <li key={i}>
                    <Link className="text-foreground hover:text-foreground/80  text-sm" href={nav.href}>
                      {nav.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
        <div>
          <a href="http://localhost:3000/dashboard" className="px-2 py-[2px] rounded-md text-sm text-foreground/90 hover:text-foreground">Login</a>
        </div>
      </div>
    </header>
  )
}
