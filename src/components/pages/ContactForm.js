import React, { useState } from 'react';

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
      "margin-top": "1rem"
    },
    contactInfo: {
      // "margin": "1rem",
      "display": "inline",
      "color": "var(--light-bright"
      // "width": "6rem",
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
      <div className="contact-info d-flex justify-content-center align-items-center">
        <div style={styles.contactDiv}>
          <p style={styles.contactInfo}> phone: 650-400-2394
          </p>
        </div>
        <div className="hover" style={styles.contactDiv}>
          <p style={styles.contactInfo}>
            <a href="mailto: #">
              email: rbkeyes@gmail.com
            </a>
          </p>
        </div>
      </div>
    </main >
  )
};

export default ContactForm;
