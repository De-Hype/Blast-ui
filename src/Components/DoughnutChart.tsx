import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { AiOutlineCaretDown } from "react-icons/ai";
import { PlayerData } from "../lib/PlayerData";

const DoughnutChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<"doughnut"> | null>(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current?.getContext("2d");
    if (myChartRef) {
      chartInstance.current = new Chart(myChartRef, {
        type: "doughnut",
        data: {
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
      <CircleAnimation>
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
      </CircleAnimation>
    </div>
  );
};

export default DoughnutChart;

const CircleAnimation: React.FC = ({ children }) => {
  const duration = 45000;
  const [progress, setProgress] = useState(0);
  const radius = 400 / 2;
  const circumference = 2 * Math.PI * radius;
  
  useEffect(() => {
    let startTime: number | undefined;
    let animationFrameId: number;

    const draw = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min(1, (timestamp - startTime) / duration);
      setProgress(progress);
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(draw);
      }
    };
    animationFrameId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animationFrameId);
  }, [duration]);

  const strokeDashOffset = circumference * (1 - progress);
  
  return (
    <div className="relative" style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}>
      <svg width="100%" height="100%">
        <circle
          cx={radius}
          cy={radius}
          r={radius}
          fill="transparent"
          stroke="white"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashOffset}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};
