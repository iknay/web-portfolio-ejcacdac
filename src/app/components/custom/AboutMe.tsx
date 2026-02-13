import React from "react";
import MagicBento from "./MagicBento";

const AboutMe = () => {
  return (
    <div className="grid justify-items-center w-full gap-6">
      <h2 className="font-archivo italic font-semibold text-5xl">About me</h2>
      <MagicBento
        textAutoHide={true}
        enableStars
        enableSpotlight
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect
        spotlightRadius={400}
        particleCount={12}
        glowColor="0, 194, 294"
        disableAnimations={false}
      />
    </div>
  );
};

export default AboutMe;
