import React from 'react'
import Grid1 from './Grid1'
import Grid2 from './Grid2'
import Grid3 from './Grid3'

const Grids = () => {
    return (
        <div className="w-full ">
            <h1 id="grids" className="font-bold text-3xl mb-10 ">Grids</h1>
            <div className="space-y-10">
                <Grid1 />
                <Grid2 />
                <Grid3 />
            </div>
        </div>
    )
}

export default Grids
