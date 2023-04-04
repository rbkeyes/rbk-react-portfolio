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

  return (
    <>
    <div className="contact-div d-flex justify-content-end align-items-start"
    style={{margin: "0 5%"}}>
          <div className="me-4">
            <p className="mt-0 mb-0" style={{color: "var(--light-bright"}}> phone: 650-400-2394
            </p>
          </div>
          <div>
            <p className="mt-0 mb-0 hover">
              <a href="mailto: #">
                email: rbkeyes@gmail.com
              </a>
            </p>
          </div>
        </div>
    <main className="mt-4">
      <h2>Contact</h2>
      <div className="d-flex justify-content-start align-items-start">
        <form className="contact-form" onSubmit={handleSubmit}>
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
              style={{height: "10rem"}}
              onChange={handleMessage}
            ></textarea>
            <label>how can I help?</label>
          </div>
          <button type="submit" className="btn mt-3" id="submit-button">Submit</button>
        </form>
        
      </div>
    </main >
    </>
  )
};

export default ContactForm;
