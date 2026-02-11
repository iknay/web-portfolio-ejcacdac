import React from "react";
import PixelTransition from "../animations/PixelTransition";
import { WorksLang } from "@/src/lib/Lang";
import Image from "next/image";
import { HiSparkles } from "react-icons/hi";

const WorkItems = WorksLang.map(
  ({ title, bgColor, textColor, sparkleColor, img, details }, index) => ({
    firstContent: (
      <div key={index}>
        <Image src={img} alt={title} className="w-full h-auto" />
      </div>
    ),
    secondContent: (
      <div
        key={index}
        className="flex flex-col justify-center w-full h-full items-center bg-[#111111]"
      >
        <h2
          className={
            "text-[56px] font-semibold mb-8 px-6 py-4 text-white rounded-2xl border border-white w-fit flex items-center justify-center gap-2"
          }
          style={{ background: bgColor, color: textColor }}
        >
          <HiSparkles
            color={sparkleColor || textColor || "#FFFFFF"}
            size={24}
          />
          {title}
        </h2>
        <div className="flex flex-col items-center gap-6">
          {details
            ?.reduce<string[][]>((rows, _, i, arr) => {
              if (i % 3 === 0) rows.push(arr.slice(i, i + 3));
              return rows;
            }, [])
            .map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-center gap-6">
                {row.map((detail, i) => (
                  <p
                    key={i}
                    className="border border-primary italic font-medium text-5xl rounded-2xl px-6 py-4 text-center w-fit"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            ))}
        </div>
      </div>
    ),
  }),
);

const Works = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 mb-12 w-full text-center">
        <p className="text-9xl font-bold font-archivo">Gallery</p>
        <p className="font-poppins font-medium text-5xl">
          See some of my work.
        </p>
      </div>

      <div className="flex flex-col gap-16">
        {WorkItems.map(({ firstContent, secondContent }, index) => (
          <PixelTransition
            key={index}
            firstContent={firstContent}
            secondContent={secondContent}
            gridSize={8}
            pixelColor="#ffffff"
            once={false}
            animationStepDuration={0.4}
            className="w-full h-fit"
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
