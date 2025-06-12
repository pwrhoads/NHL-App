import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

type ArrowDirection = "left" | "right";

interface ArrowButtonProps {
  direction: ArrowDirection;
  onClick: () => void;
}

const ArrowButton = ({ direction, onClick }: ArrowButtonProps) => {
  const Icon = direction === "left" ? FiArrowLeft : FiArrowRight;

  return (
    <button
      onClick={onClick}
      className="p-2 rounded hover:bg-white/10 transition"
    >
      <Icon size={20} />
    </button>
  );
};

export default ArrowButton;
