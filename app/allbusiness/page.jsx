"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SelectedOptionProvider, useSelectedOption } from "../../context/SelectOptionContext";
import Sidebar from "../../components/Sidebar";
import Business from "../../components/Business";
import { useSession } from "next-auth/react";


const Page = () => {
  const { selectedOption } = useSelectedOption();
  const { data: session,status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status=='unauthenticated') {
      router.push("/");
    }
  }, [session, router]);
  return (
    <div className="flex">
    <div className="hidden lg:block">
      <Sidebar />
    </div>
    <div className={`container lg:ml-[20%] rounded-md w-full`}>
      <Business/>
    </div>
    </div>
  );
};

export default Page