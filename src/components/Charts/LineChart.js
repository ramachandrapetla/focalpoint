import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
    return(
        <div>
            <Line 
                data={{
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Views',
                        data: [12, 16, 3, 5, 2, 3],
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        fill: 'origin',
                        borderWidth: 1
                    }
                ]
                }}
                height={200}
                width={300}
                options={
                    {
                        maintainAspectRatio : false,
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    } 
                }
            />
        </div>
    )
}

export default LineChart;