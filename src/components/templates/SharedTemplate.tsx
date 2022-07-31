import { FC } from "react";

export type SharedTemplateProps = {
  children: React.ReactNode;
};

export const SharedTemplate: FC<SharedTemplateProps> = ({ children }) => {
  return <div className="px-4 max-w-6xl mx-auto py-8 md:p-20">{children}</div>;
};
