"use client";

import Image from "next/image";
import ErvinJohn from "@/public/ErvinJohn.svg";
import Role from "./cards/Role";
import BookNow from "./cards/BookNow";
import { SocialMediaLang } from "@/src/lib/Lang";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { DownButton } from "@/public/icons";
import { useScrollThreshold } from "../../hooks/useScrollThreshold";

const Hero = () => {
  const hasScrolled = useScrollThreshold({ threshold: 250 });

  return (
    <div className="grid w-full justify-items-center">
      <div className="relative w-full">
        <div className="relative w-full">
          <Image
            src={ErvinJohn}
            alt="Ervin John"
            className="w-1/2 h-auto justify-center mx-auto"
          />
          <div className="absolute left-[20%] -translate-x-1/2 top-[15%]">
            <Role />
          </div>
          <div className="absolute right-[21%] translate-x-1/2 bottom-10 translate-y-1/2">
            <BookNow />
          </div>
        </div>
        <div className="absolute bottom-0 flex flex-col gap-y-6 pl-20">
          {SocialMediaLang.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={item.icon}
                alt={item.icon as string}
                className="size-12"
              />
            </Link>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {!hasScrolled && (
          <motion.button
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            animate={{ y: -20 }}
            transition={
              {
                y: {
                  ease: "linear",
                  duration: 1,
                  repeat: Infinity,
                  type: "spring",
                  damping: 10,
                  repeatType: "reverse",
                },
                opacity: { duration: 0.3 },
              } as any
            }
            className="mt-12"
          >
            <p className="italic text-xs">Scroll down</p>
            <Image
              src={DownButton}
              alt="Down Button"
              className="size-16 mt-3"
            />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
