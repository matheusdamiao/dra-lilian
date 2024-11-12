import React, { useState } from 'react'
import phone from './../icons/phone.svg'
import mail from './../icons/mail.svg'
import zap from './../icons/whatsapp.svg'
import location from './../icons/mdi_location.svg'
import Maps from './Maps'



const ContactSection = () => {
    const [inputs, setInputs] = useState({ nome: "", phone: "", message: "" });
    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    function encode(data: any) {
        return Object.keys(data)
          .map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
          )
          .join("&");
      }
    
      const handleFormRequest = async (event: any) => {
        event.preventDefault();
    
        setIsLoading(true);
    
        const form = event.target;
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": form.getAttribute("name"),
            ...inputs,
          }),
        })
          .then(() =>
            setTimeout(() => {
              setIsSent(true);
              setIsLoading(false);
              setInputs({ nome: "", message: "", phone: "" });
              setTimeout(() => {
                setIsSent(false);
              }, 2000);
            }, 2000)
          )
          .catch((error) => alert(error));
      };
    
      const handleFormChange = (event: any) => {
        let nome = event.target.name;
        let value = event.target.value;
        setInputs({
          ...inputs,
          [nome]: value,
        });
      };

  return (
    <div id='contato' className='pt-[100px]'>
      <div className='max-w-7xl flex  flex-col mx-auto w-full flex-wrap  lg:flex-row gap-4 lg:gap-16'>
        <div className='px-6 flex flex-col max-w-[650px] col-span-2'>
            <h3 className='text-[#C6C6C6] text-sm lg:text-xl z-40 '>Entre em contato</h3>
            <h2 className='text-[28px] text-[#333333] lg:text-5xl !leading-[128%]'>Agende uma consulta com nossos especialistas</h2>
            <div className='pt-10 flex flex-col gap-6 order-3'>
                {/* <div className='flex gap-4'>
                    <img src={phone} alt="" className='w-[30px]' />
                    <p className='text-[#686868]'>(11) 96058-5588</p>
                </div> */}

                <a  href="https://api.whatsapp.com/send?phone=5511960585588" target='_blank' className='flex items-center gap-4'>
                    <img src={zap} alt="" className='w-[30px] opacity-80 '/>
                    <p className='text-[#686868] hover:underline'>(11) 96058-5588</p>
                </a>

                <div className='flex items-center gap-4'>
                    <img src={mail} alt="" className='w-[30px]'/>
                    <p className='text-[#686868] text-wrap text-sm lg:text-base'> liliandbd@gmail.com</p>
                </div>

                <div className='flex items-center gap-4'>
                    <img src={location} alt="" className='w-[30px]' />
                    <p className='text-[#686868] text-wrap text-sm '>Alameda Santos, 2159 - 15º Andar - Jardim Paulista, São Paulo - SP</p>
                </div>

                <div className='flex items-center gap-4'>
                    <img src={location} alt=""  className='w-[30px]'/>
                    <p className='text-[#686868] text-wrap text-sm '>Rua Dr Bormann, nº 13 - salas 307, 308, 309 - Centro - Niterói - RJ</p>
                </div>
            
            </div>

        </div>
       
      

        <form
            className="px-6 py-6 items-center lg:items-start order-2 lg:col-span-3 group flex flex-col w-full max-w-[500px]"
            noValidate
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={(e) => handleFormRequest(e)}
          >
            <div className="flex flex-col  w-full">
              <input type="hidden" name="form-name" value="contact" />
              <label className="mb-2 block">Nome</label>
              <input
                className="peer mb-2 w-full max-w-md pl-4 py-3 border-[2px] focus:border-gray-600 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 focus:outline-none rounded-lg empty:border-gray-200 border-solid bg-transparent valid:[&:not(:placeholder-shown)]:border-green"
                type="text"
                placeholder="Nome"
                value={inputs.nome}
                name="nome"
                onChange={(e) => handleFormChange(e)}
                required
                pattern="^[\p{L} ']+$"
              />
              <span className="hidden w-full text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block ">
                Insira seu nome
              </span>
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-2 block">Telefone</label>
              <input
                className="peer w-full max-w-md mb-2 pl-4 py-3 border-[2px] focus:border-gray-600 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 focus:outline-none rounded-lg empty:border-gray-200 border-solid bg-transparent valid:[&:not(:placeholder-shown)]:border-green"
                type="text"
                placeholder="Telefone"
                value={inputs.phone}
                name="phone"
                onChange={(e) => handleFormChange(e)}
                required
              />
              <span className="hidden mb-4 w-full text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block ">
                Insira um telefone
              </span>
            </div>
            <div className="flex flex-col  w-full">
              <label className="mb-2 block">Mensagem</label>
              <textarea
                className="peer w-full h-[150px]  max-w-md pl-4 mb-2 py-3 border-[2px] focus:border-gray-600 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 focus:outline-none rounded-lg empty:border-gray-200 border-solid bg-transparent valid:[&:not(:placeholder-shown)]:border-green"
                placeholder="Olá, Dra. Lilian, tudo bem?"
                value={inputs.message}
                name="message"
                onChange={(e) => handleFormChange(e)}
              />
              <span className="mb-4 hidden w-full text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block ">
                Insira uma mensagem
              </span>
            </div>
            <button
              className={`items-center bg-gray-200 text-gray-700 font-medium flex justify-center mt-2 text-base w-full max-w-md disabled:opacity-40 bg-amarelo hover:bg-gradient-to-br focus:ring-4 focus:ring-gray-600 rounded-lg px-5 py-4 text-center mb-2 group-invalid:pointer-events-none group-invalid:opacity-40 group-valid:shadow-2xl group-valid:hover:shadow-none`}
              type="submit"
            >
              {isLoading && (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FFFFF"
                    d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      dur="0.75s"
                      values="0 12 12;360 12 12"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
              )}
              {isSent
                ? "Mensagem enviada!"
                : isLoading
                ? ""
                : "Enviar Mensagem"}
            </button>
           </form> 
      </div>
      <div className='lg:mt-[120px]'>
        <Maps/>
      </div>
    </div>
  )
}

export default ContactSection
