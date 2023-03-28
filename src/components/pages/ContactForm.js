import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaPhone } from 'react-icons/fa';
import { GoMail } from "react-icons/go";

function ContactForm() {
  // useState variables for name, email, and form message
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  // 🔮 use activities 15 & 16 to finish form functionality
  // todo: alerts for empty fields
  // todo: 

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔮 on submit - will add when I have a backend
    // props.onSubmit({
    //   id: Math.random(Math.floor() * 1000),
    //   name: name,
    //   email: email,
    //   message: message
    // });

    // reset state to "" for form fields on submit
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const styles = {
    textarea: {
      "height": "10rem",
    },
    contactDiv: {
      "margin": "3rem"
    },
    contactInfo: {
      "padding": "1rem",
      "display": "inline-block",
    }
  };

  return (
    <main>
      <div className="d-flex justify-content-center align-items-start">
        <form className="contact-form col-sm-12 col-md-8 col-lg-6" onSubmit={handleSubmit}>
          <h2>Contact</h2>
          <div className="form-floating mt-3">
            <input
              className="form-control name"
              type="text"
              placeholder="name"
              value={name}
              name="name"
              id="floatingName"
              onChange={handleName}
            ></input>
            <label>name</label>
          </div>
          <div className='form-floating mt-3'>
            <input
              className="form-control email"
              type="email"
              placeholder="email"
              value={email}
              name="email"
              id="floatingEmail"
              onChange={handleEmail}
            ></input>
            <label>email</label>
          </div>
          <div className='form-floating mt-3'>
            <textarea
              className="form-control message"
              type="text"
              placeholder="what can I do for you?"
              value={message}
              name="message"
              id="floatingMessage"
              style={styles.textarea}
              onChange={handleMessage}
            ></textarea>
            <label>what can I do for you?</label>
          </div>
          <button type="submit" className="btn mt-3" id="submit-button">Submit</button>
        </form>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div style={styles.contactDiv}>
        <IconContext.Provider value={{ className: "footer-icons", size: "1.5rem" }}>
        <FaPhone />
              <h5 style={styles.contactInfo}> 650-400-2394</h5>
        </IconContext.Provider>
        </div>
        <div style={styles.contactDiv}>
        <IconContext.Provider value={{ className: "footer-icons", size: "2rem" }}>
        <GoMail />
              <h5 style={styles.contactInfo}> rbkeyes@gmail.com</h5>
        </IconContext.Provider>
        </div>
      </div>
    </main >
  )
};

export default ContactForm;
