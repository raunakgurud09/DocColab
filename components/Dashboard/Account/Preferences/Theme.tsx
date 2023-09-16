import { ModeToggle } from "@/components/mode-toggle";
import OptionCard from "@/components/optionCard";

export default function AccountTheme() {
  return (
    <OptionCard
      heading="Account Information"
    >
      <div className="grid gap-4">
        <div className="flex flex-row w-full items-center justify-between">
          <p className="text-muted-foreground text-sm">Theme</p>
          <div className="w-3/4 bg-blue-200">
            <ModeToggle />
          </div>
          {/* <input type="text" className="border px-4 py-1.5 placeholder:text-sm text-sm placeholder:text-muted-foreground w-[60%] rounded-md" placeholder={user?.name || "raunakgurud09"} disabled /> */}
        </div>

      </div>
    </OptionCard>
  )
}
