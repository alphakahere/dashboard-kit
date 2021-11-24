import React from 'react'
import Menu from '../items/Menu'
import TopBar from '../items/TopBar'

import { Line } from 'react-chartjs-2'

const Chart6 = () => {


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
					callback : function(value) {
                        return value
                    }
				},
                grid: {
                    display:true
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
                data: [100, 150, 200, 300, 350, 400, 450, 500,610,620,640,670,680],
                borderColor: '#DAD7FE',
                backgroundColor: '#DAD7FE',
            },
            {
                id:1,
                label:"Restless",
                data: [105, 155, 205, 305, 355, 405, 455, 505,615,625,645,675,685],
                borderColor: '#4339F2',
                backgroundColor: '#4339F2',
                borderWidth:7,
            },
        ]
    }

    return (
        <div className="container">
        <div className="flex space-x-5 border rounded-lg pr-14 sm:pr-10 md:pr-4">
			<Menu />
			<div className="w-full py-3 pr-3">
				<TopBar />
				<h1 className="mt-5 cardTitle">Liechtenstein</h1>
				<div className="bg-white p-5 mt-6 rounded-lg ">
                    <div className=" flex flex-col justify-between mb-5 space-y-5 md:flex-row">
                        <h1 className="font-medium">Mooreview</h1>
                        <div className="flex flex-col  space-y-3 md:flex-row md:space-y-0 md:space-x-3">
                            <div className="item">
                                <span className="dot bg-pdark"></span>
                                <span>Restless</span>
                            </div>
                            <div className="item">
                                <span className="dot bg-plight"></span>
                                <span>Awake</span>
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

export default Chart6
