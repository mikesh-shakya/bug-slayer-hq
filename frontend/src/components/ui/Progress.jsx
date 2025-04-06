import React from "react";

const Progress = ({ value }) => {
  return (
    <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-green-600 transition-all duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export { Progress };
