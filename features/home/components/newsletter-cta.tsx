import { integralFont } from "@/app/layout";
import { Svg } from "@/components/svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import email_icon from "@/icons/email.svg";

export const NewsletterCta = () => {
  return (
    <div className="bg-black rounded-xl py-6 md:py-8 px-8 md:px-12 flex flex-col md:flex-row items-center md:items-start justify-between mx-auto gap-4 max-w-[1200px]">
      <p
        className={`${integralFont.className} text-3xl md:text-4xl max-w-[551px] text-left text-white`}
      >
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </p>
      <div className="flex flex-col gap-2 items-center w-full max-w-[350px]">
        <Input
          startIcon={<Svg path={email_icon} />}
          placeholder="Enter your email adress"
        />
        <Button className="w-full" variant={"white"}>
          Subscribe to newsletter
        </Button>
      </div>
    </div>
  );
};
