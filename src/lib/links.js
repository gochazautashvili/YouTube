import { LiaHomeSolid } from "react-icons/lia";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GoHistory } from "react-icons/go";
import { BiLike } from "react-icons/bi";
// active link icons
import { MdHomeFilled } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";

export const links = [
    {
        icons: <LiaHomeSolid size={24} />,
        activeIcons: <MdHomeFilled size={24} />,
        title: "Home",
        path: "/",
    },
    {
        icons: <MdOutlineSubscriptions size={24} />,
        activeIcons: <MdSubscriptions size={24} />,

        title: "Subscriptions",
        path: "/subscriptions",
    },
    {
        icons: <CgProfile size={24} />,
        activeIcons: <BsPersonCircle size={24} />,

        title: "Your channel",
        path: "/profile",
    },
    {
        icons: <GoHistory size={24} />,
        activeIcons: <FaHistory size={24} />,

        title: "History",
        path: "/history",
    },
    {
        icons: <BiLike size={24} />,
        activeIcons: <BiSolidLike size={24} />,

        title: "Liked videos",
        path: "/liked-videos",
    },
];