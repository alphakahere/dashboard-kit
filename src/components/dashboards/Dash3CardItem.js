import React from 'react'

const Dash3CardItem = ({img, alt, name, date, time, price, displayHr, priceTextColor}) => {
	return (
		<>
			<div className="md:flex justify-between items-center">
				<div className="flex space-x-4">
					<img src={img} alt={alt} className="w-10 h-10 rounded-full object-cover"/>
					<div className="space-y-1 md:flex md:space-y-0 md:items-center md:space-x-3">
						<h1 className="font-medium">{name}</h1>
						<h3 className="opacity-50">{date}</h3>
						<p className="opacity-50">{time}</p>
					</div>
				</div>
				<span className={`text-lg font-bold text-center block ${priceTextColor}`}>{`$${price}`}</span>
			</div>
			<hr className={`my-4 ${displayHr}`}/>
		</>
	)
}

export default Dash3CardItem
