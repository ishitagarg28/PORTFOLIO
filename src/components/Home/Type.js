import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Computer Science Student",
          "Web Developer",
          "Tech Enthusiast",
          "Problem Solver",
          "Data Structure & Algo Solver",
          "Researcher & Innovator",
          "Lifelong Learner",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay:50
      }}
    />
  );
}

export default Type;
