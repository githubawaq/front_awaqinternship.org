import React from "react";
import grupal from "../../assets/images/grupal.png";
import individual from "../../assets/images/individual.jpg";

const Programs = () => {
  return (
    <div className="w-11/12	my-0	mr-auto ml-auto mb-12 h-[70vh] xl:h-[130vh]  lg:h-[130vh] md:h-[120vh] sm:h-[130vh]">
      <div className="text-center">
        <h1 className="text-5xl text-turquoise-blue font-nanum tracking-widest	 ">
          Nuestros Programas
        </h1>
        <p className="text-green text-xl mt-5 mb-10 font-custom">
          Nos complace ofrecer dos opciones para aquellos interesados en
          intercambiar conocimientos y habilidades con otros estudiantes.
        </p>
      </div>
      <div className="flex w-10/12		my-0	mr-auto ml-auto sm:flex-col  md:flex-col  lg:flex-col  xl:flex-col">
        <div className="w-3/5	h-96	 bg-black mr-20 rounded-lg	 relative sm:w-full  md:w-full md:mt-5 md:h-80 lg:w-full lg:mt-5 xl:w-full xl:mt-5">
          <div className="absolute w-9/12	 h-full  z-10 top-10 left-10">
            <h1 className="text-5xl leading-10	font-custom	text-white sm:text-3xl	">
              Grupales
            </h1>
            <h6 className=" mb-7 text-l font-custom text-white mt-5 sm:text-xs md:text-xs	">
              Esta opción es ideal para aquellos que prefieren estudiar en
              grupo. En este intercambio, puedes unirte a un grupo de estudio
              que se enfoca en un tema en particular. Los grupos de estudio son
              una excelente manera de conocer a otros estudiantes con intereses
              similares, compartir conocimientos y habilidades, y ayudarse
              mutuamente a alcanzar sus metas académicas.
            </h6>
            <button className="bt-green ">Ver mas</button>
          </div>
          <img
            src={grupal}
            alt=""
            className="	w-full h-full rounded-lg z-0 opacity-50 object-cover	"
          />
        </div>
        <div className="w-2/5	h-96	bg-black  rounded-lg relative sm:w-full sm:h-80 sm:mt-5   md:w-full md:mt-5 md:h-80 lg:w-full lg:mt-5  xl:w-full xl:mt-5 ">
          <div className="absolute w-9/12	 h-full  z-10 top-10 left-10">
            <h1 className="text-5xl leading-10 font-custom text-white sm:text-3xl">
              Individuales
            </h1>
            <h6 className=" mb-7 text-l font-custom text-white mt-5 sm:text-xs md:text-xs	">
              Si prefieres estudiar de manera individual, esta opción es
              perfecta para ti. este intercambio, puede ser una excelente manera
              de conocer a otros estudiantes y establecer conexiones valiosas en
              el mundo académico.
            </h6>
            <button className="bt-green ">Ver mas</button>
          </div>
          <img
            src={individual}
            alt=""
            className="	w-full h-full rounded-lg z-0 opacity-50 object-cover	"
          />
        </div>
      </div>
    </div>
  );
};

export default Programs;
