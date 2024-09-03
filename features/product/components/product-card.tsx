import { satoshiBoldFont } from "@/app/layout";
import { StarRating } from "@/components/ui/star-rating";
import product_test_image from "@/product_test.png";
import Image from "next/image";

const title = "T-shirt with Tape details";
const price = "$120";
const rating = 4;

export const ProductCard = () => {
  return (
    <div className="m-2 flex flex-col gap-1 max-w-48">
      <div className="relative h-48 aspect-square mb-2">
        <Image
          src={product_test_image}
          alt="productTest"
          fill
          className="rounded-xl"
        />
      </div>
      <p className={`${satoshiBoldFont.className}`}>{title}</p>
      <StarRating quantity={rating} showQuantity />
      <p className={`${satoshiBoldFont.className} text-xl`}>{price}</p>
    </div>
  );
};
