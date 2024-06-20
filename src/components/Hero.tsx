import Image from "next/image";
import React from "react";
import SocialMedia from "./SocialMedia";

const Hero = () => {
  return (
    <div className="relative z-50 flex items-center justify-between px-10">
      <div className="flex">
        <div className="h-[38rem] w-[35rem]">
          <Image
            src="https://addide.com/cdn/shop/products/CokeZero_Can_33cl_d9886fd9-fc7e-4fea-9d03-dc7ddfd11461_1024x.png?v=1625571426"
            alt=""
            width={1080}
            height={1080}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-32 flex flex-col gap-4">
          <h1 className="border-b-2 border-[#c80000] pb-2 text-6xl">
            The Best Coke Ever?
          </h1>

          <div className="text-2xl text-[#cf95a7]">
            <p className="flex">
              Coca-Cola<span className="mr-2 text-xs">&copy;</span> Zero Sugar
              has more real
            </p>

            <p className="flex">
              Coca-Cola<span className="mr-2 text-xs">&copy;</span> flavor,
              still without any sugar.
            </p>
          </div>

          <span className="cursor-pointer text-lg font-semibold text-[#c80000]">
            Read More ...
          </span>
        </div>
      </div>

      <div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default Hero;
