import React from 'react'

import logo from '../../images/avatar.jpg'
const Header = () => {
    return (
        <div>
            <div className="flex items-center space-x-2">
                <img src={logo} alt="logo"  className=" w-8 h-8 rounded-full object-cover"/>
                <h1 className="font-bold leading-9 text-base dmsans">BigCoder</h1>
            </div>
            <div className="mt-20 2xl:mt-28">
                <h3 className="w-2/3 lg:w-64 xl:w-56">
                    <a href="#link" className="text-2xl leading-7 text-pmiddle font-normal">Open Source Dashboards UI Kit</a>
                </h3>
                <h1 className="my-8 font-bold text-7xl">Full Preview</h1>
                <nav className="flex flex-col items-center">
                    <ul className="flex flex-wrap items-center w-full">
                        <li className="navItem">
                            <a href="#cards" className="navLink">Cards</a>
                        </li>
                        <li className="navItem">
                            <a href="#widgets" className="navLink">Widgets</a>
                        </li>
                        <li className="navItem">
                            <a href="#grids" className="navLink">Grids</a>
                        </li>
                        <li className="navItem">
                            <a href="#icons" className="navLink">Icons</a>
                        </li>
                        <li className="navItem">
                            <a href="#dashboards" className="navLink">Dashboards</a>
                        </li>
                        <li className="navItem">
                            <a href="#graphics" className="navLink">Graphics</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
