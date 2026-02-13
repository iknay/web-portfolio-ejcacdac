"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import PalmLoader from "./PalmLoader";

const SuspensePage = ({
  image,
  alt,
}: {
  image: StaticImageData;
  alt: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${isLoading ? "h-screen" : "h-auto"}`}>
      {isLoading && (
        <div className="absolute inset-0 flex flex-col gap-10 items-center justify-center">
          <PalmLoader />
          <p className="font-poppins text-center">Setting up the gallery</p>
        </div>
      )}

      <Image
        src={image}
        alt={alt}
        className={`w-full h-auto transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        priority={true}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
};

export default SuspensePage;
