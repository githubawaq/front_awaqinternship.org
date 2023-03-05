import React from "react";
import "./Board.css";
import board from "../../assets/icons/board.svg";
import info from "../../assets/icons/info.svg";
import email from "../../assets/icons/email.svg";

const Board = () => {
  return (
    <div className="board-container">
      <div className="board-top">
        <h1>Listo para abordar?</h1>
        <p>
          Juntos podemos hacer que tu experiencia de intercambio sea
          inolvidable.
        </p>
      </div>
      <div className="board-bottom">
        <div className="board-bottom-left">
          <div className="board-bottom-left-left">
            <img src={board} alt="" />
          </div>
          <div className="board-bottom-left-right">
            <h3>APLICA AHORA</h3>
            <h6>
              Completa tu aplicacion online y preparate para vivir una
              experiencia extraordinaria en el extranjero.
            </h6>
          </div>
        </div>
        <div className="board-bottom-center">
          <div className="board-bottom-center-left">
            <img src={info} alt="" />
          </div>
          <div className="board-bottom-center-right">
            <h3>INFORMACIÓN</h3>
            <h6>
              No estas seguro de que programa es el adecuado? Te ayudamos a
              elegir el programa que mejor se adapte a ti.
            </h6>
          </div>
        </div>

        <div className="board-bottom-right">
          <div className="board-bottom-right-left">
            <img src={email} alt="" />
          </div>

          <div className="board-bottom-right-right">
            <h3>CONTACTANOS</h3>
            <h6>
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
