import React from "react";

interface MarketingHeaderProps {
  children: React.ReactNode;
}

export const MarketingHeader: React.FC<MarketingHeaderProps> = ({
  children,
}) => {
  return (
    <div className="h-[33px] w-full bg-black flex justify-center items-center text-white">
      {children}
    </div>
  );
};
