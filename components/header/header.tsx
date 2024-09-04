import Link from "next/link";
import React from "react";
import Logo from "../logo";
import { Searcher } from "./searcher";
import { Svg } from "../svg";
import cartIcon from "@/icons/cart.svg";
import userAuthIcon from "@/icons/user_auth.svg";
import glassBlack from "../../icons/glass_black.svg";
import burgerIcon from "../../icons/burger_menu.svg";
import { MarketingHeader } from "./marketing-header";
import { satoshiFont } from "@/app/layout";

const specs = ["Shop", "On sale", "New Arrivals", "Brands"];

export const Header = () => {
  return (
    <>
      <MarketingHeader>
        <span className="flex items-center gap-1 text-xs md:text-sm">
          <p className={satoshiFont.className}>
            Sign up and get 20% off to your first order.
          </p>
          <p className={`${satoshiFont.className} font-medium underline`}>
            Sign Up Now
          </p>
        </span>
      </MarketingHeader>
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-6xl flex justify-between items-center p-3 px-2 text-sm">
          <div className="flex gap-12 items-center font-semibold flex-1 mr-8">
            <div className="flex gap-2">
              <Svg path={burgerIcon} />
              <Link href={"/"}>
                <Logo width="128" height="18" />
              </Link>
            </div>
            <div className="gap-8 hidden lg:flex items-center ">
              {specs.map((spec) => (
                <p key={spec}>{spec}</p>
              ))}
            </div>
            <Searcher />
          </div>
          <div className="flex gap-4">
            <Svg className="sm:hidden" path={glassBlack} />
            <Svg path={cartIcon} />
            <Svg path={userAuthIcon} />
          </div>
        </div>
      </nav>
    </>
  );
};
