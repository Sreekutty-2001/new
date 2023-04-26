import React from 'react'
import { Line } from "react-chartjs-2";
import {} from "chart.js/auto";
import { Card } from 'react-bootstrap';
const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' 
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};


export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [199, 763, 772, 766, 246, 687, 367],
      backgroundColor: " rgb(7, 7, 207)",
    },
  ],
};
function LineChart() {
  return (
    <Card className='p-1'>
       <Line  data={data} height={300} width={300}></Line>
    
    </Card>
        
    
  )
}

export default LineChart