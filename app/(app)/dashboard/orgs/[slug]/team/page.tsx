import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function orgsTeam() {

  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="relative flex flex-row items-center">
          <Icons.search className="absolute left-2 text-foreground/50" size={14} />
          <input type="text" className="pl-8 px-4 py-2 text-xs rounded-md placeholder:text-foreground/50 bg-muted/50 border " placeholder="Filter members" />
        </div>
        <div className="space-x-2">
          <Button size={"xs"} className="text-white">Invite</Button>
          <Button size={"xs"} variant={"secondary"} className="text-white">Leave team</Button>
        </div>
      </div>
      <div className="w-full mt-4">
        <div className="flex flex-col">
          <div className="w-full flex flex-row items-center px-6 py-2 rounded-t-md border bg-muted/30">
            <div className="w-6/12 text-sm text-foreground/50">User</div>
            <div className="w-3/12 text-sm text-foreground/50">Role</div>
            <div className="w-3/12 text-sm text-foreground/50">Action</div>
          </div>
          <div className="flex flex-col rounded-b-md border !border-t-0 ">

            <div className="flex flex-col">
              {
                [...Array(2)].map((_, i) => (
                  <div key={i} className="w-full flex flex-row items-center px-6 py-2  ">
                    <div className="w-6/12 text-sm text-foreground/50 flex flex-row items-center">
                      <div className="w-8 h-8 rounded-full bg-foreground/40 mr-2"></div>
                      <p className="w-[90%] truncate">Raunak Gurud</p>
                    </div>
                    <div className="w-3/12 text-sm text-foreground/50">
                      Dropdown
                    </div>
                    <div className="w-3/12 text-sm text-foreground/50">Action</div>
                  </div>
                ))
              }
            </div>
            <div className="px-6 py-2 border-t text-xs">2 user</div>
          </div>
        </div>

      </div>
    </div>
  )
}
