import { Menu } from "lucide-react";
import React, { useState } from "react";
import SearchBar from "../Utils/SearchBar";
import Button from "../Utils/Button";

import DropdownMenu from "./DropdownMenu";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    title: "Web Development",
    subCourses: [
      {
        title: "Frontend",
        subCourses: [{ title: "React.js" }, { title: "Vue.js" }],
      },
      {
        title: "Backend",
        subCourses: [{ title: "Node.js" }, { title: "Django" }],
      },
    ],
  },
  {
    title: "Data Science",
    subCourses: [{ title: "Python" }, { title: "Machine Learning" }],
  },
];

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();


  return (
    <div className="w-full h-[80px] bg-white shadow-custom px-10 flex items-center justify-around fixed z-20">
      <div className="flex gap-4 items-center relative">
        <div className="w-[120px] h-[60px] bg-yellow-200"></div>
        <div
          className="flex h-[45px] bg-blue-300 items-center gap-4 rounded-md px-4 relative cursor-pointer"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <Menu />
          <span>Explore</span>
          {showDropdown && <DropdownMenu items={courses} />}
        </div>
        <SearchBar />
      </div>
      <div className="flex gap-4 items-center">
        <Button
          title="Sign Up"
          variant="bg"
          onclick={() => navigate("/signup")}
        />
        <Button
          title="Log In"
          variant="outline"
          onclick={() => navigate("/signup")}
        />
      </div>
    </div>
  );
};

export default Header;
