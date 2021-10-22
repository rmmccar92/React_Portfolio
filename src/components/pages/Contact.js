import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { validateEmail } from "../../utils/helpers";
import { gsap } from "gsap";

const Contact = () => {
  //   const fade = useEffect(() => {
  //     gsap.from("error-text", { opactiy: 0, duration: 1.5 });
  //   });
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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name || !message) {
      setErrorMessage("Invalid submission");
      return;
    }

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
          action="https://formspree.io/f/mwkazejb"
          method="POST"
          id="contactForm"
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
              onClick={handleFormSubmit}
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
