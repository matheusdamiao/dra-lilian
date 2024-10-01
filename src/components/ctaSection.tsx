import React from 'react'
import video from './../images/contact-section.mp4'
import ButtonCTA from './Button'

const CtaSection = () => {
  return (
    <div className=' lg:h-[450px] relative bg-black w-full h-[600px] lg:my-[200px]'>
        <video src={video} loop muted autoPlay className='absolute w-full opacity-40 top-0 h-full object-cover'></video>
        <div className='max-w-7xl w-full mx-auto flex flex-col items-center justify-center h-full px-6'>
            <h3 className='text-[#C6C6C6] text-sm lg:text-xl z-40 text-center '>Entre em contato</h3>
            <h4 className='text-[#FFFFFF] text-[36px] z-30 text-center'> Estamos aqui para ajudar</h4>
            <p className='text-[#FFFFFF] text-center pb-10 z-50'>Agende uma consulta com nossa equipe e receba o suporte jurídico de que você precisa.</p>
             <ButtonCTA children={'Agende uma reunião'} backgroundColor="#FFFF"/>

        </div>
    </div>
  )
}

export default CtaSection
