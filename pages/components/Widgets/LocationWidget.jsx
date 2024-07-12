import { motion } from "framer-motion";

const popupVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
        },
    },
    visible: {
        opacity: 1,
        scale: 1,
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

const LocationWidget = ({ isOpen, onClose }) => {
    return (
        <>
            {isOpen && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={backdropVariants}
                    className="fixed inset-0 bg-black bg-opacity-50  z-[999]"
                    onClick={onClose}
                />
            )}
            <motion.div
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
                variants={popupVariants}
                className="fixed w-full h-screen z-[1000] bg-opacity-0 justify-center items-center flex"
            >



                <div className="bg-white w-full max-w-md lg:max-w-[38rem] rounded-md p-4 relative">

                    <button
                        onClick={onClose}
                        className="absolute font-bold text-xl top-4 left-2 rounded-full size-12 transition-all bg-white outset-none shadow-sm text-black focus:outline-none hover:bg-gray-100"
                    >
                        &#x2715;
                    </button>

                    <div className="pt-20">
                        <h6 className="font-semibold text-xl mb-5">Delivery Location</h6>
                        <div className="w-full">
                            <input className="py-[12px] outset-border px-2 rounded-md border shadow-sm w-full mb-5" placeholder="Enter Delivery Address" />
                        </div>
                        <button className="w-full uppercase bg-slate-500/20 py-2.5 rounded-md">
                            Set location
                        </button>

                    </div>

                </div>


            </motion.div>
        </>
    );
};

// className="fixed top-1/2 left-[34%] transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-20"


export default LocationWidget;
