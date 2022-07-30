import { MouseEvent } from "react";

export type ButtonProps = {
  type?: "primary" | "secondary" | "ternary";
  // submit?: boolean;
  label?: string;
  children?: JSX.Element;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
};

export const Button = ({
  type = "primary",
  label,
  children,
  onClick,
}: ButtonProps) =>
  // submit = false,
  {
    const handleOnClick = (e: MouseEvent<HTMLElement>) => {
      if (!onClick) return;
      onClick(e);
    };

    const handleButtonType = () => {
      switch (type) {
        case "primary":
          return `bg-green-400 hover:bg-green-500 text-white`;
        case "secondary":
          return `bg-white text-gray-500`;
        case "ternary":
          return `bg-white text-green-500`;
        default:
          return `bg-green-400 hover:bg-green-500 text-white`;
      }
    };

    return (
      <button
        type="button"
        className={`
        inline-flex justify-center items-center text-xs font-semibold rounded transition-all duration-300 px-2 bg-green-400 uppercase
        ${handleButtonType()}
      `}
        onClick={handleOnClick}
      >
        {children} {label && <span className="mx-1">{label}</span>}
      </button>
    );
  };
