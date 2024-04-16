import React from "react";

import OrderProjectImage from "../assets/images/OrderProjectImage.png";
import Image, { StaticImageData } from "next/image";

interface Props {
  orderProjectImage: StaticImageData;
}

const OrderProjectImg: React.FC<Props> = ({ orderProjectImage }) => {
  return (
    <Image
      className="max-w-full md:max-w-[600px] w-full"
      src={orderProjectImage.src}
      alt="computer"
    />
  );
};

export default function OrderProject() {
  return (
    <div className="bg-brand-color w-full">
      <div className="container w-full pt-20 pb-10 md:py-0  flex items-center justify-between flex-col md:flex-row">
        <div className="">
          <h3 className="text-white text-2xl font-semibold">Начнем проект?</h3>
          <p className="text-sm text-white my-5 md:my-6">
            Усилим Вашу комунду и запустим проект быстрее!
          </p>
          <button className="text-[10px] bg-white hover:opacity-90 text-brand-color font-bold py-3 px-4 rounded active:opacity-80 my-4">
            УЗНАТЬ СТОИМОСТЬ ПРОЭКТА
          </button>
        </div>

        <div className="md:-mt-24">
          <OrderProjectImg orderProjectImage={OrderProjectImage} />
        </div>
      </div>
    </div>
  );
}
