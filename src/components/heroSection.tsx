import React from "react";
import zap from "./../icons/whatsapp.svg";
import mail from "./../icons/mail.svg";
import location from "./../icons/location.svg";
import herovideo from './../images/hero-video.mp4'
import NavBar from "./navBar";
import bgHero from './../images/bg-hero-2.webp'
import Button from "./Button";
import ButtonCTA from "./Button";

const HeroSection = () => {
  return (
    <div className="">
      {/* <NavBar /> */}
      <section className="h-[100svh] bg-black lg:h-[750px] relative w-full flex items-center justify-center">
        
        <video src={herovideo} className="w-full absolute top-0 opacity-40 h-full lg:h-[750px] object-cover " loop autoPlay muted ></video>
  
              {/* <img 
              className=" object-cover absolute w-full h-full top-0"
              src={bgHero}
              /> */}
        

        <div className="flex flex-col px-6 items-center relative justify-center z-40 gap-6 pt-14">
          <span className="lg:w-[1000px] w-[280px] h-[400px] lg:h-[500px] absolute top-0 bg-black opacity-40 z-20 blur-3xl"></span>
          <h1 className="font-normal  text-[40px] lg:text-[70px] text-white z-30 text-center leading-tight">Excelência Jurídica, <br /> Compromisso Humano</h1>
          <h3 className="font-normal  text-base lg:text-xl max-w-[600px] z-40 text-center  text-white tracking-wider "> Seja para empresas ou pessoas físicas, estamos aqui para orientar você com empatia, respeito e uma dedicação inabalável à justiça.</h3>
          <a href="/#contato" className="z-[8888888888888888888]"><ButtonCTA children={'Agende uma reunião'} backgroundColor="#FFFF"/></a>
        </div>

      </section>
      
    </div>
  );
};

export default HeroSection;
