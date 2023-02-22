import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ data }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [
                    {
                        label: 'Orders 2023',
                        data: data.values,
                        borderColor: 'grey',
                        tension: 0.1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        ticks: {
                            stepSize: 1, // set the vertical grid interval to 10
                        },
                    },
                },
                responsive: true,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                stacked: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Line Chart with Shaded Area',
                    }
                },
            },
            });
    }, [data]);
    return <canvas ref={canvasRef} />;
};

export default LineChart;
