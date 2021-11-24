import React from 'react'
import {FaPlus} from 'react-icons/fa'
import {RiSearchLine} from 'react-icons/ri'

import avatar from '../../images/avatar.jpg'
import kalika from '../../images/kalika.jpeg'
import djeynaba from '../../images/djeynaba.jpeg'



const TopBar = () => {
    return (
        <div className="container">
        <div className="flex justify-between">
            <div className="flex items-center">            
                <RiSearchLine />
                <span className=" text-sm text-gray-400">Search</span> 
            </div>
            <div className="flex items-center space-x-1 ">
                <div className="flex items-center">
                    <div className="relative">
                        <img src={avatar} alt="my-profil"  className="w-9 h-9 rounded-full object-cover"/>
                        <span className="h-3 w-3  rounded-full bg-gdark absolute top-6 left-6"></span>
                    </div>
                </div>
                <img src={djeynaba} alt="my-profil" className="w-9 h-9 rounded-full object-cover hidden sm:block"/>
                <img src={kalika} alt="my-profil" className="w-9 h-9 rounded-full object-cover hidden md:block"/>
                <div className="items-center bg-pdark w-9 h-9 justify-center rounded-full hidden md:flex">
                    <FaPlus className=" text-white" size={15} />
                </div>
            </div>
        </div>
        </div>
    )
}

export default TopBar
