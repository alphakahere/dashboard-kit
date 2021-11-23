import React from "react";
import Menu from "../items/Menu";
import TopBar from "../items/TopBar";

const Chart1 = () => {
	return (
		<div className="flex space-x-2">
			<Menu />
			<div className="w-full">
				<TopBar />
				<h1>Nauru</h1>
				<div class="flex justify-between items-center">
					<h3 class="font-normal text-lg leading-relaxed">
						Daynechester
					</h3>
					<div class="flex space-x-5 items-center">
						<div class="flex items-center space-x-1">
							<span class="w-3 h-3 bg-pdark rounded-full"></span>
							<span>Restless</span>
						</div>
						<div class="flex items-center space-x-1">
							<span class="w-3 h-3 bg-gdark rounded-full"></span>
							<span>Awake</span>
						</div>
						<div class="flex items-center space-x-1">
							<span class="w-3 h-3 bg-cyellow rounded-full"></span>
							<span>Deep</span>
						</div>
					</div>
					<div class="mt-5 relative h-full pb-16">
						<div
							class="absolute flex w-full justify-between pr-24"
						>
							<div class="flex flex-col-reverse">
								<div class=" bg-pdark h-44 w-4 rounded-b-3xl"></div>
								<div class=" bg-gdark h-44 w-4"></div>
								<div class=" bg-cyellow h-32 w-4 rounded-t-3xl"></div>
							</div>
							<div class="flex flex-col-reverse">
								<div class=" bg-pdark h-44 w-4 rounded-b-3xl"></div>
								<div class=" bg-gdark h-44 w-4"></div>
								<div class=" bg-cyellow h-32 w-4 rounded-t-3xl"></div>
							</div>
							<div class="flex flex-col-reverse">
								<div class=" bg-pdark h-44 w-4 rounded-b-3xl"></div>
								<div class=" bg-gdark h-44 w-4"></div>
								<div class=" bg-cyellow h-32 w-4 rounded-t-3xl"></div>
							</div>
							<div class="flex flex-col-reverse">
								<div class=" bg-pdark h-44 w-4 rounded-b-3xl"></div>
								<div class=" bg-gdark h-44 w-4"></div>
								<div class=" bg-cyellow h-32 w-4 rounded-t-3xl"></div>
							</div>
							<div class="flex flex-col-reverse">
								<div class=" bg-pdark h-44 w-4 rounded-b-3xl"></div>
								<div class=" bg-gdark h-44 w-4"></div>
								<div class=" bg-cyellow h-32 w-4 rounded-t-3xl"></div>
							</div>
							<div class="flex flex-col-reverse">
								<div class=" bg-pdark h-24 w-4 rounded-b-3xl"></div>
								<div class=" bg-gdark h-44 w-4"></div>
								<div class=" bg-cyellow h-80 w-4 rounded-t-3xl"></div>
							</div>
							<div class="flex flex-col-reverse">
								<div class=" bg-pdark h-44 w-4 rounded-b-3xl"></div>
								<div class=" bg-gdark h-44 w-4"></div>
								<div class=" bg-cyellow h-32 w-4 rounded-t-3xl"></div>
							</div>
							<div class="flex flex-col-reverse">
								<div class=" bg-pdark h-24 w-4 rounded-b-3xl"></div>
								<div class=" bg-gdark h-52 w-4"></div>
								<div class=" bg-cyellow h-32 w-4 rounded-t-3xl"></div>
							</div>
							<div class="flex flex-col-reverse">
								<div class=" bg-pdark h-44 w-4 rounded-b-3xl"></div>
								<div class=" bg-gdark h-44 w-4"></div>
								<div class=" bg-cyellow h-32 w-4 rounded-t-3xl"></div>
							</div>
							<div class="flex flex-col-reverse">
								<div class=" bg-pdark h-44 w-4 rounded-b-3xl"></div>
								<div class=" bg-gdark h-44 w-4"></div>
								<div class=" bg-cyellow h-32 w-4 rounded-t-3xl"></div>
							</div>
							<div class="flex flex-col-reverse">
								<div class=" bg-pdark h-44 w-4 rounded-b-3xl"></div>
								<div class=" bg-gdark h-44 w-4"></div>
								<div class=" bg-cyellow h-32 w-4 rounded-t-3xl"></div>
							</div>
							<div class="flex flex-col-reverse">
								<div class=" bg-pdark h-10 w-4 rounded-b-3xl"></div>
								<div class=" bg-gdark h-64 w-4"></div>
								<div class=" bg-cyellow h-72 w-4 rounded-t-3xl"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Chart1;
