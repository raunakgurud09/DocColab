import AccountHeader from "@/components/Common/AccountHeader"
import AccountInformation from "@/components/Dashboard/Account/Preferences/AccountInformation"
import AccountProfile from "@/components/Dashboard/Account/Preferences/AccountProfile"
import AccountTheme from "@/components/Dashboard/Account/Preferences/Theme"

const preferences = async () => {
  return (
    <AccountHeader 
      heading="Account preferences"
      text="Manage account and website settings."
    >
      <div className="grid gap-8">
        <AccountInformation />
        <AccountProfile />
        <AccountTheme />
      </div>
    </AccountHeader>
  )
}

export default preferences