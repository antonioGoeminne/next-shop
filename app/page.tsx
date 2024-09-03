import { Brands } from "@/features/home/components/brands";
import { Hero } from "@/features/home/components/hero";
import { ProductCard } from "@/features/product/components/product-card";

export default async function Index() {
  return (
    <main className="w-full bg-gray-100">
      <Hero />
      <Brands />
      <div className="bg-white p-4">
        <ProductCard />
      </div>
    </main>
  );
}
