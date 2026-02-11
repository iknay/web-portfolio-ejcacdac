import Image from "next/image";
import Role from "./components/custom/cards/Role";
import MainLayout from "./layout/MainLayout";
import ErvinJohn from "@/public/ErvinJohn.svg";
import BookNow from "./components/custom/cards/BookNow";

export default function Home() {
  return (
    <MainLayout>
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
    </MainLayout>
  );
}
