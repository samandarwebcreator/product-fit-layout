import React from "react";
import { logo, messageIcon, notesIcon, phoneIcon, telegramIcon } from "./icons";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="py-10">
      <div className="container py-5 flex items-center justify-between flex-col gap-5 md:flex-row">
        <Link
          className="flex items-center w-full sm:w-56 h-19"
          href="./"
          dangerouslySetInnerHTML={{ __html: logo }}
        ></Link>

        <div className="flex items-start justify-start flex-col gap-8">
          <span className="text-[10px] text-brand-color">
            Мобильные приложения
          </span>
          <span className="text-[10px] text-brand-color">Главная страница</span>
        </div>

        <div className="flex flex-col items-start justify-start gap-8">
          <p className="text-semibold text-brand-color text:md md:text-[9px] lg:text-[18px]">
            Связаться с нами
          </p>
          <Link
            href="tel:+7 800 301-79-27"
            className="flex items-center  gap-2"
          >
            <div
              className="w-4 h-6 cursor-pointer"
              dangerouslySetInnerHTML={{ __html: phoneIcon }}
            ></div>
            <p className="text-[12px] text-brand-color font-semibold md:text-[8px] lg:text-[12px]">
              +7 800 301-79-27
            </p>
          </Link>
        </div>

        <div className="max-w-[300px] w-full flex items-center md:items-end justify-between flex-col md:flex-row  ">
          <Link
            href="https://t.me/"
            target="_blank"
            className="w-10 md:w-6 md:h-6 cursor-pointer mb-4 md:mb-0"
            dangerouslySetInnerHTML={{ __html: telegramIcon }}
          ></Link>
          <Link
            href="https://gmail.com/"
            target="_blank"
            className="w-10 md:w-6 md:h-6 cursor-pointer"
            dangerouslySetInnerHTML={{ __html: messageIcon }}
          ></Link>
          <div className="flex mt-20">
            <div
              className="w-16 h-16"
              dangerouslySetInnerHTML={{ __html: notesIcon }}
            ></div>
            <p className="text-[6px] w-32 -mt-16">
              Индивидуальный предприниматель Степанов Георгий Константинович
              Адрес: г. Обнинск, ул. Белкинская. 19, 136 ОГРНИП 318402700019269
              ИНН 402571298900 Банк МОСКОВСКИЙ ФИЛИАЛ АО КБ
              &quot;МОДУЛЬБАНК&quot; БИК 044525092 К/c 30101810645250000092 Счет
              40802810970010085488
            </p>
          </div>
        </div>
      </div>
      <span className="container mx-auto block text-[6px] text-openGift-color opacity-50 text-center">
        Copyright © 2021 ProductFit
      </span>
    </div>
  );
}
