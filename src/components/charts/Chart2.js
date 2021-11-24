import React from 'react'
import Menu from '../items/Menu'
import TopBar from '../items/TopBar'

import { Line } from 'react-chartjs-2'

const Chart2 = () => {

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
                tension:1
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
                data: [200, 350, 300, 350, 200, 290, 200, 320,200,340,290,40,0],
                borderColor: '#4339F2'
            },
            {
                id:2,
                label:"Awake",
                data: [300, 410, 80, 590, 310, 450, 90, 505,10,300,600,300,600],
                borderColor: '#FF3A29'
            },
            {
                id:3,
                label:"Deep",
                data: [490, 355, 360, 500, 460, 525, 490, 560,440,377,503,400,500],
                borderColor: '#FFB200'
            },
            {
                id:4,
                label:"Digital",
                data: [600, 550, 610, 520, 590, 500, 690, 585,620,520,610,770,500],
                borderColor: '#34B53A'
            }

        ]
    }

    return (
        <div className="container">
        <div className="flex space-x-5 border rounded-lg pr-14 sm:pr-10 md:pr-4">
			<Menu />
			<div className="w-full py-3 pr-3">
				<TopBar />
				<h1 className="mt-5 cardTitle">Kazakhstan</h1>
				<div className="bg-white p-5 mt-6 rounded-lg ">
                    <div className=" flex flex-col justify-between mb-5 space-y-5 md:flex-row">
                        <h1 className="font-medium">South Skylafort</h1>
                        <div className="flex flex-col  space-y-3 md:flex-row md:space-y-0 md:space-x-3">
                            <div className="item">
                                <span className="dot bg-pdark"></span>
                                <span>Restless</span>
                            </div>
                            <div className="item">
                                <span className="dot bg-cred"></span>
                                <span>Awake</span>
                            </div>
                            <div className="item">
                                <span className="dot bg-cyellow"></span>
                                <span>Deep</span>
                            </div>
                            <div className="item">
                                <span className="dot bg-gdark"></span>
                                <span>Digital</span>
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

export default Chart2
