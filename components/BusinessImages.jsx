/* eslint-disable @next/next/no-img-element */
import React from "react";
import { poppins400, poppins500, poppins600, poppins700 } from "../app/fonts";

const BusinessImages = ({ business }) => {
  //console.log(business);
  return (
    <div className="lg:border w-full border-bordergray lg:p-[24px] space-y-[22px] rounded-[6px] mt-[16px]">
      <p className={`${poppins600.className} text-[14px] leading-[24px]`}>
        Gallery
      </p>
      <div className="flex flex-wrap lg:justify-start justify-between">
        {business.businessImages.map((image) => {
          return (
            <img
              key={image._id}
              src={image.imageUrl}
              alt={image.altText || "Image"}
              className="mr-[12px] mb-[12px] lg:h-[124px] lg:w-[124px] h-[177px] w-[177px]"
            />
          );
        })}
      </div>
    </div>
  );
};

export default BusinessImages;
