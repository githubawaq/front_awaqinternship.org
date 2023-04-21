import React from "react";
import board from "../../assets/icons/board.svg";
import info from "../../assets/icons/info.svg";
import email from "../../assets/icons/email.svg";

const Board = () => {
  return (
    <div className="w-11/12	my-0	mr-auto ml-auto mb-12">
      <div className="text-center">
        <h1 className="text-5xl text-turquoise-blue font-nanum tracking-widest	 ">
          Listo para abordar?
        </h1>
        <p className="text-green text-xl mt-5 font-custom ">
          Juntos podemos hacer que tu experiencia de intercambio sea
          inolvidable.
        </p>
      </div>

      <div className="flex flex-row items-center justify-around mt-12 text-white w-11/12	my-0	mr-auto ml-auto sm:flex-col sm:w-5/6	md:flex-col md:w-5/6 lg:flex-col lg:w-full xl:flex-col xl:w-full">
        <div className="flex items-center justify-center box-border no-underline text-white relative overflow-hidden bg-green w-3/12	 rounded-lg	z-10	xl:w-4/6		lg:w-11/12 md:w-11/12 sm:w-11/12 sm:mt-5 md:mt-5 lg:mt-5 xl:mt-5">
          <div className=" h-full w-2/5 flex items-center justify-center">
            <img src={board} alt="" className="w-24" />
          </div>
          <div className=" w-6/12 m-0 text-start	">
            <h3 className="font-bold mt-7 font-custom">APLICA AHORA</h3>
            <h6 className=" mb-7 text-xs font-custom">
              Completa tu aplicacion online y preparate para vivir una
              experiencia extraordinaria en el extranjero.
            </h6>
          </div>
        </div>
        <div className="flex items-center justify-center box-border no-underline text-white relative overflow-hidden bg-turquoise-blue w-3/12	 rounded-lg z-10 xl:w-4/6	lg:w-11/12 md:w-11/12 sm:w-11/12 sm:mt-5 md:mt-5 lg:mt-5 xl:mt-5">
          <div className="h-full w-2/5 flex items-center justify-center">
            <img src={info} alt="" className="w-20" />
          </div>
          <div className=" m-0 w-6/12 text-start">
            <h3 className="font-bold mt-7 font-custom">INFORMACIÓN</h3>
            <h6 className=" mb-7 text-xs font-custom">
              No estas seguro de que programa es el adecuado? Te ayudamos a
              elegir el programa que mejor se adapte a ti.
            </h6>
          </div>
        </div>

        <div className="flex items-center justify-center box-border no-underline text-white relative overflow-hidden bg-grey w-3/12	 rounded-lg z-10 xl:w-4/6	lg:w-11/12 md:w-11/12 sm:w-11/12 sm:mt-5 md:mt-5 lg:mt-5 xl:mt-5">
          <div className="h-full w-2/5 flex items-center justify-center">
            <img src={email} alt="" className="w-20" />
          </div>

          <div className="w-6/12 text-start">
            <h3 className="font-bold mt-7 font-custom">CONTACTANOS</h3>
            <h6 className=" mb-7 text-xs font-custom">
              Si tienes alguna duda o quieres saber mas sobre nuestros programas
              de intercambio, no dudes en contactarnos.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
