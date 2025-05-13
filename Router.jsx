import Home from "@/pages/Home/Home";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import ReelsPage from "@/pages/reelsPage.jsx";
import Settings from "@/pages/Settings/Settings";
import JobSearchPage from "@/pages/JobSearchPage.jsx";
import FinancialRecommendationsPage from "@/pages/FinancialRecommendationsPage.jsx";
import Deals from "@/pages/Deals/Deals";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/reels" element={<ReelsPage />} />
      <Route path="/jobs" element={<JobSearchPage />} />
      <Route path="/deals" element={<Deals />} />
      <Route
        path="/recommendations"
        element={<FinancialRecommendationsPage />}
      />
    </Routes>
  );
};

export default Router;
