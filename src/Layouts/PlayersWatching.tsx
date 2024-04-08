import { AiOutlineEye } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";
import { PlayerData } from "../lib/PlayerData";
import react from "../assets/react.svg";
import React from "react";
const PlayersWatching:React.FC = () => {
  return (
    <div id="thin-border" className="bg-slate-950  text-white px-3 w-1/4 py-3">
      <div className="flex items-center font-semibold justify-between">
        <h3 className="">7 Players</h3>
        <div className="flex items-center gap-1 text-lime-300">
          <h3 className="">102 Watching</h3> <AiOutlineEye className="text-2xl" />
        </div>
      </div>
      <div className="">
        {PlayerData?.map((value, index) => (
          <div id="rounded" className={`flex   border border-slate-600 items-center     my-4  w-full ${value.color}`} key={index}>
            <div className="flex boxshadow rounded-l-md bg-slate-900 px-2 py-2 w-[90%] h-[100]   items-center  justify-between">
              <div className="flex  gap-2 items-center">
                <img
                  src={react || value.image}
                  className="w-8 h-8 rounded-full"
                  alt=""
                />
                <div className="flex flex-col">
                  <h3 className="text-sm text-slate-300"> {value.name} </h3>
                  <p className="">{value.points}K Pts</p>
                </div>
              </div>
              <div className="">
                <h3 className="font-extrabold">{value.percent}%</h3>
                <div className="flex gap-2 items-center">
                  <p className="">{value.amount}</p>
                  <span className="bg-white px-1 py-1 rounded-full">
                    <FaEthereum className="text-black text-xs" />{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className=" w-1/12  h-[100]">

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayersWatching;
