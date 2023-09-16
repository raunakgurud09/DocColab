import DashboardNavbar from "@/components/Dashboard/NavBar";
import DashbaordSidebar from "@/components/Dashboard/SideBar";
import { ReactNode } from "react"

export default function layout({ children }: {
  children: ReactNode
}) {
  return (


    <div className="flex flex-col w-full">
      <DashboardNavbar />
      {children}
    </div>
  )
}
