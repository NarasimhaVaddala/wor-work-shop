import React, { useState } from "react";

const DropdownMenu = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <ul className="bg-white shadow-md rounded-md w-48 absolute top-full left-0">
      {items.map((item, index) => (
        <li
          key={item.title}
          className="relative px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          {item.title}
          {item.subCourses && activeIndex === index && (
            <div className="absolute left-full top-0">
              <DropdownMenu items={item.subCourses} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
