"use client";
import Image from "next/image";
import Form from "./components/Form";

export default function Reserve() {
  return (
    <div className="w-full h-[100vh] text-center flex flex-col justify-center items-center bg-[#EDEFEE]">
      <h1 className="text-black text-6xl pt-10">Find your table</h1>

      <Form />

      <Image
        src={`/Rectangle 4.png`}
        width={378}
        height={243}
        alt="food"
        className="mt-10 mb-10"
      />
    </div>
  );
}
