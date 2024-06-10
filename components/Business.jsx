'use client';
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Head from 'next/head';
import BusinessTable from './table';
import { poppins700,poppins400,poppins500,poppins600 } from '../app/fonts';


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
    <div>
      <Head>
        <title>Business Table</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col bg-gray-100 px-2">
        <div className={`${poppins700.className} mt-7 mb-6 text-[40px] font-black`}>
            All Businesses
        </div>
        <div className='w-full lg:pr-6'>
         <BusinessTable rows={businesses} />
        </div>
        
      </main>
    </div>
  );
}