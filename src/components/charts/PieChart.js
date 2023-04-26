import React from 'react'
import { Pie } from "react-chartjs-2";
import { } from "chart.js/auto";
import { Card } from 'react-bootstrap';
export const data = {

  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgb(255, 174, 0)",
         "rgb(7, 7, 207)",
        " rgb(255, 111, 0)",
       
        
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgb(255, 255, 255)",
        " rgb(255, 255, 255)",
        " rgb(255, 255, 255)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1.9,
    },
  ],
};

function PieChart() {
  return (
    <Card className='p-1'>
      <Pie data={data} height={200} width={300}></Pie>
    </Card>


  )
}

export default PieChart