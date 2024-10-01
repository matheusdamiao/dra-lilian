import React from 'react'
import fotoOffice from './../images/foto-office.webp'

const AboutOffice = () => {
  return (
    <div className='bg-[#333333] h-full lg:h-[800px] relative overflow-hidden flex flex-wrap lg:flex-nowrap '>
        <img src={fotoOffice} alt=''  className='w-full lg:max-w-[500px] xl:max-w-[700px] object-cover order-2 lg:order-1'/>

        <div className='flex flex-col max-w-[800px] px-6 py-16 lg:px-24 lg:py-12 gap-8 justify-center order-1 lg:order-2'>
            <h3 className='text-[#C6C6C6] text-sm lg:text-xl z-40 '>Conheça o Escritório</h3>
            <h2 className='text-[28px] text-white lg:text-5xl !leading-[128%] '>Del Bianco Domingos: Sociedade de Advocacia</h2>
            <p className='text-base text-white'>
            Mais do que um escritório de advocacia, DEL BIANCO Advogados é um espaço onde a justiça, a solidariedade e a humanidade se encontram para resolver as questões mais desafiadoras da vida.
            <br /><br />
            Com uma atuação destacada na área contenciosa, representamos nossos clientes em todas as Cortes nacionais e órgãos administrativos, tanto em esferas particulares quanto empresariais. 
            <br /> <br />
            Entendemos que o direito não se limita ao campo judicial. Por isso, oferecemos uma assessoria extrajudicial diferenciada, focada em soluções alternativas de conflitos que priorizam a integridade e o bem-estar dos envolvidos.
            </p>
        </div>
    

    </div>
  )
}

export default AboutOffice
