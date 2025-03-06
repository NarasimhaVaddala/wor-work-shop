import React from "react";

const WhoShouldLearnCard = ({ title = "Software Engineer" }) => {
  return (
    <div className="px-6 py-2 bg-[#f3f3f3] border border-[#d2d6de] rounded-full">
      {title}
    </div>
  );
};

export default WhoShouldLearnCard;
