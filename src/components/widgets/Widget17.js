import React from "react";
import { RiMoreLine } from "react-icons/ri";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Widget17 = () => {
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
                tension:1
            }
        }
	};

	const data = {
		labels: ['Red', 'Blue', 'Yellow',],
		datasets: [
		  {
			label: '# of ',
			data: [90, 90, 90],
			backgroundColor: [
			  '#4339F2',
			  '#FFB200',
			  '#FF3A29',
			],
			borderColor: [
			  '#4339F2',
			  '#FFB200',
			  '#FF3A29',
			],
			borderWidth: 2,
		  },
		],
	  };
	return (
		<div className="bg-white p-5 rounded-xl w-full flex flex-col space-y-2">
			<div className="flex justify-between items-center">
				<h1 className="font-medium text-2xl">Australia</h1>
				<RiMoreLine />
			</div>
			<div style={{ width: 250, height: 250 }} className="flex justify-center items-center">
				<Pie options={options} data={data}/>
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

export default Widget17;
