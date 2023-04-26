import React from 'react'
import {} from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Card } from 'react-bootstrap';
// import { faker } from "@faker-js/faker";
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [752,63,499,453,186,566,948],
      backgroundColor: " rgb(7, 7, 207)",
    },
    
  ],
};
function BarChart() {
  return (
    <Card className='p-1'>
          
      <Bar options={options} data={data} height={80} width={'100%'} />
    
    </Card>
  )
}

export default BarChart