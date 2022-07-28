// import { MouseEvent } from "react";

export type ButtonProps = {
  type?: "primary" | "secondary";
  // submit?: boolean;
  label?: string;
  // icon?: "left" | "right";
  // disabled?: boolean;
  // onClick?: (e: MouseEvent<HTMLElement>) => void;
};

export const Button = ({ type = "primary", label }: ButtonProps) =>
  // submit = false,
  // icon,
  // disabled = false,
  // onClick,
  {
    const handleOnClick = (/* e: MouseEvent<HTMLElement> */) => {
      // if (disabled || !onClick) return;
      // onClick(e);
      console.log("Click !");
    };

    const handleButtonType = () => {
      switch (type) {
        case "primary":
          return `bg-green-400 hover:bg-green-500 text-white`;
        case "secondary":
          return `bg-white border border-blue-500 border-2 text-blue-500 hover:text-blue-600 hover:border-blue-600`;
        default:
          return `bg-red-300 hover:bg-red-500 text-white`;
      }
    };

    return (
      <button
        type="button"
        className={`
        inline-flex justify-center items-center text-xs font-semibold rounded transition-all duration-300 px-4 py-2 bg-green-400 uppercase
        ${handleButtonType()}
      `}
        // disabled={disabled || false}
        onClick={handleOnClick}
      >
        {label}
      </button>
    );
  };
