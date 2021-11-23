import React from "react";
import { RiMoreLine } from "react-icons/ri";
import { BsChatDots } from 'react-icons/bs'
import { BsSuitHeart } from 'react-icons/bs'
import {BsBell} from 'react-icons/bs'

import img from "../../images/chris.jpeg";

const Widget10 = () => {
	return (
		<div className=" bg-white p-5 rounded-xl w-full flex flex-col">
			<div className="flex justify-between">
				<img
					src={img}
					className="rounded-full h-20 w-20 flex items-center justify-center object-fill mr-2"
					alt="img"
				/>
                <RiMoreLine />         
			</div>
			<div className="flex flex-col md:flex-row items-start my-3">
				<div className="flex flex-col mr-4">
					<span className="text-xl font-medium">
						Chris Diatta
					</span>
					<span className=" text-gray-400">Senegal</span>
				</div>
			</div>
			<div className="flex mt-5">
				<div className="mr-10">
					<h5 className=" text-2xl text-cred font-medium">
						100 345
					</h5>
					<h5 className=" text-gray-400">Followers </h5>
				</div>
				<div className="">
					<h5 className=" text-pdark text-2xl font-medium">
						1765
					</h5>
					<h5 className=" text-gray-400">Posts</h5>
				</div>
			</div>
			<div className="flex flex-col justify-end flex-1 mt-2">
				<div className="flex justify-evenly items-center">
					<button className="border-4 border-cblue text-cblue px-3 h-11 rounded-xl">
						Add to list
					</button>
					<BsChatDots size="24" className=" text-cblue"/>
					<BsSuitHeart size="24" className=" text-cblue"/>
					<BsBell size="24" className=" text-cblue"/>
				</div>
			</div>
		</div>
	);
};

export default Widget10;
