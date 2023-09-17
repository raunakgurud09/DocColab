import { Icons } from "@/components/icons"
import { ReactNode } from "react"

export default function SettingsCard({ children }: {
  children: ReactNode
}) {
  return (
    <div className="bg-muted/10 p-4 rounded-md border-[1px]">
      <div className="4/12">
        <button className="flex flex-row jus items-center px-2 py-1 rounded-md border bg-purple-600/50 border-purple-600 hover:bg-purple-600 text-white  text-xs font-medium">
          <Icons.add size={12} className="mr-1 text-semibold"/>
          Create
        </button>
      </div>
      <div className="8/12">
        {children}
      </div>
      <div className="w-full h-fit border grid grid-cols-4 p-4 gap-4">
        <div className="fcc w-full h-20 rounded-md bg-background text-foreground">background</div>
        <div className="fcc w-full h-20 rounded-md bg-foreground text-background">foreground</div>
        <div className="fcc w-full h-20 rounded-md bg-primary text-primary-foreground">primary</div>
        <div className="fcc w-full h-20 rounded-md bg-primary-foreground text-primary">primary-foreground</div>
        <div className="fcc w-full h-20 rounded-md bg-secondary text-secondary-foreground">secondary</div>
        <div className="fcc w-full h-20 rounded-md bg-secondary-foreground  text-secondary">secondary-foreground</div>
        <div className="fcc w-full h-20 rounded-md bg-muted text-muted-foreground">muted</div>
        <div className="fcc w-full h-20 rounded-md bg-muted-foreground text-muted">muted-foreground</div>
        <div className="fcc w-full h-20 rounded-md bg-destructive text-destructive-foreground ">destructive</div>
        <div className="fcc w-full h-20 rounded-md bg-destructive-foreground text-destructive ">destructive</div>
      </div>


    </div>

  )
}
