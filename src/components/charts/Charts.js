import React from 'react'
import Chart2 from './Chart2'
import Chart3 from './Chart3'
import Chart4 from './Chart4'
import Chart5 from './Chart5'
import Chart6 from './Chart6'
// import Chart1 from './Chart1'



const Charts = () => {
    return (
        <div className="w-full">
            <h1 id="graphics" className="font-bold text-3xl">Graphics</h1>
            <div className="mt-10 space-y-10">
                {/* <Chart1 /> */}
                <Chart2 />
                <Chart3 />
                <Chart4 />
                <Chart5 />
                <Chart6 />
            </div>
        </div>
    )
}

export default Charts
