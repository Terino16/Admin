import React from "react";
import { poppins400, poppins500, poppins600, poppins700 } from "../app/fonts";

const BusinessHours = ({ business }) => {
  return (
    <div className="mb-4 mt-6 md:border border-bordergray rounded-md md:p-6 px-2 py-6">
      <h2 className={`text-[20px] ${poppins600.className}`}>Business Hours</h2>
      {business.businessHours && Object.keys(business.businessHours).length > 0 ? (
        <div className="mt-6">
          {Object.keys(business.businessHours).map((day) => {
            if (day !== "createdAt" && day !== "updatedAt" && day !== "_id") {
              const hours = business.businessHours[day];
              const hasTimings = hours.open.some((openTime) => openTime !== "") || hours.close.some((closeTime) => closeTime !== "");

              if (!hasTimings && !hours.is24Hours && !hours.isClosed) {
                return (
                  <div key={day} className="mb-6">
                    <div className="flex flex-row" style={{ width: '590px'}}>
                      <div className={`text-[14px] ${poppins500.className} mb-6 w-[160px] md:w-[260px]`}>
                        {day.charAt(0).toUpperCase() + day.slice(1)}
                      </div>
                      <div className={`text-[14px] ${poppins400.className} mb-6 flex flex-col`}>
                        <div>No timings available</div>
                      </div>
                      <div className={`text-[14px] ${poppins400.className} mb-6`}>
                        {hours.is24Hours && "Open 24 hours"}
                        {hours.isClosed && "Closed"}
                      </div>
                    </div>
                  </div>
                );
              }

              const times = hours.open.map((openTime, index) => {
                const closeTime = hours.close[index];
                if (openTime === "" && closeTime === "") {
                  return "No timings available";
                }
                return `${openTime} - ${closeTime}`;
              });

              return (
                <div key={day} className="mb-6">
                  <div className="flex flex-row" style={{ width: '590px'}}>
                    <div className={`text-[14px] ${poppins500.className} mb-6 w-[160px] md:w-[260px]`}>
                      {day.charAt(0).toUpperCase() + day.slice(1)}
                    </div>
                    <div className={`text-[14px] ${poppins400.className} mb-6 flex flex-col`}>
                      {!hours.is24Hours && !hours.isClosed && times.map((time, index) => (
                        <div key={index}>{time}</div>
                      ))}
                    </div>
                    <div className={`text-[14px] ${poppins400.className} mb-6`}>
                      {hours.is24Hours && "Open 24 hours"}
                      {hours.isClosed && "Closed"}
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      ) : (
        <p className={`text-gray-600 ${poppins400.className} text-[20px]`}>
          No business hours available
        </p>
      )}
    </div>
  );
};

export default BusinessHours;
