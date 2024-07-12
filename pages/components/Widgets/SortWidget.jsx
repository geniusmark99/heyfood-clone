import FilterIcon from '../Icons/FilterIcon'

import CustomRadioWidget from './CustomRadioWidget'
import FoodListWidget from './FoodListWidget';


export default function SortWidget(stick) {

    const radioOptions = [
        { label: 'Most Popular', value: 'most_popluar' },
        { label: 'Higest rated', value: 'higest_rated' },
        { label: 'Newest', value: 'newest' },
        { label: 'Most rated', value: 'most_rated' },
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

                        <CustomRadioWidget options={radioOptions} name="customRadio" onChange={handleRadioChange} />

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
