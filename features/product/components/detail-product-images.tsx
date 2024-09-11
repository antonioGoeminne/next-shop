"use client";

import Image from "next/image";

interface DetailProductImagesProps {
  images: string[];
}

export const DetailProductImages: React.FC<DetailProductImagesProps> = ({
  images,
}) => {
  const image = images[0];
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row items-center gap-4">
        <div className="flex flex-row md:flex-col gap-4">
          <div className="relative h-[106px] md:h-[167px] aspect-square rounded-xl">
            <Image className="rounded-xl" src={image} fill alt="image" />
          </div>
          <div className="relative h-[106px] md:h-[167px] aspect-square rounded-xl">
            <Image className="rounded-xl" src={image} fill alt="image" />
          </div>
          <div className="relative h-[106px] md:h-[167px] aspect-square rounded-xl">
            <Image className="rounded-xl" src={image} fill alt="image" />
          </div>
        </div>
        <div className="relative h-[290px] md:h-[530px] w-[358px] md:w-[444px] rounded-xl">
          <Image
            className="rounded-xl object-cover"
            src={image}
            fill
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};
