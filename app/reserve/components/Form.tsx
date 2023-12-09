"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, {
  ChangeEvent,
  LegacyRef,
  useEffect,
  useRef,
  useState,
} from "react";

export default function Form() {
  const dateInput = useRef<HTMLInputElement>();
  const selectInput = useRef<HTMLSelectElement>();
  const [disabled, setDisabled] = useState(true);
  const [formState, setFormState] = useState({
    date: "",
    time: getCurrentTime(),
    guests: "2",
    table: "Inside",
  });
const router = useRouter()
  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const formattedHours = (hours % 12 || 12).toString().padStart(2, "0");
    return `${formattedHours}:${minutes}`;
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const adjustTime = (minutes: number) => {
    if (formState.time) {
      const [hours, minutesPart] = formState.time.split(":");
      const currentTime = new Date();

      currentTime.setHours(parseInt(hours, 10));

      currentTime.setMinutes(parseInt(minutesPart, 10) + minutes);

      const adjustedTime = `${currentTime
        .getHours()
        .toString()
        .padStart(2, "0")}:${currentTime
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
      setFormState({ ...formState, time: adjustedTime });
    }
  };

  useEffect(() => {
    if (
      formState.date &&
      formState.time &&
      formState.guests &&
      formState.table
    ) {
      setDisabled(false);
    }
  }, [formState]);

  const handleClick = ()=>{
    router.push(`/done?date=${formState.date}&time=${formState.time}&guests=${formState.guests}&table=${formState.table}`)
  }
  
  return (
    <div>
      <form
      onSubmit={(e)=>{
        e.preventDefault()
      }}
        className="flex justify-center items-center flex-col gap-7 mt-7"
        action=""
      >
        <div className="flex gap-5 justify-center items-center">
          <label className="font-semibold " htmlFor="date">
            <h3 className="">DATE</h3>
          </label>
          <div className="relative">
            <input
              className="w-[279px] flex flex-row-reverse  rounded-[16px] h-[45px] px-8 py-15"
              id="date"
              required
              type="date"
              name="date"
              value={formState.date}
              onChange={handleChange}
              ref={dateInput as LegacyRef<HTMLInputElement>}
            />
            <Image
              onClick={() => {
                dateInput.current?.showPicker();
              }}
              className="absolute cursor-pointer top-[-6px] right-0 "
              style={{ width: "auto", height: "auto" }}
              width={60}
              height={60}
              alt=""
              src={`/Circle_Carret_Right.svg`}
            />
          </div>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <label className="font-semibold" htmlFor="time">
            TIME
          </label>
          <div className="relative">
            <input
              className="w-[279px] flex flex-row-reverse gap-3 pl-[80px] rounded-[16px] h-[45px] px-8 py-15"
              required
              type="time"
              id="time"
              name="time"
              value={formState.time}
              onChange={handleChange}
            />
            <Image
              onClick={() => adjustTime(30)}
              className="absolute  cursor-pointer top-[-6px] right-0 "
              width={60}
              height={60}
              style={{ width: "auto", height: "auto" }}
              alt=""
              src={`/Circle_Carret_Riht.png`}
            />
            <Image
              onClick={() => adjustTime(-30)}
              className="absolute  cursor-pointer top-[-6px] "
              width={60}
              height={60}
              style={{ width: "auto", height: "auto" }}
              alt=""
              src={`/Circle_Carret_left.svg`}
            />
          </div>
        </div>
        <div className="flex gap-5 pr-3 justify-center items-center">
          <label className="font-semibold" htmlFor="guests">
            GUESTS
          </label>
          <div className="relative">
            <select
              className="w-[279px] cursor-pointer appearance-none flex rounded-[16px] h-[45px] px-10 py-15"
              required
              id="guests"
              name="guests"
              value={formState.guests}
              onChange={handleChange}
              ref={selectInput as LegacyRef<HTMLSelectElement>}
            >
              {new Array(9).fill(0).map((_, index) => {
                return (
                  <option value={index + 2} key={index}>
                    {index + 2}
                  </option>
                );
              })}
            </select>
            <Image
              className="absolute  top-[-6px] right-0 "
              style={{ width: "auto", height: "auto", pointerEvents: "none" }}
              width={60}
              height={60}
              alt=""
              src={`/Circle_Carret_Right.svg`}
            />
            <Image
              className="absolute  top-[12px] left-[10px] "
              style={{ width: "auto", height: "auto", pointerEvents: "none" }}
              width={60}
              height={60}
              alt=""
              src={`/user.svg`}
            />
          </div>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <h2 className="font-semibold">TABLE (optional)</h2>
          <div className="flex gap-2 justify-center items-center">
            <label htmlFor="inside">Inside</label>
            <div className="relative ">
              <input
                onChange={handleChange}
                value={`Inside`}
                className="w-[25px] cursor-pointer  h-[25px]"
                required
                name="table"
                type="radio"
                id="inside"
                checked={formState.table === "Inside"}
                style={
                  formState.table === "Inside" ? { visibility: "hidden" } : {}
                }
              />
              {formState.table === "Inside" ? (
                <Image
                  className="absolute  top-[0px] left-[0px] "
                  style={{ width: "auto", height: "auto" }}
                  width={60}
                  height={60}
                  alt=""
                  src={`/right.png`}
                />
              ) : (
                ""
              )}
            </div>
            <label htmlFor="event">Event Zone</label>
            <div className="relative ">
              <input
                value={`Event Zone`}
                className="w-[25px] cursor-pointer h-[25px]"
                required
                name="table"
                type="radio"
                id="event"
                onChange={handleChange}
                checked={formState.table === "Event Zone"}
                style={
                  formState.table === "Event Zone"
                    ? { visibility: "hidden" }
                    : {}
                }
              />
              {formState.table === "Event Zone" ? (
                <Image
                  className="absolute  top-[0px] left-[0px] "
                  style={{ width: "auto", height: "auto" }}
                  width={60}
                  height={60}
                  alt=""
                  src={`/right.png`}
                />
              ) : (
                ""
              )}
            </div>
            <label htmlFor="outside">Outside</label>
            <div className="relative ">
              <input
                className="w-[25px] cursor-pointer h-[25px]"
                value={`Outside`}
                required
                name="table"
                type="radio"
                id="outside"
                onChange={handleChange}
                checked={formState.table === "Outside"}
                style={
                  formState.table === "Outside" ? { visibility: "hidden" } : {}
                }
              />
              {formState.table === "Outside" ? (
                <Image
                  className="absolute  top-[0px] left-[0px] "
                  style={{ width: "auto", height: "auto" }}
                  width={60}
                  height={60}
                  alt=""
                  src={`/right.png`}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <button
        onClick={handleClick}
          disabled={disabled}
          style={disabled ? { backgroundColor: "gray" } : {}}
          className="w-[175px] flex justify-end items-center h-[41px] font-bold rounded-3xl bg-[#F4CE14]"
        >
          <h3>Place Order</h3>{" "}
          <Image
            className="mr-5"
            style={{ width: "auto", height: "auto" }}
            width={60}
            height={60}
            alt=""
            src={`/Cycling.png`}
          />
        </button>
      </form>
    </div>
  );
}
