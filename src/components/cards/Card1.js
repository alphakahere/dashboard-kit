import React from 'react'

import avatar from '../../images/avatar.jpg'
import avatar1 from '../../images/avatar1.jpg'
import avatar2 from '../../images/avatar2.jpg'




const Card1 = () => {
    return (
       <div className="card" style={{width:'326px', height:'370px'}}>
           <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg" 
           alt="nature_image"  className=" h-40 w-full rounded-t-lg"
           />
           <div className="px-3">
               <h4 className="cardTitle">Guinea</h4>
               <p className="cardBody">
                    Comets are a big source of meteoroids because of 
                    the nature of those long tails. A large amount of dust.
               </p>
                <div className="mt-8 flex items-center space-x-3">
                    <img src={avatar} alt="" className=" w-10 h-10 rounded-full object-cover"/>
                    <img src={avatar1} alt="" className=" w-10 h-10 rounded-full object-cover"/>
                    <img src={avatar2} alt="" className=" w-10 h-10 rounded-full object-cover"/>
                </div>
           </div>

       </div>
    )
}

export default Card1
