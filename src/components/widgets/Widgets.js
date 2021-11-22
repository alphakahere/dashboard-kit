import React from 'react'
import Widget1 from './Widget1'
import Widget2 from './Widget2'
import Widget3 from './Widget3'
import Widget5 from './Widget5'
import Widget6 from './Widget6'

const Widgets = () => {
    return (
        <div className="w-full">
            <h1 id="widgets" className="font-bold text-3xl">Widgets</h1>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6">
                <Widget1 />
                <Widget2 />
                <Widget3 />
                <Widget5 />
                <Widget6 />
            </div>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6">
            </div>
        </div>
    )
}

export default Widgets
