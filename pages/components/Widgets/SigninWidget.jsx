import { motion } from "framer-motion";
import ButtonWidget from "./ButtonWidget";

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

const SigninWidget = ({ isOpen, onClose }) => {
    return (
        <>
            {isOpen && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={backdropVariants}
                    className="fixed inset-0 bg-black bg-opacity-50  z-10"
                    onClick={onClose}
                />
            )}
            <motion.div
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
                variants={popupVariants}
                className="fixed w-full h-screen z-[1000] bg-opacity-0 justify-center items-center flex"
            >



                <div className="bg-white w-full mx-3 max-w-md lg:max-w-[35rem] rounded-md py-4 px-6 relative">

                    <button
                        onClick={onClose}
                        className="absolute font-bold text-xl top-4 right-2 rounded-full size-12 transition-all bg-white outset-none shadow-sm text-black focus:outline-none hover:bg-gray-100"
                    >
                        &#x2715;
                    </button>

                    <div className="pt-12">
                        <h6 className="font-semibold text-xl">Welcome back!</h6>
                        <h6 className="font-bold text-2xl mb-5">
                            Fill in your details to proceed
                        </h6>
                        <div className="w-full">
                            <input className="py-[12px] outset-border px-2 rounded-md border border-gray-300 w-full mb-5" placeholder="Phone number" />
                        </div>
                        <div className="w-full">
                            <input className="py-[12px] outset-border px-2 rounded-md border border-gray-300 w-full mb-5" placeholder="Enter PIN" />
                        </div>

                        <ButtonWidget
                            className="w-full uppercase bg-black text-white py-3 font-semibold rounded-md hover:bg-opacity-80">
                            Log in
                        </ButtonWidget>


                        <div className="text-center flex flex-col items-center justify-center mt-5">


                            <div className="text-center flex items-center gap-x-2">
                                <span>Don&apos;t have an account? </span> <span className="text-heyfood font-semibold">Sign up</span>
                            </div>

                            <p className="font-semibold text-heyfood mt-5">
                                <span>Forget PIN</span>
                            </p>

                        </div>


                    </div>

                </div>


            </motion.div>
        </>
    );
};



export default SigninWidget;
