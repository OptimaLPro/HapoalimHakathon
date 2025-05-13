import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-center gap-2 bg-gray-200 p-4">
      <div className="text-3xl">בנק הפועלים</div>
      <div>
        <img className="h-7" src={"./favicon.png"} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
