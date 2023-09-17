import DashboardHeader from "@/components/Dashboard/DashboardHeader";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import cx from "classnames"
import Link from "next/link";

const page = async () => {
  // const user = await getCurrentUser()

  return (
    <DashboardHeader
      heading="Projects"
      text="View all your projects. Create new projects"
    >
      <div className="w-full flex justify-end">
        <Button size={"xs"} className="text-white">create</Button>
      </div>
      <div className="grid gap-8 grid-cols-3 my-4">
        {
          [...Array(4)].map((_, i) => (
            <Link href={'/project/r03niv093'} key={i} className="w-full h-44 rounded-md bg-muted/50 flex flex-col items-start justify-between">
              <div className="w-full px-4 my-2">
                <p>Project name</p>
              </div>
              <div className="w-full flex flex-row items-center justify-between border-t">
                <div className="w-full px-4 py-2 flex flex-col space-y-1">
                  <div className="flex flex-row relative h-4">
                    {
                      [...Array(4)].map((_, i) => (
                        <div key={i} className={cx("absolute w-4 h-4 rounded-full bg-muted border-[1px] border-white/50", `left-${2 * i}`)}></div>
                      ))
                    }
                  </div>
                  <p className="text-xs"><span>Edited - </span> 19 sept 24 </p>
                </div>
                <div className="flex items-center justify-center w-16 h-10">
                  <Icons.moreV size={18}/>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </DashboardHeader>
  )
}

export default page