import React, { useEffect, useState } from 'react'
import logo from './../images/logo-branca.svg'
import useWindowDimensions from './../utils/useWindowDimension'
import { Link } from 'gatsby';

const Menu = () => {

  const [isOpen, setIsOpen] = useState(false);

  let size = useWindowDimensions();

  useEffect(() => {
    if(size){
    if (size.width > 800) {
      setIsOpen(false);
    }
    }
}, [size, isOpen]);

const handleMenuMobile = () =>{
  setIsOpen(!isOpen)
}


  return (
    <nav className=' lg:max-w-7xl w-full mx-auto z-[88888888888] h-[80px] sm:h-0 bg-menu-mobile fixed sm:relative'>
      
        < div className='pt-[25px] pl-8 max-w-6xl relative lg:mx-auto w-full flex items-center gap-[30px] lg:justify-between sm:px-5 lg:px-5 xl:px-0'>
            <div className=' lg:hidden block flex-0 flex-shrink-0  w-[150px]'>
              <Link to="/" className='cursor-pointer'><img src={logo} width={201} height={83} alt=''/></Link>
            </div>
            <ul className='hidden gap-[30px] sm:flex'>
              <li><a href="/#especialidades" className='text-base lg:text-lg text-white hover:text-gray-300 font-sans text-nowrap hover:after:w-full after:w-0 relative  hover:after:h-[4px]  after:bg-yellow hover:after:block after:transition-all after:duration-400 after:absolute after:bottom-[-10px]'>Especialidades</a></li>
              <li><a href="/#diferenciais" className='text-base lg:text-lg text-white hover:text-gray-300 text-nowrap hover:after:w-full after:w-0 relative  hover:after:h-[4px]  after:bg-yellow hover:after:block after:transition-all after:duration-400 after:absolute after:bottom-[-10px]'>Diferenciais</a></li>
              {/* <li><a href="/#informacoes" className='text-base lg:text-xl text-transparent hover:text-black text-nowrap hover:after:w-full after:w-0 relative  hover:after:h-[4px]  after:bg-yellow hover:after:block after:transition-all after:duration-400 after:absolute after:bottom-[-10px]'>Informações</a></li> */}
            </ul>
            <Link to='/'><div className='lg:pl-[40px] lg:block hidden '><img src={logo} width={201} height={83} alt='' className='lg:w-[90%]'/></div></Link>
            <ul className='hidden gap-[30px] sm:flex items-center'>
              <li><a href="/#sobre" className='text-base lg:text-lg text-white hover:text-gray-300 text-nowrap hover:after:w-full after:w-0 relative  hover:after:h-[4px]  after:bg-yellow hover:after:block after:transition-all after:duration-400 after:absolute after:bottom-[-10px]'>Sobre o Escritório</a></li>
              <li><a href="/#contato" className='text-base lg:text-lg text-white hover:text-gray-300 text-nowrap hover:after:w-full after:w-0 relative  hover:after:h-[4px]  after:bg-yellow hover:after:block after:transition-all after:duration-400 after:absolute after:bottom-[-10px]'>Contato</a></li>
            </ul>
          </div>


      <div onClick={()=> handleMenuMobile()} className={`fixed z-[99999999] right-6 top-6 bg-gray-100 border  transition-colors  sm:hidden w-[44px] h-[44px] !flex-shrink-0 rounded-full  flex items-center justify-center gap-1 flex-col`}>
        <span className={`${isOpen ? 'translate-y-[3px] rotate-45 !w-[20px]' : ''} transition-transform w-[14px] h-[2px] bg-gray-600 block rounded-lg `}> </span>
        <span className={`${isOpen ? 'hidden' : ''} w-[14px] h-[2px] bg-gray-600 block rounded-lg !flex-shrink-0`}> </span>
        <span className={`${isOpen ? 'translate-y-[-3px] rotate-[-45deg] !w-[20px]' : ''} transition-transform w-[14px] h-[2px] bg-gray-600 block rounded-lg `}> </span>
      </div>


      {isOpen ?  
        <div className='absolute top-0 translate-x-[0px] duration-500 transition-all bg-menu-aberto mt-[80px] text-white w-full h-[300px]'>
          <ul className='px-[20px] pt-[95px] flex flex-col gap-4 items-center ' >
            <li className='py-spacing-lg px-spacing-xl'>
              <a href='/sobre' onClick={()=> setIsOpen(!isOpen)} className='text-primary-base-white font-semibold hover:after:w-full after:w-0 relative  hover:after:h-[4px]  after:bg-yellow hover:after:block after:transition-all after:duration-700 after:absolute after:bottom-[-10px]'>Sobre o Escritório</a>
            </li>
            <li className='py-spacing-lg px-spacing-xl'>
              <a href='/areas-de-atuacao' onClick={()=> setIsOpen(!isOpen)} className='text-primary-base-white font-semibold hover:after:w-full after:w-0 relative  hover:after:h-[4px]  after:bg-yellow hover:after:block after:transition-all after:duration-700 after:absolute after:bottom-[-10px]'>Áreas de Atuação</a>
            </li>
            <li className='py-spacing-lg px-spacing-xl '>
              <a href='/#contato' onClick={()=> setIsOpen(!isOpen)} className='text-primary-base-white font-semibold hover:after:w-full after:w-0 relative  hover:after:h-[4px]  after:bg-yellow hover:after:block after:transition-all after:duration-700 after:absolute after:bottom-[-10px]' > Contato </a>
            </li>
          
          </ul>
        </div>
        :
        <div className={` transition-all absolute top-0 translate-x-[-1000px] duration-1000 w-full  h-[80svh]`}>
        </div>
      }



    </nav>
  )
}

export default Menu