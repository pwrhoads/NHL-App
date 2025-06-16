interface ButtonProps {
  label: string;
  onClick?: () => void | Promise<void>;
  className?: string;
}

const Button = ({ label, onClick, className = "" }: ButtonProps) => {
  const buttonStyle = "px-4 py-2 rounded-md border";
  return (
    <button onClick={onClick} className={`${buttonStyle} ${className}`}>
      {label}
    </button>
  );
};

export default Button;
