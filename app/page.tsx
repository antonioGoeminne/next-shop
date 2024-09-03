import { Brands } from "@/features/home/components/brands";
import { Hero } from "@/features/home/components/hero";

export default async function Index() {
  return (
    <main className="bg-gray-100 w-full">
      <Hero />
      <Brands />
    </main>
  );
}
