import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';


function DonutChart() {
    const chartRef = useRef(null);

    useEffect(() => {
        const myChartRef = chartRef.current.getContext('2d');

        const data = {
            labels: [''],
            datasets: [
                {
                    label: 'Total Sales',
                    data: [5449, 19178],
                    backgroundColor: ['#7D91B5', '#B4483C'],
                    hoverOffset: 3,
                    cutout: '50%',
                },
            ],
        };

        const config = {
            type: 'doughnut',
            data: data,
        };

        new Chart(myChartRef, config);
    }, []);

    return <canvas ref={chartRef} className="donuti" style={{ width: '100px', height: '100px' }} />;
}

export default DonutChart;
