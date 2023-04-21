import React from "react";
import alojamientos from "../../assets/images/alojamientos.jpg";

const Housing = () => {
  return (
    <div className="w-11/12	my-0	mr-auto ml-auto mb-12 h-[70vh] xl:h-[130vh]  lg:h-[130vh] md:h-[120vh] sm:h-[130vh]">
      <div className="text-center">
        <h1 className="text-5xl text-turquoise-blue font-nanum tracking-widest	 ">
          Nuestros Alojamientos
        </h1>
        <p className="text-green text-xl mt-5 mb-10 font-custom">
          Ofrecemos un ambiente acogedor y seguro para aquellos estudiantes que
          buscan un lugar para alojarse mientras realizan sus estudios.
        </p>
      </div>

      <div className="flex w-10/12 my-0	mr-auto ml-auto 	 sm:flex-col  md:flex-col  lg:flex-col  xl:flex-col">
        <div className="w-full	h-96 	bg-black  rounded-lg relative sm:w-full sm:h-[450px] sm:mt-5   md:w-full md:mt-5 md:h-80 lg:w-full lg:mt-5  xl:w-full xl:mt-5 ">
          <div className="absolute w-4/5		 h-full  z-10 top-10 left-10">
            <h1 className="text-5xl leading-10 font-custom text-white sm:text-3xl">
              Alojamientos
            </h1>
            <h6 className=" mb-7 text-l font-custom text-white mt-5 sm:text-xs md:text-xs lg:text-xs">
              Nuestros alojamientos cuentan con habitaciones cómodas y equipadas
              con todo lo necesario para garantizar una estancia agradable.
              <br></br>
              Además, ofrecemos servicios adicionales como conexión Wi-Fi,
              limpieza semanal y acceso a áreas comunes, como la cocina y el
              salón. Estamos cerca de universidades, centros de investigación y
              áreas naturales. Creemos que nuestra ubicación es ideal para
              aquellos que buscan un lugar tranquilo y cercano a la naturaleza.
            </h6>
            <button className="bt-green ">Ver mas</button>
          </div>
          <img
            src={alojamientos}
            alt=""
            className="	w-full h-full rounded-lg z-0 opacity-50 object-cover	"
          />
        </div>
      </div>
    </div>
  );
};

export default Housing;
