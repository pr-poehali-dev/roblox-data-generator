import React from "react";

interface RobuxIconProps {
  size?: number;
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

const RobuxIcon: React.FC<RobuxIconProps> = ({
  size = 40,
  speed = "normal",
  className = "",
}) => {
  const getAnimationDuration = () => {
    switch (speed) {
      case "slow":
        return "3s";
      case "fast":
        return "1s";
      default:
        return "2s";
    }
  };

  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
        animation: `spin ${getAnimationDuration()} linear infinite`,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Основной круг иконки Robux */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="url(#robuxGradient)"
          stroke="#0066CC"
          strokeWidth="2"
        />

        {/* Символ R в стиле Robux */}
        <path
          d="M25 25 L25 75 L45 75 L45 55 L55 75 L70 75 L55 50 L65 50 C70 50 75 45 75 40 L75 35 C75 30 70 25 65 25 L25 25 Z M40 35 L60 35 C62 35 62 40 60 40 L40 40 L40 35 Z"
          fill="white"
        />

        {/* Градиент для иконки */}
        <defs>
          <linearGradient
            id="robuxGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#00A2FF" />
            <stop offset="50%" stopColor="#0066CC" />
            <stop offset="100%" stopColor="#004499" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default RobuxIcon;
