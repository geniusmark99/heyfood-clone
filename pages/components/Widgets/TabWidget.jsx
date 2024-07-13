'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ButtonWidget from './ButtonWidget';
import RestaurantWidget from './RestaurantWidget';
import GroceryWidget from './GroceryWidget';
import GroceryIcon from '../Icons/GroceryIcon';
import { fetchRestaurants, fetchTags } from '../../../services/api';
import RestarantSpoonsIcon from '../Icons/RestarantSpoonsIcon';



const TabWidget = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [restaurants, setRestaurants] = useState([]);
    const [tags, setTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [sortParam, setSortParam] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [location, setLocation] = useState({ latitude: '', longitude: '' });

    const tabs = [{ name: "Restaurants", icon: <RestarantSpoonsIcon className="size-5" /> }, { name: "Grocery", icon: <GroceryIcon className="size-5" /> }];

    const tabContent = [
        { id: 0, content: <RestaurantWidget /> },
        { id: 1, content: <GroceryWidget /> },
    ];

    // useEffect(() => {
    //     fetchTags().then(setTags);
    // }, []);

    return (
        <motion.div
            className="bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >

            <div className='border-none md:border-b md:shadow-sm py-3 md:px-10 items-center gap-x-3 flex px-3 justify-around md:justify-start'>

                {tabs.map((tab, index) => (
                    <ButtonWidget key={index} onClick={() => setActiveTab(index)}
                        className={`transition-all outset-none 
                        flex w-full md:w-auto items-center justify-center gap-x-3 rounded-full py-4 px-6
                          ${activeTab === index
                                ? "bg-black  text-white *:fill-white"
                                : "bg-transparent text-black *:fill-black hover:bg-gray-100/70"
                            }`}>
                        {tab.icon}

                        <span className='text-sm md:text-[18px] font-semibold tracking-tight'>{tab.name}</span>
                    </ButtonWidget>
                ))}
            </div>

            <div className="pt-4 mb-10 md:px-10">
                <AnimatePresence>
                    {tabContent.map(
                        ({ id, content }) =>
                            activeTab === id && (
                                <motion.div
                                    key={id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {content}
                                </motion.div>
                            )
                    )}
                </AnimatePresence>
            </div>

        </motion.div>
    );
};

export default TabWidget;
