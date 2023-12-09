import React from 'react'

export default function done({searchParams}:{searchParams:{date:string,time:string,guests:string,table:String}}) {
  return (
    <div className='flex flex-col justify-center items-center m-64'>
    <h1 className="text-2xl w-[300px] text-green-600 font-semibold">
      Your reservation is confirmed!
    </h1>
    <p className=" w-60 text-lg">Date: {searchParams.date}</p>
    <p className=" w-60 text-lg">Time: {searchParams.time}</p>
    <p className=" w-60 text-lg">Guests: {searchParams.guests}</p>
    <p className=" w-60 text-lg">Table: {searchParams.table}</p>
  </div>  )
}
