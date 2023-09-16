import { ReactNode } from "react"

export default function OptionCard({ heading, children }: {
  heading: string, children: ReactNode
}) {
  return (
    <div className="flex flex-col border-[1px] rounded-md w-[65%]">
      <h3 className="px-8 py-3 bg-muted/10 rounded-t-md border-b-[1px] text-muted-foreground font-semibold">{heading}</h3>
      <div className="px-8 py-4 bg-background/50 rounded-b-md">
        {children}
      </div>
    </div>
  )
}
