import { Sparkle } from "lucide-react";

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// left-[${getRandomInt(0, 800)}px] top-[${getRandomInt(0, 800)}px]`
export default function HeroBackground() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0">
        <div className={`absolute left-72 top-60 -z-10 overflow-visible opacity-70`}>
          <div className="circle-1 -z-10 h-[100px] w-[700px] rounded-full bg-accent/80 -rotate-45 mix-blend-multiply blur-[128px]" />
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0">
        {
          [...Array(20)].map((_, i) => (
            <div key={i} style={{
              left: getRandomInt(0, 1200),
              top: getRandomInt(0, 650),
              animation: "ease-in-out infinite sparkle",
              animationDuration: `${getRandomInt(5000, 10000)}ms`
              // animationDuration: `${getRandomInt(200, 800)}s`
            }} className={`absolute w-fit h-fit`}>
              <Sparkle size={getRandomInt(1, 10)} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
