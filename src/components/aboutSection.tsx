import React from 'react'
import fotoLilian from './../images/new-foto-lilian-about.png'
import useAnimateOnView from '../utils/useAnimateOnView'
import { motion } from 'framer-motion'

const AboutSection = () => {

  const {TitleAnimation, animationControls, ref } = useAnimateOnView()

  return (
     <div ref={ref} id="fundadora" className="w-full h-full max-w-7xl mx-auto mt-[50px] lg:my-[150px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1200px] justify-center items-center gap-[20px] mx-auto  ">
        <div className="flex flex-col lg:order-2 lg:row-span-1 max-w-[450px] self-center  px-6">
            <h3 className='text-[#C6C6C6] text-sm lg:text-xl z-40 '>Conheça a fundadora</h3>
        </div>
        <img
          src={fotoLilian}
          className="lg:order-1 w-full lg:w-fit order-4 lg:row-span-5 lg:col-span-1 lg:max-h-[550px]  pt-10 lg:pt-0 max-h-[550px] object-cover lg:mx-auto"
        />
        
        <motion.h4
         initial='hidden'
         animate={animationControls} variants={TitleAnimation}
        transition={{delay: 0.3, duration: 0.5}}
        className='text-[#333333] text-[28px] lg:text-5xl z-30 lg:order-3 lg:row-span-1 px-6 !leading-[120%]'> Dra. Lilian Del Bianco Santos Domingos</motion.h4>
   
        <div className="lg:order-4 order-2 lg:row-span-2 text-[#636363] pt-5 gap-10 flex flex-col px-6">
          <motion.p
           initial='hidden'
           animate={animationControls} variants={TitleAnimation}
          transition={{delay: 0.3, duration: 0.5}}
          className='max-w-[450px]'>    
            Lilian é uma advogada dedicada, com atuação nas áreas do contencioso cível, direito do consumidor, imobiliário, propriedade, obrigações e contratos, sempre buscando soluções justas e cuidadosas para cada cliente.
          </motion.p>
        </div>
        
      </div>
    </div>
  )
}

export default AboutSection