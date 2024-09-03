import { satoshiBoldFont } from "@/app/layout";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/ui/star-rating";
import product_test_image from "@/product_test.png";
import Image from "next/image";

const title = "T-shirt with Tape details";
const price = "$120";
const discount_price = "$260";
const discount_percentage = "-20%";
const rating = 4;

export const ProductCard = () => {
  return (
    <div className="m-2 flex flex-col gap-1 max-w-48 md:max-w-[295px]">
      <div className="relative h-48 md:h-[298px] aspect-square mb-2">
        <Image
          src={product_test_image}
          alt="productTest"
          fill
          className="rounded-xl"
        />
      </div>
      <p className={`${satoshiBoldFont.className} md:text-xl`}>{title}</p>
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
    </div>
  );
};
