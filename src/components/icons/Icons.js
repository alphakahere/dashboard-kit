import React from "react";
import {
	FiArrowLeftCircle,
	FiArrowRightCircle,
	FiMonitor,
	FiAlertTriangle,
	FiArrowDownCircle,
	FiActivity,
	FiMoreHorizontal,
	FiMoreVertical,
	FiBarChart,
    FiBatteryCharging,
    FiBell,
    FiBellOff,
    FiWifi,
    FiWifiOff,
    FiAlertOctagon

} from "react-icons/fi";
import {
	HiArrowNarrowUp,
	HiArrowNarrowDown,
	HiArrowNarrowLeft,
	HiArrowNarrowRight,
	HiOutlineChat,
	HiOutlineChatAlt,
	HiOutlineArrowCircleUp,
	HiOutlineArchive,
	HiOutlineMicrophone,
    HiChevronDoubleDown,
    HiChevronDoubleLeft,
    HiChevronDoubleRight,
    HiChevronDoubleUp,
    HiScissors,
    HiOutlineChevronDown,
    HiOutlineChevronLeft,
    HiOutlineChevronRight,
    HiOutlineChevronUp,

} from "react-icons/hi";
import {
	ImArrowUpRight2,
	ImArrowUpLeft2,
	ImArrowDownRight2,
	ImArrowDownLeft2,
} from "react-icons/im";
import { FaRegPlusSquare, FaRegMinusSquare,FaBatteryEmpty } from "react-icons/fa";
import { GrCircleAlert } from "react-icons/gr";
import { IoMdCheckmarkCircleOutline, IoMdCheckboxOutline} from "react-icons/io";
import { GiHamburgerMenu, GiMove } from "react-icons/gi";
import { GrCheckmark } from "react-icons/gr";
import { MdMicOff, MdBarChart } from "react-icons/md";
import {BiLinkExternal,BiBluetooth,BiSquareRounded,BiEditAlt} from 'react-icons/bi'
import {IoPaperPlaneOutline} from 'react-icons/io5'
import {RiPencilLine} from 'react-icons/ri'



