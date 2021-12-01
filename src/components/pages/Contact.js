import React, { useState, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import { validateEmail } from "../../utils/helpers";
import { gsap } from "gsap";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();

  useEffect(() => {
    gsap.from(".inputGroup", { opacity: 0, duration: 0.5, x: -100 });
    gsap.from("button", { opacity: 0, duration: 0.5, x: -100 });
    gsap.from("label", { opacity: 0, duration: 0.5, x: -100 });
  }, []);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name || !message) {
      setErrorMessage("Invalid submission");
      return;
    }
    const serviceId = "service_3oukn1q";
    const templateId = "template_5jwiz6m";
    const userId = "user_7wTqyhOq9QPQ2coZfDyp9";
    const templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => console.log(response))
      .then((error) => console.log(error));

    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div className="container" id="contact-form">
      <h1 className="text-center m-3 title">Contact</h1>
      <hr className="featurette-divider" />
      <div>
        <Form
          // action="mailto:rmmccar92@gmail.com"
          // method="POST"
          id="contactForm"
          ref={formRef}
          onSubmit={handleFormSubmit}
        >
          <Form.Group>
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
              value={name}
              className="inputGroup"
              onChange={handleInputChange}
              type="text"
              name="name"
              placeholder="Name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="emailAddress">Email</Form.Label>
            <Form.Control
              value={email}
              className="inputGroup"
              onChange={handleInputChange}
              id="emailAddress"
              name="email"
              type="email"
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control
              value={message}
              className="inputGroup"
              onChange={handleInputChange}
              id="message"
              type="text"
              placeholder="Message"
              name="message"
              as="textarea"
              rows="5"
            />
          </Form.Group>
          <div className="d-grid">
            <button
              id="btn-primary"
              // onClick={handleFormSubmit}
              className="btn-light btn mt-1"
              type="submit"
              name="action"
            >
              Submit
            </button>
          </div>
        </Form>
        {errorMessage && (
          <div className="text-danger mt-2">
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
