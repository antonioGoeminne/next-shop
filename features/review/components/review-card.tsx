import { satoshiBoldFont, satoshiFont } from "@/app/layout";
import { Svg } from "@/components/svg";
import checkIcon from "@/icons/checkIcon.svg";
import { StarRating } from "@/components/ui/star-rating";
import { Review } from "../types/reviews";

export const ReviewCard = (props: Review) => {
  const { user_name, rating, description } = props;

  return (
    <div className="rounded-xl border border-[10%] p-6 max-h-[240px] flex flex-col gap-2 h-full">
      <StarRating quantity={rating} />
      <span className="flex items-center gap-1">
        <p className={`${satoshiBoldFont.className} text-xl`}>{user_name}</p>
        <Svg width={24} height={24} path={checkIcon} />
      </span>
      <p className={`${satoshiFont.className} max-w-full opacity-[60%]`}>
        {description}
      </p>
    </div>
  );
};
