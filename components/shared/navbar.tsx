import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center bg-emerald-200 h-16 items-center border-b-0 border-emerald-100 shadow-emerald-100 shadow-lg text-emerald-900">
      <div className="max-w-screen-lg w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] flex justify-between p-4">
        <div className="text-xl font-sans font-semibold">Question Papers</div>
      </div>
    </div>
  );
};

export default Navbar;
