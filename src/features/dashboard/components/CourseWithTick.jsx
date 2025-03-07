import { Check } from "lucide-react";
import React from "react";

const CourseWithTick = ({ title, width = "50%" }) => {
  return (
    <div style={{ width: width }} className="flex gap-2 items-center">
      <Check size={16} color="blue" className="mt-1" />
      <span className="text-base font-normal">{title}</span>
    </div>
  );
};

export default CourseWithTick;
