import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full h-[304px] mt-4 bg-[#495E57]">
      <h1 className="text-[#F4CE14] ml-5 font-medium text-6xl lg:mb-8">Little Lemon</h1>
      <h2 className="text-white text-4xl ml-5 font-light lg:mb-7">Chicago</h2>
      <div className="flex w-[80%] justify-between flex-row">
        <div className="flex flex-col gap-5 lg:gap-10">
          <p className="text-white font-extralight text-xl ml-5 lg:w-[500px] w-[242px]">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="bg-[#F4CE14] hover:bg-[#99c5b6] hover:text-black ml-5   rounded-[15px] w-[148px] h-[35px] text=black">
            <Link className="font-bold text-lg" href={`/reserve`}>Reserve a table</Link>
          </button>
        </div>
        <Image height={152} width={147} className="lg:absolute bottom-[400px] lg:left-[600px]" alt="food" src={`/Img_pop.png`} />

      </div>
    </div>
  );
}
