import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "default",
}) => {
  const baseClasses =
    "px-4 py-2 rounded-xl font-medium transition-all duration-200";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-100",
    ghost: "text-blue-600 hover:bg-blue-100",
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseClasses} ${variants[variant] || variants.default}`}
    >
      {children}
    </button>
  );
};

export { Button };
