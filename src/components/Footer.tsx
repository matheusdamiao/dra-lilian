import { Link } from 'gatsby'
import React from 'react'
import logo from './../images/logo-santos-white.svg'
import phone from './../icons/phone.svg'
import mail from './../icons/mail.svg'
import location from './../icons/mdi_location.svg'




const Footer = () => {
  return (
    <footer className='bg-[#373435] w-full h-full '>
      <div className='max-w-7xl w-full mx-auto flex flex-col justify-between h-full px-10'>

        <div className='flex justify-between lg:gap-0 gap-10 flex-wrap pt-[80px]'>
            <div className='flex flex-col h-[450px] gap-20'>

                <div>
                    <img src={logo} alt='logo' width={331} className='w-[300px]' height={100}/>
                </div>


                <div className='flex flex-col gap-6  '>
                    <div className='flex items-center gap-5'>
                        <img src={phone} alt='icone' width={27} height={27}/>
                        <p className='text-[#CDCDCD] text-sm'>(11) 96058-5588</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img src={mail} alt='icone' width={27} height={27}/>
                        <p className='text-[#CDCDCD] text-sm'>liliandbd@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-5'>
                         <img src={location} alt='icone' width={27} height={27}/>
                        <p className='text-[#CDCDCD] text-sm'>Alameda Santos, 2159 - 15º Andar - Jardim Paulista, São Paulo - SP</p>
                    </div>
                    <div className='flex items-center gap-5'>
                         <img src={location} alt='icone' width={27} height={27}/>
                        <p className='text-[#CDCDCD] text-sm'>Rua Dr Bormann, nº 13 - salas 307, 308, 309 - Centro - Niterói - RJ</p>
                    </div>
                </div>

            </div>

            <div className='flex gap-20 lg:gap-4 flex-wrap flex-col lg:flex-row lg:flex-nowrap pt-[50px] pb-14 lg:pb-0 w-[450px] justify-between'>
                <div className='flex flex-col gap-8'>
                    <h5 className='text text-white' >Menu do Site</h5>
                    <ul className='flex flex-col gap-4 text-[#aaaaaa]'>
                        <li><Link to='/#especialidades'>Especialidades</Link></li>
                        <li><Link to='/#diferenciais'>Diferenciais</Link></li>
                        <li><Link to='/#sobre'>Sobre o Escritório</Link></li>
                        <li><Link to='/#contato'>Entre em contato</Link></li>

                    </ul>
                </div>
               
            </div>


        </div>

     

      </div>
      <div className='flex bg-[#1B1C1C] text-sm justify-center lg:justify-between gap-4 flex-wrap py-8 text-[#CDCDCD]'>
         <div className='flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto'>
            <small> Todos os direitos Reservados - 2024</small>

            <small>Del Bianco Santos - Advocacia e Consultoria Jurídica </small>

            <small><a href='https://matheusdamiao.com.br' target='_blank'>Desenvolvido por Matheus Damião </a></small>    
        </div>         
  
      </div>
    </footer>
  )
}

export default Footer
