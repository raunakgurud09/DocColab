import OptionCard from "@/components/optionCard";
import { getCurrentUser } from "@/lib/session";


const AccountInformation = async () => {
  const user = await getCurrentUser()

  return (
    <OptionCard
      heading="Account Information"
    >
      <div className="grid gap-4">
        <div className="flex flex-row w-full items-center justify-between">
          <p className="text-muted-foreground text-sm">Username</p>
          <input type="text" className="border px-4 py-1.5 placeholder:text-sm text-sm placeholder:text-muted-foreground w-[60%] rounded-md" placeholder={user?.name || "raunakgurud09"} disabled />
        </div>
        <div className="flex flex-row w-full items-center justify-between">
          <p className="text-muted-foreground text-sm">Email</p>
          <input type="text" className="border px-4 py-1.5 placeholder:text-sm text-sm placeholder:text-muted-foreground w-[60%] rounded-md" placeholder={user?.email || "raunakgurud@gmail.com"} disabled />
        </div>
      </div>
    </OptionCard>
  )
}

export default AccountInformation