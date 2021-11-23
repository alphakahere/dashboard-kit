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

const Widget14 = () => {
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
                pointStyle : 'line'
            },
            line : {
                tension:1
            }
        }
	};

	const labels = [1, 2, 3, 4, 5, 6];

	const data = {
		labels,
		datasets: [
			{
				id: 1,
				label: "Restless",
				data: [1, 2, 3,4,5, 6,],
				borderColor: "#4339F2",
				backgroundColor: "#DAD7FE",
                borderWidth: 5,
                
			},
			{
				id: 2,
				label: "Awake",
				data: [1, 2, 3, 4, 5, 6],
				borderColor: "#DAD7FE",
				backgroundColor: "#DAD7FE",
				fill: true,
			},
		],
	};
	return (
		<div className="bg-white p-5 rounded-xl w-full flex flex-col space-y-3">
			<div className="flex justify-between items-center">
				<h1 className="font-medium text-2xl">Title</h1>
				<RiMoreLine />
			</div>
			<div className="flex items-center space-x-4">
				<div className="item">
					<div className="dot bg-pdark"></div>
					<span className="">Restless</span>
				</div>
				<div className="item">
					<div className="dot bg-plight"></div>
					<span className="">Awake</span>
				</div>
			</div>
			<div className="flex-1 h-full">
				<Line options={options} data={data}/>
			</div>
		</div>
	);
};

export default Widget14;
