import { integralFont, satoshiBoldFont, satoshiFont } from "@/app/layout";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const heroImage =
  "https://qvtkeocldbdawkmzkuuq.supabase.co/storage/v1/object/sign/images/hero.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvaGVyby5wbmciLCJpYXQiOjE3MjUxOTQ3MzEsImV4cCI6MTk3NzQ4MjczMX0.ZcPOjS9wOkJEpQa4koGire4Gf0mtvDovvuXIIGNhytE&t=2024-09-01T12%3A45%3A29.577Z";

export const Hero = () => {
  return (
    <div className="sm:flex w-full">
      <div className="pl-3 pr-4 pt-7">
        <h1 className={`${integralFont.className} max-w-sm  text-4xl`}>
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className={`${satoshiFont.className} my-4 text-sm opacity-[60%]`}>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Button className="w-full">Shop now</Button>
        <div className="flex items-center flex-wrap justify-center gap-6 mt-6 mb-2">
          <Metric quantity="200+" title="International brands" />
          <div className="w-[1px] opacity-[10%] h-14 bg-black"></div>
          <Metric quantity="2,000+" title="High-Quality products" />
          <Metric quantity="30,000+" title="Happy customers" />
        </div>
      </div>

      <div className="relative h-[448px] w-full max-w-sm">
        <Image src={heroImage} alt="shop.co" fill />
      </div>
    </div>
  );
};

const Metric = ({ quantity, title }: { quantity: string; title: string }) => {
  return (
    <div className="flex flex-col">
      <p className={`${satoshiBoldFont.className} m-0 text-2xl`}>{quantity}</p>
      <p className={`${satoshiFont.className} m-0 text-xs opacity-[60%]`}>
        {title}
      </p>
    </div>
  );
};
