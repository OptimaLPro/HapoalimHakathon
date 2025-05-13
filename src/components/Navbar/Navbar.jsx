import {
  BriefcaseBusiness,
  ChartSpline,
  Home,
  LucideSearch,
  Settings,
  Telescope,
} from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="sticky bottom-0 left-0 right-0 flex items-center justify-around bg-gray-200 p-4">
      <Link to="/">
        <div>
          <Home />
        </div>
      </Link>
      <Link to="/business">
        <div>
          <BriefcaseBusiness />
        </div>
      </Link>
      <Link to="/reels">
        <div>
          <LucideSearch />
        </div>
      </Link>
      <Link to="/analysis">
        <div>
          <ChartSpline />
        </div>
      </Link>
      <Link to="/settings">
        <div>
          <Settings />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
