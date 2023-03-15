import React from "react";
import colombia from "../../assets/images/colombia.jpg";
import SeparatorHome from "../ReuseProvider/Separator";

const Destination = () => {
  return (
    <div className="w-11/12	my-0	mr-auto ml-auto mb-12 h-[100vh] xl:h-[220vh]  lg:h-[200vh] md:h-[200vh] sm:h-[200vh]">
      <div className="text-center">
        <h1 className="text-5xl text-turquoise-blue font-nanum tracking-widest	 ">
          Nuestros Destinos
        </h1>
        <p className="text-green text-xl mt-5 mb-20 font-custom ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>

      <div className="flex lg:flex-col xl:flex-col md:flex-col sm:flex-col w-11/12	my-0	mr-auto ml-auto ">
        <div className="max-w-sm mx-auto bg-white mb-5 rounded-xl shadow-md overflow-hidden ">
          <div
            className="h-48 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://elcampesino.co/wp-content/uploads/2016/07/e6-1024x685.jpg)`,
            }}
          ></div>
          <div className="p-6">
            <h3 className="text-lg font-medium text-turquoise-blue">
              PROXIMAMENTE
            </h3>
            <p className="mt-4 text-grey">
              Proximamente podrás conocer en detalle todos los destinos que
              tenemos parea vos
            </p>
            <div className="mt-6">
              <button className="bt-green sm:hidden md:hidden lg:hidden">
                Ver mas
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-sm mx-auto bg-white mb-5 rounded-xl shadow-md overflow-hidden">
          <div
            className="h-48 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://content.skyscnr.com/m/69b58f3d60b5f77e/original/GettyImages-146967694.jpg)`,
            }}
          ></div>
          <div className="p-6">
            <h3 className="text-lg font-medium text-turquoise-blue">
              PROXIMAMENTE
            </h3>
            <p className="mt-4 text-grey">
              Proximamente podrás conocer en detalle todos los destinos que
              tenemos parea vos
            </p>
            <div className="mt-6">
              <button className="bt-green sm:hidden md:hidden lg:hidden">
                Ver mas
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white  mb-5 rounded-xl shadow-md overflow-hidden">
          <div
            className="h-48 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://ep01.epimg.net/elviajero/imagenes/2019/04/16/album/1555433024_824850_1555571455_noticia_normal.jpg)`,
            }}
          ></div>
          <div className="p-6">
            <h3 className="text-lg font-medium text-turquoise-blue">
              PROXIMAMENTE
            </h3>
            <p className="mt-4 text-grey">
              Proximamente podrás conocer en detalle todos los destinos que
              tenemos parea vos
            </p>
            <div className="mt-6">
              <button className="bt-green sm:hidden md:hidden lg:hidden">
                Ver mas
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <button className="bt-white">Mas Destinos</button>
      </div>
      <SeparatorHome />
    </div>
  );
};

export default Destination;
