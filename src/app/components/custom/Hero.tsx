import Image from "next/image";
import ErvinJohn from "@/public/ErvinJohn.svg";
import Role from "./cards/Role";
import BookNow from "./cards/BookNow";
import { SocialMediaLang } from "@/src/lib/Lang";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full pb-20">
      <div className="relative w-full">
        <Image
          src={ErvinJohn}
          alt="Ervin John"
          className="w-1/2 h-auto justify-center mx-auto"
        />
        <div className="absolute left-[20%] -translate-x-1/2 top-[15%]">
          <Role />
        </div>
        <div className="absolute right-[21%] translate-x-1/2  bottom-10 translate-y-1/2">
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
  );
};

export default Hero;
