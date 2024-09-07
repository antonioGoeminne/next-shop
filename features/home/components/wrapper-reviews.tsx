import { integralFont } from "@/app/layout";
import { Carousel } from "@/components/ui/caroussel/carousel";
import { ReviewCard } from "@/features/review/components/review-card";

export const WrapperReviews = () => {
  const slides = [1, 2, 3, 4];
  return (
    <div className="bg-white p-2">
      <Carousel
        title={
          <p
            className={`${integralFont.className} text-3xl md:text-5xl max-w-64 md:whitespace-nowrap`}
          >
            Our happy customers
          </p>
        }
      >
        {slides.map((index) => (
          <div
            className="embla__slide max-w-[350px] md:max-w-[400px]"
            key={index}
          >
            <ReviewCard />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
