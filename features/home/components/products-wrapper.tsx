import { integralFont } from "@/app/layout";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/features/product/components/product-card";
import { type Product } from "@/features/product/types";

interface ProductsWrapperProps {
  products: Product[];
  title: string;
}

export const ProductsWrapper: React.FC<ProductsWrapperProps> = ({
  products,
  title,
}) => {
  return (
    <div className="bg-white p-4 flex flex-col items-center">
      <p className={`${integralFont.className} text-3xl md:text-5xl mb-8`}>
        {title}
      </p>
      <div className="flex gap-4 items-center my-8 overflow-x-auto max-w-full">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <Button variant={"outline"} className="w-[218px]">
        View all
      </Button>
    </div>
  );
};
