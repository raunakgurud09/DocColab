import { ReactNode } from "react"

export default function orgsLayout({ children }: {
  children: ReactNode
}) {
  return (

    <div className="">
      {children}
    </div>
  )
}
