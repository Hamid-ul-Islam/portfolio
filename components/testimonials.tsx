"use client";
import React from "react";
import { PinContainer } from "../components/ui/3d-pin";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { MdCorporateFare } from "react-icons/md";

export function AnimatedPinDemo({
  title,
  link,
  description,
  image,
  index,
  company,
}: {
  title: string;
  link: string;
  description: string;
  image: any;
  index: number;
  company: string;
}) {
  return (
    <div className="!w-full flex items-center justify-center dark:text-white text-gray-700 sm:px-0 px-20">
      <PinContainer title="Link to profile" href={link} className="!w-full !h-full">
        <div className="flex basis-full flex-col  tracking-tight text-slate-100/50 sm:basis-1/2 w-full h-full ">
          <div className="flex gap-2 items-center">
            <FaUserCircle
              className={`w-6 h-6 ${
                index === 1
                  ? "text-sky-500"
                  : index === 2
                  ? "text-yellow-500"
                  : index === 3
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            />
            <h3 className="max-w-xs  !m-0 font-bold dark:text-white text-gray-700">
              {title}
            </h3>
          </div>
          <div className="flex gap-1 items-center !pb-2">
            <MdCorporateFare className="w-4 h-4" />
            <h3 className="max-w-xs text-sm !m-0 dark:text-white text-gray-700">
              {company}
            </h3>
          </div>
          <div className="text-base !m-0 !p-0 !pb-2 font-normal">
            <span className="flex gap-2 items-center text-yellow-600 !pb-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
          </div>
          <Image
            priority
            quality={100}
            src={image}
            alt={title}
            className="w-full h-full border-[15px] border-[#041f01] rounded"
          />
        </div>
      </PinContainer>
    </div>
  );
}
