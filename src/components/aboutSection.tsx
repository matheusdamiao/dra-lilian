import React from 'react'
import fotoLilian from './../images/foto-lilian-about.webp'

const AboutSection = () => {
  return (
     <div id="fundadora" className="w-full h-full max-w-7xl mx-auto mt-[50px] lg:my-[150px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1200px] justify-center items-center gap-[20px] mx-auto  ">
        <div className="flex flex-col lg:order-2 lg:row-span-1 max-w-[450px] self-center  px-6">
            <h3 className='text-[#C6C6C6] text-sm lg:text-xl z-40 '>Conheça a fundadora</h3>
        </div>
        <img
          src={fotoLilian}
          className="lg:order-1 order-4 lg:row-span-5 lg:col-span-1 lg:max-h-[550px]  pt-10 lg:pt-0 max-h-[550px] object-cover lg:mx-auto"
        />
        
        <h4 className='text-[#333333] text-[28px] lg:text-5xl z-30 lg:order-3 lg:row-span-1 px-6 !leading-[120%]'> Dra. Lilian Del Bianco Santos Domingos</h4>
   
        <div className="lg:order-4 order-2 lg:row-span-2 text-[#636363] pt-5 gap-10 flex flex-col px-6">
          <p className='max-w-[450px]'>    
            Lilian é uma advogada dedicada, com atuação nas áreas do contencioso cível, direito do consumidor, imobiliário, propriedade, obrigações e contratos, sempre buscando soluções justas e cuidadosas para cada cliente.
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default AboutSection