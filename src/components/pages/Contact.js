import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "Name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!email || !name || !message) {
      setErrorMessage("Email or name is invalid");
      return;
    }

    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div className="container-" id="contact-form">
      <h1 className="text-center m-3">Contact</h1>
      <hr className="featurette-divider" />
      <div>
        <form className="form">
          <div className="smallFields">
            <input
              value={email}
              className="emailForm"
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="email"
            />
            <input
              value={name}
              className="nameForm"
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="name"
            />
          </div>
          <div className="form-group">
            <label for="message">Message</label>
            <textarea
              onChange={handleInputChange}
              className="form-control"
              id="message"
              rows="3"
            ></textarea>
          </div>
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
