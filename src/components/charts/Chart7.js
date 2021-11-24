import React from "react";
import Menu from "../items/Menu";
import TopBar from "../items/TopBar";

import { Bar } from "react-chartjs-2";

const Chart7 = () => {
	const options = {
		responsive: true,
		maintainAspectRatio: true,
        base:1,
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
				stacked: false,
                grid: {
                    display: false,
                    borderWidth:0,
                }
			},
			y: {
				stacked: false,
                grid: {
                    borderWidth:0,
                }
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
					680, 400, 495, 550, 615, 690, 450, 610, 500, 430,
					400, 300,
				],
				borderColor: "#02A0FC",
				backgroundColor: "#02A0FC",
				barPercentage: 0.3,
				borderRadius: 5,
                borderSkipped: false
			},
			{
				id: 2,
				label: "Awake",
				data: [
					500, 550, 450, 600, 560, 600, 550, 400, 600, 330,
					200, 400,
				],
				borderColor: "#34B53A",
				backgroundColor: "#34B53A",
				barPercentage: 0.3,
				borderRadius: 5,
                borderSkipped: false
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

export default Chart7;
