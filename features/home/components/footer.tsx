import Logo from "@/components/logo";
import { NewsletterCta } from "./newsletter-cta";
import { satoshiFont } from "@/app/layout";
import { Svg } from "@/components/svg";
import instagramIcon from "@/icons/instagram.svg";
import facebookIcon from "@/icons/facebook.svg";
import githubIcon from "@/icons/github.svg";
import twitterIcon from "@/icons/twitter.svg";
import footerLinks from "../config/footerLinks.json";
import visaIcon from "@/icons/visa.svg";
import masterIcon from "@/icons/mastercard.svg";
import payPalIcon from "@/icons/paypal.svg";
import appleIcon from "@/icons/applePay.svg";
import googleIcon from "@/icons/googlePay.svg";

export const Footer = () => {
  return (
    <div className="relative h-[500px] py-12 w-full flex flex-col bg-gray mx-auto text-center text-xs gap-8 px-4">
      <div className="relative -top-40 flex flex-col gap-6">
        <div className="py-6 relative  w-full">
          <NewsletterCta />
        </div>
        <div className="mx-auto max-w-[1200px] flex justify-between w-full">
          <div className="flex flex-col gap-6">
            <Logo />
            <p
              className={`${satoshiFont.className} max-w-[300px] text-left opacity-[60%]`}
            >
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <ul className="flex gap-4 flex-1 align-bottom">
              <Svg width={28} height={28} path={twitterIcon} />
              <Svg width={28} height={28} path={facebookIcon} />
              <Svg width={28} height={28} path={instagramIcon} />
              <Svg width={28} height={28} path={githubIcon} />
            </ul>
          </div>
          {footerLinks.map((footerLink) => (
            <MenuLinks
              key={footerLink.title}
              title={footerLink.title}
              options={footerLink.options}
            />
          ))}
        </div>
        <div className="h-[1px] max-w-[1200px] mx-auto opacity-[10%] w-full bg-black mt-6 mb-1"></div>
        <div className="w-full flex justify-between max-w-[1200px] mx-auto">
          <p className={`${satoshiFont.className} opacity-[60%]`}>
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <ul className="flex gap-2">
            <li>
              <Svg width={55} path={visaIcon} />
            </li>
            <li>
              <Svg width={55} path={masterIcon} />
            </li>
            <li>
              <Svg width={55} path={payPalIcon} />
            </li>
            <li>
              <Svg width={55} path={appleIcon} />
            </li>
            <li>
              <Svg width={55} path={googleIcon} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

interface Option {
  title: string;
}

interface MenuLinksProps {
  title: string;
  options: Option[];
}

const MenuLinks: React.FC<MenuLinksProps> = ({ title, options }) => {
  return (
    <ul className="flex flex-col gap-3">
      <li
        className={`text-sm font-bold ${satoshiFont.className} uppercase text-left`}
      >
        {title}
      </li>
      {options.map((option, index) => (
        <li
          key={index}
          className={`${satoshiFont.className} text-left text-sm opacity-[60%]`}
        >
          {option.title}
        </li>
      ))}
    </ul>
  );
};
