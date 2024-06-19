import React, { useState } from "react";
import dm from "./../icons/dm.svg";
import zap from "./../icons/whatsapp.svg";

const FormSection = () => {
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
    <div
      id="contato"
      className=" mx-auto max-w-7xl w-full py-[100px] lg:py-[150px]"
    >
      <div className="flex items-center flex-wrap  w-full relative">
        <div className="flex flex-col px-6 max-w-7xl w-full">
          <div className="flex items-center flex-wrap py-6 lg:flex-row flex-col gap-4">
            <img src={dm} alt="" width={45} height={45} />
            <h2 className="px-6  text-3xl lg:text-5xl text-[#151F18] font-medium !leading-tight  z-30">
              Diga ‘Olá!’
            </h2>
          </div>
          <p className="max-w-[600px] text-center lg:text-start w-full mx-auto lg:m-0">
            Ficou com alguma dúvida sobre como funciona a análise, ou deseja
            conversar melhor sobre, não deixe de enviar uma mensagem :)
          </p>

          <form
            className="py-6 items-center lg:items-start group lg:row-span-4 flex  flex-col"
            noValidate
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={(e) => handleFormRequest(e)}
          >
            <div className="flex flex-col max-w-[400px] w-full">
              <input type="hidden" name="form-name" value="contact" />
              <label className="mb-2 block">Nome</label>
              <input
                className="peer mb-2 w-full max-w-sm pl-4 py-3 border-[2px] focus:border-lightBlue invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 focus:outline-none rounded-lg empty:border-gray-400 border-solid bg-transparent valid:[&:not(:placeholder-shown)]:border-green"
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
            <div className="flex flex-col max-w-[400px] w-full">
              <label className="mb-2 block">Telefone</label>
              <input
                className="peer w-full max-w-sm mb-2 pl-4 py-3 border-[2px] focus:border-lightBlue invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 focus:outline-none rounded-lg empty:border-gray-400 border-solid bg-transparent valid:[&:not(:placeholder-shown)]:border-green"
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
            <div className="flex flex-col max-w-[400px] w-full">
              <label className="mb-2 block">Mensagem</label>
              <textarea
                className="peer w-full  max-w-sm pl-4 mb-2 py-3 border-[2px] focus:border-lightBlue invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 focus:outline-none rounded-lg empty:border-gray-400 border-solid bg-transparent valid:[&:not(:placeholder-shown)]:border-green"
                placeholder="Olá, Fábio, tudo bem?"
                value={inputs.message}
                name="message"
                onChange={(e) => handleFormChange(e)}
              />
              <span className="mb-4 hidden w-full text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block ">
                Insira uma mensagem
              </span>
            </div>
            <button
              className={`items-center bg-[#48664E] text-[#ECF4E4] flex justify-center mt-2 font-title  text-base w-full max-w-sm disabled:opacity-40 bg-amarelo hover:bg-gradient-to-br focus:ring-4 focus:ring-green-900 rounded-lg px-5 py-4 text-center mb-2 group-invalid:pointer-events-none group-invalid:opacity-40 group-valid:shadow-2xl group-valid:hover:shadow-none`}
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
            <span className="text-center w-full max-w-sm py-2 text-sm text-gray-500">
              Ou se preferir{" "}
            </span>
            <a
              href="https://api.whatsapp.com/send?phone=555192787808"
              target="_blank"
              className="hover:cursor-pointer px-4 py-4 bg-green-500 text-[#ECF4E4] w-full max-w-sm rounded-lg mt-2 flex items-center gap-4 justify-center"
            >
              <img src={zap} width={24} alt="" />
              Falar pelo WhatsApp
            </a>
          </form>
        </div>
        {/* <img
          src={bg}
          width={645.17}
          className="px-6  lg:px-0 max-h-[500px] lg:max-h-[650px] w-fit mx-auto object-cover lg:absolute right-0"
        /> */}
      </div>
    </div>
  );
};

export default FormSection;
