import React from "react";
import zap from "./../icons/whatsapp.svg";
import mail from "./../icons/mail.svg";
import location from "./../icons/location.svg";

import NavBar from "./navBar";

const HeroSection = () => {
  return (
    <div className="bg-[#FFFFF] h-full">
      <NavBar />
      <section className=" bg-[#E3E3E3] flex mx-auto w-full lg:justify-between justify-center lg:flex-nowrap flex-wrap h-[500px] lg:h-[65svh] ">
        <div className="px-6 flex w-full items-center justify-center lg:h-full flex-col gap-[35px]">
          <h1 className="arsenal-regular lg:text-5xl text-4xl text-[#333333] text-center ">
            Site em Construção
          </h1>
          <h3 className="arsenal-regular lg:text-lg text-base max-w-[400px] text-[#2A2A2A] text-center ">
            Enquanto finalizamos nosso site, você pode entrar em contato conosco
            pelos links abaixo
          </h3>
          <div className="flex flex-col  max-w-[300px] w-full">
            <a
              href="https://api.whatsapp.com/send?phone=5511960585588"
              target="_blank"
              className="flex items-center justify-center bg-[#333333] w-full"
            >
              <img src={zap} />
              <p className=" text-center text-white px-4 py-3 text-base">
                WhatsApp
              </p>
            </a>
            <span className="block text-center text-gray-500 py-1">ou </span>
            <div className="bg-white border-[#333333] border-[1px] w-full flex items-center justify-center">
              <img src={mail} />
              <a
                href="mailto:liliandbd@gmail.com"
                className=" text-center text-base px-4 py-3 text-[#444444] "
              >
                liliandbd@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#4D4D4D] px-8 w-full h-[250px] lg:h-[20svh] flex items-center justify-center flex-col gap-6">
        <div className="flex gap-4">
          <img src={location} alt="" />
          <p className="text-white">
            Rua Afonso Braz nº 900 - Vila Nova Conceição - São Paulo - SP
          </p>
        </div>
        <div className="flex gap-4">
          <img src={location} alt="" />
          <p className="text-white">
            Rua Dr Bormann, nº 13 - salas 307, 308, 309 - Centro - Niterói - RJ
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
