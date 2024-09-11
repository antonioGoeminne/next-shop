import { integralFont, satoshiBoldFont, satoshiFont } from "@/app/layout";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { StarRating } from "@/components/ui/star-rating";
import { DetailProductImages } from "@/features/product/components/detail-product-images";
import { useGetProduct } from "@/features/product/hooks/use-get-product";
import Link from "next/link";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const description =
    "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.";

  const { product } = await useGetProduct(params.id);

  if (!product) {
    return null;
  }

  const { title, price, rating, image, discount_price, discount_percentage } =
    product;

  return (
    <main className="w-full px-2 max-w-6xl mx-auto mb-24">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              asChild
              className="inline-flex min-h-12 min-w-12 items-center justify-center"
            >
              <Link href="/">Products</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col md:flex-row justify-between gap-8 my-4">
        <DetailProductImages images={[image]} />
        <div className="flex flex-1 flex-col gap-4">
          <p className={`${integralFont.className} text-2xl md:text-4xl`}>
            {title}
          </p>
          <StarRating quantity={rating} showQuantity />
          <span className="flex items-center gap-2">
            <p className={`${satoshiBoldFont.className} text-xl md:text-3xl`}>
              {price}
            </p>
            {discount_price && (
              <p
                className={`${satoshiBoldFont.className} text-xl md:text-3xl opacity-[40%] line-through`}
              >
                {discount_price}
              </p>
            )}
            {discount_percentage && <Badge>{discount_percentage}</Badge>}
          </span>
          <p className={`${satoshiFont.className} opacity-[60%]`}>
            {description}
          </p>
          <div className="h-[1px] bg-gray w-full"></div>
        </div>
      </div>
    </main>
  );
}
