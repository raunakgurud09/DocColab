import { Hexagon } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={'/'} className='relative h-6 text-lg font-bold opacity-80 hover:cursor-pointer hover:opacity-100 flex flex-row item-center justify-center'>
      <div  className="flex items-center">
        <Hexagon size={16} />
      </div>
      <h1 className="text-sm">Docolab</h1>
      <p className="absolute right-0 bottom-[-14px] text-emerald-500 text-[8px]">beta</p>
    </Link>
  )
}
