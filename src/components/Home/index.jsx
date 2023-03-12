import React from "react";
import Headboard from "./Headboard";
import Board from "./Board";
import Programs from "./Programs";
import Housing from "./Housing";

const Home = () => {
  return (
    <div>
      <Headboard />
      <Programs />
      <Housing />
      <Board />
    </div>
  );
};

export default Home;
