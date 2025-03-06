import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="w-[350px] h-[45px] border border-gray-300 rounded-md flex items-center gap-4 px-4 overflow-hidden">
      <Search size={15} />
      <input
        type="text"
        className="w-[92%] h-full outline-none border-none"
        placeholder="What do you want to learn today?"
      />
    </div>
  );
};

export default SearchBar;
