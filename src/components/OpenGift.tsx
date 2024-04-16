import React from "react";
import openGift from "../assets/images/openGift.png";
import { StaticImageData } from "next/image";
import { blockChain, linkIcon, pythonIcon, reactIcon } from "./icons";

interface Props {
  openGift: StaticImageData;
}

const OpenGiftComp: React.FC<Props> = ({ openGift }) => {
  return <img className=" w-52" src={openGift.src} alt="Open Gift" />;
};
export default function OpenGift() {
  return (
    <div className="container py-32 flex gap-16 items-start justify-between flex-col md:flex-row">
      <div className="max-w-full md:max-w-[300px] w-full ">
        <div className=" shadow-openGift-shadow bg-openGift-background p-5 rounded-md w-full sm:w-[300px]">
          <div className="-mt-24 mx-auto ml-8 md:ml-8 mb-8">
            <OpenGiftComp openGift={openGift} />
          </div>
          <div>
            <div className="flex items-start gap-2 mt-5 mx-auto justify-between">
              <div className="flex items-start gap-2 flex-col">
                <p className="text-[10px] mb-3">Длительность</p>
                <h3 className="text-brand-color">10 недельв</h3>
              </div>
              <span className="h-14 w-[2px] border mx-3  border-brand-color"></span>
              <div className="flex items-start gap-2 flex-col">
                <p className="text-[10px] mb-3">Колличество спринтов</p>
                <h3 className="text-brand-color">20 Спринтов</h3>
              </div>
            </div>

            <div className="my-4 flex items-center gap-3 md:gap-2">
              <div
                className=" w-12  h-12 md:w-14  md:h-14"
                dangerouslySetInnerHTML={{ __html: blockChain }}
              ></div>
              <div
                className=" w-12  h-12 md:w-14  md:h-14"
                dangerouslySetInnerHTML={{ __html: pythonIcon }}
              ></div>
              <div
                className=" w-12  h-12 md:w-14  md:h-14"
                dangerouslySetInnerHTML={{ __html: reactIcon }}
              ></div>
            </div>

            <div className=" my-2 mt-6 flex items-center justify-center -ml-5 gap-3 text-brand-color font-semibold text-md md:text-lg mx-auto">
              <div
                className="w-6 h-6 md:w-8 md:h-8"
                dangerouslySetInnerHTML={{ __html: linkIcon }}
              ></div>
              <p>opengift.io</p>
            </div>

            <button className=" w-full mt-6 shadow-button-shadow text-[12px] bg-button-color hover:bg-button-hover text-white font-bold py-3 px-4 rounded active:opacity-80">
              УЗНАТЬ СТОИМОСТЬ ПРОЕКТА
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-full md:max-w-2xl">
        <h3 className="text-brand-color text-2xl mb-7 capitalize font-semibold">
          OpenGift – это система монетизации OpenSource-проектов на основе
          блокчейна hyperledger fabric.
        </h3>
        <p className="text-[10px] text-openGift-color">
          К разработке платформы было привлечено более 5000 разработчиков. Ее
          интегрировали с сетью блокчейнов. Альфа-версия была запущена в январе
          2018 года. OpenGIft был создан для решения проблем, унаследованных от
          разработки программного обеспечения. Платформа позволяет компаниям
          разделять расходы на программное обеспечение, а управление проектами
          является основной функцией, помогающей в сотрудничестве. <br /> <br />{" "}
          Для монетизации используются смарт-контракты, чтобы создать пассивный,
          периодический потенциал дохода. Уникальность проекта в видении на
          разработку с открытым исходным кодом.
        </p>
      </div>
    </div>
  );
}
