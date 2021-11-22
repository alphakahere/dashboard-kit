import React from "react";
import { RiMoreLine } from "react-icons/ri";

const Widget5 = () => {
	return (
		<div className=" bg-white p-7  rounded-xl w-full">
			<div className="flex justify-between items-center">
				<h1 className="font-medium text-xl">Johnson & Johnson </h1>
				<RiMoreLine />
			</div>
			<div className="flex mt-5 h-full items-center pb-10">
				<div className="flex flex-col justify-between  h-full w-24 items-center mr-5 pb-10">
					<div className=" text-xs sm:text-sm text-gray-400">
						28 jul 2018
					</div>
					<div className=" text-xs sm:text-sm text-gray-400">
						28 jul 2018
					</div>
					<div className=" text-xs sm:text-sm text-gray-400">
						28 jul 2018
					</div>
					<div className=" text-xs sm:text-sm text-gray-400">
						28 jul 2018
					</div>
					<div className=" text-xs sm:text-sm text-gray-400">
						28 jul 2018
					</div>
				</div>
				<div className=" flex flex-col justify-between h-full  w-full">
					<div className="flex items-center mb-4">
						<div className=" bg-somone h-3 rounded-3xl flex-1">
							<div className=" bg-cred h-3 w-1/2 rounded-3xl"></div>
						</div>
					</div>
					<div className="flex items-center mb-4">
						<div className=" bg-somone h-3 rounded-3xl flex-1">
							<div className=" bg-cred h-3 w-1/2 rounded-3xl"></div>
						</div>
					</div>
					<div className="flex items-center mb-4">
						<div className=" bg-somone h-3 rounded-3xl flex-1">
							<div className=" bg-cred h-3 w-10/12 rounded-3xl"></div>
						</div>
					</div>
					<div className="flex items-center mb-4">
						<div className=" bg-somone h-3 rounded-3xl flex-1">
							<div className=" bg-cred h-3 w-3/4 rounded-3xl"></div>
						</div>
					</div>
					<div className="flex items-center">
						<div className=" bg-somone h-3 rounded-3xl flex-1">
							<div className=" bg-cred h-3 w-11/12 rounded-3xl"></div>
						</div>
					</div>
					<div className="flex justify-between w-full text-gray-400 mr-6">
						<span className="block  text-xs sm:text-sm ">01</span>
						<span className=" block  text-xs sm:text-sm">02</span>
						<span className="block  text-xs sm:text-sm ">03</span>
						<span className=" block  text-xs sm:text-sm">04</span>
						<span className="block  text-xs sm:text-sm ">05</span>
						<span className=" block  text-xs sm:text-sm">06</span>
						<span className="block  text-xs sm:text-sm ">07</span>
						<span className=" block  text-xs sm:text-sm">08</span>
						<span className="block  text-xs sm:text-sm ">09</span>
						<span className=" block  text-xs sm:text-sm">10</span>
						<span className="block  text-xs sm:text-sm ">11</span>
						<span className=" block  text-xs sm:text-sm">12</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Widget5;
