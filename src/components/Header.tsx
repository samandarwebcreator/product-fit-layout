import React from "react";

import Link from "next/link";
import { logo, messageIcon, phoneIcon, telegramIcon } from "./icons";

export default function Header() {
  return (
    <div className="container py-5 flex items-center justify-between">
      <Link
        className="flex items-center w-full sm:w-56 h-19"
        href="./"
        dangerouslySetInnerHTML={{ __html: logo }}
      ></Link>

      <div className="max-w-[300px] w-full hidden  md:flex items-center justify-between ">
        <Link
          href="https://t.me/"
          target="_blank"
          className="w-6 h-6 cursor-pointer"
          dangerouslySetInnerHTML={{ __html: telegramIcon }}
        ></Link>
        <Link
          href="https://gmail.com/"
          target="_blank"
          className="w-6 h-6 cursor-pointer"
          dangerouslySetInnerHTML={{ __html: messageIcon }}
        ></Link>
        <Link href="tel:+7 800 301-79-27" className="flex items-center  gap-2">
          <div
            className="w-4 h-6 cursor-pointer"
            dangerouslySetInnerHTML={{ __html: phoneIcon }}
          ></div>
          <p className="text-[12px] text-brand-color font-semibold">
            +7 800 301-79-27
          </p>
        </Link>
      </div>

      <div className="hidden sm:block">
        <button className="text-[12px] bg-button-color hover:bg-button-hover text-white font-bold py-3 px-4 rounded active:opacity-80">
          НАЧАТЬ ПРОЕКТ
        </button>
      </div>
    </div>
  );
}
