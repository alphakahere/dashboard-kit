import React from "react";
import { RiMoreLine } from "react-icons/ri";
import PersoCircularProgressBar from "../items/PersoCircularProgressBar";


const Widget18 = () => {

	return (
		<div className="bg-white p-5 rounded-xl w-full flex flex-col space-y-3">
			<div className="flex justify-between items-center">
				<h1 className="font-medium text-2xl">Australia</h1>
				<RiMoreLine />
			</div>
			<div className=" flex justify-center items-center">
				<div style={{ width: 150, height: 150 }} className="">
					<PersoCircularProgressBar 
						percentage={25}
						strokeWidth={10}
						pathColor="#34B53A"
						trailColor="#E2FBD7"
						textColor="#34B53A"
						backgroundColor="#E2FBD7"
						background="true"
					/>
				</div>
			</div>
			<div className="flex items-center space-x-4">
				<div className="item">
					<div className="dot bg-gdark	"></div>
					<span className="">Restless</span>
				</div>
			</div>
		</div>
	);
};

export default Widget18;
