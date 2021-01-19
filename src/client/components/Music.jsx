import React from "react";

const Music = ({ source }) => {
  return (
    <audio id="mySound" autoPlay loop onCanPlayThrough={() => {
      document.getElementById("mySound").volume = 0.01;
    }}>
      <source src={source} type="audio/mpeg" />
    </audio>
  );
};

export default Music;
