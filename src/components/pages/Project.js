import React, { useEffect, useRef } from "react";
import FMImage from "../../images/fmsearchimg2.png";
import WDImage from "../../images/Dashboard1.JPG";
import CGImage from "../../images/CGImage.png";
import CQImage from "../../images/CQwide.JPG";
import WDPImage from "../../images/WDP2.JPG";
import podcastLogo from "../../images/podcast-logo.png";
import { gsap } from "gsap";
import GitHubIcon from "@mui/icons-material/GitHub";

const Project = () => {
  const elRef = useRef();
  const q = gsap.utils.selector(elRef);
  useEffect(() => {
    gsap.from(q(".row"), { opacity: 0, duration: 1, x: -100 });
  });

  return (
    <>
      <div className="container" id="work" ref={elRef}>
        <h1 className="text-center m-1">My Work</h1>
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              Project 1.
              <a
                className="cg-link"
                href="https://rmmccar92.github.io/Confused-Gamer/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-muted">Confused Gamer.</span>
              </a>
            </h2>
            <p className="lead">
              An application designed to recommend and provide information about
              video games.
            </p>
            <a
              href="https://github.com/rmmccar92/Confused-Gamer"
              className="github-icon"
            >
              <GitHubIcon />
            </a>
            <div className="technologies">
              <h6 className="text-center">Project Technologies:</h6>
              <div className="tech-icons">
                <div className="Js">
                  <i className="fab fa-js-square"></i>
                </div>
                <div className="html">
                  <i className="fab fa-html5"></i>
                </div>
                <div className="css">
                  <i className="fab fa-css3-alt"></i>
                </div>
                <div className="logo-box">
                  <img
                    className="material-logo"
                    src="https://seeklogo.com/images/M/materialize-logo-0FCAD8A6F8-seeklogo.com.png"
                    alt="materialize logo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <a
              className="cg-link"
              href="https://rmmccar92.github.io/Confused-Gamer/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="
                bd-placeholder-img bd-placeholder-img-lg
                featurette-image
                img-fluid
                mx-auto
              "
                width="500"
                height="500"
                src={CGImage}
                alt="Cofused Gamer Homepage"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />
              <title>Confused Gamer</title>
            </a>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              Project 2.
              <a
                href="https://still-tor-25996.herokuapp.com/"
                target="_blank"
                className="fms-link"
                rel="noreferrer"
              >
                {" "}
                <span className="text-muted">Farmer's Market Search.</span>
              </a>
            </h2>
            <p className="lead">
              A full stack application that allows local farmers and customers
              to congregate and provide information about nearby farmer's
              markets.
            </p>
            <a
              href="https://github.com/rmmccar92/Farmers-Market-Search"
              className="github-icon"
            >
              <GitHubIcon />
            </a>
            <div className="technologies">
              <h6 className="text-center">Project Technologies:</h6>
              <div className="tech-icons">
                <div className="Js">
                  <i className="fab fa-js-square"></i>
                </div>
                <div className="html">
                  <i className="fab fa-html5"></i>
                </div>
                <div className="css">
                  <i className="fab fa-css3-alt"></i>
                </div>
                <div className="node">
                  <i className="fab fa-node-js"></i>
                </div>
                <div className="bootstrap">
                  <i className="fab fa-bootstrap"></i>
                </div>
                <div className="logo-box">
                  <img
                    className="mysql-logo"
                    src="https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg"
                    alt="MySQL Logo"
                  />
                </div>
                <div className="logo-box">
                  <img
                    className="gsap-logo"
                    src="https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg"
                    alt="gsap Logo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 order-md-1">
            <a
              href="https://still-tor-25996.herokuapp.com/"
              target="_blank"
              className="fms-link"
              rel="noreferrer"
            >
              <img
                className="
                bd-placeholder-img bd-placeholder-img-lg
                featurette-image
                img-fluid
                mx-auto
              "
                width="500"
                height="500"
                src={FMImage}
                alt="Farmer's Market Search"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />
              <title>Farmer's Market Search</title>
            </a>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              Project 3.
              <a
                href="https://pod-central.herokuapp.com/"
                target="_blank"
                className="pc-link"
                rel="noreferrer"
              >
                <span className="text-muted">PodCentral</span>
              </a>
            </h2>

            <p className="lead">
              PodCentral is a full stack web application that allows users to
              browse their favorite podcasts and to create a podcast of their
              own and upload episodes
            </p>
            <a
              href="https://github.com/rmmccar92/PodCentral"
              className="github-icon"
            >
              <GitHubIcon />
            </a>
            <div className="technologies">
              <h6 className="text-center">Project Technologies:</h6>

              <div className="tech-icons">
                <div className="Js">
                  <i className="fab fa-js-square"></i>
                </div>
                <div className="html">
                  <i className="fab fa-html5"></i>
                </div>
                <div className="css">
                  <i className="fab fa-css3-alt"></i>
                </div>
                <div className="node">
                  <i className="fab fa-node-js"></i>
                </div>
                <div className="React">
                  <i className="fab fa-react"></i>
                </div>
                <div className="logo-box">
                  <img
                    className="gql-logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/512px-GraphQL_Logo.svg.png"
                    alt="GraphQL Logo"
                  />
                </div>
                <div className="logo-box">
                  <img
                    className="mui-logo"
                    src="https://cdn.worldvectorlogo.com/logos/material-ui.svg"
                    alt="Material UI logo"
                  />
                </div>
                <div className="logo-box">
                  <img
                    className="mongo-logo"
                    src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
                    alt="Mongo DB logo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <a
              href="https://pod-central.herokuapp.com/"
              target="_blank"
              className="fms-link"
              rel="noreferrer"
            >
              <img
                className="
                bd-placeholder-img bd-placeholder-img-lg
                featurette-image
                img-fluid
                mx-auto
              "
                alt="PodCentral"
                width="300"
                height="250"
                src={podcastLogo}
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />
              <title>PodCentral</title>
            </a>
          </div>
        </div>

        <hr className="featurette-divider" />

        <h1 className="text-center m-1">Other Work</h1>
        <div className="row">
          <div className="col-lg-4">
            <img
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              src={CQImage}
              alt="Code Quiz"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            />
            <title>Code Quiz</title>
            <h2>Code Quiz</h2>
            <p>
              A simple code quiz meant to demonstrate the fundamentals of
              javascript.
            </p>
            <p>
              <a
                className="btn btn-secondary"
                href="https://rmmccar92.github.io/Javascript-Code-Quiz/"
              >
                Check it out here! &raquo;
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              alt="Weather Dashboard"
              src={WDImage}
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            />
            <title>Weather Dashboard</title>

            <h2>Weather Dashboard</h2>
            <p>
              An application meant to track the weather using the Open Weather
              API.
            </p>
            <p>
              <a
                className="btn btn-secondary"
                href="https://rmmccar92.github.io/Weather-Dashboad/"
              >
                Check it out here! &raquo;
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              src={WDPImage}
              alt="Work Day Planner"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            />
            <title>Work Day Planner</title>

            <h2>Work Day Planner</h2>
            <p>A simple application meant to track tasks during the workday.</p>
            <p>
              <a
                className="btn btn-secondary"
                href="https://rmmccar92.github.io/Work-Day-Planner/"
              >
                View details &raquo;
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
