import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MarkPopUpWidget = () => {
    const [showPopup, setShowPopup] = useState(true);

    // useEffect(() => {
    //     const hasShownPopup = localStorage.getItem('hasShownPopup');
    //     if (!hasShownPopup) {
    //         setShowPopup(true);
    //         localStorage.setItem('hasShownPopup', 'true');
    //     }
    // }, []);

    useEffect(() => {
        if (showPopup) {
            const timer = setTimeout(() => {
                setShowPopup(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [showPopup]);

    const handleClose = () => {
        setShowPopup(false);
    };

    return (
        <>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-[1000] w-full">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-lg shadow-2xl items-center overflow-hidden flex flex-col text-center w-auto mx-10"
                    >

                        <div className='relative h-[60%] w-full'>
                            <Image width={300} height={300} className="w-full object-contain" src="/images/mark-okechukwu.jpeg" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                        </div>
                        <p className='my-5 flex flex-col items-center'>
                            Built by Mark Okechukwu
                            <a
                                href="https://wa.me/+2348141625004"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 flex items-center text-white px-3 py-1 rounded-md hover:bg-green-600 transition duration-300 mt-4"
                            >
                                <svg width="32" height="32" viewBox="0 0 32 32" className='fill-white size-4'>
                                    <path d="M24.503,7.503C22.247,5.245,19.247,4.001,16.05,4C9.464,4,4.103,9.359,4.1,15.945c-0.001,2.105,0.549,4.161,1.595,5.972L4,28.108l6.335-1.661c1.745,0.952,3.711,1.453,5.711,1.454h0.005c0,0,0,0,0,0c6.586,0,11.947-5.359,11.95-11.946C28.001,12.763,26.759,9.761,24.503,7.503z M16.05,25.883h-0.004c-1.782-0.001-3.53-0.479-5.055-1.384l-0.363-0.215L6.869,25.27l1.003-3.664L7.636,21.23c-0.994-1.581-1.519-3.408-1.519-5.284c0.002-5.475,4.458-9.928,9.936-9.928c2.653,0.001,5.147,1.035,7.022,2.912s2.907,4.371,2.906,7.024C25.98,21.429,21.525,25.883,16.05,25.883z M21.498,18.447c-0.299-0.149-1.767-0.872-2.04-0.971c-0.274-0.1-0.473-0.149-0.672,0.149c-0.199,0.299-0.771,0.971-0.945,1.17c-0.174,0.199-0.348,0.224-0.647,0.075c-0.299-0.149-1.261-0.465-2.401-1.482c-0.888-0.791-1.487-1.769-1.661-2.068c-0.174-0.299-0.019-0.46,0.131-0.609c0.134-0.134,0.299-0.349,0.448-0.523s0.199-0.299,0.299-0.498s0.05-0.374-0.025-0.523s-0.672-1.619-0.921-2.216c-0.242-0.582-0.489-0.503-0.672-0.512c-0.174-0.009-0.373-0.01-0.572-0.01c-0.199,0-0.523,0.075-0.796,0.374s-1.045,1.021-1.045,2.49s1.07,2.889,1.219,3.088s2.105,3.214,5.101,4.507c0.712,0.307,1.269,0.491,1.702,0.629c0.715,0.227,1.366,0.195,1.881,0.118c0.574-0.086,1.767-0.722,2.015-1.419c0.249-0.697,0.249-1.295,0.174-1.419C21.996,18.671,21.797,18.596,21.498,18.447z" />
                                </svg>

                                Contact me
                            </a>
                        </p>




                        <button
                            onClick={handleClose}
                            className="bg-rose-400/90 size-10 md:size-14 absolute top-0 right-0 flex justify-center items-center text-white px-4 py-2 rounded-full hover:bg-rose-600 transition duration-300"
                        >
                            &#x2715;
                        </button>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default MarkPopUpWidget;
