import React from 'react'

const Card2 = () => {
    return (
        <div className="card px-4 py-5" style={{width:'326px', height:'340px'}}>
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
            {/* card-image */}
            <img src="https://cdn.pixabay.com/photo/2021/02/18/12/03/people-6027028__340.jpg" alt="student-img" className="h-32 w-full rounded-lg"/>
            <h1 className="cardTitle">Sénégal</h1>
            <p className="cardBody">
                When you enter into any new area of science, you almost always find.
            </p>
            <p className="my-3">
                <a href="#link" className=" text-sm leading-5 text-pmiddle hover:text-pdark">Details</a>
            </p>
        </div>
    )
}

export default Card2
