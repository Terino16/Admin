"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { poppins400, poppins500, poppins600, poppins700 } from "../../fonts";
import BusinessLocation from "../../../components/BusinessLocation";
import BusinessDetails from "../../../components/BusinessDetails";
import BusinessImages from "../../../components/BusinessImages";
import BusinessHours from "../../../components/BusinessHours";
import Sidebar from "../../../components/Sidebar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const categories = [
  { id: 1, name: "Restaurant" },
  { id: 2, name: "Coffee Shop" },
  { id: 3, name: "Bar" },
  { id: 4, name: "Bakery" },
  { id: 5, name: "Retail Store" },
  { id: 6, name: "Spa/Wellness" },
  { id: 7, name: "Fitness/Gym" },
  { id: 8, name: "Grocery Store" },
  { id: 9, name: "Other" },
];

const BusinessDetailPage = () => {
  const [business, setBusiness] = useState(null);
  const [error, setError] = useState(null);
  const [approve, setApprove] = useState(false);

  const { _id } = useParams();

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        const res = await fetch(`/api/business/get-business`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ _id: _id }),
        });

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const { business, success, error } = await res.json();

        if (!success) {
          throw new Error(error || "Failed to fetch");
        }
        console.log(business.businessCategories);
        setBusiness(business);
        setApprove(business.isProfileApproved);
      } catch (error) {
        setError(error.message);
      }
    };

    if (_id) {
      fetchBusiness();
    }
  }, [_id]);

  const handleApprovalChange = async (status) => {
    try {
      const res = await fetch(`/api/business/approve-business`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({businessUserId: _id, approve: status }),
      });

      if (!res.ok) {
        throw new Error("Failed to update approval status");
      }

      const { success, error } = await res.json();

      if (!success) {
        throw new Error(error || "Failed to update approval status");
      }

      setApprove(status);
    } catch (error) {
      setError(error.message);
    }
  };

  const isCategoryChecked = (categoryName) => {
    return business?.businessCategories?.some(b => b.categoryName === categoryName);
  };
  
  if (error) {
    return (
      <div className={`container mx-auto p-4 ${poppins400.className}`}>
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  if (!business) {
    return (
      <div className={`container mx-auto p-4 ${poppins400.className}`}>
        <div className="text-gray-700">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div
        className={`lg:py-[32px] lg:px-[22px] p-[22px] overflow-hidden lg:ml-[20%] rounded-md w-full`}
      >
        <div className="flex lg:flex-row lg:items-center items-start flex-col lg:justify-between  ">
          <span className="flex items-center space-x-[14px]">
            <button
              onClick={() => {
                window.location.href = "/allbusiness";
              }}
            >
              <ArrowBackIcon />
            </button>
            <p className={`${poppins700.className} text-[30px] leading-[45px] `}>
              Business Details
            </p>
          </span>
          <span className="space-x-[20px] lg:block hidden">
            <button
              className={`${
                poppins600.className
              } text-[14px] leading-[21px] rounded-[5px] border ${
                approve ? "text-lightgray" : "text-black"
              } border-bordergray px-[18px] py-[8px]`}
              onClick={() => handleApprovalChange(true)}
            >
              Approve
            </button>
            <button
              className={`${
                poppins600.className
              } text-[14px] leading-[21px] rounded-[5px] border border-bordergray px-[18px] py-[8px] ${
                !approve ? "text-lightgray" : "text-black"
              }`}
              onClick={() => handleApprovalChange(false)}
            >
              Disapprove
            </button>
            <button
              className={`${poppins400.className} text-[14px] leading-[15px] rounded-[20px] text-green-600 bg-green-100 p-[8px]`}
            >
              {approve ? "Approved" : "Not Approved"}
            </button>
          </span>
        </div>

        <div className="grid lg:grid-flow-col grid-flow-row lg:grid-cols-7 w-full  space-x-[30px] items-start">
          <div className="w-full col-span-4">
            <BusinessDetails business={business} />
            <BusinessLocation business={business} />
            <BusinessHours business={business} />
            <BusinessImages business={business} />
          </div>

          <div className="lg:border lg:col-span-3 items-start  border-bordergray rounded-[6px] lg:mt-[16px]">
            <p
              className={`${poppins500.className} text-[16px] lg:p-[24px] leading-[24px]`}
            >
              Categories & Service Area
            </p>
            <hr className="w-full hidden lg:block text-bordergray"></hr>
            <div className="p-[24px] space-y-[10px] flex flex-col">
              {categories.map((cat) => (
                <label
                  key={cat.id}
                  className={`${poppins400.className} text-[14px] leading-[21px] flex items-center`}
                >
                  <input 
                    type="checkbox" 
                    className="mr-2  rounded-[4px] w-[18px] h-[18px] accent-tealblue"
                    checked={isCategoryChecked(cat.name)}
                    readOnly 
                  />
                  {cat.name}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetailPage;
