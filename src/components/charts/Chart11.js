import React from "react";
import Menu from "../items/Menu";
import TopBar from "../items/TopBar";

import { Bar } from "react-chartjs-2";

const Chart11 = () => {
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
				data: [500, 350, 100, 600, 650, 900, 650],
				borderColor: "#4339F2",
				backgroundColor: "#4339F2",
			},
			{
				id: 2,
				label: "Awake",
				data: [200, 150, 500, 200, 200, 80, 200],
				borderColor: "#02A0FC",
				backgroundColor: "#02A0FC",
			},
			{
				id: 3,
				label: "Deep",
				data: [100, 400, 400, 400, 200, 120, 200],
				borderColor: "#34B53A",
				backgroundColor: "#34B53A",
			},
		],
	};

	return (
		<div className="container">
			<div className="flex space-x-5 border rounded-lg pr-14 sm:pr-10 md:pr-4">
				<Menu />
				<div className="w-full py-3 pr-3">
					<TopBar />
					<h1 className="mt-5 cardTitle">Ireland</h1>
					<div className="bg-white p-5 mt-6 rounded-lg ">
						<div className=" flex flex-col justify-between mb-5 space-y-5 md:flex-row">
							<h1 className="font-medium">
							North
							</h1>
							<div className="flex flex-col  space-y-3 md:flex-row md:space-y-0 md:space-x-3">
								<div className="item">
									<span className="dot bg-pdark"></span>
									<span>Restless</span>
								</div>
								<div className="item">
									<span className="dot bg-cblue"></span>
									<span>Awake</span>
								</div>
								<div className="item">
									<span className="dot bg-gdark"></span>
									<span>Deep</span>
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

export default Chart11;
