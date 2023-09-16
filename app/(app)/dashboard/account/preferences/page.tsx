import AccountInformation from "@/components/Dashboard/Account/Preferences/AccountInformation"
import AccountProfile from "@/components/Dashboard/Account/Preferences/AccountProfile"
import AccountTheme from "@/components/Dashboard/Account/Preferences/Theme"

const preferences = async () => {
  return (
    <div className="grid gap-8">
      <AccountInformation />
      <AccountProfile />
      <AccountTheme />
    </div>
  )
}

export default preferences