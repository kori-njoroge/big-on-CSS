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
                        label: '',
                        data: data.values,
                        borderColor: '#E5E7E7',
                        borderWidth:'1',
                        tension: 0.01,
                        fill: true
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
                        display: true
                        // text: 'Line Chart with Shaded Area',
                    }
                },
            },
            });
    }, [data]);
    return <canvas ref={canvasRef} style={{ width: '300px', height: '300px' }} />;
};

export default LineChart;
