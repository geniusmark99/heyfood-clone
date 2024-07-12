import { motion } from 'framer-motion';
import ButtonWidget from './ButtonWidget';

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

const BannerPopupWidget = ({ showModal, setShowModal, content }) => {
    return (
        showModal && (
            <motion.div
                className="fixed z-[1000] top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className="bg-white relative   rounded-lg mx-4 shadow-lg w-full md:w-6/12 lg:w-[45%] h-auto flex flex-col overflow-hidden"
                    variants={popupVariants}
                >
                    <button
                        className="absolute top-2 right-4 font-semibold text-black bg-white size-8 text-xl rounded-full border shadow-sm"
                        onClick={() => setShowModal(false)}
                    >
                        &#x2715;
                    </button>

                    <div className="w-full p-8 h-[200px] md:h-[45vh] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${content.image})` }}>
                    </div>

                    <div className='p-8 h-[20%]'>
                        <h2 className='font-bold text-xl md:text-2xl'>
                            {content.name}
                        </h2>

                        <p className='mt-5 mb-8'>
                            {content.desc}
                        </p>

                        <ButtonWidget
                            className="w-full uppercase bg-black text-white py-3 font-semibold rounded-md hover:bg-opacity-80">
                            Continue
                        </ButtonWidget>
                    </div>

                </motion.div>
            </motion.div>
        )
    );
};

export default BannerPopupWidget;
