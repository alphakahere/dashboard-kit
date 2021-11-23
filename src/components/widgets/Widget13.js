import React from "react";

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

const Widget13 = () => {
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
            }
        }
	};

	const labels = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13];

	const data = {
		labels,
		datasets: [
			{
				id: 1,
				label: "Time",
				data: [10, 20, 30,70,30,80,30, 68,29, 75,15,50,25],
				borderColor: "#4339F2",
				backgroundColor: "#4339F2",
                borderWidth: 2,
                
			},
			{
				id: 2,
				label: "Restless",
				data: [45, 10, 60,15,80,40,55, 5,90, 5,10,95,55],
				borderColor: "#FF3A29",
				backgroundColor: "#FF3A29",
			},
			{
				id: 3,
				label: "Deep",
				data: [10, 20, 30,90,30,60,50, 68,29, 95,10,30,20],
				borderColor: "#FFB200",
				backgroundColor: "#FFB200",
                borderWidth: 2,
                
			},
			{
				id: 4,
				label: "Awake",
				data: [50, 20, 70,10,70,60,85, 15,60, 15,40,55,95],
				borderColor: "#34B53A",
				backgroundColor: "#34B53A",
			},
		],
	};
	return (
		<div className="bg-white p-5 rounded-xl w-full">
			<h1 className=" cardTitle">Northern Marilands</h1>
			<div className="flex items-center space-x-3 flex-wrap">
				<div className="item">
					<div className="dot bg-cred"></div>
					<span className="">Restless</span>
				</div>
				<div className="item">
					<div className="dot bg-cyellow"></div>
					<span className="">Awake</span>
				</div>
				<div className="item">
					<div className="dot bg-gdark"></div>
					<span className="">Deep</span>
				</div>
				<div className="item">
					<div className="dot bg-pdark"></div>
					<span className="">Time</span>
				</div>
			</div>
			<div className="flex-1 h-full">
				<Line options={options} data={data}/>
			</div>
			
		</div>
	);
};

export default Widget13;
