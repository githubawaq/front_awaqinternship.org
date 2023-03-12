import React from "react";
import { easeInOut, motion } from "framer-motion";
import chec from "../../assets/partners/chec.png";
import booking from "../../assets/partners/booking.png";
import ean from "../../assets/partners/ean.png";
import elementor from "../../assets/partners/elementor.png";
import microsoft from "../../assets/partners/microsoft.png";
import rainbown from "../../assets/partners/rainbow.png";
import saleforce from "../../assets/partners/saleforce.png";
import sena from "../../assets/partners/sena.png";
import facebook from "../../assets/social/facebook.svg";
import instagram from "../../assets/social/instagram.svg";
import linkedin from "../../assets/social/linkedin.svg";

const Footer = () => {
  return (
    <footer className="w-full	bg-grey-clear">
      <div>
        <div className="flex 	items-center justify-center text-grey">
          <h5 className="mt-5 mb-5 font-semibold	">CONFÍAN EN AWAQ</h5>
        </div>
        <div className="w-11/12 flex flex-wrap items-center	justify-between	my-0	mr-auto ml-auto ">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeInOut", type: "spring" }}
            src={chec}
            alt="logo chec"
            className="pt-2.5"
          />
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 5, ease: "easeInOut", type: "spring" }}
            src={booking}
            alt="logo booking"
            className="pt-2.5"
          />
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 4, ease: "easeInOut", type: "spring" }}
            src={ean}
            alt="logo ean"
            className="pt-2.5"
          />
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
            src={elementor}
            alt="logo elementor"
            className="pt-2.5"
          />
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
            src={microsoft}
            alt="logo microsoft"
            className="pt-2.5"
          />
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 4, ease: "easeInOut", type: "spring" }}
            src={rainbown}
            alt="logo rainbown"
            className="pt-2.5"
          />
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 5, ease: "easeInOut", type: "spring" }}
            src={saleforce}
            alt="logo saleforce"
            className="pt-2.5"
          />
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeInOut", type: "spring" }}
            src={sena}
            alt="logo sena"
            className="pt-2.5"
          />
        </div>
        <div className="text-grey flex justify-center w-11/12 my-0	mr-auto ml-auto mb-11 mt-20 sm:flex-col md:flex-col sm:text-center	sm:items-center  md:text-center	md:items-center	">
          <div className="h-full w-2/6 mb-5">
            <h5 className="font-semibold		">NAVEGACIÓN</h5>
            <div className="flex flex-col	">
              <a className="no-underline	 text-base	 font-thin	text-grey " href="">
                Internships
              </a>
              <a className="no-underline	 text-base	 font-thin	text-grey " href="">
                Destinos
              </a>
              <a className="no-underline	 text-base	 font-thin	text-grey " href="">
                Programas
              </a>
              <a className="no-underline	 text-base	 font-thin	text-grey " href="">
                Alojamientos
              </a>
              <a className="no-underline	 text-base	 font-thin	text-grey " href="">
                Novedades
              </a>
            </div>
          </div>
          <div className="h-full w-2/6 mb-5">
            <h5 className="font-semibold		">INFORMACIÓN</h5>
            <div className="flex flex-col	">
              <a href="" className="no-underline	 text-base	 font-thin	text-grey ">
                Aviso Legal
              </a>
              <a className="no-underline	 text-base	 font-thin	text-grey " href="">
                Mapa de Sitio
              </a>
              <a className="no-underline	 text-base	 font-thin	text-grey " href="">
                Política de cookies
              </a>
              <a className="no-underline	 text-base	 font-thin	text-grey " href="">
                Privacidad
              </a>
            </div>
          </div>
          <div className="h-full w-2/6 mb-5">
            <h5 className="font-semibold		">SEGUÍNOS</h5>
            <div className="flex flex-row	items-center	sm:justify-center	md:justify-center">
              <img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-7	cursor-pointer"
                src={facebook}
                alt="logo facebook"
              />
              <img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-7	cursor-pointer	"
                src={instagram}
                alt="logo instagram"
                color="red"
              />

              <img className="w-7	" src={linkedin} alt="logo ean" fill="blue" />
              {/* //filter: invert(26%) sepia(33%) saturate(392%) hue-rotate(135deg) brightness(102%) contrast(93%); */}
            </div>
            <div className="flex items-center mt-5">
              <input
                type="text"
                className="w-2/5	h-9	p-1 sm:hidden md:hidden lg:hidden "
                placeholder="Correo Electrónico"
              />
              <button className="bt-green sm:hidden md:hidden lg:hidden">
                Registrarse
              </button>
            </div>
          </div>
        </div>
        <div className="w-full	h-full flex intems-center justify-center text-grey ">
          <p className="text-xs	mt-10 mb-5 sm:mt-0">
            © 2023 AWAQ. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
