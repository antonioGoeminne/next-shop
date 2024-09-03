import React from "react";
import starIcon from "@/icons/star.svg";
import { Svg } from "../svg";
import { satoshiFont } from "@/app/layout";

interface StarRatingProps {
  quantity?: number;
  showQuantity?: boolean;
}

export const StarRating: React.FC<StarRatingProps> = ({
  quantity = 0,
  showQuantity = false,
}) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(quantity).fill(1)].map((_, index) => (
        <Svg width={15} height={15} key={index} path={starIcon} />
      ))}
      {showQuantity && (
        <span className="flex items-center text-xs">
          <p className={satoshiFont.className}>{quantity} / </p>
          <p className={`${satoshiFont.className} opacity-[60%]`}>5</p>
        </span>
      )}
    </div>
  );
};
