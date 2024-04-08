import { useEffect, useRef } from "react";
import Chart from "chart.js/auto"
import { AiOutlineCaretDown } from "react-icons/ai";
import { PlayerData } from "../lib/PlayerData";

const DoughnutChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    useEffect(() => {
      if (chartInstance.current){
        chartInstance.current.destroy();
      }
      const myChartRef = chartRef.current.getContext("2d")
    
      chartInstance.current= new Chart(myChartRef, {
        type:"doughnut",
        data:{
            // labels:[
            //     "Red","Blue", "Green"
            // ],
            datasets:[
               {
                data: PlayerData.map(player => player.bet_percent),
                backgroundColor:PlayerData.map(player => player.chart_color)
              }
            ],
            
        }
      })
      return ()=>{
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }
      }
    }, [])
    
  return (
    <div className="h-full relative flex items-center justify-center">
        <div className="border-4 relative rounded-full" style={{width:"320px", height:"320px"}}>
        <AiOutlineCaretDown className="absolute -top-4 left-[43%] right-[43%] z-50 text-5xl font-bold" />
        <canvas className="px-1 pb-2" ref={chartRef} style={{width:"100%", height:"100%", offset:"20px"}} />
        </div>
    </div>
  )
}

export default DoughnutChart