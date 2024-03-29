import { useEffect, useRef } from "react";
import Chart from "chart.js/auto"

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
            labels:[
                "Red","Blue", "Green"
            ],
            datasets:[
               {
                data:[30, 45, 25],
                backgroundColor:[
                "rgb(255, 0, 0)",
                "rgb(0, 255, 0)",
                "rgb(0, 0, 255)"
            ]}
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
    <div className="h-full  flex items-center justify-center">
        <canvas ref={chartRef} style={{width:"300px", height:"200px"}} />
    </div>
  )
}

export default DoughnutChart