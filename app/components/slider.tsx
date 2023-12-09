"use client";
import { useRef, useState } from "react";

interface ButtonProps {
  id: string;
  text: string;
}

interface HorizontalScrollProps {
  buttons: ButtonProps[];
}

const Slider: React.FC<HorizontalScrollProps> = ({ buttons }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current!.offsetLeft);
    setScrollLeft(scrollRef.current!.scrollLeft);
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 1; // Adjust the multiplier for faster/slower scrolling
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  return (
    <div className="">
      <h1 className="text-black ml-5  mt-7 font-extrabold text-3xl">
        ORDER FOR DELIVERY!
      </h1>
      <div
        className="flex ml-3 h-full overflow-y-hidden"
        ref={scrollRef}
        style={{
          overflowX: "hidden",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {buttons.map((button) => (
          <button
            className="h-[39px] whitespace-nowrap mt-5  font-semibold text-[#495E57] px-2 rounded-[15px] bg-[#EDEFEE]"
            key={button.id}
            style={{ marginRight: "10px" }}
          >
            <p style={{ userSelect: "none" }}>{button.text}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
