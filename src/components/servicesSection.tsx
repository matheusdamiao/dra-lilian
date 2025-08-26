import React from 'react'
import icon from './../icons/blue-circles.svg'
import useAnimateOnView from '../utils/useAnimateOnView'
import { motion } from 'framer-motion'

const ServicesSection = () => {

  const {TitleAnimation, animationControls, ref } = useAnimateOnView()


    const cards = [
        {
            titulo: 'Direito do Consumidor',
            texto: 'Proteção e reparação em casos de abusos, fraudes ou cobranças indevidas.'
        },
        {
            titulo: 'Direito Civil',
            texto: 'Soluções completas para questões patrimoniais, contratuais e de responsabilidade civil.'
        },
        {
            titulo: 'Direito Imobiliário',
            texto: 'Assessoria em transações, regularizações e disputas imobiliárias.'
        },
        {
            titulo: 'Direito Trabalhista',
            texto: 'Defendemos os interesses de empregadores e empregados com equilíbrio e justiça.'
        },
        {
            titulo: 'Direito Empresarial',
            texto: 'Estratégias jurídicas para o fortalecimento e proteção de negócios.'
        },
        // {
        //     titulo: 'Fashion Law',
        //     texto: 'Assessoria especializada no setor da moda, protegendo a criatividade e os direitos dos profissionais da área.'
        // },
        // {
        //     titulo: 'Direito Desportivo',
        //     texto: 'Assessoria jurídica especializada em contratos, patrocínios e disputas esportivas.'
        // },
        {
            titulo: 'Direito Tributário',
            texto: 'Consultoria estratégica para otimização fiscal e defesa em disputas tributárias.'
        },
        {
            titulo: 'Direito de Família e Sucessões',
            texto: 'Soluções personalizadas para questões familiares e sucessórias com empatia e justiça.'
        },
    ]



  return (
    <div id='especialidades' className='flex flex-col px-6 max-w-7xl mx-auto my-[50px] lg:my-[100px]'>
      <motion.h3
      initial='hidden'
      animate={animationControls}
       variants={{
        hidden: {
            opacity: 0, y: '20px',
          },
          show: {
            opacity: 1, y: '0'
          }
       }}
     transition={{delay: 0.1, duration: 0.5}}
      ref={ref} className='text-[#818181] text-sm lg:text-xl '>Nossas especialidades</motion.h3>
      <motion.h4
         initial='hidden'
         animate={animationControls} variants={TitleAnimation}
        transition={{delay: 0.3, duration: 0.5}}
      className='text-[#333333] lg:text-[36px] pt-4 text-[28px] lg:w-[70%] '>Com uma abordagem humana e personalizada, levamos soluções jurídicas a empresas e pessoas físicas</motion.h4>
      <div className='flex pt-12 lg:justify-start justify-center w-full gap-8 flex-wrap'>
        {cards.map((card)=> {
            return (
                <div key={card.titulo} className='flex hover:scale-105 transition-transform flex-col px-6 rounded-[8px] py-6 justify-center gap-4 max-w-[350px] h-[250px] bg-[#FCFCFC] shadow-2xl'>
                    <img src={icon} width={30} alt="" />
                    <h5 className='text-[#333333] text-xl'>{card.titulo}</h5>
                    <p className='text-[#8B8C8C] text-sm'>{card.texto}</p>

                </div>
            )
        })}
      </div>
    </div>
  )
}

export default ServicesSection
