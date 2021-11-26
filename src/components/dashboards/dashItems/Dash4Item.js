import React from "react";

import { FaPlus } from "react-icons/fa";

function Dash4Item({
	tag1,
	tag2,
	tag3,
	tag4,
	tag5,
	title,
	price,
	text,
	images,
}) {
	return (
		<div className="bg-white p-4 rounded-lg">
			<div className="flex">
				<div className={`bg-plight w-10 h-6  items-center justify-center rounded-md mr-2 ${tag1}`}>
					<span className="textTag">Lost</span>
				</div>
				<div className={`bg-somone w-16 h-6 items-center justify-center rounded-md mr-2 ${tag2}`}>
					<span className="textTag">Designer</span>
				</div>
				<div className={`bg-glight w-14 h-6 items-center justify-center rounded-md mr-2 ${tag3}`}>
					<span className="textTag">Hubble</span>
				</div>
				<div className={`bg-cyellowl w-14 h-6  items-center justify-center rounded-md mr-2 ${tag4}`}>
					<span className="textTag">Project</span>
				</div>
				<div className={`bg-apple w-14 h-6  items-center justify-center rounded-md mr-2 ${tag5}`}>
					<span className="textTag">Digital</span>
				</div>
			</div>
			<div className=" mt-5 flex flex-col space-y-2">
				<div className="flex justify-between">
					<h1 className=" text-xl font-bold">{title}</h1>
					<p className="text-xl font-bold text-cred">{`$${price}`}</p>
				</div>
				<p className=" text-xs  text-gray-400">{text}</p>
			</div>
			<div className="flex justify-between mt-5">
				<div className="flex space-x-2">
					{images.map((img, index) => (
						<img
							key={index}
							src={img}
							alt="my-profil"
							className="w-8 h-8 rounded-full object-cover"
						/>
					))}
					<div className="items-center bg-pdark w-8 h-8 justify-center rounded-full hidden md:flex">
						<FaPlus className=" text-white" size={15} />
					</div>
				</div>
				<div className="bg-somone w-8 h-8 rounded-full flex items-center justify-center">
					<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M11.9409 16.667C11.8851 16.667 11.8276 16.6645 11.7701 16.6586C11.0367 16.5861 10.4617 16.0686 10.3034 15.3395L8.06758 5.01281L5.76508 10.3311C5.63258 10.6361 5.33175 10.8336 5.00008 10.8336H2.50008C2.03925 10.8336 1.66675 10.4603 1.66675 10.0003C1.66675 9.53948 2.03925 9.16698 2.50008 9.16698H4.45341L6.54175 4.34281C6.83758 3.66281 7.48925 3.26698 8.23008 3.34115C8.96341 3.41365 9.53841 3.93115 9.69675 4.66031L11.9326 14.987L14.2351 9.66865C14.3676 9.36365 14.6676 9.16698 15.0001 9.16698H17.5001C17.9609 9.16698 18.3334 9.53948 18.3334 10.0003C18.3334 10.4603 17.9609 10.8336 17.5001 10.8336H15.5467L13.4584 15.657C13.1859 16.2845 12.6017 16.667 11.9409 16.667Z"
							fill="#FF3A29"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}

export default Dash4Item;
