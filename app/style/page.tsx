import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className='max-w-7xl mx-auto px-4 my-20 space-y-10 flex flex-col justify-center items-center h-full'>
      <h2 className="w-full text-6xl">Style guide</h2>

      <div className="w-full">
        <h4 className="text-4xl">Colors</h4>
        <div className="w-full my-6 h-fit border grid grid-cols-4 p-4 gap-4">
          <div className="fcc w-full h-20 rounded-md bg-background text-foreground">background</div>
          <div className="fcc w-full h-20 rounded-md bg-foreground text-background">foreground</div>
          <div className="fcc w-full h-20 rounded-md bg-primary text-primary-foreground">primary</div>
          <div className="fcc w-full h-20 rounded-md bg-primary-foreground text-primary">primary-foreground</div>
          <div className="fcc w-full h-20 rounded-md bg-secondary text-secondary-foreground">secondary</div>
          <div className="fcc w-full h-20 rounded-md bg-secondary-foreground  text-secondary">secondary-foreground</div>
          <div className="fcc w-full h-20 rounded-md bg-muted text-muted-foreground">muted</div>
          <div className="fcc w-full h-20 rounded-md bg-muted-foreground text-muted">muted-foreground</div>
          <div className="fcc w-full h-20 rounded-md bg-destructive text-destructive-foreground ">destructive</div>
          <div className="fcc w-full h-20 rounded-md bg-destructive-foreground text-destructive ">destructive</div>
          <div className="fcc w-full h-20 rounded-md bg-accent text-accent-foreground ">accent</div>
          <div className="fcc w-full h-20 rounded-md bg-accent-foreground text-accent ">accent-foreground</div>
        </div>
      </div>

      <div className="w-full">
        <h4 className="text-4xl">Buttons</h4>
        <div className="w-full h-fit my-6  space-x-6 ">
          <Button variant={"default"}>default</Button>
          <Button variant={"destructive"}>destructive</Button>
          <Button variant={"ghost"}>ghost</Button>
          <Button variant={"link"}>link</Button>
          <Button variant={"outline"}>outline</Button>
          <Button variant={"secondary"}>secondary</Button>
        </div>
      </div>

      <div className="h-96"></div>
    </div>
  )
}
