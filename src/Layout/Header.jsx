import { Menu } from "lucide-react";
import React from "react";
import SearchBar from "../Utils/SearchBar";
import Button from "../Utils/Button";

const Header = () => {
  return (
    <div className="w-full h-[80px] bg-white shadow-custom px-10 flex items-center justify-around fixed z-20">
      <div className="flex gap-4 items-center">
        <div className="w-[120px] h-[60px] bg-yellow-200"></div>
        <div className="flex h-[45px] bg-blue-300 items-center gap-4 rounded-md px-4">
          <Menu />
          <span>Explore</span>
        </div>
        <SearchBar />
      </div>
      <div className="flex gap-4 items-center">
        <Button title="Sign Up" variant="bg" />
        <Button title="Log In" variant="outline" />
      </div>
    </div>
  );
};

export default Header;
