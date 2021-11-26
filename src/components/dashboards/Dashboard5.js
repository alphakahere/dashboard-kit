import React from "react";


import Menu from "../items/Menu";
import TopBar from "../items/TopBar";
import Dash5Card from "./dashItems/Dash5Card";
import avatar from '../../images/avatar.jpg'
import avatar3 from '../../images/avatar3.jpg'

import Dash5Item from "./dashItems/Dash5Item";

const Dashboard5 = () => {
	return (
		<div className="container">
			<div className="w-full dashboardPanel">
				<Menu />
				<div className="w-full py-3">
					<TopBar />
					<div className=" mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
						<Dash5Card
							title="CraftworkBank"
							name="Henry Richardson"
							number1="4220"
							number2="7710"
							date="04 / 24"
							backGround="bg-pdark"
						/>
						<Dash5Card
							title="CraftworkBank"
							name="Brijamohan Mallick"
							number1="3460"
							number2="8710"
							date="12 / 20"
							backGround="bg-cred"
						/>
						<Dash5Card
							title="CraftworkBank"
							name="Santiago Valentín"
							number1="1005"
							number2="8710"
							date="12 / 20"
							backGround="bg-gdark"
						/>
					</div>
					<div className="mt-8">
						<Dash5Item 
							img={avatar3}
							alt="avatar"
							name="Jel Chibuzo"
							adress="Lima"
							numerProjects="578"
							finishedProjects="377"
							totalProfits="390.99"
							followers="168"
						/>
						<Dash5Item 
							img={avatar}
							alt="avatar"
							name="Nahia Colunga"
							adress="Hangzhou"
							numerProjects="320"
							finishedProjects="241"
							totalProfits="3900.99"
							followers="100"
						/>
						<Dash5Item 
							img={avatar3}
							alt="avatar"
							name="Wen Yahui"
							adress="Kinshasa"
							numerProjects="300"
							finishedProjects="100"
							totalProfits="490.99"
							followers="167"
						/>
						<Dash5Item 
							img={avatar}
							alt="avatar"
							name="Alpha Diallo"
							adress="Dakar"
							numerProjects="1568"
							finishedProjects="950"
							totalProfits="9999.99"
							followers="1590"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard5;
