import { Brands } from "@/features/home/components/brands";
import { Hero } from "@/features/home/components/hero";
import { NewsletterCta } from "@/features/home/components/newsletter-cta";
import { ProductsWrapper } from "@/features/home/components/products-wrapper";
import { WrapperReviews } from "@/features/home/components/wrapper-reviews";
import { useGetNewArrivals } from "@/features/home/hooks/use-get-newarrivals";
import { useGetTopSelling } from "@/features/home/hooks/use-get-topselling";

export default async function Index() {
  const { products: topSellingProducts } = await useGetTopSelling();
  const { products: newArrivalsProducts } = await useGetNewArrivals();

  return (
    <main className="w-full bg-gray-100">
      <Hero />
      <Brands />
      <div className="flex flex-col gap-8 bg-white py-3 md:py-20">
        <ProductsWrapper products={newArrivalsProducts} title="NEW ARRIVALS" />
        <div className="h-[1px] bg-black opacity-10 w-[85%] mx-auto"></div>
        <ProductsWrapper products={topSellingProducts} title="TOP SELLING" />
      </div>
      <WrapperReviews />
      <div className="py-6 bg-white">
        <NewsletterCta />
      </div>
    </main>
  );
}
