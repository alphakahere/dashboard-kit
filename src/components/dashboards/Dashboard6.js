import React from "react";

import Menu from "../items/Menu";
import TopBar from "../items/TopBar";

const Dashboard6 = () => {
	return (
		<div className="container">
			<div className="w-full dashboardPanel">
				<Menu />
				<div className="w-full py-3">
					<TopBar />
				</div>
			</div>
		</div>
	);
};

export default Dashboard6;
