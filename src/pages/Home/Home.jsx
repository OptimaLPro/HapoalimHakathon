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
            נקודות
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

      <motion.div
        className="text-center flex flex-col mt-14 w-[88%]"
        variants={fadeInUp(0.9)}
        initial="hidden"
        animate="visible"
      >
        <Card className="bg-white/90 backdrop-blur-md p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300  text-right">
          <h3 className="text-xl font-semibold mb-4"> היסטוריית נקודות 📊</h3>
          <div className="space-y-3 text-lg text-muted-foreground">
            <div className="flex justify-between">
              <span className="text-green-600 font-semibold">+200</span>
              <span className="rtl ">12.4.25 מתנה על הרשמה</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-600 font-semibold">+50</span>
              <span className="rtl">18.4.25 החזר על אוכל בחוץ</span>
            </div>
            <div className="flex justify-between">
              <span className="text-red-600 font-semibold">-200</span>
              <span className="rtl">25.4.25 רכישת הטבה: מנוי ChatGPT</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-600 font-semibold">+300</span>
              <span className="rtl">28.4.25 השתתפות באירוע סטודנטים</span>
            </div>
            <div className="flex justify-between border-t pt-3 mt-3 font-bold text-lg ">
              <span>750</span>
              <span>סה"כ נקודות</span>
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div
        className="text-center flex flex-col mt-14 w-[88%]"
        variants={fadeInUp(1.2)}
        initial="hidden"
        animate="visible"
      >
        <Card className="bg-white/90 backdrop-blur-md p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 text-right rtl">
          <h3 className="text-xl font-semibold mb-2">💡 הטיפ היומי</h3>
          <div className="text-lg text-muted-foreground">
            לפני שאתה קונה משהו – תן לו "לילה אחד". ראית אוזניות ב-399 נקודות?
            עזוב, תן לזה לילה. אם מחר אתה עדיין בקטע – תקנה. אם שכחת – הרווחת גם
            נקודות וגם שקט בנשמה. 😌
          </div>
        </Card>
      </motion.div>

      {/* Benefits carousel */}
      <motion.div
        className="text-center flex flex-col leading-15 mt-4"
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
