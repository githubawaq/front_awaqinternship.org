import React from "react";
import "./Footer.css";
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
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-content-top">
          <h5>CONFÍAN EN AWAQ</h5>
        </div>
        <div className="footer-content-top-logos">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeInOut", type: "spring" }}
            src={chec}
            alt="logo chec"
          />
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 5, ease: "easeInOut", type: "spring" }}
            src={booking}
            alt="logo booking"
          />
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 4, ease: "easeInOut", type: "spring" }}
            src={ean}
            alt="logo ean"
          />
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
            src={elementor}
            alt="logo elementor"
          />
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
            src={microsoft}
            alt="logo microsoft"
          />
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 4, ease: "easeInOut", type: "spring" }}
            src={rainbown}
            alt="logo rainbown"
          />
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 5, ease: "easeInOut", type: "spring" }}
            src={saleforce}
            alt="logo saleforce"
          />
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeInOut", type: "spring" }}
            src={sena}
            alt="logo sena"
          />
        </div>
        <div className="footer-content-medium">
          <div className="footer-content-left">
            <h5>NAVEGACIÓN</h5>
            <div className="footer-content-left-info">
              <a href="">Internships</a>
              <a href="">Destinos</a>
              <a href="">Programas</a>
              <a href="">Alojamientos</a>
              <a href="">Novedades</a>
            </div>
          </div>
          <div className="footer-content-center">
            <h5>INFORMACIÓN</h5>
            <div className="footer-content-left-info">
              <a href="">Aviso Legal</a>
              <a href="">Mapa de Sitio</a>
              <a href="">Política de cookies</a>
              <a href="">Privacidad</a>
            </div>
          </div>
          <div className="footer-content-right">
            <h5>SEGUÍNOS</h5>
            <div className="footer-content-right-info">
              <img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="footer-social"
                src={facebook}
                alt="logo facebook"
              />
              <img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="footer-social"
                src={instagram}
                alt="logo instagram"
                color="red"
              />

              <img
                className="footer-social"
                src={linkedin}
                alt="logo ean"
                fill="blue"
              />
            </div>
            <div className="footer-content-right-register">
              <input
                type="text"
                className="footer-input"
                placeholder="Correo Electrónico"
              />
              <button className="footer-btn">Registrarse</button>
            </div>
          </div>
        </div>
        <div className="footer-content-copy">
          <p>© 2023 AWAQ. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
