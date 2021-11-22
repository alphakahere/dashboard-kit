import React from 'react'
import {RiMoreLine} from 'react-icons/ri'


const Widget1 = () => {
    return (
        <div className=" bg-white rounded-lg px-5 py-2">
            <div className="flex justify-between items-center">
                <h1 className="font-medium text-xl">Facebook</h1> 
                <RiMoreLine size="24" className=" text-gray-500"/>     
            </div>
            <div className="flex flex-col md:flex-row items-start my-2 space-x-3">
                <div className="item">
                    <span className=" bg-cyellow dot"></span>
                    <span className="font-medium">Instagram</span>
                </div>
                <div className="item">
                    <span className="bg-pdark dot"></span>
                    <span className="font-medium">Facebook</span>
                </div>      
                <div className="item">
                    <span className="dot bg-cblue"></span>
                    <span className="font-medium">Twitter</span>
                </div>
                <div className="item">
                    <span className="bg-cred dot"></span>
                    <span className="font-medium">Google</span>
                </div>
            </div>
            <div className="mt-3">
                <div className="flex flex-col justify-center mb-4">
                    <div className="flex items-center justify-between mb-1">
                    <h5 className=" text-lg">Instagram</h5>
                    <h5 className=" text-cyellow">65,376</h5>
                    </div>
                    <div className=" bg-cyellowl h-3 rounded-3xl">
                        <div className=" bg-cyellow h-3 w-1/2 rounded-3xl"></div>
                    </div>
                </div>

                <div className="flex flex-col justify-center mb-4">
                    <div className="flex items-center justify-between mb-1">
                    <h5 className=" text-lg">Facebook</h5>
                    <h5 className=" text-pdark">12,109</h5>
                    </div>
                    <div className=" bg-plight h-3 rounded-3xl">
                    <div className=" bg-pdark h-3 w-1/4 rounded-3xl"></div>
                    </div>
                </div>

                <div className="flex flex-col justify-center mb-4">
                    <div className="flex items-center justify-between mb-1">
                    <h5 className=" text-lg">Twitter</h5>
                    <h5 className=" text-cblue">132,645</h5>
                    </div>
                    <div className=" bg-apple h-3 rounded-3xl">
                    <div className=" bg-cblue h-3 w-2/3 rounded-3xl"></div>
                    </div>
                </div>

                <div className="flex flex-col justify-center mb-4">
                    <div className="flex items-center justify-between mb-1">
                    <h5 className=" text-lg">Google</h5>
                    <h5 className=" text-cred">500,650</h5>
                    </div>
                    <div className=" bg-somone h-3 rounded-3xl">
                    <div className=" bg-cred h-3 w-4/5 rounded-3xl"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Widget1
