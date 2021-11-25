import React from "react";

import { RiMoreLine } from "react-icons/ri";
import { Bar } from "react-chartjs-2";

import Menu from "../items/Menu";
import TopBar from "../items/TopBar";
import abdoul from "../../images/abdoul.jpeg";
import PersoProgressBar from "../items/PersoProgressBar";
import sadjo from "../../images/sadjo.jpeg";
import alpha from "../../images/avatar.jpg";
import PersoCircularProgressBar from "../items/PersoCircularProgressBar";

const Dashboard1 = () => {
	const options = {
		responsive: true,
		maintainAspectRatio: true,
		borderRadius: {
			topLeft: "20",
			topRight: "20",
			bottomLeft: "20",
			bottomRight: "20",
		},
		borderSkipped: false,
		barPercentage: 0.7,
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
					// display: false,
				},
				grid: {
					display: false,
					borderWidth: 0,
				},
			},

			yAxis: {
				ticks: {
					display: false,
				},
				grid: {
					display: false,
					borderWidth: 0,
				},
			},
		},
		elements: {
			point: {
				pointStyle: "line",
			},
			line: {
				tension: 0,
			},
		},
	};

	const labels = [
		"01",
		"02",
		"03",
		"04",
		"05",
		"06",
		"07",
		"08",
		"09",
		"10",
		"11",
		"12",
	];
	const data = {
		labels,
		datasets: [
			{
				id: 1,
				label: "Restless",
				data: [19, 13, 5, 15, 20, 18, 10, 12, 14, 9, 13, 17],
				borderColor: "#FFB200",
				backgroundColor: "#FFB200",
			},
		],
	};
	return (
		<div className="container">
			<div className="w-full dashboardPanel">
				<Menu />
				<div className="w-full py-3 pr-3">
					<TopBar />
					<h1 className="text-2xl font-medium mt-7 mb-4">
						Be single minded
					</h1>
					{/* Cards */}
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
						{/* Card1 */}
						<div className=" cardPanel">
							{/* Card-Header */}
							<div className="flex justify-between">
								<div className="flex items-center  space-x-2">
									<img
										src={abdoul}
										alt={`avatar-${abdoul}`}
										className="cardImg"
									/>
									<div className="flex flex-col justify-center">
										<h1 className="font-medium">
											Abdoul Khadre
											Diallo
										</h1>
										<p className="opacity-40">
											Senegal
										</p>
									</div>
								</div>
								<RiMoreLine />
							</div>
							{/* card-Body */}
							<div className="cardBodyD">
								<div className="progress">
									<div className="flex justify-between font-light">
										<h4>Instagram</h4>
										<h4 className=" text-gdark ">
											66376
										</h4>
									</div>
									<PersoProgressBar
										completed={60}
										bgColor="#34B53A"
										isLabelVisible={
											false
										}
										maxCompleted={100}
										barContainerClassName="bg-glight rounded-full"
									/>
								</div>
								<div className="progress">
									<div className="flex justify-between font-light">
										<h4>Facebook</h4>
										<h4 className=" text-gdark ">
											123376
										</h4>
									</div>
									<PersoProgressBar
										completed={90}
										bgColor="#34B53A"
										isLabelVisible={
											false
										}
										maxCompleted={100}
										barContainerClassName="bg-glight rounded-full"
									/>
								</div>
								<div className="progress">
									<div className="flex justify-between font-light">
										<h4>Twitter</h4>
										<h4 className=" text-gdark ">
											12109
										</h4>
									</div>
									<PersoProgressBar
										completed={20}
										bgColor="#34B53A"
										isLabelVisible={
											false
										}
										maxCompleted={100}
										barContainerClassName="bg-glight rounded-full"
									/>
								</div>
							</div>
						</div>
						{/* Card2 */}
						<div className=" cardPanel">
							{/* Card-Header */}
							<div className="flex justify-between">
								<div className="flex items-center space-x-2">
									<img
										src={sadjo}
										alt={`avatar-${sadjo}`}
										className="cardImg"
									/>
									<div className="flex flex-col justify-center">
										<h1 className="font-medium">
											sadjo Sanghare
										</h1>
										<p className="opacity-40">
											Senegal
										</p>
									</div>
								</div>
								<RiMoreLine />
							</div>
							{/* card-Body */}
							<div className="cardBodyD">
								<div className="progress">
									<div className="flex justify-between font-light">
										<h4>Instagram</h4>
										<h4 className=" text-cred ">
											10000
										</h4>
									</div>
									<PersoProgressBar
										completed={95}
										bgColor="#FF3A29"
										isLabelVisible={
											false
										}
										maxCompleted={100}
										barContainerClassName="bg-somone rounded-full"
									/>
								</div>
								<div className="progress">
									<div className="flex justify-between font-light">
										<h4>Facebook</h4>
										<h4 className=" text-cred ">
											123376
										</h4>
									</div>
									<PersoProgressBar
										completed={60}
										bgColor="#FF3A29"
										isLabelVisible={
											false
										}
										maxCompleted={100}
										barContainerClassName="bg-somone rounded-full"
									/>
								</div>
								<div className="progress">
									<div className="flex justify-between font-light">
										<h4>Twitter</h4>
										<h4 className=" text-cred ">
											12109
										</h4>
									</div>
									<PersoProgressBar
										completed={40}
										bgColor="#FF3A29"
										isLabelVisible={
											false
										}
										maxCompleted={100}
										barContainerClassName="bg-somone rounded-full"
									/>
								</div>
							</div>
						</div>

						{/* Card3 */}
						<div className=" cardPanel">
							{/* Card-Header */}
							<div className="flex justify-between">
								<div className="flex items-center space-x-2">
									<img
										src={alpha}
										alt={`avatar-${alpha}`}
										className="cardImg"
									/>
									<div className="flex flex-col justify-center">
										<h1 className="font-medium">
											Alpha Amadou
											Diallo
										</h1>
										<p className="opacity-40">
											Guinea
										</p>
									</div>
								</div>
								<RiMoreLine />
							</div>
							{/* card-Body */}
							<div className="cardBodyD">
								<div className="progress">
									<div className="flex justify-between font-light">
										<h4>Instagram</h4>
										<h4 className=" text-pdark ">
											66376
										</h4>
									</div>
									<PersoProgressBar
										completed={20}
										bgColor="#4339F2"
										isLabelVisible={
											false
										}
										maxCompleted={100}
										barContainerClassName="bg-plight rounded-full"
									/>
								</div>
								<div className="progress">
									<div className="flex justify-between font-light">
										<h4>Facebook</h4>
										<h4 className=" text-pdark ">
											123376
										</h4>
									</div>
									<PersoProgressBar
										completed={60}
										bgColor="#4339F2"
										isLabelVisible={
											false
										}
										maxCompleted={100}
										barContainerClassName="bg-plight rounded-full"
									/>
								</div>
								<div className="progress">
									<div className="flex justify-between font-light">
										<h4>Twitter</h4>
										<h4 className=" text-pdark ">
											112109
										</h4>
									</div>
									<PersoProgressBar
										completed={90}
										bgColor="#4339F2"
										isLabelVisible={
											false
										}
										maxCompleted={100}
										barContainerClassName="bg-plight rounded-full"
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-6 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-4">
						<div className="w-full lg:w-3/5">
							{/* creative */}
							<div className=" bg-pdark flex flex-col space-y-2 lg:space-y-0 px-3 py-1 rounded-lg space-x-5 ">
								<div className="flex flex-col md:flex-row items-center space-y-2 lg:space-y-0 space-x-2 w-full">
									<svg
										width="140"
										height="124"
										viewBox="0 0 140 124"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect
											x="0.0188599"
											y="46.7435"
											width="60.5104"
											height="60.5104"
											transform="rotate(-50.35 0.0188599 46.7435)"
											fill="#FFB200"
										/>
										<path
											d="M79.8875 43.5315C79.8875 43.5315 75.9623 47.2761 76.824 48.2328C77.6857 49.1895 84.1959 48.2328 84.1959 48.2328C84.1959 48.2328 84.5777 49.9562 87.2594 49.8612C89.9411 49.7661 95.398 49.8612 95.398 49.8612"
											fill="#CCF8FE"
										/>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M50.4203 44.4835L65.8611 59.1957C65.8611 59.1957 70.1696 81.6884 73.7605 86.1712C77.3514 90.6539 95.5896 104.291 95.5896 104.291L112.679 123.248L139.392 109.771L126.467 94.3763C126.467 94.3763 129.4 66.6009 127.533 61.3483C126.173 57.5261 110.154 43.5394 99.9298 33.9815C95.8932 30.211 90.3761 28.4536 84.9024 29.1947L55.3608 33.188C54.8181 33.2616 54.3742 33.6566 54.2379 34.1869C54.1015 34.7173 54.3 35.2774 54.7398 35.6036L57.9633 37.9891L84.0993 38.1791L100.12 65.7186L84.4826 65.4667C84.4826 65.4667 67.9108 36.0978 51.5497 40.1607C50.6485 40.3887 49.9427 41.089 49.7078 41.9884C49.4728 42.8878 49.7458 43.8438 50.4203 44.4835Z"
											fill="white"
										/>
										<path
											d="M112.033 57.5277C112.033 57.5277 95.9556 33.8754 92.7606 31.1034C90.372 29.03 87.2594 29.03 87.2594 29.03"
											stroke="black"
											strokeWidth="0.55"
										/>
										<path
											d="M120.172 55.7727C120.172 55.7727 104.047 38.9918 97.8278 32.9377C94.9766 30.161 92.4089 29.7333 92.4089 29.7333"
											stroke="black"
											strokeWidth="0.55"
										/>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M126.023 49.4081L51.1695 46.0817L41.6227 40.392L52.0027 36.8866L126.432 40.1972C127.655 40.2493 128.807 40.7863 129.634 41.6895C130.461 42.5926 130.894 43.7877 130.838 45.0109C130.785 46.2332 130.247 47.3838 129.343 48.2088C128.44 49.0337 127.245 49.4653 126.023 49.4081Z"
											fill="black"
										/>
										<path
											d="M69.7593 47.0606L52.1421 46.2782L50.4203 44.6387C49.747 43.998 49.4751 43.0421 49.7102 42.143C49.9454 41.2438 50.6505 40.5434 51.5512 40.3144C57.9173 38.7336 64.3104 42.2168 69.7593 47.0606Z"
											fill="white"
										/>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M126.395 46.907C127.598 46.907 128.573 45.9318 128.573 44.729C128.573 43.5261 127.598 42.551 126.395 42.551C125.192 42.551 124.217 43.5261 124.217 44.729C124.217 45.9318 125.192 46.907 126.395 46.907Z"
											fill="white"
										/>
										<path
											opacity="0.2"
											fillRule="evenodd"
											clipRule="evenodd"
											d="M55.9263 33.1056C55.9263 33.1056 59.8467 37.007 62.2322 32.2534L55.9263 33.1056Z"
											fill="black"
										/>
										<path
											opacity="0.2"
											fillRule="evenodd"
											clipRule="evenodd"
											d="M51.7968 45.7903C51.7968 45.7903 51.1632 42.8979 55.2388 43.3398C59.3145 43.7818 59.8815 47.0369 58.4068 48.1378C57.4778 48.8001 56.3467 49.1172 55.2087 49.0343"
											fill="black"
										/>
										<path
											d="M19.3787 51.0523C19.3787 51.0523 22.8254 24.6803 27.899 24.0103C32.9725 23.3402 33.4525 47.2761 35.6606 47.5152C37.8687 47.7544 41.6228 40.392 41.6228 40.392"
											stroke="black"
											strokeWidth="3.0096"
										/>
									</svg>
									<div className=" text-white space-y-1">
										<h1 className=" text-xl font-medium">
											Creative
											outdoor ads
										</h1>
										<p className="text-sm opacity-90">
											Every large
											design company
											whether it’s a
											multi-national
											branding
											corporation or
											a regular down
											at heel tatty
											magazine
											publisher
											needs to fill
											holes in the
											workforce.
										</p>
									</div>
								</div>
								<div className="flex justify-end  items-end  pb-2">
									<button className=" w-28 h-10 bg-white rounded-lg text-pdark text-sm font-normal outline-none">
										See more
									</button>
								</div>
							</div>
							{/* circular-progress-bar */}
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-5 lg:gap-1 xl:gap-4">
								<div className=" bg-white flex flex-col items-center px-3 py-4 rounded-lg space-y-5">
									<h1 className="font-bold text-base">
										Twitter
									</h1>
									<div
										style={{
											width: "100px",
											height: "100px",
										}}
									>
										<PersoCircularProgressBar
											percentage={
												67
											}
											strokeWidth={
												8
											}
											background="#34B53A"
											pathColor="#34B53A"
											textColor="#000"
											trailColor="#E2FBD7"
											backgroundColor="#E2FBD7"
										/>
									</div>
								</div>
								<div className=" bg-white flex flex-col items-center px-3 py-4 rounded-lg space-y-5">
									<h1 className="font-bold text-base">
										Instagram
									</h1>
									<div
										style={{
											width: "100px",
											height: "100px",
										}}
									>
										<PersoCircularProgressBar
											percentage={
												15
											}
											strokeWidth={
												8
											}
											background="#4339F2"
											pathColor="#4339F2"
											textColor="#000"
											trailColor="#DAD7FE"
											backgroundColor="#DAD7FE"
										/>
									</div>
								</div>
								<div className=" bg-white flex flex-col items-center px-3 py-4 rounded-lg space-y-5">
									<h1 className="font-bold text-base">
										Facebook
									</h1>
									<div
										style={{
											width: "100px",
											height: "100px",
										}}
									>
										<PersoCircularProgressBar
											percentage={
												80
											}
											strokeWidth={
												8
											}
											background="#34B53A"
											pathColor="#FF3A29"
											textColor="#000"
											trailColor="#FFE5D3"
											backgroundColor="#FFE5D3"
										/>
									</div>
								</div>
								<div className=" bg-white flex flex-col items-center px-3 py-4 rounded-lg space-y-5 ">
									<h1 className="font-bold text-base">
										Behance
									</h1>
									<div
										style={{
											width: "100px",
											height: "100px",
										}}
									>
										<PersoCircularProgressBar
											percentage={
												50
											}
											strokeWidth={
												8
											}
											background="#02A0FC"
											pathColor="#02A0FC"
											textColor="#000"
											trailColor="#CCF8FE"
											backgroundColor="#CCF8FE"
										/>
									</div>
								</div>
							</div>
						</div>
						{/* chart */}
						<div className="w-full lg:w-2/5 bg-white p-3 font-normal space-y-5 rounded-lg lg:pb-14">
							<h1>Aussie chef shares culinary</h1>
							<div
								className="h-full flex flex-col justify-end"
								style={{ width: "100%" }}
							>
								<Bar
									data={data}
									options={options}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard1;
