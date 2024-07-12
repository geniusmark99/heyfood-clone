'use client';
import { motion } from "framer-motion";
import { useState } from "react";
import HeyFoodIcon from "../Icons/HeyFoodIcon";
import AppleIcon from "../Icons/AppleIcon";
import PlayStoreIcon from "../Icons/PlayStoreIcon";
import PadLockIcon from "../Icons/PadLockIcon";
import ButtonWidget from "./ButtonWidget";
import LinkWidget from "./LinkWidget";

const sidebarVariants = {
    hidden: {
        x: "-100%",
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
        },
    },
    visible: {
        x: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
        },
    },
};


const backdropVariants = {
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.3,
        },
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    },
};


export default function SidebarWidget({ isOpen, onClose }) {

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return <>
        <motion.div
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={sidebarVariants}
            className="fixed top-0 left-0 h-full w-11/12 lg:w-[300px] bg-white text-black shadow-lg z-[1000] overflow-hidden"
        >
            <ul className="">
                <li className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 rounded-full size-10 bg-gray-100/10 hover:bg-gray-100 font-bold border shadow-sm text-black focus:outline-none"
                    >
                        &#x2715;
                    </button>
                </li>

                <li className="mt-[100px] w-full  cursor-pointer transition-all">
                    <LinkWidget className="flex items-center justify-start gap-x-12 hover:bg-gray-100/70 py-3.5" padding={true}>
                        <PadLockIcon className="size-6 fill-gray-500" />
                        <span className="text-gray-700 lg:text-xl">Sign in</span>
                    </LinkWidget>
                </li>

                <li className="pl-7 w-full mt-[70px] hover:bg-gray-100/50 p-3.5 font-bold cursor-pointer transition-all">
                    <span>Add your restaurant</span>
                </li>
                <li className="pl-7 w-full hover:bg-gray-100/50 p-3.5 font-bold cursor-pointer transition-all">
                    <span>Become a delivery rider</span>
                </li>
                <li className="pl-7 w-full hover:bg-gray-100/50 p-3.5 font-bold cursor-pointer transition-all">
                    <span>Go to Homepage</span>
                </li>
                <li className="mt-[6em] flex flex-col gap-y-4 mx-6">
                    <div className="flex gap-x-2 items-center w-full">
                        <HeyFoodIcon className="size-10" />
                        <p className="flex flex-col ml-3 font-semibold">
                            <span>Experience the</span>
                            <span>Heyfood mobile app</span>

                        </p>
                    </div>

                    <div className="flex gap-x-2">
                        <ButtonWidget className="flex items-center gap-x-2 bg-black rounded-full py-3 hover:bg-opacity-75" padding={true}>
                            <AppleIcon className="size-4 fill-white" />
                            <span className="text-white text-xs">App Store</span>
                        </ButtonWidget>

                        <ButtonWidget className="flex items-center gap-x-2 bg-black rounded-full py-3 hover:bg-opacity-75" padding={true}>
                            <PlayStoreIcon className="size-4" />
                            <span className="text-white text-xs">Play Store</span>
                        </ButtonWidget>
                    </div>
                </li>
                {/*  <li className="mb-2"><a href="#">Contact</a></li> */}
            </ul>
        </motion.div>

        {isOpen && (
            <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={backdropVariants}
                className="fixed inset-0 bg-black bg-opacity-50 z-[999]"
                onClick={onClose}
            />
        )}
    </>
}
