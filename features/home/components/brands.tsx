import Image from "next/image";
import { useGetBrands } from "../hooks/use-get-brands";

export const Brands = async () => {
  const { brands } = await useGetBrands();

  return (
    <div className="bg-black w-full px-2 h-[122px] z-10 relative flex">
      <div className="max-w-6xl w-full flex gap-44 md:gap-12 items-center h-[122px] mx-auto overflow-x-auto">
        {(brands || []).map((brand) => (
          <div className="relative h-7 w-[200px] md:w-full" key={brand.name}>
            <Image
              src={brand.image_url}
              alt={brand.name}
              fill
              sizes="(min-width: 808px) 50vw, 100vw"
              style={{
                minWidth: 150,
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
