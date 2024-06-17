"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { useSelectedOption } from '../context/SelectOptionContext';
import { poppins600, poppins700 } from '../app/fonts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const { selectedOption, setSelectedOption } = useSelectedOption();

  const pathname=usePathname()
  const options = [
    { label: 'All Businesses', route: 'allbusiness' },
  ];

  const handleSelect = (index) => {
    setSelectedOption(index);
  };

  return (
    <div className="fixed w-[90%] top-[60px] flex-col items-center px-[22px] lg:top-[67px] bottom-0 h-full left-0 py-[40px] lg:w-[20%] bg-white">
    <div className='w-full'>
    <h1 className={`${poppins700.className} text-[22px] px-[10px] py-[8px] lg:px-[10px] lg:text-[24px]`}>Getting Started</h1>
      <div className="mt-[26px] flex-col flex lg:space-y-0 w-full">
        {options.map((option, index) => (
            <Link key={option.route}  href={`/${option.route}`} className={`${poppins600.className} lg:text-[12px] leading-[18px] px-[10px] py-[6px] rounded-[4px] cursor-pointer w-full ${pathname.startsWith(`/${option.route}`) ? 'text-cornblue bg-lightcornblue' : 'text-black'}`}
                onClick={() => handleSelect(index)}
              >
                {option.label}
            
            </Link>
        ))}
      </div>
    </div>
     
    </div>
  );
};

export default Sidebar;
