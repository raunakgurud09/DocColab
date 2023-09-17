import Link from "next/link";

export default function AccountSubSideBar() {
  return (
    <div className='border-b py-3 flex flex-col w-full space-y-2'>
      <h4 className='text-muted text-sm  px-6 '>Account</h4>
      <div className={('flex flex-col space-y-1 overflow-y-hidden px-6 ')}>
        <Link href={`/dashboard/account/preferences`}  className='text-sm text-muted-foreground'>Preferences</Link>
        <Link href={`/dashboard/account/billing`}  className='text-sm opacity-80 hover:opacity-95'>Billing</Link>        
      </div>
    </div>
  )
}
