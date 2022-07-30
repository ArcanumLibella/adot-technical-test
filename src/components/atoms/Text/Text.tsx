import { HTMLAttributes } from "react";

type TextPossibleTypes =
  | "custom" // Should be used in very rare cases
  | "mainTitle"
  | "modalTitle"
  | "cardTitle"
  | "bodyRegularText"
  | "bodyRegularTextBold";

export type TextProps = {
  children: React.ReactNode;
  type: TextPossibleTypes;
  id?: string;
  className?: HTMLAttributes<HTMLImageElement>["className"];
};

export const Text = ({
  children,
  type,
  id,
  className: additionalStyle,
}: TextProps) => {
  switch (type) {
    case "mainTitle":
      return (
        <h1
          className={`font-display text-md font-extralight tracking-wider ${additionalStyle}`}
          id={id}
        >
          {children}
        </h1>
      );
    case "modalTitle":
      return (
        <h1
          className={`font-display text-normal font-medium tracking-wider ${additionalStyle}`}
          id={id}
        >
          {children}
        </h1>
      );
    case "cardTitle":
      return (
        <h2
          className={`font-display font-semibold text-normal ${additionalStyle}`}
          id={id}
        >
          {children}
        </h2>
      );
    case "bodyRegularText":
      return (
        <p
          className={`font-body font-light text-xs ${additionalStyle}`}
          id={id}
        >
          {children}
        </p>
      );
    case "bodyRegularTextBold":
      return (
        <p
          className={`font-body font-medium text-xs ${additionalStyle}`}
          id={id}
        >
          {children}
        </p>
      );
    case "custom":
    default:
      return (
        <p className={additionalStyle} id={id}>
          {children}
        </p>
      );
  }
};
