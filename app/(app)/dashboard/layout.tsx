import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { ReactNode } from "react"

export default function page({ children }: {
  children: ReactNode
}) {
  return (

    <div className="p-4 ">
      <Breadcrumb />
      {children}
    </div>
  )
}
