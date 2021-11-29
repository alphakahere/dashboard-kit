import React from "react";
import Menu from "../items/Menu";
import TopBar from "../items/TopBar";

import { Bar } from "react-chartjs-2";

const Chart1 = () => {
	const options = {
		responsive: true,
		maintainAspectRatio: true,
		barPercentage: 0.2,
		borderRadius: {
			topLeft: "10",
			topRight: "10",
			bottomLeft: "10",
			bottomRight: "10",
		},
		borderSkipped: false,
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
					display: false,
					borderWidth: 0,
				},
			},
			y: {
				stacked: true,
				grid: {
					borderWidth: 0,
				},
			},
		},
	};

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
	];
	const data = {
		labels,
		datasets: [
			{
				id: 1,
				label: "Restless",
				data: [
					250, 200, 230, 60, 130, 80, 230, 200, 130, 230,
					200, 50,
				],
				borderColor: "#4339F2",
				backgroundColor: "#4339F2",
			},
			{
				id: 2,
				label: "Awake",
				data: [
					200, 230, 230, 50, 230, 150, 230, 250, 130, 230,
					200, 100,
				],
				borderColor: "#34B53A",
				backgroundColor: "#34B53A",
			},
			{
				id: 3,
				label: "Deep",
				data: [
					120, 230, 230, 70, 150, 330, 230, 100, 130, 230,
					200, 300,
				],
				borderColor: "#FFB200",
				backgroundColor: "#FFB200",

			},
		],
	};

	return (
		<div className="container">
			<div className="flex space-x-5 border rounded-lg pr-14 sm:pr-10 md:pr-4">
				<Menu />
				<div className="w-full py-3 pr-3">
					<TopBar />
					<h1 className="mt-5 cardTitle">Kazakhstan</h1>
					<div className="bg-white p-5 mt-6 rounded-lg ">
						<div className=" flex flex-col justify-between mb-5 space-y-5 md:flex-row">
							<h1 className="font-medium">
								South Skylafort
							</h1>
							<div className="flex flex-col  space-y-3 md:flex-row md:space-y-0 md:space-x-3">
								<div className="item">
									<span className="dot bg-pdark"></span>
									<span>Restless</span>
								</div>
								<div className="item">
									<span className="dot bg-gdark"></span>
									<span>Awake</span>
								</div>
								<div className="item">
									<span className="dot bg-cyellow"></span>
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

export default Chart1;
