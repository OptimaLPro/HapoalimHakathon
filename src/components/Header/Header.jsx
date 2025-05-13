import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <Link
      to="/"
      className="sticky top-0 z-10 w-full flex items-center justify-center gap-2 bg-gray-200 p-4"
    >
      <div className="text-3xl">בנק הפועלים</div>
      <div>
        <img className="h-7" src={"./favicon.png"} alt="logo" />
      </div>
    </Link>
  );
};

export default Header;
