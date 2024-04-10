import React, { useEffect, useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";

const RoundCounter:React.FC = () => {
  const [showTime, setShowTime] = useState<boolean>(true);
  const [time, setTime] = useState<number>(45);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
      setShowTime(true)
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  const formatTime = (time:number) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div
      id="thin-border"
      className="bg-slate-950 self-start text-white px-5 w-[34%] py-3"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-bold">Round #17761</h3>
        {!showTime ? (
          <div
            id="thin-border"
            className="flex items-center  px-5 py-2 rounded-md"
          >
            <FaHistory />
          </div>
        ) : (
          <div className="flex items-center border rounded-lg  px-5 py-2 border-lime-500">
            <h2 className="text-lime-500 text-base font-medium">
              00:{formatTime(Math.max(time, 0))}
            </h2>
          </div>
        )}
      </div>
      
      <div className="grid py-3  grid-cols-2 gap-6 ">
        <div className="">
          <div className="flex items-center gap-2 font-bold">
            <div className="bg-white  px-1 py-1 rounded-full">
              <FaEthereum className="text-black text-sm" />
            </div>
            <h3 className="text-xl">4.78</h3>
          </div>
          <p className="text-sm text-slate-400">Prize Pool</p>
        </div>
        <div className="">
          <div className="flex items-center"><h3 className="font-bold text-xl">13</h3><h3 className="text-slate-500 font-semibold">/500</h3></div>
          <p className="text-sm text-slate-400">Players</p>
        </div>
        <div className="">
          <div className="flex items-center gap-2 font-bold">
            <div className="bg-white  px-1 py-1 rounded-full">
              <FaEthereum className="text-black text-sm" />
            </div>
            <h3 className="text-xl">0</h3>
          </div>
          <p className="text-sm text-slate-400">Your Entries</p>
        </div>
        <div className="">
         <h3 className="text-slate-500 text-xl font-semibold">0%</h3>
          <p className="text-sm text-slate-400">Players</p>
        </div>
      </div>
      <div className="border-t border-slate-500 py-4 grid grid-cols-2">
      <div className="">
         <h3 className="text-slate-500 text-xl font-semibold">0%</h3>
          <p className="text-sm text-slate-400">Players</p>
        </div>
        <div className="">
          <div className="flex items-center gap-2 font-bold">
            <div className="bg-white  px-1 py-1 rounded-full">
              <FaEthereum className="text-black text-sm" />
            </div>
            <h3 className="text-xl">-</h3>
          </div>
          <p className="text-sm text-slate-400">Total (0 Avg)</p>
        </div>

      </div>
    </div>
  );
};

export default RoundCounter;
