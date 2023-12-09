/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div className="w-screen h-screen flex-col flex bg-[#495E57]">
      <h2 className="text-[#F4CE14]  ml-6 w-[100px] mt-5">WHO WE ARE</h2>
      <div className="ml-5  flex ">
        <div className="">
          <h1 className="text-[60px] font-semibold text-white mt-10">
            we make your food
          </h1>
          <h2 className="text-white font-medium text-lg w-[400px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </h2>
        </div>
        <div>
          <Image
            className="m-10"
            src={`/Rectangle 4.png`}
            width={600}
            height={600}
            alt=""
          />
        </div>
      </div>
      <div>
        <h2 className="text-white ml-20 font-medium text-4xl w-[600px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </h2>
      </div>
    </div>
  );
}
