import Home from "@/pages/Home/Home";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import ReelsPage from "@/pages/reelsPage.jsx";

const Router = () => {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reels" element={<ReelsPage />} />
    </Routes>
  );
};

export default Router;
