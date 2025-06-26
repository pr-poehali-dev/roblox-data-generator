import React from "react";
import RobuxIcon from "./RobuxIcon";

interface RobuxSpinnerProps {
  text?: string;
  size?: "small" | "medium" | "large";
  showText?: boolean;
}

const RobuxSpinner: React.FC<RobuxSpinnerProps> = ({
  text = "Генерирую Robux...",
  size = "medium",
  showText = true,
}) => {
  const getSizeValue = () => {
    switch (size) {
      case "small":
        return 32;
      case "large":
        return 64;
      default:
        return 48;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <RobuxIcon
        size={getSizeValue()}
        speed="normal"
        className="drop-shadow-lg"
      />
      {showText && (
        <p className="text-roblox-blue font-semibold text-lg animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
};

export default RobuxSpinner;
