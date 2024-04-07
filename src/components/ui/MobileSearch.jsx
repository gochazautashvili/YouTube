import React from "react";
import { Input } from "./input";
import { FaArrowLeft } from "react-icons/fa";

const MobileSearch = ({ setSearch }) => {
  return (
    <div className="fixed top-5 w-full left-0 right-0 px-6 sm:hidden">
      <FaArrowLeft
        onClick={() => setSearch(false)}
        className="absolute z-10 top-3 left-9 cursor-pointer"
      />
      <Input className="pl-10" />
    </div>
  );
};

export default MobileSearch;
