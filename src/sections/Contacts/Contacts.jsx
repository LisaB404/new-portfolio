import React from "react";
import { useState } from "react";
import "./Contacts.css";

export default function Contacts() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mdkgokjw", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Success message
        setStatus("success");
        form.reset(); // form reset
      } else {
        // Error message
        setStatus("error");
      }
    } catch (error) {
      // request error
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="contacts-container">
      <h2 className="page-title">Contacts</h2>
      <p className="contacts-text">
        Do you want to discuss work opportunities or web development? Get in
        touch!
      </p>

      {status === 'success' && (
        <div className="alert alert-success" role="alert">
          The message has been successfully sent! Thank you!
        </div>
      )}
      
      {status === 'error' && (
        <div className="alert alert-danger" role="alert">
          An error occurred. Try again later, please!
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="row form">
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="Name"
              autoComplete="given-name"
              className="form-control"
              placeholder="Name"
              required
            />
          </div>
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="mail" className="form-label">
              E-mail
            </label>
            <input
              type="mail"
              id="mail"
              name="Email"
              className="form-control"
              placeholder="e.g. janedoe@gmail.com"
              required
            />
          </div>
        </div>
        <div className="row form">
          <div className="col mb-3">
            <label htmlFor="subject" className="form-label">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="Subject"
              className="form-control"
              placeholder="e.g. work proposal"
              required
            />
          </div>
        </div>
        <div className="row form">
          <div className="col mb-3">
            <label htmlFor="message" className="form-label">
              Send me a message:
            </label>
            <textarea
              className="form-control"
              placeholder="e.g. Let's grab a coffeee and discuss the meaning of life :)"
              id="message"
              name="Message"
              rows="4"
              required
            ></textarea>
          </div>
        </div>
        <div className="row form">
          <div className="col mb-3 buttons">
            <button type="reset" className="btn btn-secondary" onClick={() => setStatus('')}>
              Clear
            </button>
            <button type="submit" id="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
