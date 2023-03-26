import React, { useState } from 'react';

// contact form takes in props
function ContactForm(props) {
  // useState variables for name, email, and form message
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // useState variable to set valid true/false
  // const [validation, isValid] = useState('');

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

  // const handleInputValidation = (e) => {
  //   e.target.value ? isValid(true) : isValid(false);
  // };


const styles = {
  textarea: {
    height: "10rem"
  }
}

  return (
    <div className="d-flex justify-content-around align-items-start p-4">
    <form className="contact-form col-md-4" onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
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
      <div className='form-floating mb-3'>
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
      <div className='form-floating mb-3'>
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
      <button type="submit" className="btn btn-primary" id="submit-button">Submit</button>
    </form>
    </div>
  )
};

export default ContactForm;
