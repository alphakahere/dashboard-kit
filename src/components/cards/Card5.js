import React from 'react'

const Card5 = () => {
    return (
        <div className="card px-4 py-5 card5 flex  flex-col  justify-between xl:absolute" style={{width:'326px', height:'340px', top:'350px'}}>
            {/* Card-Tags */}
            <div className="flex space-x-3 mb-3">
                <div className="tag1">
                    <span className="textTag">Lost</span>
                </div>
                <div className="tag2">
                    <span className="textTag">Designer</span>
                </div>
                <div className="tag3">
                    <span className="textTag">Hubble</span>
                </div>
            </div>
            {/* card-body */}
            <div className="flex flex-col text-gray-100">
                <h1 className="cardTitle">New York</h1>
                <p className="cardBody">
                    When you enter into any new area of science, you almost always find.
                </p>
            </div>
        </div>
    )
}

export default Card5
