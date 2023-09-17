"use client"

import Link from "next/link"
import { ReactNode } from "react"
import cx from "classnames"
import { usePathname } from "next/navigation"


export default function orgsSlugLayout({ children }: {
  children: ReactNode
}) {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname()
  const page = pathname.split('/').at(-1)

  const orgsSlugPages = [
    {
      _id: 0,
      name: "General",
      link: "/general",
      active: page == 'general'
    },
    {
      _id: 1,
      name: "Team",
      link: "/team",
      active: page == 'team'
    },
    {
      _id: 2,
      name: "Billing",
      link: "/billing",
      active: page == 'billing'
    },
    {
      _id: 3,
      name: "Invoice",
      link: "/invoice",
      active: page == 'invoice'
    },
  ]


  return (
    <div className="w-full">
      <div className="w-full">
        <div className=" px-16 py-7">
          <h1 className="text-2xl">Organization&apos;s name settings</h1>
          <p className="text-sm text-muted-foreground">Organizations settings and projects</p>
        </div>
        <nav className="border-b px-14">
          <ul className="flex flex-row space-x-4">
            {
              orgsSlugPages.map((page) => (
                <li key={page._id} className={cx("text-xs px-2 py-1 hover:opacity-100", page.active ? " border-b-2 border-white font-medium" : "opacity-70  ")}>
                  <Link href={`/dashboard/orgs/fsnoinskl/${page.link}`}>
                    {page.name}
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
      <div className="px-14 py-8">
        {children}
      </div>
    </div>
  )
}
