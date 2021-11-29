import React from "react";
import Dashboard1 from "./Dashboard1";
import Dashboard2 from "./Dashboard2";
import Dashboard3 from "./Dashboard3";
import Dashboard4 from "./Dashboard4";
import Dashboard5 from "./Dashboard5";
import Dashboard6 from "./Dashboard6";

const Dashboards = () => {
	return (
		<div className="w-full ">
			<h1 id="dashboards" className="font-bold text-3xl mb-10 ">
				Dashboards
			</h1>
			<div className="space-y-10">
                <Dashboard1 />
				<Dashboard2 />
				<Dashboard3 />
				<Dashboard4 />
				<Dashboard5 />
				<Dashboard6 />
            </div>
		</div>
	);
};

export default Dashboards;
