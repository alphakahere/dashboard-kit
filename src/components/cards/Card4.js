import React from 'react'

const Card4 = () => {
    return (
        <div className="card px-4 py-5" style={{width:'326px', height:'210px'}}>
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
            <div className="flex flex-col">
                <h1 className="cardTitle">Honduras</h1>
                <p className="cardBody">
                    When you enter into any new area of science, you almost always find.
                </p>
                <p className="my-3">
                    <a href="#link" className=" text-sm leading-5 text-pmiddle hover:text-pdark">Details</a>
                </p>
            </div>
        </div>
    )
}

export default Card4
