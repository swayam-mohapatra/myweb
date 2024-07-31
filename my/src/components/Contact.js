import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <div className='contact-container'>
        <div className='contact-info'>
          <h2>Stay Updated</h2>
          <br></br>
          <br></br>
          
          <p>Need to get in touch with us?</p>
          <br></br>
          
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <br></br>
          <br></br>
        </div>
        <div className='contact-form'>
          <form>
            <label>Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>What can we help you with?</label>
            <textarea></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;