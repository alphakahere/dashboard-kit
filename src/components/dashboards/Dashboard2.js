import React from "react";

import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import PersoProgressBar from "../items/PersoProgressBar";
import { Line } from "react-chartjs-2";

import Menu from "../items/Menu";
import TopBar from "../items/TopBar";
import avatar from "../../images/avatar.jpg";
import avatar1 from "../../images/avatar1.jpg";
import avatar2 from "../../images/avatar2.jpg";
import Card from "./Card";

const Dashboard2 = () => {

	const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
	const data = {
		labels,
		datasets: [
			{
				id: 1,
				label: "Restless",
				data: [5, 8, 5, 7, 3, 6, 2, 8, 0, 10],
				borderColor: "#4339F2",
			},
			{
				id: 2,
				label: "Awake",
				data: [4, 7, 3, 10, 4, 7, 1, 7, 2, 5],
				borderColor: "#FF3A29",
			},
			{
				id: 3,
				label: "Deep",
				data: [7, 1, 7, 0, 10, 1, 9, 3, 10, 5],
				borderColor: "#FFB200",
			},
		],
	};

	const options = {
		responsive: true,
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
		elements: {
			point: {
				pointStyle: "cross",
			},
			line: {
				tension: 0.3,
			},
		},
	};
	return (
		<div className="container">
			<div className="w-full dashboardPanel">
				<Menu />
				<div className="w-full py-3">
					<TopBar />
					<div className="mt-8 flex flex-col lg:flex-row lg:space-x-5 space-y-5 lg:space-y-0 lg:items-center">
						<div className="lg:w-2/3">
							<div className="flex items-center justify-between">
								<h1 className="text-xl font-medium">
									Raymond Griffin
								</h1>
								<div className="flex items-center">
									<HiArrowNarrowRight
										size={24}
									/>
									<HiArrowNarrowLeft
										size={24}
									/>
								</div>
							</div>
							<div className="bg-white px-5 py-3 mt-2 flex flex-col space-y-4 rounded-lg">
								<div className="flex flex-col space-y-1">
									<div className="flex justify-between items-center">
										<h4 className="font-medium">
											Raymond
											Griffin
										</h4>
										<h4 className="opacity-30 text-base">
											448 of 656
										</h4>
									</div>
									<div className="">
										<PersoProgressBar
											completed={50}
											bgColor="#FF3A29"
											isLabelVisible={
												false
											}
											maxCompleted={
												100
											}
											barContainerClassName="bg-somone rounded-full"
										/>
									</div>
								</div>
								<div className="flex flex-col space-y-1">
									<div className="flex justify-between items-center">
										<h4 className="font-medium">
											Raymond
											Griffin
										</h4>
										<h4 className="opacity-30 text-base">
											448 of 656
										</h4>
									</div>
									<div className="">
										<PersoProgressBar
											completed={50}
											bgColor="#02A0FC"
											isLabelVisible={
												false
											}
											maxCompleted={
												100
											}
											barContainerClassName="bg-apple rounded-full"
										/>
									</div>
								</div>
								<div className="flex flex-col space-y-1">
									<div className="flex justify-between items-center">
										<h4 className="font-medium">
											Raymond
											Griffin
										</h4>
										<h4 className="opacity-30 text-base">
											448 of 656
										</h4>
									</div>
									<div className="">
										<PersoProgressBar
											completed={50}
											bgColor="#4339F2"
											isLabelVisible={
												false
											}
											maxCompleted={
												100
											}
											barContainerClassName="bg-plight rounded-full"
										/>
									</div>
								</div>
								<div className="flex flex-col space-y-1">
									<div className="flex justify-between items-center">
										<h4 className="font-medium">
											Raymond
											Griffin
										</h4>
										<h4 className="opacity-30 text-base">
											448 of 656
										</h4>
									</div>
									<div className="">
										<PersoProgressBar
											completed={50}
											bgColor="#34B53A"
											isLabelVisible={
												false
											}
											maxCompleted={
												100
											}
											barContainerClassName="bg-glight rounded-full"
										/>
									</div>
								</div>
								<div className="flex flex-col">
									<div className="flex justify-between">
										<h4 className="font-medium">
											Raymond
											Griffin
										</h4>
										<h4 className="opacity-30 text-base">
											448 of 656
										</h4>
									</div>
									<div className="">
										<PersoProgressBar
											completed={50}
											bgColor="#FFB200"
											isLabelVisible={
												false
											}
											maxCompleted={
												100
											}
											barContainerClassName="bg-cyellowl rounded-full"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="lg:w-1/3">
							<h1 className="font-medium text-xl">
								Raymond Griffin
							</h1>
							<div className="bg-white w-full px-3 py-3 rounded-lg space-y-5	lg:space-y-8 xl:space-y-5 mt-2">
								<h2 className="font-normal">
									Asteriods
								</h2>
								<Line
									data={data}
									options={options}
								/>
								<div className="w-full flex space-x-2 md:space-x-5 lg:space-x-3 xl:space-x-5">
									<div className="item">
										<div className="dot bg-pdark"></div>
										<h1>Restless</h1>
									</div>
									<div className="item">
										<div className="dot bg-cred"></div>
										<h1>Awake</h1>
									</div>
									<div className="item">
										<div className="dot bg-cyellow"></div>
										<h1>Deep</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 xl:grid-cols-4 xl:gap-3">
						<Card
							image="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg"
							title="Guinea"
							text="
								Comets are a big source of
								meteoroids because of the
								nature of those long
								tails. A large amount of
								dust.
							"
							images = {[avatar, avatar1, avatar2]}
						/>
						<Card
							image="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg"
							title="Guinea"
							text="
								Comets are a big source of
								meteoroids because of the
								nature of those long
								tails. A large amount of
								dust.
							"
							images = {[avatar]}
						/>
						<Card
							image="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg"
							title="Guinea"
							text="
								Comets are a big source of
								meteoroids because of the
								nature of those long
								tails. A large amount of
								dust.
							"
							images = {[avatar, avatar1]}
						/>
						<Card
							image="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg"
							title="Guinea"
							text="
								Comets are a big source of
								meteoroids because of the
								nature of those long
								tails. A large amount of
								dust.
							"
							images = {[avatar, avatar1, avatar2]}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard2;
