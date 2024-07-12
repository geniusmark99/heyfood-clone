import { useState } from "react";
import { motion } from 'framer-motion';
import SearchIcon from "../Icons/SearchIcon";
import SpoonIcon from "../Icons/SpoonIcon";


export default function SearchWidget({ className, props }) {

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const FoodLists = [
        { name: "Chicken", id: 0 },
        { name: "Juice", id: 1 },
        { name: "Shawarma", id: 2 },
        { name: "Amala", id: 3 },
        { name: "FastFood", id: 4 },
        { name: "Goat Meat", id: 5 },
        { name: "Grills", id: 6 },
        { name: "Soup bowl", id: 7 },
        { name: "Grocery", id: 8 },
        { name: "Burger", id: 9 },
        { name: "Snacks", id: 10 },
    ];

    return (
        <form className={`${className} w-full form relative`} id="search-form"
            {...props}
        >

            <div className="flex items-center gap-x-3 w-full">

                <button type="button" className={`${isFocused ? 'flex md:hidden' : 'hidden'}`} onClick={handleBlur}>
                    &#x2715;
                </button>
                <div className="flex relative items-center w-full bg-gray-200 py-1 px-5 rounded-full border shadow-sm">
                    <div>
                        <SearchIcon className="size-4" />
                    </div>

                    <input
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        className="bg-gray-200 ml-2 w-full md:w-[300px] placeholder:text-gray-500 outset-none text-sm pt-1.5 px-0 pb-2" placeholder="Search restaurants or food" />


                </div>
            </div>


            {isFocused && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 right-0 mt-1 w-full bg-white overflow-hidden shadow-lg rounded-md border border-gray-200 py-2"
                >
                    <ul className="flex flex-col gap-y-4 h-[350px] md:h-[400px] overflow-y-auto">
                        <h1 className="text-xl md:text-2xl font-semibold p-4">Catergories</h1>
                        <li className="hover:bg-gray-100/50 mt-5 border-b shadow-sm py-2 px-4 flex items-center justify-start gap-x-4">
                            <SpoonIcon className="fill-black size-10" />
                            <span className="text-xl md:text-xl font-semibold">Rice</span>
                        </li>
                        {
                            FoodLists.map((foodname) => (
                                <li key={foodname.id} className="hover:bg-gray-100/50 border-b shadow-sm py-2 px-4 flex items-center justify-start gap-x-4">
                                    <SpoonIcon className="fill-black size-10" />
                                    <span className="text-xl md:text-xl font-semibold">{foodname.name}</span>
                                </li>
                            ))
                        }

                    </ul>
                </motion.div>
            )}

        </form>

    )
}
