import React from "react";
import { RiMoreLine } from "react-icons/ri";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';


const Widget6 = () => {
	const percentage1 = 67;
	const percentage2 = 46;
	const percentage3 = 15;
	const percentage4 = 67;



	return (
		<div className=" bg-white p-7  rounded-xl w-full">
			<div className="flex justify-between items-center">
				<h1 className="font-medium text-xl">Gillette</h1>
				<RiMoreLine />
			</div>
			<div className="flex flex-col md:flex-row items-start my-2 md:space-x-4">
				<div className="item">
					<span className="dot bg-cyellow "></span>
					<span className="font-medium">Instagram</span>
				</div>
				<div className="item">
					<span className="dot bg-pdark "></span>
					<span className="font-medium">Facebook</span>
				</div>
				<div className="item">
					<span className="dot bg-gdark "></span>
					<span className="font-medium">Twitter</span>
				</div>
			</div>
			<div className="grid grid-cols-4 justify-items-center gap-7 my-7">
				<CircularProgressbar 
					value={percentage1} text={`${percentage1}%`}
					strokeWidth="10"
					background="true"
					styles={buildStyles({
						pathColor: '#34B53A',
						textColor:'#34B53A',
						trailColor: '#E2FBD7',
						backgroundColor: '#E2FBD7'
					})}
				/>
				<CircularProgressbar 
					value={percentage2} text={`${percentage2}%`}
					strokeWidth="10"
					background="true"
					styles={buildStyles({
						pathColor: '#4339F2',
						textColor:'#4339F2',
						trailColor: '#DAD7FE',
						backgroundColor: '#DAD7FE'
					})}
				/>
				<CircularProgressbar 
					value={percentage3} text={`${percentage3}%`}
					strokeWidth="10"
					background="true"
					styles={buildStyles({
						pathColor: '#FF3A29',
						textColor:'#FF3A29',
						trailColor: '#FFE5D3',
						backgroundColor: '#FFE5D3'
					})}
				/>
				<CircularProgressbar 
					value={percentage4} text={`${percentage4}%`}
					strokeWidth="10"
					background="true"
					styles={buildStyles({
						pathColor: '#02A0FC',
						textColor:'#02A0FC',
						trailColor: '#CCF8FE',
						backgroundColor: '#CCF8FE'
					})}
				/>
			</div>
			<p className="text-sm text-gray-400">
				Every large design company whether it’s a multi-national
				branding corporation or a regular down at heel tatty
				magazine publisher needs to fill holes in the workforce.
			</p>
		</div>
	);
};

export default Widget6;
