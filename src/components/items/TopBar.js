import React from 'react'
import {FaPlus} from 'react-icons/fa'
import {RiSearchLine} from 'react-icons/ri'

import avatar from '../../images/avatar.jpg'
import kalika from '../../images/kalika.jpeg'
import djeynaba from '../../images/djeynaba.jpeg'



const TopBar = () => {
    return (
        <div class="flex justify-between">
            <div class="flex items-center">            
                <RiSearchLine />
                <span class=" text-sm text-gray-400">Search</span> 
            </div>
            <div class="flex items-center space-x-1 ">
                <div class="flex items-center">
                    <div class="relative">
                        <img src={avatar} alt="my-profil"  className="w-9 h-9 rounded-full object-cover"/>
                        <span class="h-3 w-3  rounded-full bg-gdark absolute top-6 left-6"></span>
                    </div>
                </div>
                <img src={djeynaba} alt="my-profil" className="w-9 h-9 rounded-full object-cover"/>
                <img src={kalika} alt="my-profil" className="w-9 h-9 rounded-full object-cover"/>
                <div class="flex items-center bg-pdark w-9 h-9 justify-center rounded-full">
                    <FaPlus className=" text-white" size={15}/>
                </div>
            </div>
        </div>
    )
}

export default TopBar
