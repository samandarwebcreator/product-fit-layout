import React from "react";
import { productFitData } from "./data";
import Image from "next/image";

export default function ProductBenefit() {
  return (
    <div className="container py-20">
      <h2 className="text-2xl text-center font-semibold text-brand-color uppercase mb-10">
        ПРОЕКТЫ командЫ PRODUCTFIT
      </h2>
      <div className="flex items-center justify-between flex-col md:grid grid-cols-2 lg:grid-cols-3 gap-7 md:gap-7">
        {productFitData.map((item) => {
          const { id, title, desc, imgSrc, altText, imgWidth } = item;

          return (
            <div
              className="p-10 max-w-full md:max-w-[400px] w-full bg-[#F7F9FD] cursor-pointer rounded-xl flex items-center justify-center flex-col h-[350px] border border-transparent hover:border-brand-color hover:opacity-90"
              key={id}
            >
              <img width={imgWidth} height={200} src={imgSrc} alt={altText} />
              <h3 className="text-brand-color font-semibold text-xl">
                {title}
              </h3>
              <p className="text-[12px] my-3 text-openGift-color">{desc}</p>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center">
        <button className="text-[12px] text-brand-color hover:text-white transition-all duration-300 ease-in-out w-full md:w-64 mt-12 bg-transparent hover:bg-brand-color border border-brand-color font-bold py-3 px-4 rounded active:opacity-80">
          Все проекты
        </button>
      </div>
    </div>
  );
}
