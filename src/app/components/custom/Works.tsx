import PixelTransition from "../animations/PixelTransition";
import { WorksLang } from "@/src/lib/Lang";
import Image, { StaticImageData } from "next/image";
import { HiSparkles } from "react-icons/hi";
import Link from "next/link";
import { NextButton } from "@/public/icons";
import TextPressure from "../animations/TextPressure";
import { twMerge } from "tailwind-merge";

interface WorkItemProps {
  title: string;
  href: string;
  bgColor?: string;
  textColor?: string;
  sparkleColor?: string;
  img: StaticImageData;
  details?: string[];
}

const WorkItems = WorksLang.map(
  (
    {
      title,
      href,
      bgColor,
      textColor,
      sparkleColor,
      img,
      details,
    }: WorkItemProps,
    index
  ) => ({
    firstContent: (
      <div key={index}>
        <Image src={img} alt={title} className="w-full h-auto" />
      </div>
    ),
    secondContent: (
      <div
        key={index}
        className="flex flex-col justify-center w-full h-full items-center bg-[#111111] gap-8 font-poppins"
      >
        <h2
          className={twMerge(
            "text-[56px] font-semibold px-6 py-4 text-white rounded-2xl border border-white w-fit flex items-center justify-center gap-2",
            index === 0 && "text-7xl border-none"
          )}
          style={{ background: bgColor, color: textColor }}
        >
          <HiSparkles
            color={sparkleColor || textColor || "#FFFFFF"}
            size={24}
            className={twMerge(index === 0 && "hidden")}
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
                    className={twMerge(
                      "border border-primary italic font-medium text-5xl rounded-2xl px-6 py-4 text-center w-fit",
                      index === 0 && "border-none font-archivo text-[32px]"
                    )}
                  >
                    {detail}
                  </p>
                ))}
              </div>
            ))}
        </div>
        <Link
          href={href}
          className="flex w-full gap-4 items-center justify-center cursor-pointer text-3xl font-medium italic"
        >
          {index === 0 ? "Contact Me" : "Click to view"}
          <Image src={NextButton} alt="Next Button" className="size-16" />
        </Link>
      </div>
    ),
  })
);

const Works = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 mb-12 w-full text-center">
        <TextPressure
          text="GALLERY"
          flex
          alpha={false}
          stroke
          width
          weight
          italic
          textColor="#ffffff"
          strokeColor="#0088FE"
          minFontSize={36}
        />
        <p className="font-poppins font-medium text-5xl">
          See some of my work.
        </p>
      </div>

      <div className="font-archivo text-center flex flex-col gap-8 justify-center w-full mb-16 py-20">
        <p className="text-7xl font-semibold">Important Note!</p>
        <p className="font-medium">
          My most recent projects were primarily internal tools and are not
          included in this public portfolio. <br /> I’d be happy to walk you
          through these projects in person or through a call upon request.
        </p>
        <p className="font-poppins text-3xl">
          Send me an invite at ervinjohn.cacdac@gmail.com
        </p>
      </div>
      <div className="grid justify-items-center gap-16">
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
