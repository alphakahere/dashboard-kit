import React from 'react'

import {RiDeleteBinLine} from 'react-icons/ri'
import {VscInbox} from 'react-icons/vsc'
import {FiExternalLink} from 'react-icons/fi'

import avatar3 from '../../images/avatar3.jpg'

const Card3 = () => {
    return (
        <div className="card px-4 py-5" style={{width:'326px', height:'300px'}}>
            {/* card Header */}
            <div className="flex justify-between">
                <div className="flex space-x-2 items-cente">
                    <img src={avatar3} alt="student-img" className=" w-16 h-16 rounded-full"/>
                    <div className="flex flex-col justify-center">
                        <h1 className=" font-medium text-xl">Delia Jimenez</h1>
                        <p className=" font-normal text-sm opacity-40">Bulgaria</p>
                    </div>
                </div>
                <div className="flex space-x-3">
                    <RiDeleteBinLine className=" font-bold" size="16" />
                    <VscInbox className="font-bold" size="16" />
                </div>
            </div>
            {/* card-body */}
            <div className="">
                <h1 className="cardTitle">Port Dayna</h1>
                <p className="cardBody">
                    Comets are a big source of meteoroids because of the nature of those long tails. 
                    A large amount of dust, ice and other space debris.
                </p>
                <div className="my-4 flex items-center">
                    <button className="bg-pdark text-gray-300 w-28 h-10 rounded-lg hover:text-white">Published</button>
                    <span className="ml-5 mr-2 font-medium text-sm text-pmiddle">Watch Store</span>
                    <FiExternalLink />
                </div>
            </div>
            
        </div>
    )
}

export default Card3
