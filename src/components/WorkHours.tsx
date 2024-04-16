import Image from "next/image";
import React from "react";

export default function WorkHours() {
  return (
    <div className="container flex items-start justify-between flex-col md:flex-row gap-20 py-20">
      <div>
        <Image
          width={400}
          height={300}
          src="https://i.ibb.co/VvTpyV2/Group.png"
          alt="Group"
        />
      </div>
      <div className="max-w-full md:max-w-[600px] w-full">
        <h2 className="text-2xl text-brand-color uppercase font-semibold">
          Начнем работу над вашим ІТ-проектом через 24 часа
        </h2>
        <p className="text-openGift-color text-sm my-7">
          Проектируем, запускаем и сопровождаем IT-проеты любой сложности
        </p>
        <button className="md:ml-20 text-[12px] bg-button-color hover:bg-button-hover text-white font-bold py-5 mt-5 px-4 rounded active:opacity-80 w-full md:w-72">
          ОСТАВИТЬ ЗАЯВКУ
        </button>
      </div>
    </div>
  );
}
