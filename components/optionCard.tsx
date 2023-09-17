import { ReactNode } from "react"

export default function OptionCard({ heading, children }: {
  heading: string, children: ReactNode
}) {
  return (
    <div className="flex flex-col border-[1px] rounded-md w-full lg:w-full max-w-3xl">
      <h3 className="px-8 py-3 bg-muted rounded-t-md border-b-[1px]  font-medium">{heading}</h3>
      <div className="px-8 py-4 bg-background/50 rounded-b-md">
        {children}
      </div>
    </div>
  )
}
