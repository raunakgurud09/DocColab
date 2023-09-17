import DashboardNavbar from "@/components/Dashboard/NavBar";
import DashbaordSidebar from "@/components/Dashboard/SideBar";
import { ReactNode } from "react"

export default function page({ children }: {
  children: ReactNode
}) {
  return (

    <div className="flex flex-row">
      <DashbaordSidebar />
      <div className="flex flex-col w-full h-fit">
        <DashboardNavbar />
        {children}
      </div>
    </div>
  )
}
