"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function SurviverMatchResults() {
  const [selectedSurvivor, setSelectedSurvivor] = useState<number | null>(null);
  const survivorResults = [
    {
      id: 1,
      name: "Zeta_Hametsu",
      character: {
        name: "prospector",
        icon: "/surviver/prospector_icon.png",
      },
      decode: 80,
      hitCount: 1,
      rescueCount: 2,
      healCount: 3,
      chasingTime: 96.6,
      score: 9874,
      escaped: true,
    },
    {
      id: 2,
      name: "Zeta_DoLisu",
      character: {
        name: "barmeid",
        icon: "/surviver/barmeid_icon.png",
      },
      decode: 57,
      hitCount: 1,
      rescueCount: 2,
      healCount: 3,
      chasingTime: 126.6,
      score: 8874,
      escaped: true,
    },
    {
      id: 3,
      name: "Zeta_Kazuneko",
      character: {
        name: "aeroplanist",
        icon: "/surviver/aeroplanist_icon.png",
      },
      decode: 145,
      hitCount: 1,
      rescueCount: 2,
      healCount: 3,
      chasingTime: 36.6,
      score: 9994,
    },
    {
      id: 4,
      name: "Zeta_Shinami",
      character: {
        name: "grave_keeper",
        icon: "/surviver/grave_keeper_icon.png",
      },
      decode: 100,
      hitCount: 1,
      rescueCount: 2,
      healCount: 3,
      chasingTime: 126.6,
      score: 9994,
    },
  ];
  const selectedSurvivorData = survivorResults.find(
    (survivor) => survivor.id === selectedSurvivor
  );

  const decidePosition = (id: number) => {
    switch (id) {
      case 1:
        return "self-start";
      case 2:
        return "self-start ml-[12.5%]";
      case 3:
        return "self-start ml-[37.5%]";
      case 4:
        return "self-end";
      default:
        return "self-start";
    }
  };
  return (
    <>
      <div className="grid grid-cols-4 gap-1 w-full">
        {survivorResults.map((survivor) => (
          <div
            key={survivor.id}
            onClick={() => setSelectedSurvivor(survivor.id)}
          >
            <div
              className={cn(
                "text-white text-[12px] text-center bg-zeta-background py-1",
                survivor.escaped ? "bg-zeta-background" : "bg-gray-400"
              )}
            >
              {survivor.name}
            </div>
            <div className="text-white text-[12px] text-center h-28 gradient-bg-2 py-1 relative">
              <Image
                src={survivor.character.icon}
                alt="survivor-result-bg"
                width={200}
                height={200}
                className="absolute bottom-0 right-1"
                style={{
                  width: "100%",
                  filter: survivor.escaped
                    ? "grayscale(0%)"
                    : "grayscale(100%)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {selectedSurvivorData && (
        <div
          className={cn(
            "text-[12px] text-white gradient-bg-2 w-[50%] pl-3 pr-6",
            decidePosition(selectedSurvivorData.id)
          )}
        >
          <div className="flex flex-row justify-between gap-1">
            <p>暗号解読進捗:</p>
            <p>{selectedSurvivorData.decode}</p>
          </div>
          <div className="flex flex-row justify-between gap-1">
            <p>板命中回数:</p>
            <p>{selectedSurvivorData.hitCount}</p>
          </div>
          <div className="flex flex-row justify-between gap-1">
            <p>救助回数:</p>
            <p>{selectedSurvivorData.rescueCount}</p>
          </div>
          <div className="flex flex-row justify-between gap-1">
            <p>治療回数:</p>
            <p>{selectedSurvivorData.healCount}</p>
          </div>
          <div className="flex flex-row justify-between gap-1">
            <p>牽制時間:</p>
            <p>{selectedSurvivorData.chasingTime}</p>
          </div>
          <div className="flex flex-row justify-between gap-1">
            <p>演繹得点:</p>
            <p>{selectedSurvivorData.score}</p>
          </div>
        </div>
      )}
    </>
  );
}
