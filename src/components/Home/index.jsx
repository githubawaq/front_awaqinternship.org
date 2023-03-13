import React from "react";
import Headboard from "./Headboard";
import Board from "./Board";
import Programs from "./Programs";
import Housing from "./Housing";
import Destination from "./Destination";

const Home = () => {
  return (
    <div>
      <Headboard />
      <Programs />
      <Housing />
      <Destination />
      <Board />
    </div>
  );
};

export default Home;
