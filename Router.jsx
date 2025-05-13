import Home from "@/pages/Home/Home";
import React from "react";
import { Route, Routes } from "react-router";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;
