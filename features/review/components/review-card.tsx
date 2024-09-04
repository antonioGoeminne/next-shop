import { satoshiBoldFont, satoshiFont } from "@/app/layout";
import { Svg } from "@/components/svg";
import checkIcon from "@/icons/checkIcon.svg";
import { StarRating } from "@/components/ui/star-rating";

const description = `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`;
const title = "Sarah.M";
const rating = 5;

export const ReviewCard = () => {
  return (
    <div className="rounded-xl border border-[10%] p-6 max-h-[240px] flex flex-col gap-2">
      <StarRating quantity={rating} />
      <span className="flex items-center gap-1">
        <p className={`${satoshiBoldFont.className} text-xl`}>{title}</p>
        <Svg width={24} height={24} path={checkIcon} />
      </span>
      <p className={`${satoshiFont.className} max-w-full opacity-[60%]`}>
        {description}
      </p>
    </div>
  );
};
