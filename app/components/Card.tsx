"use client";
import Image from "next/image";
import Link from "next/link";

export interface MealsProps {
  name: string;
  route:string
  description: string;
  price: string;
  photo: string;
}

interface verticalScrollProps {
  meals: MealsProps[];
}

const CardSlider: React.FC<verticalScrollProps> = ({ meals }) => {
  return (
      <div className="flex w-full flex-wrap ml-3 h-full ">
        {meals.map((meal, index) => (
          <div key={index}>
            <hr className="border mt-5 w-[400px]" />
            <div
              className="h-[120px] w-[396px] flex justify-center items-center  mt-5  font-semibold text-[#495E57] px-2 rounded-[15px] bg-[#EDEFEE]"
              style={{ marginRight: "10px" }}
            >
              <div>
                <Link
                  className="text-black  font-semibold text-xl"
                  href={`/reserve/${meal.route}`}
                >
                  {meal.name}
                </Link>
                <p
                  style={{ userSelect: "none" }}
                  className=" w-[296px] text-[#495E57] whitespace-nowrap overflow-hidden overflow-ellipsis h-[43px]"
                >
                  {meal.description}
                </p>
                <p
                  style={{ userSelect: "none" }}
                  className="text-[#495E57]"
                >{`$${meal.price}`}</p>
              </div>
              <Image
                className="rounded"
                src={meal.photo}
                height={83}
                width={83}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
  );
};

export default CardSlider;
