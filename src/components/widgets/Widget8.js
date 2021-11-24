import React from "react";
import { RiMoreLine } from "react-icons/ri";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const Widget8 = () => {
	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
				labels: {
					usePointStyle: false,
				},
			},
			title: {
				display: true,
				text: "",
			},
			tooltip: {
				enabled: false,
			},
		},
		scales: {
			xAxis: {
				ticks: {
					display: false,
				},
				grid: {
					display: false,
                    borderWidth:0

				},
			},

			yAxis: {
				ticks: {
					display: false,
                    borderWidth:0
				},
				grid: {
					display: false,
                    borderWidth:0
				},
			},
		},
        elements : {
            point: {
                pointStyle : 'dash'
            },
            line : {
                tension:0.4
            }
        }
	};

	const labels = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13];

	const data = {
		labels,
		datasets: [
			{
				id: 1,
				label: "Restless",
				data: [55, 75, 65,70,30,55,32, 68,29, 75,15,50,25],
				borderColor: "#4339F2",
				backgroundColor: "#DAD7FE",
                borderWidth: 2,
                
			},
			{
				id: 2,
				label: "Awake",
				data: [45, 10, 60,15,80,40,55, 5,90, 5,10,95,55],
				borderColor: "#FF3A29",
				backgroundColor: "#FF3A29",
			},
		],
	};
	return (
		<div className="bg-white p-5 rounded-xl w-full flex flex-col space-y-3">
			<div className="flex justify-between items-center">
				<h1 className="font-medium text-2xl">Australia</h1>
				<RiMoreLine />
			</div>
			<div className="flex-1 h-full">
				<Line options={options} data={data}/>
			</div>
			<div className="flex items-center space-x-4">
				<div className="item">
					<div className="dot bg-pdark"></div>
					<span className="">Restless</span>
				</div>
				<div className="item">
					<div className="dot bg-cred"></div>
					<span className="">Awake</span>
				</div>
			</div>
		</div>
	);
};

export default Widget8;
