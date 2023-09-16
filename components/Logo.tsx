import { Hexagon } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={'/'} className='h-6 text-lg font-bold opacity-80 hover:cursor-pointer hover:opacity-100 flex flex-row item-center '>
      <Hexagon size={16} className="mt-[2px]"/>
      <h1 className="text-sm">Docolab</h1>
      <p className="relative right-[8px] bottom-[-8px] text-emerald-500 text-[8px]">beta</p>
    </Link>
  )
}
