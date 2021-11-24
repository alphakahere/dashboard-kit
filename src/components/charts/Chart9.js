import React from "react";
import Menu from "../items/Menu";
import TopBar from "../items/TopBar";

import { Bar } from "react-chartjs-2";

const Chart9 = () => {
	const options = {
		responsive: true,
		maintainAspectRatio: true,
		base: 5,
		barPercentage: 0.4,
		borderRadius: {
			topLeft: "20",
			topRight: "20",
			bottomLeft: "20",
			bottomRight: "20",
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
					250, 100, 150, 160, 320, 200, 100, 130, 50, 50,
					300, 100,
				],
				borderColor: "#4339F2",
				backgroundColor: "#4339F2",
			},
			{
				id: 2,
				label: "Awake",
				data: [
					100, 250, 150, 240, 160, 200, 250, 170, 100, 230,
					200, 400,
				],
				borderColor: "#FFB200",
				backgroundColor: "#FFB200",
			},
			{
				id: 3,
				label: "Deep",
				data: [
					50, 150, 250, 200, 150, 200, 250, 200, 100, 330,
					160, 40,
				],
				borderColor: "#FF3A29",
				backgroundColor: "#FF3A29",
			},
		],
	};

	return (
		<div className="container">
			<div className="flex space-x-5 border rounded-lg pr-14 sm:pr-10 md:pr-4">
				<Menu />
				<div className="w-full py-3 pr-3">
					<TopBar />
					<h1 className="mt-5 cardTitle">Grenada</h1>
					<div className="bg-white p-5 mt-6 rounded-lg ">
						<div className=" flex flex-col justify-between mb-5 space-y-5 md:flex-row">
							<h1 className="font-medium">
								Thereseshire
							</h1>
							<div className="flex flex-col  space-y-3 md:flex-row md:space-y-0 md:space-x-3">
								<div className="item">
									<span className="dot bg-cblue"></span>
									<span>Restless</span>
								</div>
								<div className="item">
									<span className="dot bg-gdark"></span>
									<span>Awake</span>
								</div>
								<div className="item">
									<span className="dot bg-cred"></span>
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

export default Chart9;
