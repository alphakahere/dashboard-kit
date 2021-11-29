import React from "react";
import { Line } from "react-chartjs-2";


const Dash6Card = ({ img, itemData, id, borderColor, name, price, percentage, percentageColor}) => {
	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: false,
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
		scales: {
			xAxis: {
				grid: {
					display: false,
					borderWidth: 0,
				},
				ticks: {
					display: false,
				},
			},
			yAxis: {
				grid: {
					display: false,
					borderWidth: 0,
				},
				ticks: {
					display: false,
				},
			},
		},
	};

	const labels = [
		"01",
		"02",
		"03",
		"04",
		"05",
		"07",
		"08",
		"09",
		"10",
		"11",
		"12",
		"13",
		"14",
	];
	const data = {
		labels,
		datasets: [
			{
				id: {id},
				label: {name},
				data: itemData,
				borderColor: borderColor,
			},
		],
	};
	return (
		<div className="bg-white p-3 rounded-lg">
			<img
				src={img}
				alt="avatar"
				className="w-10 h-10 rounded-full"
			/>
			<h1 className="mt-1 font-medium">{name}</h1>
			<p className=" font-bold text-3xl mt-4 mb-2">{`$${price}`}</p>
			<p className={`font-medium ${percentageColor}`}>{`+${percentage}%`}</p>
			<div className="mt-2">
				<Line data={data} options={options} />
			</div>
		</div>
	);
};

export default Dash6Card;
