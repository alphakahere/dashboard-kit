import React from "react";

import {MdKeyboardArrowDown} from 'react-icons/md'

import Menu from "../items/Menu";
import TopBar from "../items/TopBar";
import Dash4Item from "./dashItems/Dash4Item";
import avatar from "../../images/avatar.jpg";
import avatar2 from "../../images/avatar2.jpg";
import avatar4 from "../../images/avatar4.jpg";
import { Line } from "react-chartjs-2";

const Dashboard4 = () => {
	const options = {
		responsive : true,
		plugins : {
			legend: {
				display:false
			}
		},
		scales: {
			xAxis: {
				grid: {
					display: false,
					borderWidth: 0
				}
			},
			yAxis: {
				grid: {
					borderWidth: 0
				}
			}
		},
		elements: {
			line: {
				tension: 0.3,
			},
		},
	}
	const labels = ['01', '02', '03', '04', '05','07', '08', '09', '10','11', '12']
	const data = {
		labels,
		datasets: [
			{
				id:1,
				label: "Restless",
				data : [100, 200, 100,200,0,200,100,200,100,150,100],
				borderColor: "#4339F2",
			},
			{
				id:1,
				label: "Awake",
				data : [200, 0, 200,0,400,200,300,100,300,0,300],
				borderColor: "#FF3A29",
			},
			{
				id:1,
				label: "Deep",
				data : [300, 200, 300,200,100,400,310,400,200,290,200],
				borderColor: "#FFB200",
			}
		]
	}
	return (
		<div className="container">
			<div className="w-full dashboardPanel">
				<Menu />
				<div className="w-full py-3">
					<TopBar />
					<div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
						<Dash4Item
							tag1="flex"
							tag2="flex"
							tag3="flex"
							tag4="hidden"
							tag5="hidden"
							title="Moon Fever"
							text="So what are these strange
							lights in the sky? Are
							they aliens invading from
							Mars? Are the comets
							coming to start the next
							ice age?"
							price="456"
							images={[avatar, avatar2, avatar4]}
						/>
						<Dash4Item
							tag1="hidden"
							tag2="hidden"
							tag3="hidden"
							tag4="flex"
							tag5="flex"
							title="Space The Final Frontier"
							text="Usually the astronomy magazine or site will give you a general 
							time and location to be ready to look when the meteoroids start to fall."
							price="86"
							images={[avatar4]}
						/>
						<Dash4Item
							tag1="hidden"
							tag2="flex"
							tag3="flex"
							tag4="hidden"
							tag5="hidden"
							title="Moon Fever"
							text="Comets are a big source of meteoroids because of the nature of those long tails. 
							A large amount of dust, ice and other space debris."
							price="200"
							images={[avatar, avatar2]}
						/>
					</div>
					<div className="mt-8">
						<h1 className="font-medium text-xl">Portofolio</h1>
						<div className="md:flex items-center justify-between space-y-1">
							<div className="md:flex items-center md:space-x-10 space-y-1">
								<p className=" opacity-50">
									king_ernser@sigurd.biz
								</p>
								<div className="flex">
									<div className="font-medium">One Year</div>
									<div className="flex items-end">
										<MdKeyboardArrowDown size={24}/>
									</div>
								</div>
							</div>
							<div className="md:flex items-center md:space-x-5 space-y-2 md:space-y-0">
								<div className="item">
									<span className="dot bg-pdark"></span>
									<span className="">
										Restless
									</span>
								</div>
								<div className="item">
									<span className="dot bg-cred"></span>
									<span className="">
										Awake
									</span>
								</div>
								<div className="item">
									<span className="dot bg-cyellow"></span>
									<span className="">
										Deep
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-5">
						<Line data={data} options={options} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard4;
