import { HTMLAttributes } from "react";

type TextPossibleTypes =
  | "custom" // Should be used in very rare cases
  | "mainTitle"
  | "cardTitle"
  | "bodyRegularText"
  | "bodyRegularTextBold";

export type TextProps = {
  children: React.ReactNode;
  type: TextPossibleTypes;
  className?: HTMLAttributes<HTMLImageElement>["className"];
};

export const Text = ({
  children,
  type,
  className: additionalStyle,
}: TextProps) => {
  switch (type) {
    case "mainTitle":
      return (
        <h1
          className={`font-display text-base font-light tracking-wider ${additionalStyle}`}
        >
          {children}
        </h1>
      );
    case "cardTitle":
      return (
        <h2 className={`font-display font-bold text-normal ${additionalStyle}`}>
          {children}
        </h2>
      );
    case "bodyRegularText":
      return (
        <p className={`font-body font-extralight text-tiny ${additionalStyle}`}>
          {children}
        </p>
      );
    case "bodyRegularTextBold":
      return (
        <p className={`font-body font-light text-tiny ${additionalStyle}`}>
          {children}
        </p>
      );
    case "custom":
    default:
      return <p className={additionalStyle}>{children}</p>;
  }
};
