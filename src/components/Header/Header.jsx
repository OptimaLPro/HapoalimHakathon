import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <Link
      to="/"
      className="sticky top-0 z-10 w-full flex items-center justify-center gap-2 bg-gradient-to-b from-gray-200 to-gray-300 p-4"
    >
      <div className="text-3xl">פועלים צוברים</div>
      <div>
        <img className="h-9" src={"./newlogo.png"} alt="logo" />
      </div>
    </Link>
  );
};

export default Header;
