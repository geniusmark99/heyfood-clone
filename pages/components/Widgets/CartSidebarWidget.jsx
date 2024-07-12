'use client';
import { motion } from "framer-motion";
import CartShopIcon from "../Icons/CartShopIcon";
import ButtonWidget from "./ButtonWidget";

const sidebarVariants = {
    hidden: {
        x: "100%",
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


export default function CartSidebarWidget({ isOpen, onClose }) {

    return <>
        <motion.div
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={sidebarVariants}
            className="fixed top-0 right-0 h-full w-full lg:w-[500px] bg-white text-black shadow-lg z-[1000] overflow-hidden"
        >
            <div className="flex justify-center  flex-col">

                <div className="flex justify-start px-8 my-6 gap-x-4 items-center">
                    <ButtonWidget
                        onClick={onClose}
                        className="rounded-full size-8 hover:bg-gray-100/80 font-semibold">
                        &#x2715;
                    </ButtonWidget>
                    <span className="text-3xl font-bold">Cart</span>
                </div>
                <div className="h-[65vh] w-full flex justify-center items-center px-8">
                    <div className="flex justify-center items-center flex-col">
                        <CartShopIcon className="size-28 fill-gray-300" />
                        <p className="font-bold text-black text-[1.3rem] mt-[1.3rem] py-0 px-16 max-w-sm text-center">
                            You have not added any items to your cart
                        </p>
                    </div>
                </div>
            </div>

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