const Icons = () => {
	return (
		<div className="w-full ">
			<h1 id="icons" className="font-bold text-3xl mb-10 ">
				Icons
			</h1>
			<div className="flex flex-wrap items-center">
				<FiArrowDownCircle size={26} className="mr-4 mb-5" />
				<HiOutlineArrowCircleUp
					size={26}
					className="mr-4 mb-5"
				/>
				<FiArrowLeftCircle size={24} className="mr-4 mb-5" />
				<FiArrowRightCircle size={24} className="mr-4 mb-5" />
				<HiArrowNarrowUp size={24} className="mr-4 mb-5" />
				<HiArrowNarrowDown size={24} className="mr-4 mb-5" />
				<HiArrowNarrowLeft size={24} className="mr-4 mb-5" />
				<HiArrowNarrowRight size={24} className="mr-4 mb-5" />
				<ImArrowUpRight2 size={24} className="mr-4 mb-5" />
				<ImArrowUpLeft2 size={24} className="mr-4 mb-5" />
				<ImArrowDownRight2 size={24} className="mr-4 mb-5" />
				<ImArrowDownLeft2 size={24} className="mr-4 mb-5" />
				<FaRegPlusSquare size={24} className="mr-4 mb-5" />
				<FaRegMinusSquare size={24} className="mr-4 mb-5" />
				<FiMonitor size={24} className="mr-4 mb-5" />
				<HiOutlineChat size={26} className="mr-4 mb-5" />
				<HiOutlineChatAlt size={26} className="mr-4 mb-5" />
				<GrCircleAlert size={24} className="mr-4 mb-5" />
				<IoMdCheckmarkCircleOutline
					size={24}
					className="mr-4 mb-5"
				/>
				<GiHamburgerMenu size={24} className="mr-4 mb-5" />
				<div className="mr-2 mb-5">
					<svg
						width="28"
						height="28"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M3 7C3 6.448 3.448 6 4 6C4.552 6 5 6.448 5 7C5 7.552 4.552 8 4 8C3.448 8 3 7.552 3 7ZM3 12C3 11.448 3.448 11 4 11C4.552 11 5 11.448 5 12C5 12.552 4.552 13 4 13C3.448 13 3 12.552 3 12ZM4 16C3.448 16 3 16.448 3 17C3 17.552 3.448 18 4 18C4.552 18 5 17.552 5 17C5 16.448 4.552 16 4 16ZM7.9355 11H20.0645C20.5795 11 21.0005 11.421 21.0005 11.936V12.064C21.0005 12.579 20.5795 13 20.0645 13H7.9355C7.4205 13 7.0005 12.579 7.0005 12.064V11.936C7.0005 11.421 7.4205 11 7.9355 11ZM20.0645 16H7.9355C7.4205 16 7.0005 16.421 7.0005 16.936V17.064C7.0005 17.579 7.4205 18 7.9355 18H20.0645C20.5795 18 21.0005 17.579 21.0005 17.064V16.936C21.0005 16.421 20.5795 16 20.0645 16ZM7.9355 6H20.0645C20.5795 6 21.0005 6.421 21.0005 6.936V7.064C21.0005 7.579 20.5795 8 20.0645 8H7.9355C7.4205 8 7.0005 7.579 7.0005 7.064V6.936C7.0005 6.421 7.4205 6 7.9355 6Z"
							fill="black"
						/>
					</svg>
				</div>
				<FiAlertTriangle size={26} className="mr-4 mb-5" />
				<HiOutlineArchive size={26} className="mr-4 mb-5" />
				<FiActivity size={26} className="mr-4 mb-5" />
				<GrCheckmark size={26} className="mr-4 mb-5" />
				<GiMove size={26} className="mr-4 mb-5" />
				<FiMoreHorizontal size={26} className="mr-4 mb-5" />
				<FiMoreVertical size={24} className="mr-4 mb-5" />
				<HiOutlineMicrophone size={26} className="mr-4 mb-5" />
				<MdMicOff size={26} className="mr-4 mb-5" />   
				<MdBarChart size={26} className="mr-4 mb-5" />
				<FiBarChart size={26} className="mr-4 mb-5" />
				<FaBatteryEmpty size={26} className="mr-4 mb-5" />   
                <FiBatteryCharging size={26} className="mr-4 mb-5" />
				<HiChevronDoubleDown size={26} className="mr-4 mb-5" />
				<HiChevronDoubleUp size={26} className="mr-4 mb-5" />
                <HiChevronDoubleLeft size={26} className="mr-4 mb-5" />
				<HiChevronDoubleRight size={26} className="mr-4 mb-5" />
                <FiBell size={26} className="mr-4 mb-5" />   
                <FiBellOff size={24} className="mr-4 mb-5" />
				<FiWifi size={26} className="mr-4 mb-5" />
				<FiWifiOff size={24} className="mr-4 mb-5" />
                <IoPaperPlaneOutline size={26} className="mr-4 mb-5" />
				<BiLinkExternal size={26} className="mr-4 mb-5" />

                <HiScissors size={26} className="mr-4 mb-5" />
				<HiOutlineChevronDown size={26} className="mr-4 mb-5" />
				<HiOutlineChevronUp size={26} className="mr-4 mb-5" />
                <HiOutlineChevronLeft size={26} className="mr-4 mb-5" />
				<HiOutlineChevronRight size={26} className="mr-4 mb-5" />
                <BiBluetooth size={26} className="mr-4 mb-5" /> 
                <IoMdCheckboxOutline size={26} className="mr-4 mb-5" />  
                <BiSquareRounded size={26} className="mr-4 mb-5" /> 
                <FiAlertOctagon size={26} className="mr-4 mb-5" />
                <RiPencilLine size={26} className="mr-4 mb-5" /> 
                <BiEditAlt size={26} className="mr-4 mb-5" />
			</div>
			</div>
	);
};

export default Icons;
