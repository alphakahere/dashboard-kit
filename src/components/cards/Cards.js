import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'

const Cards = () => {
    return (
        <div className="">
            <h1 id="cards" className="font-bold text-3xl">Cards</h1>
            <div className="mt-10 flex flex-wrap">
                <Card1 />
                <Card2 />

            </div>

        </div>
    )
}

export default Cards
