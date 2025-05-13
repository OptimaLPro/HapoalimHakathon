import { Component } from "@/components/charts/home-chart";
import React, { useEffect } from "react";
import { HomeCarousel } from "./Home-Carousel";
import CountUp from "react-countup";
import { LiaCoinsSolid } from "react-icons/lia";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

// הגדרה של אנימציה לכל אלמנט
const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut",
    },
  },
});

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col mx-auto items-center mb-10 relative z-0 overflow-hidden">
      <AuroraBackground className="fixed inset-0 -z-10" />

      <Card className="text-white mt-8 w-[88%] p-6 transition-all duration-300 border shadow-xl hover:scale-105 hover:shadow-2xl backdrop-blur-md bg-gradient-to-b from-[#ee171f] to-[#a51014] border-white/30">
        {/* Score */}
        <motion.div
          className="rtl text-center flex flex-col leading-15 mt-10"
          variants={fadeInUp(0)}
          initial="hidden"
          animate="visible"
        >
          <span className="text-[40px] mb-6">שלום נתי!</span>

          <span className="text-[40px] mb-6">ברשותך:</span>
          <span className="text-[90px]">
            <CountUp end={750} duration={2} />
          </span>
          <div className="text-[50px] mt-2 flex items-center justify-center">
            <LiaCoinsSolid className="w-12 h-12" />
            מטבעות
          </div>
        </motion.div>

        {/* Goal chart */}
        <motion.div
          className="rtl text-center flex flex-col leading-15 mt-10"
          variants={fadeInUp(0.6)}
          initial="hidden"
          animate="visible"
        >
          <Component />
        </motion.div>
      </Card>

      {/* Benefits carousel */}
      <motion.div
        className="text-center flex flex-col leading-15 mt-10"
        variants={fadeInUp(1.2)}
        initial="hidden"
        animate="visible"
      >
        <span className="text-[40px] mt-10 rtl text-right">🔥הטבות</span>
        <HomeCarousel />
      </motion.div>
    </div>
  );
};

export default Home;
