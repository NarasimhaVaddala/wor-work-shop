import { Star } from "lucide-react";
import React from "react";
import CourseWithTick from "./CourseWithTick";

const FilterCard = () => {
  return (
    <div className="w-full  rounded-md shadow-custom">
      <div className="w-full p-6 border-b border-gray-300 flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <span className="text-base text-green-600 font-semibold">FREE</span>
          <span className="text-xl font-medium">Software Development</span>
          <div className="flex flex-col gap-2">
            <div className=" flex justify-between items-center ">
              <div className="flex items-center gap-2">
                <span>4.5</span>
                <Star size={15} />
              </div>
              <span>77k leaners</span>
              <span>6 hrs</span>
            </div>
            <CourseWithTick width="300px" title="Completion Certificate" />
          </div>
        </div>
        <img className="w-[180px] h-[120px] bg-red-300 rounded-md" />
      </div>
      <div className="w-full flex justify-between items-center py-2">
        <span className="w-1/2 flex justify-center items-center border-r border-gray-400 text-sm">
          View Course
        </span>
        <span className="w-1/2 flex justify-center items-center text-sm">
          Start Couse
        </span>
      </div>
    </div>
  );
};

export default FilterCard;
