import React from "react";


function Dash5Card({
	title,
	name,
	number1, 
	number2, 
	date,
	backGround
}) {
	return (
		<div className={` p-3 md:p-5 text-white rounded-lg ${backGround}`}>
			<div className=" flex justify-between">
				<h1 className=" font-medium text-lg">{title}</h1>
				<svg
					width="16"
					height="22"
					viewBox="0 0 16 22"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M16 10.9996C16 14.6476 14.605 18.1006 12.071 20.7246C11.688 21.1216 11.054 21.1326 10.657 20.7496C10.454 20.5536 10.352 20.2916 10.352 20.0306C10.352 19.7806 10.445 19.5296 10.633 19.3356C12.804 17.0856 14 14.1256 14 10.9996C14 7.87363 12.804 4.91363 10.633 2.66363C10.248 2.26863 10.259 1.63463 10.657 1.24963C11.054 0.867626 11.688 0.877626 12.071 1.27563C14.605 3.89963 16 7.35263 16 10.9996ZM11.0002 11C11.0002 8.57203 9.9992 6.21203 8.2522 4.52503C7.8542 4.14303 7.2212 4.15303 6.8382 4.55103C6.4542 4.94703 6.4652 5.58203 6.8622 5.96503C8.2212 7.27603 9.0002 9.11103 9.0002 11C9.0002 12.889 8.2212 14.724 6.8622 16.035C6.6592 16.231 6.5572 16.493 6.5572 16.755C6.5572 17.005 6.6502 17.256 6.8382 17.449C7.2212 17.847 7.8542 17.857 8.2522 17.475C9.9992 15.788 11.0002 13.428 11.0002 11ZM4.5972 7.52703C5.5012 8.46403 6.0002 9.69703 6.0002 11C6.0002 12.303 5.5012 13.536 4.5972 14.473C4.2132 14.87 3.5802 14.881 3.1832 14.498C2.9792 14.302 2.8772 14.04 2.8772 13.778C2.8772 13.528 2.9712 13.277 3.1582 13.084C4.2442 11.959 4.2442 10.041 3.1582 8.91603C2.7742 8.52103 2.7852 7.88703 3.1832 7.50203C3.5802 7.11903 4.2132 7.13003 4.5972 7.52703ZM1.0002 10C1.5522 10 2.0002 10.447 2.0002 11C2.0002 11.553 1.5522 12 1.0002 12C0.4482 12 0.000200272 11.553 0.000200272 11C0.000200272 10.447 0.4482 10 1.0002 10Z"
						fill="white"
					/>
				</svg>
			</div>
			<div className="mt-7">
				<h1 className="opacity-80">{name}</h1>
				<div className="flex flex-col md:flex-row space-x-0 md:space-x-3">
					<span className="">{number1}</span>
					<span className="">****</span>
					<span className="">****</span>
					<span className="">{number2}</span>
				</div>
			</div>
			<div className="md:flex justify-between items-center mt-5">
				<span>{date}</span>
				<div className="flex items-center">
					<div className="flex relative items-center">
						<div className="w-5 h-5 bg-cred rounded-full z-50"></div>
						<div className="w-5 h-5 bg-cyellow rounded-full absolute left-3"></div>
					</div>
					<h4 className="ml-4">mastercard</h4>
				</div>
			</div>
		</div>
	);
}

export default Dash5Card;
