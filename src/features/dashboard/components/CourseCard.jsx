import { Star } from "lucide-react";
import React from "react";

const CourseCard = () => {
  return (
    <div className="w-[250px] h-[350px] bg-red-300 rounded-md overflow-hidden">
      <img className="w-full h-[175px] bg-yellow-300" />
      <div className="w-full h-[175px] bg-white flex flex-col gap-2 p-4 justify-around">
        <div>
          <span>Intermediate</span>
          <h3 className="text-lg font-medium">Blockchain Developer</h3>
        </div>
        <div className="flex flex-col gap-2">
          <div className=" flex justify-between items-center ">
            <div className="flex items-center gap-2">
              <span>4.5</span>
              <Star size={15} />
            </div>
            <span>77k leaners</span>
            <span>6 hrs</span>
          </div>
          <span className="text-green-700 font-semibold">FREE</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
