import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import DashboardNavbar from "@/components/Navbar";
import { ReactNode } from "react"

export default function page({ children }: {
  children: ReactNode
}) {
  return (

    <div className="">
      <DashboardNavbar />
      {children}
    </div>
  )
}
