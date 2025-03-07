import React from "react";
import FilterCard from "../components/FilterCard";
import FilterLeftCard from "../components/FilterLeftCard";

const FilterScreen = () => {
  return (
    <div className="w-full p-6 flex gap-4">
      <FilterLeftCard />
      <div className="w-[calc(100%-350px)] flex flex-col gap-4">
        <FilterCard />
        <FilterCard />
        <FilterCard />
        <FilterCard />
        <FilterCard />
        <FilterCard />
      </div>
    </div>
  );
};

export default FilterScreen;
