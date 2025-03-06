import { Check } from "lucide-react";
import React from "react";

const CourseWithTick = ({ title }) => {
  return (
    <div className="flex gap-2 items-center w-1/2">
      <Check size={16} color="blue" className="mt-1" />
      <span className="text-base font-normal">{title}</span>
    </div>
  );
};

export default CourseWithTick;
