import React from "react";
import { Line } from "react-chartjs-2";

const Grid3 = () => {
	const values = [
		"03 Mars 2020",
		"03 Avril 2020",
		"03 Mai 2020",
		"03 Juin 2020",
		"03 Août 2020",
		"03  Septembre 2020",
		"03 Octobre 2020",
		"03 Novembre 2020",
		"03 Decembre 2020",
		"03 Janvier 2021",
	];
	const options = {
		responsive: true,
		maintainAspectRatio: true,
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
			xAxis: {
				ticks: {
					// display: true,
				},
				grid: {
					display: true,
					borderWidth: 0,
				},
			},

			yAxis: {
				ticks: {
					callback: function (value) {
						return values[value * 10];
					},
				},
				grid: {
					display: false,
				},
			},
		},
		elements: {
			point: {
				pointStyle: "line",
			},
			line: {
				tension: 1,
			},
		},
	};
	const labels = [
		"100",
		"200",
		"300",
		"400",
		"500",
		"600",
		"700",
		"900",
		"1000",
		"1100",
		"",
	];

	const data = {
		labels,
		datasets: [],
	};
	return (
		<div className=" bg-white px-3 py-5 rounded-lg">
			<Line options={options} data={data} />
		</div>
	);
};

export default Grid3;
