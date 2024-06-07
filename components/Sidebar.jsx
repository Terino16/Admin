import React from 'react';
import { useSelectedOption } from '../context/SelectOptionContext';
import { poppins600,poppins700 } from '../app/fonts';

const Sidebar = () => {
  const { selectedOption, setSelectedOption } = useSelectedOption();

  const options = [
    'All Buisnesses',
    'Proflie',
  ];

  const handleSelect = (index) => {
    setSelectedOption(index);
    // console.log("SideBax", index);
  };

  return (
    
    <div className="fixed w-[90%] top-[60px] flex-col items-center px-[22px] lg:top-[75px] bottom-0 h-full left-0 py-[40px]  lg:w-[18%]   bg-white">
      <h1 className={`${poppins700.className}  text-[22px] px-[10px] py-[8px] lg:p-0    lg:text-[24px]`}>Admin Panel</h1>
      <ul className=" mt-[26px]   lg:space-y-0  ">
        {options.map((option, index) => (
          <li
            key={option}
            className={`${poppins600.className} lg:text-[12px] leading-[18px] px-[10px] py-[6px] rounded-[4px] cursor-pointer ${selectedOption === index ? 'text-cornblue bg-lightcornblue' : 'text-black'}`}
            onClick={() => handleSelect(index)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>

  );
};

export default Sidebar;