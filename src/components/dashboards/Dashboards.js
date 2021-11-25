import React from "react";
import Dashboard1 from "./Dashboard1";
import Dashboard2 from "./Dashboard2";

const Dashboards = () => {
	return (
		<div className="w-full ">
			<h1 id="dashboards" className="font-bold text-3xl mb-10 ">
				Dashboards
			</h1>
			<div className="space-y-10">
                <Dashboard1 />
				<Dashboard2 />
            </div>
		</div>
	);
};

export default Dashboards;
