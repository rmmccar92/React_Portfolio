import React from "react";

const Footer = () => {
  return (
    <footer class="page-footer py-5 text-center">
      <section class="contact mx-auto">
        <h2>Contact</h2>
        <ul class="footer-links">
          <li>Email: rmmccar92@gmail.com</li>
          <li>
            Github:{" "}
            <a href="https://github.com/rmmccar92" target="_blank">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li>
            Linkdin:{" "}
            <a
              href="https://www.linkedin.com/in/ryan-mccarthy-20950291/"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </section>
      <p class="float-end">
        <a href="#">Back to top</a>
      </p>
      <p>&copy;2021</p>
    </footer>
  );
};

export default Footer;
