import React from 'react'
import {MdOutlineArrowForwardIos} from 'react-icons/md'

const Dash5Item = ({img, alt, name, adress, numerProjects, finishedProjects, totalProfits, followers}) => {
	return (
		<div className="px-5 py-2 bg-white md:flex justify-between items-center space-y-2 md:space-y-0 rounded-lg mb-6">
							<div className="flex items-center space-x-2 md:w-3/12">
								<img src={img} alt={alt} className="w-14 h-14 rounded-full"/>
								<div className="flex flex-col">
									<h1 className=" font-medium text-xl">{name}</h1>
									<p className="opacity-50 text-sm">{adress}</p>
								</div>
							</div>
							<div className="md:w-2/12">
								<h5 className="font-medium text-xl">{numerProjects}</h5>
								<p className="opacity-50 text-sm">Projects</p>
							</div>
							<div className="md:w-2/12">
								<h5 className="font-medium text-xl">{finishedProjects}</h5>
								<p className="opacity-50 text-sm">Finished Projects</p>
							</div>
							<div className="md:w-2/12">
								<h5 className="font-medium text-xl text-pdark">{`$${totalProfits}`}</h5>
								<p className="opacity-50 text-sm">Total Profit</p>
							</div>
							<div className="md:w-2/12">
								<h5 className="font-medium text-xl">{followers}</h5>
								<p className="opacity-50 text-sm">Followers</p>
							</div>
							<div className="hidden md:block">
								<MdOutlineArrowForwardIos size={22} className=" opacity-40"/>
							</div>
						</div>
	)
}

export default Dash5Item
