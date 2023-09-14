import { Hexagon } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <div className='relative text-lg font-bold opacity-80 hover:cursor-pointer hover:opacity-100 flex flex-row item-center justify-center'>
      <Link href={'/'} className="flex items-center">
        <Hexagon size={16} />
      </Link>
      <h1 className="text-sm">Docolab</h1>
      <p className="absolute right-0 bottom-[-14px] text-emerald-500 text-[8px]">beta</p>
    </div>
  )
}
