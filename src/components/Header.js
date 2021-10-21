import React from "react";
import portrait from "../images/me.jpg";

const Header = () => {
  return (
    <div className="img-box">
      <section className="site-head">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1 className="name">Ryan McCarthy</h1>
              <p className="subtitle">Full Stack Development Portfolio</p>
            </div>
            <div className="float-left">
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
      </section>

      <div className="hero"></div>
    </div>
  );
};

export default Header;
