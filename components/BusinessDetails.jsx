import React from "react";
import { poppins400, poppins500, poppins600, poppins700 } from "../app/fonts";

const BusinessDetails = ({ business }) => {
  return (
    <div className="lg:border w-full border-bordergray lg:p-[24px] space-y-[22px] py-[22px] lg:rounded-[6px] mt-[16px]">
      <div className="space-y-[8px]">
        <p className={`${poppins500.className} text-[16px] leading-[24px]`}>
          Business Name
        </p>
        <p
          className={`${poppins400.className} border border-bordergray py-[13.5px] px-[16px] rounded-[4px] w-full text-[16px] leading-[24px]`}
        >
          {business.businessName}
        </p>
      </div>

      <div className="space-y-[8px]">
        <p className={`${poppins500.className} text-[16px] leading-[24px]`}>
          Email
        </p>
        <p
          className={`${poppins400.className} border border-bordergray py-[13.5px] px-[16px] rounded-[4px] w-full text-[16px] leading-[24px]`}
        >
          {business.email}
        </p>
      </div>

      <div className="space-y-[8px]">
        <p className={`${poppins500.className} text-[16px] leading-[24px]`}>
          Phone Number
        </p>
        <span className="flex items-center border border-bordergray py-[13.5px] px-[16px] rounded-[4px] w-full  ">
        <p
          className={`${poppins400.className}   text-[14px] leading-[21px]`}
        >
          {business.phoneNumber.slice(0,3)}
        </p>
        <p className="h-5 border ml-6 mr-3"></p>
        <p
          className={`${poppins400.className}  rounded-[4px] w-full text-[14px] leading-[21px]`}
        >
          {business.phoneNumber.slice(3)}
        </p>

        </span>
       
      </div>

      <div className="space-y-[8px]">
        <p className={`${poppins500.className} text-[16px] leading-[24px] `}>
          Business Website
        </p>
        <p
          className={`${poppins400.className} border border-bordergray min-h-[47px]  py-[13.5px] px-[16px] rounded-[4px] text-[14px] leading-[21px]`}
        >
          {business.businessWebsite} 
        </p>
      </div>

      <div className="space-y-[8px] relative">
        <p className={`${poppins500.className} text-[16px] leading-[24px]`}>
          Description
        </p>
        <p
          className={`${poppins400.className} border border-bordergray h-[176px] py-[13.5px] px-[16px] rounded-[4px] w-full text-[16px] leading-[24px] `}
        >
          {business.businessDescription}
        </p>
        <p
          className={`${poppins400.className} absolute right-6 bottom-6 text-textgray`}
        >
          {500 - business.description?.length()}
        </p>
      </div>
    </div>
  );
};

export default BusinessDetails;
