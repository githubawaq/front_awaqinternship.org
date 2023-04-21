import React from "react";
import Headboard from "./Headboard";
import Board from "./Board";
import Programs from "./Programs";
import Housing from "./Housing";
import Destination from "./Destination";
import NavBar  from "../NavBar/NavBar";
import WhyTravel from "./WhyTravel"

const Home = () => {
  
  return (
    <div>    
      <NavBar /> 
      <Headboard />          
      <Programs />
      <Housing />
      <Destination />
      <WhyTravel />
      <Board />
    </div>
  );
};

export default Home;
