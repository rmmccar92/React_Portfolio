import React, { useEffect, useRef } from "react";
import resume from "../../images/Resume_3.pdf";
import mongoImg from "../../images/technologies/mongo.png";
import { gsap } from "gsap";

const Resume = () => {
  const elRef = useRef();
  const q = gsap.utils.selector(elRef);
  useEffect(() => {
    gsap.from(q("ul"), { opacity: 0, duration: 1, x: -100 });
  });
  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };
  const resumeLinkStyle = {
    color: "grey",
    textDecoration: "none",
  };
  return (
    <div className="container" ref={elRef}>
      <h1 className="text-center m-1">Technologies I've Worked With</h1>
      <hr className="featurette-divider" />
      <div className="languages list p-1">
        <ul className="p-4 text-center tech-list text-light">
          <li>
            <a
              href="https://www.javascript.com/"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              {" "}
              JavaScript
            </a>{" "}
            <i className="fab fa-js"></i>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              {" "}
              HTML
            </a>{" "}
            <i className="fab fa-html5"></i>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              {" "}
              CSS
            </a>{" "}
            <i className="fab fa-css3-alt"></i>
          </li>
          <li>
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              {" "}
              React
            </a>{" "}
            <i className="fab fa-react"></i>
          </li>
          <li>
            <a
              href="https://nodejs.org/en/"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              {" "}
              Node JS{" "}
            </a>
            <i className="fab fa-node-js"></i>
          </li>
          <li>
            <a
              href="https://expressjs.com/"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              {" "}
              Express
            </a>
          </li>
          <li>
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              {" "}
              MongoDB
            </a>
            <img src={mongoImg} className="mongo-logo" alt="MongoDb Logo" />
          </li>
          <li>
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              Bootstrap
            </a>
            <i className="fab fa-bootstrap"></i>
          </li>
          <li>
            {" "}
            <a
              href="https://www.mysql.com/"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              MySql
            </a>
          </li>
        </ul>
      </div>
      <h4 className="text-center m-1">
        Download my full Resume
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          style={resumeLinkStyle}
        >
          {" "}
          Here
        </a>
      </h4>
    </div>
  );
};

export default Resume;
