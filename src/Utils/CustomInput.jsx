import React from "react";

export default function CustomInput({
  type = "text",
  label,
  customContainerStyl,
  error,
  ...props
}) {
  return (
    <div className={`w-full ${customContainerStyl}`}>
      <input
        type={type}
        className={`outline-none bg-none border focus:border-2 w-full h-full p-3 rounded-sm 
          ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-gray-400 focus:border-blue-500"
          }`}
        placeholder={label}
        {...props}
      />

      {error && (
        <span className="text-sm text-red-500 mt-1 block">
          {error?.message}
        </span>
      )}
    </div>
  );
}
