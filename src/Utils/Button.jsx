import React from "react";

const Button = ({ title, variant = "bg", onclick, customBtnStyles }) => {
  const buttonStyles =
    variant === "bg"
      ? "bg-blue-500 text-white border-transparent" // Background with text color
      : "bg-transparent border-2 border-blue-500 text-blue-500"; // Outline with border and text color

  return (
    <button
      onClick={onclick}
      className={`h-[40px] px-4 rounded-md ${buttonStyles} ${customBtnStyles}`}
    >
      {title}
    </button>
  );
};

export default Button;
