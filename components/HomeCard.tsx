import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface HomeCardProps{
    title: string,
    description: string,
    className: string,
    img: string,
    handleClick: () => void
}

const HomeCard = ({img, title, description, handleClick, className}: HomeCardProps) => {
  return (
    <div
        className={cn('px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer', className) }
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-10 rounded-[10px] ">
        <Image
          src={img}
          alt="meeting"
          width={18}
          height={18}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-bold">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
