import React from "react";

const FilterLeftCard = () => {
  return (
    <div className="w-[350px] h-fit border p-6 flex flex-col gap-3">
      <div className="flex justify-between items-center border-b border-gray-200 py-2">
        <span className="text-base font-semibold">Filters</span>
        <button className="text-blue-400 font-semibold">Clear All</button>
      </div>
      <div className="flex flex-col gap-3 py-4">
        <span className="text-base font-semibold">Categories</span>
        <div className="w-full flex justify-between items-center">
          <div className="w-[85%] flex items-center gap-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-[17px] h-[17px]"
            />
            <span>AI & ML Learning</span>
          </div>
          <span>4</span>
        </div>
      </div>
      {/* course duration */}
      <div className="flex flex-col gap-3 py-4">
        <span className="text-base font-semibold">Course Duration</span>
        <div className="w-full flex justify-between items-center">
          <div className="w-[85%] flex items-center gap-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-[17px] h-[17px]"
            />
            <span>0-3 Hours</span>
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="w-[85%] flex items-center gap-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-[17px] h-[17px]"
            />
            <span>3-6 Hours</span>
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="w-[85%] flex items-center gap-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-[17px] h-[17px]"
            />
            <span>6-9 Hours</span>
          </div>
        </div>
      </div>
      {/* sorted by */}
      <div className="flex flex-col gap-3 py-4">
        <span className="text-base font-semibold">Sort By</span>
        <div className="w-full flex justify-between items-center">
          <div className="w-[85%] flex items-center gap-2">
            <input type="radio" name="" id="" className="w-[17px] h-[17px]" />
            <span>Recently Launched</span>
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="w-[85%] flex items-center gap-2">
            <input type="radio" name="" id="" className="w-[17px] h-[17px]" />
            <span>Rating - High to Low</span>
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="w-[85%] flex items-center gap-2">
            <input type="radio" name="" id="" className="w-[17px] h-[17px]" />
            <span>Popular Courses</span>
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="w-[85%] flex items-center gap-2">
            <input type="radio" name="" id="" className="w-[17px] h-[17px]" />
            <span>Relevance</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterLeftCard;
