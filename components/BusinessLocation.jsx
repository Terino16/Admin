import React from 'react'
import { poppins400, poppins500, poppins600, poppins700 } from "../app/fonts"

const BusinessLocation = ({business}) => {
  return (
    <div className=" w-full lg:border border-bordergray lg:p-[24px] space-y-[22px] rounded-[6px] mt-[16px]">
            <div className={`${poppins600.className} text-[20px] leading-[30px]`}>
            Business Location
            </div>

            <div className="lg:flex lg:items-center w-full lg:space-x-[18px] lg:space-y-0 space-y-[18px]">
            <div className=" basis-[50%] space-y-[8px]">
              <p
                className={`${poppins500.className} text-[16px] leading-[24px]`}
              >
                Business Address
              </p>
              <p
                className={`${poppins400.className} border border-bordergray py-[13.5px] px-[16px] rounded-[4px] w-full text-[16px] leading-[24px]`}
              >
                {business.businessAddress.streetAddress}
              </p>
            </div>

            <div className="basis-[50%] space-y-[8px] ">
              <p
                className={`${poppins500.className} text-[16px] leading-[24px]`}
              >
               Apt/Suite/Other (Optional)
              </p>
              <p
                className={`${poppins400.className} border border-bordergray  py-[13.5px] px-[16px] rounded-[4px] w-full text-[16px] leading-[24px] `}
              >
                {business.businessAddress.streetAddress}
              </p>
             
            </div>
            </div>
            <div className="lg:flex lg:items-center w-full lg:space-x-[18px] space-y-[18px] lg:space-y-0">
            <div className="basis-[33%] space-y-[8px]">
              <p
                className={`${poppins500.className} text-[16px] leading-[24px]`}
              >
                City
              </p>
              <p
                className={`${poppins400.className} border border-bordergray py-[13.5px] px-[16px] rounded-[4px] w-full text-[16px] leading-[24px]`}
              >
                  {business.businessAddress.city}
              </p>
            </div>
            <div className=" basis-[33%] space-y-[8px]">
              <p
                className={`${poppins500.className} text-[16px] leading-[24px]`}
              >
               State
              </p>
              <p
                className={`${poppins400.className} border border-bordergray  py-[13.5px] px-[16px] rounded-[4px] w-full text-[16px] leading-[24px] `}
              >
                {business.businessAddress.state}
              </p>
             
            </div>

            <div className=" basis-[33%] space-y-[8px]">
              <p
                className={`${poppins500.className} text-[16px] leading-[24px]`}
              >
               Zipcode
              </p>
              <p
                className={`${poppins400.className} border border-bordergray  py-[13.5px] px-[16px] rounded-[4px] w-full text-[16px] leading-[24px] `}
              >
               {business.businessAddress.zipCode}
              </p>
             
            </div>
            </div>
            </div>
  )
}

export default BusinessLocation