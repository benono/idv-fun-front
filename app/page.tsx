import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { cn } from "@/lib/utils";
import SurviverMatchResults from "@/components/surviverMatchResults";

export default function Home() {
  const hunterIndicator = [
    {
      name: "未解読の暗号機",
      count: 0,
    },
    {
      name: "破壊した板の数",
      count: 5,
    },
    {
      name: "攻撃命中回数",
      count: 10,
    },
    {
      name: "恐怖の一撃回数",
      count: 1,
    },
    {
      name: "ダウン回数",
      count: 5,
    },
    {
      name: "演繹特典",
      count: 9337,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between gradient-bg-1">
      <div className="flex flex-col items-center justify-center w-full px-1 gap-3">
        <div className="flex flex-row items-center justify-center w-full">
          <div className="flex flex-row items-center justify-center bg-zeta-background text-white w-[35%]">
            <div>Zeta</div>
            <div>
              <Image src="/zeta-white.png" alt="zeta" width={60} height={60} />
            </div>
            <div>5</div>
          </div>
          <div className="w-[30%] flex justify-center items-center bg-primary text-white text-xl h-[60px]">
            試合結果
          </div>
          <div className="flex flex-row items-center justify-center bg-fennel text-white w-[35%]">
            <div>Fennel</div>
            <div>
              <Image
                src="/zeta-white.png"
                alt="fennel"
                width={60}
                height={60}
              />
            </div>
            <div>5</div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center w-[100%] gradient-bg-2">
          <div className="flex flex-col items-center justify-center w-[35%]">
            <Image
              src="/ban-surviver.png"
              alt="zeta"
              width={144}
              height={144}
            />
          </div>
          <div className="flex flex-col items-center justify-center w-[30%] text-white">
            軍需工場
            <FontAwesomeIcon
              icon={faYoutube}
              color="red"
              size="sm"
              className="h-6"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-[35%]">
            <Image
              src="/ban-surviver.png"
              alt="zeta"
              width={144}
              height={144}
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="text-white text-xl bg-fennel w-full pl-4">
            FL_Hasha
          </div>
          <div className="w-full gradient-bg-2 hunter-result">
            <div className="flex flex-col gap-2 pt-5 pb-10 relative">
              {hunterIndicator.map((indicator) => (
                <div
                  className="flex flex-row items-center justify-between text-white text-sm w-[45%] key={indicator.name}"
                  key={indicator.name}
                >
                  <div className="pl-4">{indicator.name}</div>
                  <div>{indicator.count}</div>
                </div>
              ))}
              <Image
                src="/hunter/ann.png"
                alt="hunter-result-bg"
                width={200}
                height={200}
                className="absolute bottom-0 right-1"
              />
            </div>
          </div>
        </div>
        <SurviverMatchResults />
        <div className="h-32">aa</div>
      </div>
    </main>
  );
}
