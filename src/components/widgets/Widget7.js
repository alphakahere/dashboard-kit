import React from 'react'
import { RiMoreLine } from 'react-icons/ri';

import {CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Widget7 = () => {
    const percentage = 75;
    return (
        <div className="bg-white p-5 rounded-xl w-full flex flex-col space-y-9">
            <div className="flex justify-between items-center">
				<h1 className="font-medium text-2xl">Title</h1>
				<RiMoreLine />
			</div>
            <div className="flex items-center justify-center">

                <div style={{width: 200, height: 200}} >
                    <CircularProgressbarWithChildren
                        value={percentage}
                        styles={buildStyles({
                            rotation: 1,
                            pathColor:"#FF3A29",
                            trailColor: '#FFE5D3',

                        })}
                    >
                        <span className="bg-red-500 w-16 h-16 rounded-full flex justify-center items-center text-white font-bold">
                            {` ${percentage}%`}
                        </span>
                    </CircularProgressbarWithChildren> 
                </div>
            </div>
              
            <div className="flex items-center space-x-4">
                <div className="item">
                    <div className="dot bg-cred"></div>
                    <span className="">Restless</span>
                </div>
                <div className="item">
                    <div className="dot bg-somone"></div>
                    <span className="">Awake</span>
                </div>
            </div>      
        </div>
    )
}

export default Widget7
