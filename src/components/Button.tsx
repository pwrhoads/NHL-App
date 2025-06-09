import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void | Promise<void>;
}

const Button = ({ label, onClick }: ButtonProps) => {
  const buttonStyle = "bg-amber-400 ml-10";
  return (
    <button onClick={onClick} className={buttonStyle}>
      {label}
    </button>
  );
};

export default Button;
