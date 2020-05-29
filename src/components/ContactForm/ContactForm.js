// Customize this 'ContactForm.js' script and add it to your JS bundle.
// Then import it with 'import ContactForm from "./ContactForm.js"'.
// Finally, add a <ContactForm/> element whereever you wish to display the form.

import React from "react";
import './ContactForm.css';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="contact-wrapper">
        <form
          className="contact-form"
          onSubmit={this.submitForm}
          action="https://formspree.io/mjvaywbz"
          method="POST"
        >
          <label className="email-label">Email</label>
          <br />
          <input className="email-input" type="email" name="email" />
          <br />
          <label className="message-label">Message</label>
          <br />
          <textarea className="message-input" type="text" name="message" />
          <br />
          {status === "SUCCESS" ? <p>Thanks!</p> : <button className="contact-button">Send</button>}
          {status === "ERROR" && <p>
            An error occured. Please send your message to GeoffreyKHanson@gmail.com
            </p>
          }
        </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}