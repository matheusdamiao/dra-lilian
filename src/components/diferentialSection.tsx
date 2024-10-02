import React, { useEffect, useRef } from 'react'
import law from './../icons/law-icon.svg';
import talk from './../icons/talk-icon.svg';
import team from './../icons/team-icon.svg'
import useAnimateOnView from '../utils/useAnimateOnView';
import { motion } from 'framer-motion'


const DiferentialSection = () => {

  const {TitleAnimation, animationControls, ref } = useAnimateOnView()

  return (
    <div ref={ref}  id='diferenciais' className='flex flex-col items-center justify-center px-6 max-w-7xl mx-auto my-[150px] lg:my-[200px]'>
       <h3 className='text-[#818181] text-sm lg:text-xl text-center'>Nossos diferenciais</h3>
       <motion.h4 
       initial='hidden'
        animate={animationControls} variants={TitleAnimation}
       transition={{delay: 0.3, duration: 0.5}}
       className='text-[#333333] lg:text-[36px] pt-4 text-[28px] text-center'>Por que escolher a Del Bianco Advogados?</motion.h4>
        <div className='flex flex-wrap items-center justify-center gap-10 pt-[80px]'>
            <motion.div
            initial='hidden'
            variants={{
            hidden: {opacity: 0, y: '20px'},
            show: {opacity: 1, y: 0,}
            }}
            animate={animationControls}
            transition={{delay: 0.4, duration: 1}}
            className='flex flex-col items-center justify-center gap-4 max-w-[340px]'>
                <img src={talk} width={54} alt="" />
                <h5 className='text-center text-xl  text-[#333333]'>Atendimento Personalizado</h5>
                <p className='text-sm text-center text-[#636363]'>Cada cliente recebe um serviço único, adaptado às suas necessidades específicas.</p>
            </motion.div>
            <motion.div
            
            initial='hidden'
            variants={{
            hidden: {opacity: 0, y: '20px'},
            show: {opacity: 1, y: 0,}
            }}
            animate={animationControls}
            transition={{delay: 0.7, duration: 1}}
            className='flex flex-col items-center justify-center gap-4 max-w-[340px]'>
                <img src={team} width={54} alt="" />
                <h5 className='text-center text-xl  text-[#333333]'>Equipe Multidisciplinar</h5>
                <p className='text-sm text-center text-[#636363]'>Nossos advogados têm expertise em diversas áreas do direito, oferecendo soluções integradas e completas.</p>
            </motion.div>

            <motion.div
              initial='hidden'
              variants={{
              hidden: {opacity: 0, y: '20px'},
              show: {opacity: 1, y: 0,}
              }}
              animate={animationControls}
              transition={{delay: 1, duration: 1}}
            
            className='flex flex-col items-center justify-center gap-4 max-w-[340px]'>
                <img src={law} width={54} alt="" />
                <h5 className='text-center text-xl  text-[#333333]'>Compromisso com a Justiça</h5>
                <p className='text-sm text-center text-[#636363]'>Mais do que resultados jurídicos, buscamos fazer a diferença na vida de nossos clientes, com ética e responsabilidade.</p>
            </motion.div>
        </div>
    </div>
  )
}

export default DiferentialSection
