import { useState } from 'react';

const CustomRadioWidget = ({ options, name, onChange }) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (value) => {
        setSelectedValue(value);
        onChange(value);
    };

    return (
        <li className='space-y-4'>
            {options.map((option) => (

                <label key={option.value} className="flex items-center cursor-pointer">
                    <input
                        type="radio"
                        name={name}
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={() => handleChange(option.value)}
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

    );
};

export default CustomRadioWidget;
