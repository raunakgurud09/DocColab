import { Icons } from "@/components/icons"
import { ReactNode } from "react"

export default function SettingsCard({ children }: {
  children: ReactNode
}) {
  return (
    <div className="bg-muted p-4 rounded-md border-[1px]">
      <div className="4/12">
        <button className="flex flex-row jus items-center px-2 py-1 rounded-md border bg-accent/90 hover:bg-accent text-accent-foreground text-xs font-medium">
          <Icons.add size={12} className="mr-1 text-semibold"/>
          Create
        </button>
      </div>
      <div className="8/12">
        {children}
      </div>
      
    </div>

  )
}
