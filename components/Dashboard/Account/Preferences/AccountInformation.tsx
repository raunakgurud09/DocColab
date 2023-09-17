import AccountInput from "@/components/Common/AccountInput";
import OptionCard from "@/components/optionCard";
import { getCurrentUser } from "@/lib/session";


const AccountInformation = async () => {
  const user = await getCurrentUser()

  return (
    <OptionCard
      heading="Account Information"
    >
      <div className="grid gap-4">
        <AccountInput
          name="Username"
          placeholder={user?.name || "username"}
          disabled={true}
        />
        <AccountInput
          name="Email"
          placeholder={user?.email || "user@example.com"}
          disabled={true}
        />
      </div>
    </OptionCard>
  )
}

export default AccountInformation