import React from "react";
import Menu from "../items/Menu";
import TopBar from "../items/TopBar";

import { Bar } from "react-chartjs-2";

const Chart10 = () => {
	const options = {
		responsive: true,
		maintainAspectRatio: true,
		base: 1,
		barPercentage: 0.25,
		borderRadius: {
			topLeft: "20",
			topRight: "20",
			bottomLeft: "20",
			bottomRight: "20",
		},
		borderSkipped: false,
		indexAxis: "y",
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
			x: {
				stacked: true,
				grid: {
					display: true,
					borderWidth: 0,
				},
			},
			y: {
				stacked: true,
				grid: {
					display: false,
					borderWidth: 0,
				},
			},
		},
		elements: {
			point: {
				pointStyle: "cross",
			},
			line: {
				tension: 0.3,
			},
		},
	};

	const labels = [
		"03 Mars 2020",
		"03 Avril 2020",
		"03 Mai 2020",
		"03 Juin 2020",
		"03 Août 2020",
		"03  Septembre 2020",
		"03 Octobre 2020",
	];
	const data = {
		labels,
		datasets: [
			{
				id: 1,
				label: "Restless",
				data: [700, 800, 400, 600, 1000, 900, 800],
				borderColor: "#FF3A29",
				backgroundColor: "#FF3A29",
			},
			{
				id: 2,
				label: "Awake",
				data: [500, 400, 800, 600, 200, 300, 400],
				borderColor: "#FFE5D3",
				backgroundColor: "#FFE5D3",
			},
		],
	};

	return (
		<div className="container">
			<div className="flex space-x-5 border rounded-lg pr-14 sm:pr-10 md:pr-4">
				<Menu />
				<div className="w-full py-3 pr-3">
					<TopBar />
					<h1 className="mt-5 cardTitle">Niue</h1>
					<div className="bg-white p-5 mt-6 rounded-lg ">
						<div className=" flex flex-col justify-between mb-5 space-y-5 md:flex-row">
							<h1 className="font-medium">
								Hamillmouth
							</h1>
							<div className="flex flex-col  space-y-3 md:flex-row md:space-y-0 md:space-x-3">
								<div className="item">
									<span className="dot bg-cred"></span>
									<span>Restless</span>
								</div>
								<div className="item">
									<span className="dot bg-somone"></span>
									<span>Awake</span>
								</div>
							</div>
						</div>
						<div className="mt-5">
							<Bar options={options} data={data} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Chart10;
