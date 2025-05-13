import { Component } from "@/components/charts/home-chart";
import React from "react";
import { HomeCarousel } from "./Home-Carousel";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col mx-auto items-center mb-10">
      {/* Score */}
      <div className="rtl text-center flex flex-col leading-15 mt-10">
        <span className="text-[40px] mb-6">שלום נתי!</span>
        <span className="text-[40px] mb-6">ברשותך:</span>
        <span className="text-[90px]">235</span>
        <span className="text-[50px] mt-1">נקודות</span>
      </div>
      {/* Goal */}
      <div className="rtl text-center flex flex-col leading-15 mt-10">
        {/* <span className="text-[40px]">יעד</span>
        <span className="text-[30px] mt-1">500 נקודות</span> */}
        <Component />
      </div>
      <div className=" text-center flex flex-col leading-15 mt-10">
        <span className="text-[40px] mt-10 rtl text-right">🔥הטבות</span>
        <HomeCarousel />
      </div>
    </div>
  );
};

export default Home;
