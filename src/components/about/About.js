import React, { useEffect, useState } from "react";
import Typist from "react-typist";
import "./about.css";

function About() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setOpacity(100);
    }, 3000);
  }, []);
  return (
    <div>
      <div className="main">
        <div style={{ opacity: opacity }} className="image-div">
          <img
            src="https://www.linkpicture.com/q/IMG_21D74AF90805-1.jpeg"
            alt=""
          />
        </div>

        <Typist>
          <p className="fists-sentence">
            {" "}
            Hello there! My name is Ehsan Alimo from Sydney
          </p>
          <p className="second-sentence">
            A Full-Stack Web Developer who would love to make this world a
            better place to live for all of us and next generations. AND ALSO TO
            MAKE SO MUCH MONEY oOps... SORRY!
          </p>
          <Typist.Backspace count={46} delay={200} />
          <p className="third-sentence">
            I have a strong passion for web development and design which
            influences my professional work, as well as my side projects.
          </p>
        </Typist>
      </div>
    </div>
  );
}

export default About;
