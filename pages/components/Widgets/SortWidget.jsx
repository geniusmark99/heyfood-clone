import { useState } from 'react';
import FilterIcon from '../Icons/FilterIcon'
import FoodListWidget from './FoodListWidget';


export default function SortWidget(stick) {

    const [selectedValue, setSelectedValue] = useState('most_popular');

    const radioOptions = [
        { label: 'Most Popular', value: 'most_popluar', name: 'most_popular' },
        { label: 'Higest rated', value: 'higest_rated', name: 'higest_rated' },
        { label: 'Newest', value: 'newest', name: 'newest' },
        { label: 'Most rated', value: 'most_rated', name: 'most_rated' },
    ];

    const handleRadioChange = (value) => {
        console.log('Selected value:', value);
    };




    return (
        <div className='flex md:gap-x-3 lg:gap-x-5 mx-2 sm:mx-10 md:mx-12 lg:mx-12 relative'>
            <div className={`hidden md:flex md:w-4/12 lg:w-3/12 sticky top-10 `}>
                <div>
                    <h1 className='md:text-2xl font-semibold text-gray-900'>All Stores</h1>
                    <p className='text-gray-600 mt-3 text-lg'>(478 Stores)</p>
                    <ul className='mt-5 flex flex-col gap-y-4'>
                        <li className='flex items-center gap-x-2'>
                            <FilterIcon className="size-6" />
                            <span className='font-semibold text-xl md:text-2xl'>Sort</span>
                        </li>

                        <li className='space-y-4'>
                            {radioOptions.map((option) => (

                                <label htmlFor={option.name} key={option.value} className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name={option.name}
                                        value={option.value}
                                        id={option.name}
                                        checked={selectedValue === option.value}
                                        onChange={() => handleRadioChange(option.value)}
                                        className="hidden"
                                    />
                                    <div
                                        className={`size-4 transition-all    border-2 rounded-full flex items-center justify-center ${selectedValue === option.value ? 'bg-black border-black' : 'border-gray-400'
                                            }`}
                                    >
                                        {selectedValue === option.value && (
                                            <div className="size-2 transition-all    bg-white rounded-full"></div>
                                        )}
                                    </div>
                                    <span className="ml-2 text-gray-700">{option.label}</span>
                                </label>

                            ))}
                        </li>
                        {/* <CustomRadioWidget options={radioOptions} onChange={handleRadioChange} /> */}

                    </ul>
                </div>
            </div>
            <div className='w-full md:w-8/12 lg:w-9/12 flex flex-col gap-y-40 lg:gap-y-52'>
                <FoodListWidget FoodTypeDesc={"Promos 4 You! 😍"} />
                <FoodListWidget FoodTypeDesc={"Hand Picked for you!😋"} />
                <FoodListWidget FoodTypeDesc={"Amala Hotspot 🔥"} />
            </div>

        </div>
    )
}
