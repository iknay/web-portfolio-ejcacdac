import ButtonTriangle from "@/public/icons/button-triangle.svg";
import Image from "next/image";

const BookNow = () => {
  return (
    <div className="flex glass-card font-poppins w-fit px-6 py-10 gap-4 items-center">
      <div className="flex flex-col">
        <p className="text-4xl font-bold">Portfolio</p>
        <p className="italic">Book your Design NOW! </p>
      </div>
      <Image src={ButtonTriangle} alt="Book Now" className="inline size-20" />
    </div>
  );
};

export default BookNow;
