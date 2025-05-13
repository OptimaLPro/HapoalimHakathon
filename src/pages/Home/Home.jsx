import { Component } from "@/components/charts/home-chart";
import React, { useEffect } from "react";
import { HomeCarousel } from "./Home-Carousel";
import CountUp from "react-countup";
import { LiaCoinsSolid } from "react-icons/lia";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col mx-auto items-center mb-10">
      {/* Score */}
      <div className="rtl text-center flex flex-col leading-15 mt-10">
        <span className="text-[40px] mb-6">שלום נתי!</span>
        <span className="text-[40px] mb-6">ברשותך:</span>
        <span className="text-[90px]">
          <CountUp end={750} />
        </span>
        <div className="text-[50px] mt-2 flex items-center justify-center">
          <LiaCoinsSolid className="w-12 h-12" />
          מטבעות
        </div>
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
