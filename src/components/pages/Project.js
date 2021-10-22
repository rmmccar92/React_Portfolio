import React from "react";
import image from "../../images/fmsearchimg2.png";

const Project = () => {
  return (
    <>
      <div>
        <h2 classNameName="featurette-heading">
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
          A full stack application that allows local farmers and customers to
          congregate and provide information about nearby farmer's markets.
        </p>
      </div>
      <div className="col-md-5 order-md-1">
        <a
          href="https://still-tor-25996.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          className="fms-link"
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
            src={image}
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
          <title>Farmer's Market Search</title>
        </a>
      </div>
    </>
  );
};

export default Project;
