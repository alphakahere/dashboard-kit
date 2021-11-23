import React from 'react'
import { RiMoreLine } from "react-icons/ri";


const Widget9 = () => {
    return (
        <div className=" bg-white p-5 rounded-xl w-full">
            <div className="flex justify-between items-center">
                <h1 className="font-medium text-2xl">Text</h1>
                 <RiMoreLine />         
            </div>
            <div className="flex flex-col md:flex-row items-start my-2">
                <div className="flex items-center mr-4">
                    <span className="w-3 h-3 rounded-full bg-cyellow mr-2"></span>
                    <span className="text-lg">Restless</span>
                </div>
            </div>
            <div className="mt-3 h-full">
                <div className="flex items-end w-full flex-1 justify-between">
                    <div className="h-44 w-4 bg-cyellow rounded-xl"></div>
                    <div className="w-4 h-56 bg-cyellow rounded-xl"></div>
                    <div className="w-4 h-32 bg-cyellow rounded-xl"></div>
                    <div className="w-4 h-52 bg-cyellow rounded-xl"></div>
                    <div className="w-4 h-44 bg-cyellow rounded-xl"></div>
                    <div className="w-4 h-56 bg-cyellow rounded-xl"></div>   
                    <div className="h-64 w-4 bg-cyellow rounded-xl"></div>
                    <div className="w-4 h-32 bg-cyellow rounded-xl"></div>
                    <div className="w-4 h-32 bg-cyellow rounded-xl"></div>
                    <div className="w-4 h-52 bg-cyellow rounded-xl"></div>
                    <div className="w-4 h-44 bg-cyellow rounded-xl"></div>
                    <div className="w-4 h-56 bg-cyellow rounded-xl"></div> 
                </div>
            </div>
        </div>
    )
}

export default Widget9
