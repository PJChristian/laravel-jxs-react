import React from 'react';
import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';


const PieChart = () => {

  // Data for the chart
  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };


  // Chart options
  const config = {
    type: 'pie',
    data: data,
  };

  

  return <Pie data={data} options={config}></Pie>;
};

export default PieChart;
