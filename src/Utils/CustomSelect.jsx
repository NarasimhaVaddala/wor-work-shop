import React from "react";

const CustomSelect = ({ label, options, error, ...props }) => {
  return (
    <div className="w-full">
      <div className="relative">
        <select
          className={`outline-none bg-none border focus:border-2 w-full h-full p-3 rounded-sm appearance-none ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-gray-400 focus:border-blue-500"
          }`}
          {...props}
        >
          <option value="" hidden>
            Select {label}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {/* Dropdown Icon */}
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <svg
            className={`w-4 h-4 ${error ? "text-red-500" : "text-gray-400"}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default CustomSelect;
