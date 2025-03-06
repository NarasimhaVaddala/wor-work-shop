import React from "react";

export default function CustomInput({
  type = "text",
  label,
  customContainerStyl,
}) {
  return (
    <div className={`w-full ${customContainerStyl}`}>
      <input
        className="outline-none bg-none border focus:border-2 border-gray-400 focus:border-blue-500 w-full h-full p-3 rounded-sm"
        type={type}
        placeholder={label}
      />
    </div>
  );
}
