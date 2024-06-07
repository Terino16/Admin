"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SelectedOptionProvider, useSelectedOption } from "../../context/SelectOptionContext";
import Sidebar from "../../components/Sidebar";
import Business from "../../components/Business";
import { useSession } from "next-auth/react";
import Profile from "../../components/profile.jsx";

const Content = () => {
  const { selectedOption } = useSelectedOption();
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, [session, router]);

  const renderContent = () => {
    switch (selectedOption) {
      case 0:
        return <Business />;
      case 1:
        return <Profile />;
      default:
        return <Business />;
    }
  };

  return (
    <div className="w-full lg:ml-[20%] xl:ml-[18%]">{renderContent()}</div>
  );
};

const Page = () => {
  return (
    <div className="flex">
      <div className="hidden lg:block border-r border-red-500">
        <Sidebar />
      </div>
      <Content />
    </div>
  );
};

export default Page;
