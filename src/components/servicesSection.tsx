import React from 'react'
import icon from './../icons/blue-circles.svg'

const ServicesSection = () => {

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
        {
            titulo: 'Fashion Law',
            texto: 'Assessoria especializada no setor da moda, protegendo a criatividade e os direitos dos profissionais da área.'
        },
        {
            titulo: 'Direito Desportivo',
            texto: 'Assessoria especializada no setor da moda, protegendo a criatividade e os direitos dos profissionais da área.'
        },
        {
            titulo: 'Direito Tributário',
            texto: 'Soluções completas para questões patrimoniais, contratuais e de responsabilidade civil.'
        },
        {
            titulo: 'Direito de Família e Sucessões',
            texto: 'Assessoria especializada no setor da moda, protegendo a criatividade e os direitos dos profissionais da área.'
        },
    ]



  return (
    <div className='flex flex-col px-6 max-w-7xl mx-auto my-[50px] lg:my-[100px]'>
      <h3 className='text-[#818181] text-sm lg:text-xl '>Nossas especialidades</h3>
      <h4 className='text-[#333333] lg:text-[36px] pt-4 text-[28px] lg:w-[70%] '>Com uma abordagem humana e personalizada, levamos soluções jurídicas a empresas e pessoas físicas</h4>
      <div className='flex pt-12 lg:justify-start justify-center w-full gap-8 flex-wrap'>
        {cards.map((card)=> {
            return (
                <div className='flex hover:scale-105 transition-transform flex-col px-6 rounded-[8px] py-6 justify-center gap-4 max-w-[350px] h-[250px] bg-[#FCFCFC] shadow-2xl'>
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
