import AccountHeader from "@/components/Common/AccountHeader";
import { Icons } from "@/components/icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function page() {
  return (
    <AccountHeader
      heading="Billing"
      text="Manage billing and your subscription plan."
    >
      <div className="flex flex-col">
        <Alert className="bg-orange-800/60 border-orange-700">
          <Icons.warning className="h-4 w-4" />
          <AlertTitle>This is a demo app.</AlertTitle>
          <AlertDescription>
          Docolab app is a demo app using a Stripe test environment. You can find a list of test card numbers on the Stripe docs.
          </AlertDescription>
        </Alert>
      </div>
    </AccountHeader>
  )
}