'use client';
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Head from 'next/head';
import BusinessTable from './table';
import { poppins700, poppins400, poppins500, poppins600 } from '../app/fonts';
import Sidebar from "./Sidebar";
import { toast } from "react-toastify";

export default function Business() {
  const { data: session } = useSession();
  console.log(session, "Admin");
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const res = await fetch("/api/business/get-business-list", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();
        if (data.success) {
          setBusinesses(data.businesses);
        } else {
          toast.error(data.error);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    if (session?.user?.email) {
      fetchBusinesses();
    }
  }, [session]);

  const approveBusiness = async (businessUserId) => {
    try {
      const res = await fetch("/api/business/approve-business", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user?.id,
          businessUserId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const errorData = await res.json();
        toast.error(errorData.error);
        return;
      }

      const data = await res.json();

      if (data.success) {
        toast.success(data.message);
        setBusinesses((prev) =>
          prev.filter((business) => business._id !== businessUserId)
        );
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error("Failed to approve business");
    }
  };

  return (
      <main className="flex flex-col bg-gray-100 max-w-[1132px] lg:px-[22px] lg:py-[34px] lg:space-y-[22px]">
        <div className={`${poppins700.className} text-[30px] font-black md:p-[22px] py-[22px] px-[18px] lg:p-0  `}>
          All Businesses
        </div>
        <div className='w-full'>
          <BusinessTable rows={businesses} />
        </div>
      </main>
   
  );
}