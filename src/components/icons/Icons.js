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
	FiAlertOctagon,
	FiShoppingBag,
	FiShoppingCart,
	FiSlash,
	FiShuffle,
	FiBookmark,
	FiCalendar,
	FiBriefcase,
	FiSettings,
	FiCopy,
	FiDownload,
	FiUpload,
	FiMusic,
	FiThermometer,
	FiCornerDownLeft,
	FiCornerDownRight,
	FiCornerLeftDown,
	FiCornerLeftUp,
	FiCornerRightDown,
	FiCornerRightUp,
	FiCornerUpLeft,
	FiCornerUpRight,
	FiCamera,
	FiCreditCard,
	FiSave,
	FiTrash,
	FiTrash2,
	FiTrendingUp,
	FiTrendingDown,
	FiFolder,
	FiFolderPlus,
	FiFolderMinus,
	FiEye,
	FiEyeOff,
	FiFile,
	FiFileText,
	FiFilePlus,
	FiFileMinus,
	FiUser,
	FiUsers,
	FiUserPlus,
	FiUserMinus,
	FiUserCheck,
	FiUserX,
	FiGrid,
	FiHardDrive,
	FiHash,
	FiHeadphones,
	FiHeart,
	FiHome,
	FiImage,
	FiCast,
	FiAward,
	FiMap,
	FiInbox,
	FiLayers,
	FiLayout,
	FiLink,
	FiLink2,
	FiLoader,
	FiClock,
	FiUnlock,
	FiLock,
	FiShare,
	FiShield,
	FiShieldOff,
	FiLogOut,
	FiLogIn,
	FiMapPin,
	FiPlus,
	FiMinus,
	FiPlusCircle,
	FiMinusCircle,
	FiSmartphone,
	FiSpeaker,
	FiStar,
	FiMoon,
	FiSun,
	FiNavigation,
	FiNavigation2,
	FiSearch,
	FiToggleRight,
	FiToggleLeft,
	FiPauseCircle,
	FiPlayCircle,
	FiCheckCircle,
	FiStopCircle,
	FiPercent,
	FiPhone,
	FiPhoneCall,
	FiPhoneMissed,
	FiPhoneOff,
	FiTv,
	FiUmbrella,
	FiPower,
	FiSkipBack,
	FiSkipForward,
	FiRepeat,
	FiPrinter,
	FiRadio,
	FiFlag,
	FiVideo,
	FiVideoOff,
	FiPieChart,
	FiVolume,
	FiVolumeX,
	FiVolume1,
	FiVolume2,
	FiCode,
	FiFilm,
	FiClipboard,
	FiCompass,
	FiCrop,
	FiDroplet,
	FiBookOpen,
	FiGift,
	FiGlobe,
	FiTwitter,
	FiLinkedin,
	FiFacebook,
	FiGithub,
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
	HiOutlineLightBulb,
	HiRewind,
	HiAtSymbol,
	HiOutlineBackspace,
	HiOutlineCube,
} from "react-icons/hi";
import {
	ImArrowUpRight2,
	ImArrowUpLeft2,
	ImArrowDownRight2,
	ImArrowDownLeft2,
	ImShuffle,
} from "react-icons/im";
import {
	FaRegPlusSquare,
	FaRegMinusSquare,
	FaBatteryEmpty,
	FaSearchPlus,
	FaSearchMinus,
} from "react-icons/fa";
import { GrCircleAlert, GrExpand, GrGlobe } from "react-icons/gr";
import {
	IoMdCheckmarkCircleOutline,
	IoMdCheckboxOutline,
	IoIosKeypad,
} from "react-icons/io";
import { GiHamburgerMenu, GiMove } from "react-icons/gi";
import { GrCheckmark } from "react-icons/gr";
import {
	MdMicOff,
	MdBarChart,
	MdShuffle,
	MdOutlineMailOutline,
	MdRefresh,
	MdOutlineRadioButtonChecked,
	MdOutlineRadioButtonUnchecked,
	MdOutlineTimer,
	MdOutlineLineWeight,
} from "react-icons/md";
import {
	BiLinkExternal,
	BiBluetooth,
	BiSquareRounded,
	BiEditAlt,
	BiLeftArrow,
	BiRightArrow,
	BiUpArrow,
	BiDownArrow,
	BiMenu,
	BiText,
	BiCar,
	BiQuestionMark,
} from "react-icons/bi";
import {
	IoArrowUndoOutline,
	IoClose,
	IoCloseCircleOutline,
	IoCodeDownloadOutline,
	IoColorPaletteOutline,
	IoFlashOffOutline,
	IoFlashOutline,
	IoFunnelOutline,
	IoOptions,
	IoPaperPlaneOutline,
	IoRecordingSharp,
	IoSwapHorizontalOutline,
} from "react-icons/io5";
import {
	RiAttachment2,
	RiAttachmentLine,
	RiBookLine,
	RiDownloadCloud2Line,
	RiEyeCloseLine,
	RiLineHeight,
	RiNpmjsLine,
	RiPantoneLine,
	RiPencilLine,
	RiPriceTag3Line,
	RiUploadCloud2Line,
} from "react-icons/ri";
import {
	AiOutlineCloseSquare,
	AiOutlineFire,
	AiOutlineQuestionCircle,
	AiOutlineSetting,
	AiOutlineSync,
} from "react-icons/ai";
import {
	BsArrowsAngleContract,
	BsBrush,
	BsCheckAll,
	BsGoogle,
} from "react-icons/bs";
import { GoBrowser } from "react-icons/go";

