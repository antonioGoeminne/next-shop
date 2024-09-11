import { satoshiBoldFont } from "@/app/layout";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/ui/star-rating";
import Image from "next/image";
import { Product } from "../types";
import Link from "next/link";

export const ProductCard: React.FC<Product> = ({
  id,
  title,
  price,
  discount_price,
  discount_percentage,
  rating,
  image,
}) => {
  return (
    <Link
      href={`/product/${id}`}
      className="flex flex-col gap-1 max-w-48 md:max-w-[295px]"
    >
      <div className="relative h-48 md:h-[298px] aspect-square mb-2">
        <Image src={image} alt="productTest" fill className="rounded-xl" />
      </div>
      <p
        className={`${satoshiBoldFont.className} md:text-xl whitespace-nowrap text-ellipsis overflow-hidden`}
      >
        {title}
      </p>
      <StarRating quantity={rating} showQuantity />
      <span className="flex items-center gap-2">
        <p className={`${satoshiBoldFont.className} text-xl md:text-2xl`}>
          {price}
        </p>
        {discount_price && (
          <p
            className={`${satoshiBoldFont.className} text-xl md:text-2xl opacity-[40%] line-through`}
          >
            {discount_price}
          </p>
        )}
        {discount_percentage && <Badge>{discount_percentage}</Badge>}
      </span>
    </Link>
  );
};
