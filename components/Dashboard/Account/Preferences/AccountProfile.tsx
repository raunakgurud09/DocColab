import OptionCard from "@/components/optionCard";
import { getCurrentUser } from "@/lib/session";


const AccountProfile = async () => {
  const user = await getCurrentUser()

  return (
    <OptionCard
      heading="Profile"
    >
      <div className="grid gap-4">
        <div className="flex flex-row w-full items-center justify-between">
          <p className="text-muted-foreground text-sm">Username</p>
          <input type="text" className="px-4 active:border-[1px] py-1.5 border-[1px] placeholder:text-sm placeholder:text-muted bg-transparent text-muted-foreground text-sm w-[60%] rounded-md" placeholder={user?.name || "raunakgurud"} />
        </div>
        <div className="flex flex-row w-full items-center justify-between">
          <p className="text-muted-foreground text-sm">Email</p>
          <input type="text" className="px-4 active:border-[1px] py-1.5 border-[1px] placeholder:text-sm placeholder:text-muted bg-transparent text-muted-foreground text-sm w-[60%] rounded-md" placeholder={user?.email || "raunakgurud@gmail.com"} />
        </div>
      </div>
    </OptionCard>
  )
}

export default AccountProfile