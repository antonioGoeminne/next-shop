import { integralFont, satoshiBoldFont, satoshiFont } from "@/app/layout";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const heroDesktop =
  "https://qvtkeocldbdawkmzkuuq.supabase.co/storage/v1/object/sign/images/hero_desktop.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvaGVyb19kZXNrdG9wLndlYnAiLCJpYXQiOjE3MjUyMjc1OTksImV4cCI6MTk3NzUxNTU5OX0._NByjyZxe8J6C_AVbWoNqJ1eO7HTqRH9kiinra-BTsY&t=2024-09-01T21%3A53%3A17.767Z";

export const Hero = () => {
  return (
    <div className="sm:flex w-full max-w-6xl mx-auto">
      <div className="pl-3 pr-0 pt-7 xl:pt-20">
        <h1
          className={`${integralFont.className} max-w-sm w-full text-4xl xl:text-5xl xl:max-w-xl`}
        >
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className={`${satoshiFont.className} my-6 text-sm opacity-[60%]`}>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Button className="w-full max-w-[210px]">Shop now</Button>
        <div className="flex items-center flex-wrap justify-center gap-6 mt-6 mb-2">
          <Metric quantity="200+" title="International brands" />
          <div className="w-[1px] opacity-[10%] h-14 bg-black"></div>
          <Metric quantity="2,000+" title="High-Quality products" />
          <Metric quantity="30,000+" title="Happy customers" />
        </div>
      </div>

      <div className="relative aspect-square w-full">
        <Image src={heroDesktop} alt="shop.co" fill objectFit="cover" />
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
