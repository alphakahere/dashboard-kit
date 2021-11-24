import React from 'react'
import Menu from '../items/Menu'
import TopBar from '../items/TopBar'

import { Line } from 'react-chartjs-2'

const Chart5 = () => {

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
                text: "",
            },
        },
        scales: {
            xAxis: {
                ticks: {
                    display: true,
                },
                grid: {
                    display: true,
                },
            },

            yAxis: {
                ticks: {
                },
                grid: {
                },
            },
        },
        elements : {
            point: {
                pointStyle : 'cross'
            },
            line : {
                tension:0.3,
                fill: true
            }
        }
    }

    const labels = [
        "1/12",
        "2/12",
        "3/12",
        "4/12",
        "5/12",
        "6/12",
        "7/12",
        "8/12",
        "9/12",
        "10/12",
        "11/12",
        "12/12",
        ""
    ];
    const data = {
        labels, 
        datasets : [
            {
                id:1,
                label:"Restless",
                data: [100, 200, 210, 300, 420, 415, 370, 400,500,600,590,500,500],
                borderColor: '#4339F2',
                backgroundColor: '#4339F2',
            },
        ]
    }

    return (
        <div className="container">
        <div className="flex space-x-5 border rounded-lg pr-14 sm:pr-10 md:pr-4">
			<Menu />
			<div className="w-full py-3 pr-3">
				<TopBar />
				<h1 className="mt-5 cardTitle">United States Minor Outlying Islands</h1>
				<div className="bg-white p-5 mt-6 rounded-lg ">
                    <div className=" flex flex-col justify-between mb-5 space-y-5 md:flex-row">
                        <h1 className="font-medium">North Mertie</h1>
                        <div className="flex flex-col  space-y-3 md:flex-row md:space-y-0 md:space-x-3">
                            <div className="item">
                                <span className="dot bg-somone"></span>
                                <span>Restless</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                       <Line options={options} data={data} /> 
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Chart5
