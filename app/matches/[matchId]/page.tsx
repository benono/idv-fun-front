"use client";
import { useState, useEffect, useRef } from "react";
import {
  RiArrowRightSLine,
  RiArrowUpSLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import { RiForbid2Line } from "react-icons/ri";
import Image from "next/image";

export default function LeaguePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const [expandedTeam, setExpandedTeam] = useState<number | null>(1);
  const [expandedHeights, setExpandedHeights] = useState<{
    [key: number]: number;
  }>({});
  const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  return (
    <>
      <div className="gradient-bg-3 text-white text-center text-2xl font-bold  px-3 py-4 mb-8">
        2024 夏季 レギュラーシーズン
      </div>
      <div className="w-[90%] mx-auto">
        {/* <div className="grid w-full grid-cols-2 place-items-center">
          <div className="text-white text-center font-bold bg-[#9AC9A7] w-full p-1">
            1巡目
          </div>
          <div className="text-white text-center font-bold bg-[#939393] w-full p-1">
            2巡目
          </div>
        </div> */}
        <div className="gradient-bg-3 flex w-full text-white font-bold">
          <div className="w-1/3 text-center bg-reject flex justify-center items-center">
            <div className="w-1/2 p-1.5 relative">
              <Image
                src="/map/sacred-heart-hospital.webp"
                alt="team_1"
                width={100}
                height={100}
              />
              <RiForbid2Line className="text-red-500 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
            </div>
            <div className="w-1/2">
              <div className="w-full">RC</div>
              <div className="w-full text-[10px]">ビジター</div>
            </div>
          </div>
          <div className="w-1/3 text-center flex justify-center items-center bg-map-arms-factory bg-cover bg-center">
            1戦目
          </div>
          <div className="w-1/3 text-center bg-fennel flex justify-center items-center">
            <div className="w-1/2">
              <div className="w-full">FL</div>
              <div className="w-full text-[10px]">ホーム</div>
            </div>
            <div className="w-1/2 p-1.5">
              <Image
                src="/map/arms-factory.webp"
                alt="team_1"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
