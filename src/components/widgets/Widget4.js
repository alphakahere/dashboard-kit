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

const Widget4 = () => {

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
                pointStyle : 'cross'
            },
            line : {
                tension:0.5
            }
        }
	};

	const labels = [1, 2, 3, 4, 5, 6,7,8,9,10,11];

	const data = {
		labels,
		datasets: [
			{
				id: 1,
				label: "Restless",
				data: [1, 3, 2, 3, 2, 4, 3, 2, 2, 4, 1],
				borderColor: "#FFB200",
				backgroundColor: "#FFB200",  
				fill:true              
			},
			{
				id: 2,
				label: "Awake",
				data: [1, 4, 3, 4, 3, 5,3,4,3,3,5],
				borderColor: "#34B53A",
				backgroundColor: "#34B53A",
				fill: true,
			},
			{
				id: 3,
				label: "alpha",
				data: [3, 4, 4, 5, 5, 5,5,6,6,3,3],
				borderColor: "#4339F2",
				backgroundColor: "#4339F2",
				fill: true,
			},
		],
	};

	return (
		<div className=" bg-white p-7  rounded-xl w-full">
			<div className="flex justify-between items-center">
				<h1 className="font-bold text-xl">Apple</h1>
				<RiMoreLine />
			</div>
			<div className="flex flex-col md:flex-row items-start my-2 space-x-5">
				<div className="item text-lg">
					<span className="bg-cyellow dot"></span>
					<span className="font-medium">Instagram</span>
				</div>
				<div className="item mr-4 text-lg">
					<span className="bg-pdark dot"></span>
					<span className="font-medium">Facebook</span>
				</div>
				<div className="item mr-4 text-lg">
					<span className="bg-cblue dot"></span>
					<span className="font-medium">Twitter</span>
				</div>
			</div>
			<div className="">
				<Line options={options} data={data}/>
			</div>
		</div>
	);
};

export default Widget4;
