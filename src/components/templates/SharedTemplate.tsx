import { FC } from "react";

export type SharedTemplateProps = {
  children: React.ReactNode;
};

export const SharedTemplate: FC<SharedTemplateProps> = ({ children }) => {
  return <div className="pt-8 md:pt-20">{children}</div>;
};
