import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer py-5 text-center mx-auto">
      <section className="contact mx-auto">
        <h2>Find Me Here</h2>
        <ul className="footer-links">
          <li>Email: rmmccar92@gmail.com</li>
          <li>
            Github:{" "}
            <a
              href="https://github.com/rmmccar92"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            Linkdin:{" "}
            <a
              href="https://www.linkedin.com/in/ryan-mccarthy-20950291/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            Stack OverFlow:{" "}
            <a
              href="https://stackoverflow.com/users/15835128/ryan-mccarthy"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-stack-overflow"></i>
            </a>
          </li>
          <li>
            <p> &copy;2021</p>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
