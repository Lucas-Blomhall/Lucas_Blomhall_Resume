import React, { useRef } from 'react';
import styles from './ContactStyles.module.css';
import emailjs from '@emailjs/browser';

// För att kunna skicka emails till sig själv installera: "npm i @emailjs/browser"

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1syjzfi', 'template_hac19h9', form.current, {
        publicKey: 'v1tuK24Y8Urg7VrA4',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log("message sent");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </section>
  );
}

export default Contact;
