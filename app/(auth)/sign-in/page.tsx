import UserAuthForm from "@/components/UserAuthForm";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-screen h-full flex flex-row">
      <div className="w-96 border-r h-screen flex items-center">
        <div className="px-6 space-y-4">
          <div className="flex flex-col space-y-2">
            <h2 className="text-4xl font-serif">Sign-in</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cum.</p>
          </div>
          <UserAuthForm />
        </div>
      </div>
      <div className="flex item-center justify-center ml-80">
        <div className="flex items-center">
          <Image src={'/_static/illustrations/rocket.svg'} alt="astronaut" width={260} height={350}/>
        </div>
      </div>
    </div>
  )
}
