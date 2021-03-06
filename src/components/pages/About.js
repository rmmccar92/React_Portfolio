import React, { useEffect, useRef } from "react";
import portrait from "../../images/me.jpg";
import { gsap } from "gsap";

const About = () => {
  const elRef = useRef();
  const q = gsap.utils.selector(elRef);
  useEffect(() => {
    gsap.from(q(".row"), { opacity: 0, duration: 1, x: -100 });
  });
  return (
    <div className="container" ref={elRef}>
      <hr className="featurette-divider" />
      <div className="about-me-head" id="about-me">
        <h1 className="text-center m-4">About Me</h1>
        <div className="row featurette am-feature">
          <div className="col-lg-9 bio m-3 p-3">
            <p className="lead m-5">
              Welcome to my Portfolio. I have always found myself drawn to the
              ability to create. Whether that's a digital or physical project
              there's a certain amount of craftsmanship that can be appreciated.
              So naturally I found myself drawn to web development.I have been
              working as an A/V technician and part time video editor for the
              last three years and while I still enjoy video editing I am
              excited to see what new feats I can accomplish within the web
              development environment.<br></br>
              <br></br>
              <br></br>
              Below you can see some of the projects I've worked on. I've chosen
              to showcase some of the work that I'm most proud of and I hope to
              update this page periodically with more advanced ventures in the
              future. Feel free to contact me through my contact information
              below and thank you for taking the time to look through my
              portfolio.
            </p>
            <div className="portraitBox">
              <img
                src={portrait}
                className="portrait rounded-circle"
                width="300"
                height="375"
                alt="Ryan McCarthy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
