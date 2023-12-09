"use client";
import Image from "next/image";
import React, { ChangeEvent, useEffect, useState } from "react";

export default function SignUp({ handleClose }: { handleClose: () => void }) {
  const [disabled, setDisabled] = useState(true);
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (formState.fullName && formState.email && formState.password) {
      setDisabled(false);
    }
  }, [formState]);

  const handleClick = () => {
    localStorage.setItem("account", JSON.stringify(formState));
    handleClose();
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold">Sign Up</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex justify-center items-center flex-col gap-7 mt-7"
        action=""
      >
        <div className="flex gap-5 justify-center items-center">
          <label className="font-semibold " htmlFor="date">
            <h3 className=" whitespace-nowrap">FULL NAME</h3>
          </label>
          <div className="relative ml-2">
            <input
              className="w-[279px] bg-slate-200 flex flex-row-reverse  rounded-[16px] h-[45px] pl-[20px] py-15"
              id="fullname"
              required
              type="text"
              name="fullName"
              value={formState.fullName}
              onChange={handleChange}
            />
            <Image
              className="absolute cursor-pointer top-[10px] left-[240px] "
              style={{ width: "auto", height: "auto" }}
              width={60}
              height={60}
              alt=""
              src={`/Group 413.png`}
            />
          </div>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <label className="font-semibold" htmlFor="time">
            EMAIL
          </label>
          <div className="relative ml-9">
            <input
              className="w-[279px] bg-slate-200 flex flex-row-reverse gap-3 pl-[20px] rounded-[16px] h-[45px] px-8 py-15"
              required
              type="email"
              id="time"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />

            <Image
              className="absolute  cursor-pointe left-[240px] top-[10px] "
              width={60}
              height={60}
              style={{ width: "auto", height: "auto" }}
              alt=""
              src={`/Group 413.png`}
            />
          </div>
        </div>
        <div className="flex gap-7 pr-3 justify-center items-center">
          <label className="font-semibold ml-2" htmlFor="guests">
            PASSWORD
          </label>
          <div className="relative ">
            <input
              onChange={handleChange}
              name="password"
              type="password"
              className="w-[279px] bg-slate-200 flex flex-row-reverse gap-3 pl-[20px] rounded-[16px] h-[45px] px-8 py-15"
            />
            <Image
              className="absolute  top-[10px] left-[240px] "
              style={{ width: "auto", height: "auto", pointerEvents: "none" }}
              width={60}
              height={60}
              alt=""
              src={`/Group 413.png`}
            />
          </div>
        </div>

        <button
          disabled={disabled}
          onClick={handleClick}
          style={disabled ? { backgroundColor: "gray" } : {}}
          className="w-[175px] flex justify-center items-center h-[41px] font-bold rounded-3xl bg-[#F4CE14]"
        >
          <h3>Sign Up</h3>
        </button>
      </form>
    </div>
  );
}
