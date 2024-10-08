import { integralFont } from "@/app/layout";
import { Carousel } from "@/components/ui/caroussel/carousel";
import { ReviewCard } from "@/features/review/components/review-card";
import { useGetHappyReviews } from "@/features/review/hooks/use-get-happy-reviews";

export const WrapperReviews = async () => {
  const { reviews } = await useGetHappyReviews();

  return (
    <div className="bg-white p-2 pb-44">
      <Carousel
        title={
          <p
            className={`${integralFont.className} text-3xl md:text-5xl max-w-64 md:whitespace-nowrap`}
          >
            Our happy customers
          </p>
        }
      >
        {reviews.map((review, index) => (
          <div
            className="embla__slide max-w-[350px] md:max-w-[400px]"
            key={index}
          >
            <ReviewCard {...review} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
