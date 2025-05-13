import Home from "@/pages/Home/Home";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import ReelsPage from "@/pages/reelsPage.jsx";
import Settings from "@/pages/Settings/Settings";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reels" element={<ReelsPage />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default Router;
