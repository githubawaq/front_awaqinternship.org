import React from "react";
import "./Footer.css";
import chec from "../../assets/partners/chec.png";
import booking from "../../assets/partners/booking.png";
import ean from "../../assets/partners/ean.png";
import elementor from "../../assets/partners/elementor.png";
import microsoft from "../../assets/partners/microsoft.png";
import rainbown from "../../assets/partners/rainbow.png";
import saleforce from "../../assets/partners/saleforce.png";
import sena from "../../assets/partners/sena.png";
import facebook from "../../assets/social/fcb.svg";
import instagram from "../../assets/social/insta.svg";
import linkedin from "../../assets/social/linked.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-content-top">
          <h5>CONFÍAN EN AWAQ</h5>
        </div>
        <div className="footer-content-top-logos">
          <img src={chec} alt="logo chec" />
          <img src={booking} alt="logo booking" />
          <img src={ean} alt="logo ean" />
          <img src={elementor} alt="logo elementor" />
          <img src={microsoft} alt="logo microsoft" />
          <img src={rainbown} alt="logo rainbown" />
          <img src={saleforce} alt="logo saleforce" />
          <img src={sena} alt="logo sena" />
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
                className="footer-social"
                src={facebook}
                alt="logo facebook"
                width="30px"
              />
              <img
                className="footer-social"
                src={instagram}
                alt="logo instagram"
                width="40px"
                color="red"
              />

              <img
                className="footer-social"
                src={linkedin}
                alt="logo ean"
                width="30px"
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
