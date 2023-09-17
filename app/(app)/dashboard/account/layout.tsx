import { ReactNode } from "react"


export default function layout({ children }: {
  children: ReactNode
}) {
  return (
    <div className="px-10 py-7">
      {children}
    </div>
  )
}
