import React from "react";
import { user } from "../data/user";

function About() {
  const image = "https://i.imgur.com/mV8PQxj.gif";

  return (
    <div id="about">
      <h2>About Me</h2>
      <img src={image} alt="I made this" />
      <p>
        Hello! My name is {user.name}. I’m a web developer from {user.city}.
      </p>
    </div>
  );
}

export default About;
