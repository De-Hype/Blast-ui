import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { AiOutlineCaretDown } from "react-icons/ai";
import { PlayerData } from "../lib/PlayerData";

const DoughnutChart = ():JSX.Element => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<"doughnut">|null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const duration = 1000 
  useEffect(() => {
    const cvs:any = canvasRef.current;
    const ctx:any = cvs.getContext("2d");
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
    const circle ={
      angle:Math.PI,
      angle2:3/2 * Math.PI,
      velocity:(Math.PI / 80) * (30/duration),
      index:1,
      bg:"rgb(107, 172, 47)",
      round:0,
      
      position:[
      {x:cvs.width / 2, y:cvs:height / 2 - 100, r:30, c:"yellow"},
      {x:cvs.width / 2, y:cvs:height / 2 - 100, r:150, c:"yellow"},
      {x:cvs.width / 2, y:cvs:height / 2 - 100, r:150, c:"green"},
    ],
    draw:function(){
      ctx.beginPath
    }
    };
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current?.getContext("2d");
    if (myChartRef) {
      chartInstance.current = new Chart(myChartRef, {
        type: "doughnut",
        data: {
          // labels:[
          //     "Red","Blue", "Green"
          // ],
          datasets: [
            {
              data: PlayerData.map((player) => player.bet_percent),
              backgroundColor: PlayerData.map((player) => player.chart_color),
            },
          ],
        },
      });
    }
    
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="h-full relative flex items-center justify-center">
      <div
        className="border-4 relative rounded-full"
        style={{ width: "370px", height: "370px" }}
      >
        <AiOutlineCaretDown className="absolute -top-4 left-[43%] right-[43%] z-50 text-5xl font-bold" />
        <canvas
          className="px-1 pb-2"
          ref={chartRef}
          style={{ width: "100%", height: "100%", offset: "20px" }}
        />
      </div>
    </div>
  );
};

export default DoughnutChart;