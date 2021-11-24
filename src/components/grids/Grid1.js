import React from "react";
import { Line } from "react-chartjs-2";




const Grid1 = () => {
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
					display: false,
				},
			},

			yAxis: {
				ticks: {
					callback: function(value) {
                        return 1000 * value;
                    }
				},
				grid: {
					// display: false,
                    // borderWidth:0
				},
			},
		},
        elements : {
            point: {
                pointStyle : 'line'
            },
            line : {
                tension:1
            }
        }
	};
	const labels = [
		"1/12",
		"2/12",
		"3/12",
		"4/12",
		"5/12",
		"6/12",
		"7/12",
		"9/12",
		"10/12",
		"11/12",
		"12/12",

	];

	const data = {
		labels,
		datasets: [
		],
	};
	return (
		<div className=" bg-white px-3 py-5 rounded-lg">
			<Line options={options} data={data}/>
		</div>
	);
};

export default Grid1;
