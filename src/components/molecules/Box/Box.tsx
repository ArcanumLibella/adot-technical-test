import { FC } from "react";

export type BoxProps = {
  children: React.ReactNode;
};

export const Box: FC<BoxProps> = ({ children }) => {
  return (
    <div className="p-6 w-full md:w-3/4 xl:w-2/5 max-w-2xl absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 bg-white rounded-sm">
      {children}
    </div>
  );
};
