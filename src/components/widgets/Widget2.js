import React from "react";
import { RiMoreLine } from "react-icons/ri";

const Widget2 = () => {
	return (
		<div className=" bg-white rounded-lg px-5 py-2">
			<div className="flex justify-between items-center">
				<div className="flex flex-col md:flex-row items-start my-2 space-x-3">
					<div className="item">
						<span className=" bg-pdark dot"></span>
						<span className="font-medium">
							Instagram
						</span>
					</div>
					<div className="item">
						<span className="bg-gdark dot"></span>
						<span className="font-medium">
							Facebook
						</span>
					</div>
					<div className="item">
						<span className="dot bg-cyellow"></span>
						<span className="font-medium">Twitter</span>
					</div>
				</div>
				<RiMoreLine size="24" className=" text-gray-500" />
			</div>
			<div className="mt-3 flex ">
				<div className=" h-full text-gray-400 mr-4 md:mr-6 ">
					<span className="block mt-8">400</span>
					<span className="block mt-8">300</span>
					<span className="block mt-8">200</span>
					<span className="block mt-8">100</span>
					<span className="block mt-8">0</span>
				</div>
				<div className="flex items-end w-full flex-1 justify-between text-xs">
					<div className="w-3  rounded-xl">
						<div className="h-14 bg-cyellow rounded-t-xl"></div>
						<div className=" h-20 bg-gdark"></div>
						<div className="h-24 bg-pdark rounded-b-xl"></div>
						<div className="text-gray-400">01</div>
					</div>
					<div className="w-3  rounded-xl">
						<div className="h-12 bg-cyellow rounded-t-xl"></div>
						<div className=" h-14 bg-gdark"></div>
						<div className="h-16 bg-pdark rounded-b-xl"></div>
						<div className="text-gray-400">02</div>
					</div>
					<div className="w-3  rounded-xl">
						<div className="h-10 bg-cyellow rounded-t-xl"></div>
						<div className=" h-12 bg-gdark"></div>
						<div className=" h-16 bg-pdark rounded-b-xl"></div>
						<div className="text-gray-400">03</div>
					</div>
					<div className="w-3  rounded-xl">
						<div className="h-14 bg-cyellow rounded-t-xl"></div>
						<div className=" h-20 bg-gdark"></div>
						<div className="h-24 bg-pdark rounded-b-xl"></div>
						<div className="text-gray-400">04</div>
					</div>
					<div className="w-3  rounded-xl">
						<div className="h-12 bg-cyellow rounded-t-xl"></div>
						<div className=" h-14 bg-gdark"></div>
						<div className="h-16 bg-pdark rounded-b-xl"></div>
						<div className="text-gray-400">05</div>
					</div>
					<div className="w-3  rounded-xl">
						<div className="h-6 bg-cyellow rounded-t-xl"></div>
						<div className=" h-7 bg-gdark"></div>
						<div className="h-8 bg-pdark rounded-b-xl"></div>
						<div className="text-gray-400">06</div>
					</div>
					<div className="w-3  rounded-xl">
						<div className="h-12 bg-cyellow rounded-t-xl"></div>
						<div className=" h-14 bg-gdark"></div>
						<div className="h-16 bg-pdark rounded-b-xl"></div>
						<div className="text-gray-400">07</div>
					</div>
					<div className="w-3  rounded-xl">
						<div className="h-14 bg-cyellow rounded-t-xl"></div>
						<div className=" h-20 bg-gdark"></div>
						<div className="h-24 bg-pdark rounded-b-xl"></div>
						<div className="text-gray-400">08</div>
					</div>
					<div className="w-3  rounded-xl">
						<div className="h-12 bg-cyellow rounded-t-xl"></div>
						<div className=" h-14 bg-gdark"></div>
						<div className="h-16 bg-pdark rounded-b-xl"></div>
						<div className="text-gray-400">09</div>
					</div>
					<div className="w-3  rounded-xl">
						<div className="h-12 bg-cyellow rounded-t-xl"></div>
						<div className=" h-16 bg-gdark"></div>
						<div className="h-24 bg-pdark rounded-b-xl"></div>
						<div className="text-gray-400">10</div>
					</div>
					<div className="w-3  rounded-xl">
						<div className="h-6 bg-cyellow rounded-t-xl"></div>
						<div className=" h-7 bg-gdark"></div>
						<div className="h-8 bg-pdark rounded-b-xl"></div>
						<div className="text-gray-400">11</div>
					</div>
					<div className="w-3  rounded-xl">
						<div className="h-14 bg-cyellow rounded-t-xl"></div>
						<div className=" h-20 bg-gdark"></div>
						<div className="h-24 bg-pdark rounded-b-xl"></div>
						<div className="text-gray-400">12</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Widget2;
