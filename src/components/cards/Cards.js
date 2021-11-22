import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import Card5 from './Card5'

const Cards = () => {
    return (
        <div className="w-full">
            <h1 id="cards" className="font-bold text-3xl">Cards</h1>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-4 relative">
                <Card1 />
                <Card2 />
                <Card3 />
                <Card4 />
                <Card5 />
            </div>

        </div>
    )
}

export default Cards
