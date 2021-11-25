import React from "react";
import Menu from "../items/Menu";
import TopBar from "../items/TopBar";

const Dashboard2 = () => {
	return (
		<div className="container">
			<div className="w-full dashboardPanel">
				<Menu />
				<div className="w-full py-3 pr-3">
					<TopBar />
					<h1 className="text-2xl font-medium mt-7 mb-4">
						Be single minded
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Dashboard2;