const Icons = () => {
	return (
		<div className="w-full ">
			<h1 id="icons" className="font-bold text-3xl mb-10 ">
				Icons
			</h1>
			<div className="flex flex-wrap items-center">
				<FiArrowDownCircle size={22} className="mr-6 mb-6" />
				<HiOutlineArrowCircleUp
					size={22}
					className="mr-6 mb-6"
				/>
				<FiArrowLeftCircle size={20} className="mr-6 mb-6" />
				<FiArrowRightCircle size={20} className="mr-6 mb-6" />
				<HiArrowNarrowUp size={20} className="mr-6 mb-6" />
				<HiArrowNarrowDown size={20} className="mr-6 mb-6" />
				<HiArrowNarrowLeft size={20} className="mr-6 mb-6" />
				<HiArrowNarrowRight size={20} className="mr-6 mb-6" />
				<ImArrowUpRight2 size={20} className="mr-6 mb-6" />
				<ImArrowUpLeft2 size={20} className="mr-6 mb-6" />
				<ImArrowDownRight2 size={20} className="mr-6 mb-6" />
				<ImArrowDownLeft2 size={20} className="mr-6 mb-6" />
				<FaRegPlusSquare size={20} className="mr-6 mb-6" />
				<FaRegMinusSquare size={20} className="mr-6 mb-6" />
				<FiMonitor size={20} className="mr-6 mb-6" />
				<HiOutlineChat size={22} className="mr-6 mb-6" />
				<HiOutlineChatAlt size={22} className="mr-6 mb-6" />
				<GrCircleAlert size={20} className="mr-6 mb-6" />
				<IoMdCheckmarkCircleOutline
					size={20}
					className="mr-6 mb-6"
				/>
				<GiHamburgerMenu size={20} className="mr-6 mb-6" />
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
				<FiAlertTriangle size={22} className="mr-6 mb-6" />
				<HiOutlineArchive size={22} className="mr-6 mb-6" />
				<FiActivity size={22} className="mr-6 mb-6" />
				<GrCheckmark size={22} className="mr-6 mb-6" />
				<GiMove size={22} className="mr-6 mb-6" />
				<FiMoreHorizontal size={22} className="mr-6 mb-6" />
				<FiMoreVertical size={20} className="mr-6 mb-6" />
				<HiOutlineMicrophone size={22} className="mr-6 mb-6" />
				<MdMicOff size={22} className="mr-6 mb-6" />
				<MdBarChart size={22} className="mr-6 mb-6" />
				<FiBarChart size={22} className="mr-6 mb-6" />
				<FaBatteryEmpty size={22} className="mr-6 mb-6" />
				<FiBatteryCharging size={22} className="mr-6 mb-6" />
				<HiChevronDoubleDown size={22} className="mr-6 mb-6" />
				<HiChevronDoubleUp size={22} className="mr-6 mb-6" />
				<HiChevronDoubleLeft size={22} className="mr-6 mb-6" />
				<HiChevronDoubleRight size={22} className="mr-6 mb-6" />
				<FiBell size={22} className="mr-6 mb-6" />
				<FiBellOff size={20} className="mr-6 mb-6" />
				<FiWifi size={22} className="mr-6 mb-6" />
				<FiWifiOff size={20} className="mr-6 mb-6" />
				<IoPaperPlaneOutline size={22} className="mr-6 mb-6" />
				<BiLinkExternal size={22} className="mr-6 mb-6" />

				<HiScissors size={22} className="mr-6 mb-6" />
				<HiOutlineChevronDown size={22} className="mr-6 mb-6" />
				<HiOutlineChevronUp size={22} className="mr-6 mb-6" />
				<HiOutlineChevronLeft size={22} className="mr-6 mb-6" />
				<HiOutlineChevronRight
					size={22}
					className="mr-6 mb-6"
				/>
				<BiBluetooth size={22} className="mr-6 mb-6" />
				<IoMdCheckboxOutline size={22} className="mr-6 mb-6" />
				<BiSquareRounded size={22} className="mr-6 mb-6" />
				<FiAlertOctagon size={22} className="mr-6 mb-6" />
				<RiPencilLine size={22} className="mr-6 mb-6" />
				<BiEditAlt size={22} className="mr-6 mb-6" />
				<FiShoppingBag size={22} className="mr-6 mb-6" />
				<FiShoppingCart size={22} className="mr-6 mb-6" />
				<ImShuffle size={22} className="mr-6 mb-6" />
				<MdShuffle size={22} className="mr-6 mb-6" />
				<FiShuffle size={22} className="mr-6 mb-6" />
				<FiSlash size={22} className="mr-6 mb-6" />
				<IoFunnelOutline size={22} className="mr-6 mb-6" />
				<FiBookmark size={22} className="mr-6 mb-6" />
				<RiBookLine size={22} className="mr-6 mb-6" />
				<FiCalendar size={22} className="mr-6 mb-6" />
				<FiBriefcase size={22} className="mr-6 mb-6" />
				<AiOutlineSetting size={22} className="mr-6 mb-6" />
				<FiSettings size={22} className="mr-6 mb-6" />
				<FiCopy size={22} className="mr-6 mb-6" />
				<FiDownload size={22} className="mr-6 mb-6" />
				<FiUpload size={22} className="mr-6 mb-6" />
				<FiMusic size={22} className="mr-6 mb-6" />
				<RiPriceTag3Line size={22} className="mr-6 mb-6" />
				<FiThermometer size={22} className="mr-6 mb-6" />
				<FiCornerDownLeft size={22} className="mr-6 mb-6" />
				<FiCornerDownRight size={22} className="mr-6 mb-6" />
				<FiCornerLeftDown size={22} className="mr-6 mb-6" />
				<FiCornerLeftUp size={22} className="mr-6 mb-6" />
				<FiCornerRightDown size={22} className="mr-6 mb-6" />
				<FiCornerRightUp size={22} className="mr-6 mb-6" />
				<FiCornerUpLeft size={22} className="mr-6 mb-6" />
				<FiCornerUpRight size={22} className="mr-6 mb-6" />
				<FiCamera size={22} className="mr-6 mb-6" />
				<FiCreditCard size={22} className="mr-6 mb-6" />
				<FiSave size={22} className="mr-6 mb-6" />
				<FiTrash size={22} className="mr-6 mb-6" />
				<FiTrash2 size={22} className="mr-6 mb-6" />
				<FiTrendingUp size={22} className="mr-6 mb-6" />
				<FiTrendingDown size={22} className="mr-6 mb-6" />
				<FiFolder size={22} className="mr-6 mb-6" />
				<FiFolderPlus size={22} className="mr-6 mb-6" />
				<FiFolderMinus size={22} className="mr-6 mb-6" />
				<FiEye size={22} className="mr-6 mb-6" />
				<FiEyeOff size={22} className="mr-6 mb-6" />
				<RiEyeCloseLine size={22} className="mr-6 mb-6" />
				<FiFile size={22} className="mr-6 mb-6" />
				<FiFileText size={22} className="mr-6 mb-6" />
				<FiFilePlus size={22} className="mr-6 mb-6" />
				<FiFileMinus size={22} className="mr-6 mb-6" />
				<FiUser size={22} className="mr-6 mb-6" />
				<FiUsers size={22} className="mr-6 mb-6" />
				<FiUserPlus size={22} className="mr-6 mb-6" />
				<FiUserMinus size={22} className="mr-6 mb-6" />
				<FiUserCheck size={22} className="mr-6 mb-6" />
				<FiUserX size={22} className="mr-6 mb-6" />
				<RiDownloadCloud2Line size={22} className="mr-6 mb-6" />
				<RiUploadCloud2Line size={22} className="mr-6 mb-6" />
				<FiGrid size={22} className="mr-6 mb-6" />
				<FiHardDrive size={22} className="mr-6 mb-6" />
				<FiHash size={22} className="mr-6 mb-6" />
				<FiHeadphones size={22} className="mr-6 mb-6" />
				<FiHeart size={22} className="mr-6 mb-6" />
				<HiOutlineLightBulb size={22} className="mr-6 mb-6" />
				<FiHome size={22} className="mr-6 mb-6" />
				<FiImage size={22} className="mr-6 mb-6" />
				<FiCast size={22} className="mr-6 mb-6" />
				<FiAward size={22} className="mr-6 mb-6" />
				<IoFlashOutline size={22} className="mr-6 mb-6" />
				<IoFlashOffOutline size={22} className="mr-6 mb-6" />
				<FiMap size={22} className="mr-6 mb-6" />
				<FiInbox size={22} className="mr-6 mb-6" />
				<FiLayers size={22} className="mr-6 mb-6" />
				<FiLayout size={22} className="mr-6 mb-6" />
				<FiLink size={22} className="mr-6 mb-6" />
				<FiLink2 size={22} className="mr-6 mb-6" />
				<FiLoader size={22} className="mr-6 mb-6" />
				<FiClock size={22} className="mr-6 mb-6" />
				<FiUnlock size={22} className="mr-6 mb-6" />
				<FiLock size={22} className="mr-6 mb-6" />
				<IoClose size={22} className="mr-6 mb-6" />
				<IoCloseCircleOutline size={22} className="mr-6 mb-6" />
				<FiShare size={22} className="mr-6 mb-6" />
				<FiShield size={22} className="mr-6 mb-6" />
				<FiShieldOff size={22} className="mr-6 mb-6" />
				<FiLogIn size={22} className="mr-6 mb-6" />
				<FiLogOut size={22} className="mr-6 mb-6" />
				<MdOutlineMailOutline size={22} className="mr-6 mb-6" />
				<FiMapPin size={22} className="mr-6 mb-6" />
				<GrExpand size={22} className="mr-6 mb-6" />
				<BsArrowsAngleContract
					size={22}
					className="mr-6 mb-6"
				/>
				<FiPlus size={22} className="mr-6 mb-6" />
				<FiMinus size={22} className="mr-6 mb-6" />
				<FiPlusCircle size={22} className="mr-6 mb-6" />
				<FiMinusCircle size={22} className="mr-6 mb-6" />
				<IoOptions size={22} className="mr-6 mb-6" />
				<FiSmartphone size={22} className="mr-6 mb-6" />
				<FiSpeaker size={22} className="mr-6 mb-6" />
				<FiStar size={22} className="mr-6 mb-6" />
				<FiMoon size={22} className="mr-6 mb-6" />
				<FiSun size={22} className="mr-6 mb-6" />
				<FiNavigation size={22} className="mr-6 mb-6" />
				<FiNavigation2 size={22} className="mr-6 mb-6" />
				<RiAttachmentLine size={22} className="mr-6 mb-6" />
				<RiAttachment2 size={22} className="mr-6 mb-6" />
				<BiLeftArrow size={22} className="mr-6 mb-6" />
				<BiRightArrow size={22} className="mr-6 mb-6" />
				<BiUpArrow size={22} className="mr-6 mb-6" />
				<BiDownArrow size={22} className="mr-6 mb-6" />
				<FiSearch size={22} className="mr-6 mb-6" />
				<FaSearchPlus size={22} className="mr-6 mb-6" />
				<FaSearchMinus size={22} className="mr-6 mb-6" />
				<FiToggleRight size={22} className="mr-6 mb-6" />
				<FiToggleLeft size={22} className="mr-6 mb-6" />
				<FiPauseCircle size={22} className="mr-6 mb-6" />
				<BiMenu size={22} className="mr-6 mb-6" />
				<FiPlayCircle size={22} className="mr-6 mb-6" />
				<FiCheckCircle size={22} className="mr-6 mb-6" />
				<FiStopCircle size={22} className="mr-6 mb-6" />
				<FiPercent size={22} className="mr-6 mb-6" />
				<FiPhone size={22} className="mr-6 mb-6" />
				<FiPhoneCall size={22} className="mr-6 mb-6" />
				<FiPhoneMissed size={22} className="mr-6 mb-6" />
				<FiPhoneOff size={22} className="mr-6 mb-6" />
				<FiTv size={22} className="mr-6 mb-6" />
				<BiText size={22} className="mr-6 mb-6" />
				<IoIosKeypad size={22} className="mr-6 mb-6" />
				<BiCar size={22} className="mr-6 mb-6" />
				<FiUmbrella size={22} className="mr-6 mb-6" />
				<FiPower size={22} className="mr-6 mb-6" />
				<HiRewind size={22} className="mr-6 mb-6" />
				<FiSkipBack size={22} className="mr-6 mb-6" />
				<FiSkipForward size={22} className="mr-6 mb-6" />
				<AiOutlineSync size={22} className="mr-6 mb-6" />
				<MdRefresh size={22} className="mr-6 mb-6" />
				<FiRepeat size={22} className="mr-6 mb-6" />
				<FiPrinter size={22} className="mr-6 mb-6" />
				<FiRadio size={22} className="mr-6 mb-6" />
				<FiFlag size={22} className="mr-6 mb-6" />
				<FiVideo size={22} className="mr-6 mb-6" />
				<FiVideoOff size={22} className="mr-6 mb-6" />
				<IoRecordingSharp size={22} className="mr-6 mb-6" />
				<HiAtSymbol size={22} className="mr-6 mb-6" />
				<FiPieChart size={22} className="mr-6 mb-6" />
				<FiVolume size={22} className="mr-6 mb-6" />
				<FiVolumeX size={22} className="mr-6 mb-6" />
				<FiVolume1 size={22} className="mr-6 mb-6" />
				<FiVolume2 size={22} className="mr-6 mb-6" />
				<FiCheckCircle size={22} className="mr-6 mb-6" />
				<MdOutlineRadioButtonChecked
					size={22}
					className="mr-6 mb-6"
				/>
				<MdOutlineRadioButtonUnchecked
					size={22}
					className="mr-6 mb-6"
				/>
				<HiOutlineBackspace size={22} className="mr-6 mb-6" />
				<FiCode size={22} className="mr-6 mb-6" />
				<IoCodeDownloadOutline
					size={22}
					className="mr-6 mb-6"
				/>
				<BsCheckAll size={22} className="mr-6 mb-6" />
				<FiFilm size={22} className="mr-6 mb-6" />
				<IoArrowUndoOutline size={22} className="mr-6 mb-6" />
				<AiOutlineQuestionCircle
					size={22}
					className="mr-6 mb-6"
				/>
				<IoSwapHorizontalOutline
					size={22}
					className="mr-6 mb-6"
				/>
				<GoBrowser size={22} className="mr-6 mb-6" />
				<FiClipboard size={22} className="mr-6 mb-6" />
				<FiCompass size={22} className="mr-6 mb-6" />
				<FiCrop size={22} className="mr-6 mb-6" />
				<HiOutlineCube size={22} className="mr-6 mb-6" />
				<FiDroplet size={22} className="mr-6 mb-6" />
				<FiBookOpen size={22} className="mr-6 mb-6" />
				<FiGift size={22} className="mr-6 mb-6" />
				<FiGlobe size={22} className="mr-6 mb-6" />
				<BsBrush size={22} className="mr-6 mb-6" />
				<IoColorPaletteOutline
					size={22}
					className="mr-6 mb-6"
				/>
				<BiQuestionMark size={22} className="mr-6 mb-6" />
				<AiOutlineCloseSquare size={22} className="mr-6 mb-6" />

				<GrGlobe size={22} className="mr-6 mb-6" />
				<RiPantoneLine size={22} className="mr-6 mb-6" />
				<BsGoogle size={22} className="mr-6 mb-6" />
				<FiTwitter size={22} className="mr-6 mb-6" />
				<FiLinkedin size={22} className="mr-6 mb-6" />
				<FiFacebook size={22} className="mr-6 mb-6" />
				<FiGithub size={22} className="mr-6 mb-6" />
				<RiNpmjsLine size={22} className="mr-6 mb-6" />
				<MdOutlineTimer size={22} className="mr-6 mb-6" />
				<AiOutlineFire size={22} className="mr-6 mb-6" />
				<MdOutlineLineWeight size={22} className="mr-6 mb-6" />
				<RiLineHeight size={22} className="mr-6 mb-6" />
				<div className="mr-2 mb-5">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M13.25 9.703H16.25V9.203H13.25V9.703ZM15.788 12.294H13.727V12.284C13.727 11.666 14.139 11.188 14.765 11.188C15.385 11.188 15.788 11.661 15.788 12.284V12.294ZM14.755 10.297C13.401 10.297 12.475 11.134 12.475 12.549V12.99C12.475 14.469 13.396 15.297 14.808 15.297C16.186 15.297 16.855 14.527 16.977 13.754H15.793C15.686 14.146 15.327 14.382 14.818 14.382C14.168 14.382 13.727 13.918 13.727 13.186V13.054H17.025V12.58C17.025 11.192 16.157 10.297 14.755 10.297ZM9.219 14.237H8.26V12.304H9.487C10.244 12.304 10.657 12.68 10.657 13.294C10.657 13.913 10.24 14.237 9.219 14.237ZM8.26 9.67H9.405C10.01 9.67 10.364 9.994 10.364 10.522C10.364 11.089 9.981 11.408 9.113 11.408H8.26V9.67ZM10.518 11.784V11.728C11.165 11.57 11.64 11.094 11.64 10.304C11.64 9.309 10.873 8.703 9.703 8.703H6.975V15.203H9.698C11.026 15.203 11.975 14.532 11.975 13.37C11.975 12.395 11.304 11.86 10.518 11.784ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"
							fill="black"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Icons;
