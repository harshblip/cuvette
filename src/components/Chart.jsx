import React from "react";
import { Line } from "react-chartjs-2";
import 'chartjs-plugin-annotation';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
)

export default function Charts({ percentile }) {
    const config = {
        type: 'line',
        data: {
            labels: ['0', '20', '40', '60', '80', '100'],
            datasets: [{
                label: 'Your Percentile ',
                data: [25, ` ${percentile}`, 40, 61, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            }]
        },
    };
    const options = {
        plugins: {
          annotation: {
            annotations: {
              line1: {
                type: 'line',
                mode: 'vertical',
                scaleID: 'x',
                value: 80, // Set the x-value where you want the line
                borderColor: 'red', 
                borderWidth: 1, 
                label: {
                  enabled: true,
                  content: 'x = 80', // Optional label
                  position: 'top', // Label position
                },
              },
            },
          },
        },
        scales: {
          x: { // Change 'x' to the appropriate scale ID if needed
            type: 'linear', // Set the scale type if not linear
            position: 'bottom',
          },
          y: {
            display: false,
          },
        },
      };
    return (
        <div className='chart'>
            <Line
                data={config.data}
                options={options}
            >

            </Line>
        </div>
    )
}
