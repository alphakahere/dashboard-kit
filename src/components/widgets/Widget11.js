import React from "react";

import { RiMoreLine } from "react-icons/ri";


const Widget11 = () => {
	return (
		<div className=" bg-white p-5 rounded-xl w-full flex flex-col">
			<div className="container">
				<div className="flex justify-between items-center">
					<h1 className="font-medium text-2xl">Text</h1>
					<RiMoreLine />
				</div>
			</div>
			<div className="container  flex-1 item justify-center">
				<div className=" item justify-center">
					<div className="item justify-center customBorder border-cyellow rounded-full h-56 w-56 circlewidth">
						<div className="item justify-center customBorder border-cred rounded-full h-40 w-40 circlewidth">
							<div className="item justify-center customBorder border-pdark   rounded-full h-24 w-24 circlewidth"></div>
						</div>
					</div>
				</div>
			</div>
			<div className=" flex flex-col items-center sm:flex-row space-x-4 lg:space-x-2 xl:space-x-5">
				<div className="item">
					<span className=" bg-pdark dot"></span>
					<span className="text-lg">Restless</span>
				</div>
				<div className="item">
					<span className=" bg-cred dot"></span>
					<span className="text-lg">Awake</span>
				</div>
				<div className="item">
					<span className=" bg-cyellow dot"></span>
					<span className="text-lg">Deep</span>
				</div>
			</div>
		</div>
	);
};

export default Widget11;
