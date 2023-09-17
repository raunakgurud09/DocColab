
export default function AccountInput({ name, placeholder, disabled }: {
  name: string
  placeholder: string
  disabled: boolean
}) {
  return (
    <div className="flex flex-row w-full items-center justify-between">
      <p className="text-muted-foreground text-sm">{name}</p>
      <input type="text" className="border px-4 py-1.5 placeholder:text-sm text-sm bg-muted/50 placeholder:text-muted-foreground w-[60%] rounded-md" placeholder={placeholder} disabled={disabled} />
    </div>
  )
}
