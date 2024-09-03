import { Brands } from "@/features/home/components/brands";
import { Hero } from "@/features/home/components/hero";
import { ProductCard } from "@/features/product/components/product-card";

export default async function Index() {
  return (
    <main className="w-full">
      <Hero />
      <Brands />
      <ProductCard />
    </main>
  );
}
