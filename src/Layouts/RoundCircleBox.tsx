import { FaArrowLeft, FaArrowRight, FaHistory } from "react-icons/fa";
import { RxTrackNext } from "react-icons/rx";
import DoughnutChart from "../Components/DoughnutChart";
import React from "react";

const RoundCircleBox:React.FC = () => {
  return (
    <div id="thin-border" className="bg-slate-950  text-white px-3 font-bold w-2/5 py-3">
      <div className="flex items-center justify-between">
        <h3 className="">
          Round <span>#17761</span>
        </h3>
        <div className="flex gap-3">
          <div id="thin-border"  className="flex  gap-1 cursor-pointer items-center  px-2 py-[2px] rounded-md">
            <FaHistory /> <h3 className="text-sm">History</h3>
          </div>
          <div id="thin-border"  className="flex cursor-pointer items-center  px-2 py-[2px] rounded-md">
            <FaArrowLeft /> 
          </div>
          <div id="thin-border"  className="flex cursor-pointer items-center  px-2 py-[2px] rounded-md">
            <FaArrowRight className="font-thin" />
          </div>
          <div id="thin-border"  className="flex cursor-pointer items-center  px-2 py-[2px] rounded-md">
            <RxTrackNext className="font-thin" />
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center h-full">
        <DoughnutChart />
      </div>
    </div>
  );
};

export default RoundCircleBox;
