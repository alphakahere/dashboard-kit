import React from "react";

import Menu from "../items/Menu";
import TopBar from "../items/TopBar";
import avatar4 from "../../images/avatar4.jpg"
import Dash3CardItem from "./Dash3CardItem";

const Dashboard3 = () => {
	return (
		<div className="container">
			<div className="w-full dashboardPanel">
				<Menu />
				<div className="w-full py-3">
					<TopBar />
					<div className="space-y-8 xl:flex  justify-between mt-5 xl:space-x-5 xl:space-y-0">
						<div className="w-full xl:w-1/2">
							<h3 className=" text-xl font-medium opacity-50 mb-3">Telescope</h3>
							<div className="bg-white p-4 rounded-xl w-full">
								<Dash3CardItem 
									img={avatar4}
									alt="avatar-img"
									name="Chinmay Sarasvati"
									date="23 sep 2021"
									time="02:52pm"
									price="130.00"
									displayHr=""
									priceTextColor=""
								/>
								<Dash3CardItem 
									img={avatar4}
									alt="avatar-img"
									name="Chinmay Sarasvati"
									date="22 sep 2021"
									time="02:52pm"
									price="130.00"
									priceTextColor="text-cred"
								/>
								<Dash3CardItem 
									img={avatar4}
									alt="avatar-img"
									name="Chinmay Sarasvati"
									date="24 sep 2021"
									time="02:52pm"
									price="132.00"
									priceTextColor="text-cblue"
								/>
								<Dash3CardItem 
									img={avatar4}
									alt="avatar-img"
									name="Chinmay Sarasvati"
									date="25 sep 2021"
									time="04:52pm"
									price="150.00"
									displayHr="hidden"
									priceTextColor="text-pdark"
								/>
							</div>
						</div>
						<div className="w-full xl:w-1/2">
							<h3 className="text-xl font-medium opacity-50 mb-3">Asteroids</h3>
							<div className="bg-white p-4 rounded-xl w-full">
							<Dash3CardItem 
									img={avatar4}
									alt="avatar-img"
									name="Chinmay Sarasvati"
									date="23 sep 2021"
									time="02:52pm"
									price="130.00"
									priceTextColor="text-gdark"
								/>
								<Dash3CardItem 
									img={avatar4}
									alt="avatar-img"
									name="Chinmay Sarasvati"
									date="22 sep 2021"
									time="02:52pm"
									price="130.00"
									priceTextColor="text-cyelllow"
								/>
								<Dash3CardItem 
									img={avatar4}
									alt="avatar-img"
									name="Chinmay Sarasvati"
									date="24 sep 2021"
									time="02:52pm"
									price="132.00"
									priceTextColor="text-gray-400"
								/>
								<Dash3CardItem 
									img={avatar4}
									alt="avatar-img"
									name="Chinmay Sarasvati"
									date="25 sep 2021"
									time="04:52pm"
									price="150.00"
									displayHr="hidden"
									priceTextColor="text-pink-500"
								/>
							</div>
						</div>
					</div>
					<div className="mt-10">
						<div className="flex space-x-6 items-center">
							<h4 className="font-medium text-lg">Design</h4>
							<h4 className="font-medium text-lg opacity-50">Product</h4>
							<h4 className="font-medium text-lg opacity-50">Color</h4>
						</div>
						<div className=" grid grid-rows-2  grid-flow-col mt-5 gap-5">
							<img src="https://cdn.pixabay.com/photo/2019/10/29/10/16/model-4586589_960_720.jpg" alt=""  className="md:row-span-2 md:col-span-2 rounded-lg"/>
							<img src="https://cdn.pixabay.com/photo/2020/05/29/15/31/lantern-5235537_960_720.jpg" alt="" className="md:row-span-2 md:col-span-2 rounded-lg"/>
							<img src="https://cdn.pixabay.com/photo/2021/11/05/20/41/woman-6771981_960_720.jpg" alt=""  className="md:row-span-1 rounded-lg"/>
							<img src="https://cdn.pixabay.com/photo/2020/06/30/14/50/red-5356634_960_720.jpg" alt=""  className="md:row-span-1 rounded-lg"/>
							<img src="https://cdn.pixabay.com/photo/2021/11/05/12/27/woman-6771288_960_720.jpg" alt="" className="md:row-span-2 md:col-span-2 rounded-lg"/>
							<img src="https://cdn.pixabay.com/photo/2021/11/12/22/10/road-6790127_960_720.jpg" alt=""  className="md:row-span-1 rounded-lg"/>
							<img src="https://cdn.pixabay.com/photo/2021/10/27/19/09/cat-6748193_960_720.jpg" alt="" className="md:row-span-1 rounded-lg"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard3;
