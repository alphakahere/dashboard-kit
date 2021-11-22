import React from "react";
import { RiMoreLine } from "react-icons/ri";

const Widget3 = () => {
	return (
		<div className=" bg-white p-7  rounded-xl w-full">
			<div className="flex justify-between items-center">
				<h1 className="font-bold text-xl">MasterCard</h1>
				<RiMoreLine />
			</div>
			<div className="flex flex-col md:flex-row items-start my-2 space-x-5">
				<div className="item text-lg">
					<span className="bg-plight dot"></span>
					<span className="font-medium">Instagram</span>
				</div>
				<div className="item mr-4 text-lg">
					<span className="bg-pdark dot"></span>
					<span className="font-medium">Facebook</span>
				</div>
			</div>
			<div className="mt-5 flex ">
				<div className="flex items-end w-full flex-1 justify-between">
					<div className="h-48 w-2 sm:w-3 md:w-4 lg:w-3 bg-plight rounded-xl"></div>
					<div className="w-2 sm:w-3 md:w-4 lg:w-3 h-32 bg-plight rounded-xl"></div>
					<div className="w-2 sm:w-3 md:w-4 lg:w-3 h-32 bg-plight rounded-xl"></div>
					<div className="w-2 sm:w-3 md:w-4 lg:w-3 h-52 bg-plight rounded-xl"></div>
					<div className="w-2 sm:w-3 md:w-4 lg:w-3 h-44 bg-plight rounded-xl"></div>
					<div className="w-2 sm:w-3 md:w-4 lg:w-3 h-56 bg-pdark rounded-xl"></div>
					<div className="w-2 sm:w-3 md:w-4 lg:w-3 h-52 bg-plight rounded-xl"></div>
					<div className="h-44 w-2 sm:w-3 md:w-4 lg:w-3 bg-plight rounded-xl"></div>
					<div className="w-2 sm:w-3 md:w-4 lg:w-3 h-32 bg-plight rounded-xl"></div>
					<div className="w-2 sm:w-3 md:w-4 lg:w-3 h-32 bg-plight rounded-xl"></div>
					<div className="w-2 sm:w-3 md:w-4 lg:w-3 h-52 bg-plight rounded-xl"></div>
					<div className="w-2 sm:w-3 md:w-4 lg:w-3 h-44 bg-plight rounded-xl"></div>
					<div className="w-2 sm:w-3 md:w-4 lg:w-3 h-40 bg-plight rounded-xl"></div>
					<div className="w-2 sm:w-3 md:w-4 lg:w-3 h-52 bg-plight rounded-xl"></div>
					<div className="h-48 w-2 sm:w-3 md:w-4 lg:w-3 bg-plight rounded-xl"></div>
					<div className="w-2 sm:w-3 md:w-4 lg:w-3 h-28 bg-plight rounded-xl"></div>
					<div className="w-2 sm:w-3 md:w-4 lg:w-3 h-32 bg-plight rounded-xl"></div>
					<div className="w-2 sm:w-3 md:w-4 lg:w-3 h-24 bg-plight rounded-xl"></div>
					<div className="w-2 sm:w-3 md:w-4 lg:w-3 h-14 bg-plight rounded-xl"></div>
				</div>
			</div>
		</div>
	);
};

export default Widget3;
