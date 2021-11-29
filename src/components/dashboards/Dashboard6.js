import React from "react";

import Menu from "../items/Menu";
import TopBar from "../items/TopBar";
import avatar2 from "../../images/avatar2.jpg";
import avatar4 from "../../images/avatar4.jpg";

import Dash6Card from "./dashItems/Dash6Card";

const Dashboard6 = () => {
	return (
		<div className="container">
			<div className="w-full dashboardPanel">
				<Menu />
				<div className="w-full py-3">
					<TopBar />
					<div className="mt-10">
						<h1 className=" font-medium text-3xl">
							Be Single minded
						</h1>
						<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-5">
							<Dash6Card
								id="1"
								name="Albert Wong"
								img={avatar2}
								price="204"
								percentage="5"
								percentageColor="text-gdark"
								itemData={[
									2, 1, 3, 0.8, 2, 0, 5, 3,
									4, 3, 2.7, 0, 4, 2,
								]}
								borderColor="#34B53A"
							/>

							<Dash6Card
								id="2"
								name="Alhassane Diallo"
								img={avatar4}
								price="56"
								percentage="84"
								percentageColor="text-cred"
								itemData={[
									2, 1, 3, 0.8, 2, 0, 3, 1,
									2, 3, 2, 1, 2, 0,
								]}
								borderColor="#FF3A29"
							/>

							<Dash6Card
								id="3"
								name="Fatoumata Sow"
								img={avatar2}
								price="99"
								percentage="45"
								percentageColor="text-cblue"
								itemData={[
									2, 1, 3, 2, 1, 2, 0, 2, 1,
									3, 2, 0, 1, 2,
								]}
								borderColor="#02A0FC"
							/>

							<Dash6Card
								id="2"
								name="Big Coder"
								img={avatar2}
								price="204"
								percentage="5"
								percentageColor="text-cyellow"
								itemData={[
									2, 1, 3, 0.8, 2, 0, 5, 3,
									4, 3, 2.7, 0, 4, 2,
								]}
								borderColor="#FFB200"
							/>

							<Dash6Card
								id="2"
								name="Aissatou Diallo"
								img={avatar2}
								price="204"
								percentage="5"
								percentageColor="text-pdark"
								itemData={[
									2, 1, 3, 0.8, 2, 0, 5, 3,
									4, 3, 2.7, 0, 4, 2,
								]}
								borderColor="#4339F2"
							/>
							<Dash6Card
								id="2"
								name="Ramata Diallo"
								img={avatar2}
								price="204"
								percentage="5"
								percentageColor="text-cred"
								itemData={[
									2, 1, 3, 0.8, 2, 0, 5, 3,
									4, 3, 2.7, 0, 4, 2,
								]}
								borderColor="#FF3A29"
							/>
						</div>
						<div className=" mt-10 bg-white px-5 md:px-20 lg:px-36 xl:px-44 py-10 rounded-lg">
							<h1 className="font-medium  text-3xl text-center leading-10">
								Every large design company
								whether it’s a multi-national
								branding
							</h1>
							<p className="text-sm  text-gray-400 text-center mt-2">
								Stop questioning your design
								decisions by taking advantage of
								predictive design!
							</p>
							<div className=" bg-gray-100 px-3 py-2 md:flex justify-between rounded-lg mt-8">
								<input
									type="email"
									name="email"
									id="email"
									className=" md:w-9/12 p-3 bg-gray-100 w-full "
									placeholder="Enter your email"
								/>
								<div className=" md:w-3/12 flex justify-end">
								<button className="bg-pdark text-white rounded-lg h-full w-full md:w-4/5">
									Start Now
								</button>
								</div>
								
							</div>
							<p className="text-center mt-5">
								<span>
									Become part of our ever
									growing community.
								</span>
								<span className="text-pdark">
									Join us on Craftwork.
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard6;
