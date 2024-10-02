import React from 'react'
import fotoOffice from './../images/foto-office.webp'
import useAnimateOnView from '../utils/useAnimateOnView'
import { motion } from 'framer-motion'

const AboutOffice = () => {
  const {TitleAnimation, animationControls, ref } = useAnimateOnView()

  

  return (
    <div  id='sobre' className='bg-[#333333] h-full lg:h-[800px] pt-10 lg:pt-0 relative overflow-hidden flex flex-wrap lg:flex-nowrap '>
        <img src={fotoOffice} alt=''  className='w-full h-[450px] lg:h-full lg:max-w-[500px] xl:max-w-[600px] object-cover order-2 lg:order-1'/>

        <div ref={ref} className='flex flex-col max-w-[800px] px-6 py-16 lg:px-24 lg:py-12 gap-8 justify-center order-1 lg:order-2'>
            <motion.h3
             initial='hidden'
             animate={animationControls} variants={TitleAnimation}
            transition={{delay: 0.3, duration: 0.5}}
            className='text-[#C6C6C6] text-sm lg:text-xl z-40 '>Conheça o Escritório</motion.h3>
            <motion.h2
             initial='hidden'
             animate={animationControls} variants={TitleAnimation}
            transition={{delay: 0.3, duration: 0.5}}
            className='text-[28px] text-white lg:text-5xl !leading-[128%] '>Del Bianco Domingos: Sociedade de Advocacia</motion.h2>
            <motion.p
             initial='hidden'
             animate={animationControls} variants={TitleAnimation}
            transition={{delay: 0.3, duration: 0.5}}
            className='text-base text-white'>
            Mais do que um escritório de advocacia, DEL BIANCO Advogados é um espaço onde a justiça, a solidariedade e a humanidade se encontram para resolver as questões mais desafiadoras da vida.
            <br /><br />
            Com uma atuação destacada na área contenciosa, representamos nossos clientes em todas as Cortes nacionais e órgãos administrativos, tanto em esferas particulares quanto empresariais. 
            <br /> <br />
            Entendemos que o direito não se limita ao campo judicial. Por isso, oferecemos uma assessoria extrajudicial diferenciada, focada em soluções alternativas de conflitos que priorizam a integridade e o bem-estar dos envolvidos.
            </motion.p>
        </div>
    

    </div>
  )
}

export default AboutOffice
