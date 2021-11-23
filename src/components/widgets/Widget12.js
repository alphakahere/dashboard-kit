import React from "react";

import { RiMoreLine } from "react-icons/ri";


const Widget12 = () => {
	return (
		<div className=" bg-white p-5 rounded-xl w-full flex flex-col">
			<div className="flex justify-between items-center">
				<h1 className="font-medium text-2xl">Title</h1>
				<RiMoreLine />
			</div>
			<h1 className="my-2 text-lg text-gray-500 leading-6">
				Every large design company whether it’s a multi-national
				branding.
			</h1>
			<div className="mt-3 flex flex-col justify-evenly flex-1 space-y-2">
				<div className="flex flex-col justify-center">
					<div className="flex items-center justify-between ">
						<h5 className=" text-lg">Instagram</h5>
						<h5 className=" text-cyellow">65,376</h5>
					</div>
					<div className=" bg-somone h-3 rounded-3xl">
						<div className=" bg-cyellow h-3 w-1/2 rounded-3xl"></div>
					</div>
				</div>

				<div className="flex flex-col justify-center space-y-1">
					<div className="flex items-center justify-between ">
						<h5 className=" text-lg">Facebook</h5>
						<h5 className=" text-pdark">12,109</h5>
					</div>
					<div className=" bg-somone h-3 rounded-3xl">
						<div className=" bg-pdark h-3 w-1/4 rounded-3xl"></div>
					</div>
				</div>

				<div className="flex flex-col justify-center">
					<div className="flex items-center justify-between ">
						<h5 className=" text-lg">Twitter</h5>
						<h5 className=" text-cblue">132,645</h5>
					</div>
					<div className=" bg-somone h-3 rounded-3xl">
						<div className=" bg-cblue h-3 w-2/3 rounded-3xl"></div>
					</div>
				</div>

				<div className="flex flex-col justify-center">
					<div className="flex items-center justify-between ">
						<h5 className=" text-lg">Behance</h5>
						<h5 className=" text-cred">500,650</h5>
					</div>
					<div className=" bg-somone h-3 rounded-3xl">
						<div className=" bg-cred h-3 w-4/5 rounded-3xl"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Widget12;
