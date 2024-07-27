"use client";
import { useState, useEffect, useRef } from "react";
import {
  RiArrowRightSLine,
  RiArrowUpSLine,
  RiArrowDownSLine,
} from "react-icons/ri";

export default function LeaguePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const [expandedTeam, setExpandedTeam] = useState<number | null>(1);
  //   const [expandedHeight, setExpandedHeight] = useState(0);
  //   const contentRef = useRef<HTMLDivElement>(null);
  // 変更: 個別の高さを保存するためのオブジェクトを使用
  const [expandedHeights, setExpandedHeights] = useState<{
    [key: number]: number;
  }>({});
  // 変更: 複数のrefを保持するためのオブジェクトを使用
  const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const fetchLeagueData = (leagueId: string) => {
    return [
      {
        id: 1,
        name: "RC",
        wins: 5,
        pointDifference: 7,
        games: [
          {
            id: 1,
            opponent: "Zeta",
            wins: 1,
            loses: 0,
          },
          {
            id: 2,
            opponent: "FL",
            wins: 0,
            loses: 1,
          },
          {
            id: 3,
            opponent: "AXIZ",
            wins: 0,
            loses: 1,
          },
          {
            id: 4,
            opponent: "FAV",
            wins: 0,
            loses: 1,
          },
          {
            id: 5,
            opponent: "SCZ",
            wins: 0,
            loses: 1,
          },
        ],
      },
      {
        id: 2,
        name: "Zeta",
        wins: 4,
        pointDifference: 2,
        games: [
          {
            id: 1,
            opponent: "RC",
            wins: 2,
            loses: 0,
          },
          {
            id: 2,
            opponent: "FL",
            wins: 0,
            loses: 1,
          },
          {
            id: 3,
            opponent: "AXIZ",
            wins: 0,
            loses: 1,
          },
          {
            id: 4,
            opponent: "FAV",
            wins: 0,
            loses: 1,
          },
          {
            id: 5,
            opponent: "SCZ",
            wins: 0,
            loses: 1,
          },
        ],
      },
      {
        id: 3,
        name: "FL",
        wins: 4,
        pointDifference: 2,
        games: [
          {
            id: 1,
            opponent: "RC",
            wins: 2,
            loses: 0,
          },
          {
            id: 2,
            opponent: "FL",
            wins: 0,
            loses: 1,
          },
          {
            id: 3,
            opponent: "AXIZ",
            wins: 0,
            loses: 1,
          },
          {
            id: 4,
            opponent: "FAV",
            wins: 0,
            loses: 1,
          },
          {
            id: 5,
            opponent: "SCZ",
            wins: 0,
            loses: 1,
          },
        ],
      },
    ];
  };
  //   useEffect(() => {
  //     if (contentRef.current) {
  //       console.log(contentRef.current.scrollHeight);
  //       setExpandedHeight(contentRef.current.scrollHeight);
  //     }
  //   }, [expandedTeam]);
  useEffect(() => {
    leagueData.forEach((data) => {
      if (contentRefs.current[data.id]) {
        setExpandedHeights((prev) => ({
          ...prev,
          [data.id]: contentRefs.current[data.id]?.scrollHeight || 0,
        }));
      }
    });
  }, []);

  const toggleExpand = (teamId: number) => {
    setExpandedTeam(expandedTeam === teamId ? null : teamId);
  };
  const leagueData = fetchLeagueData(id);
  return (
    <>
      <div className="gradient-bg-3 text-white text-center text-2xl font-bold  px-3 py-4 mb-8">
        2024 夏季 レギュラーシーズン
      </div>
      <div className="w-[90%] mx-auto">
        <div className="grid w-full grid-cols-2 place-items-center">
          <div className="text-white text-center font-bold bg-[#9AC9A7] w-full p-1">
            1巡目
          </div>
          <div className="text-white text-center font-bold bg-[#939393] w-full p-1">
            2巡目
          </div>
        </div>
        <div className="w-full text-white font-bold">
          <div className="grid grid-cols-5 gap-2 p-2 font-bold text-sm place-items-center">
            <div>順位</div>
            <div>チーム</div>
            <div>勝利回数</div>
            <div>勝敗差</div>
            <div>内訳</div>
          </div>
          {leagueData.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-5 gap-2 p-2 border-b place-items-center">
                <div>{data.id}</div>
                <div>{data.name}</div>
                <div>{data.wins}</div>
                <div>{data.pointDifference}</div>
                <div>
                  <button onClick={() => toggleExpand(data.id)}>
                    {expandedTeam === data.id ? (
                      <RiArrowUpSLine />
                    ) : (
                      <RiArrowDownSLine />
                    )}
                  </button>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out`}
                style={{
                  maxHeight:
                    expandedTeam === data.id
                      ? `${expandedHeights[data.id] || 0}px`
                      : "0px",
                }}
              >
                <div
                  ref={(el) => {
                    contentRefs.current[data.id] = el;
                  }}
                  className="gradient-bg-3"
                >
                  {data.games &&
                    data.games.map((game) => (
                      <div
                        className="grid grid-cols-5 gap-2 p-2 place-items-center border-b"
                        key={game.id}
                      >
                        <div></div>
                        <div className="">{game.opponent}</div>
                        <div className="col-span-2 text-center">
                          {game.wins} - {game.loses}
                        </div>
                        <div>
                          <RiArrowRightSLine />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
