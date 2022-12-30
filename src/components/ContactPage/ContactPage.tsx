import React, { ReactEventHandler } from 'react';
import styles from "./ContactPage.module.css";
import emailjs from '@emailjs/browser';
import {useContext} from "react";
import DataContext from "../../DataContext"
import { useState } from "react";

export const ContactPage = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [confirmationText, setConfirmationText,] = useState<string>('');
  const isValid = () => {
    return firstName.length > 0 && lastName.length > 0 && email.length > 0  && subject.length > 0 && message.length > 0;
  }

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs.sendForm("service_gmkfkyv","template_3d3tn3o", e.target, 'LpXqFQDc6sosB8Wv9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });     
      setConfirmationText(`Thanks ${firstName} ${lastName}!  We will contact you at ${email}.`)
      setFirstName("");
      setLastName("");
      setEmail("");
      setSubject("");
      setMessage("");
  };


  return (
    <div className={styles.bodyContact}>
      <form className={styles.contactForm} onSubmit={sendEmail}>
        <label className={styles.contactLabel} htmlFor="firstName">First name: </label>
        <input className={styles.contactInput} id="firstName" type="text" name="firstName"  value={firstName} onChange={(event) =>  setFirstName(event.target.value)}/>
        <label className={styles.contactLabel} htmlFor="lastName">Last name: </label>
        <input className={styles.contactInput} id="lastName" type="text"  name="lastName"  value={lastName} onChange={(event) =>  setLastName(event.target.value)}/>
        <label className={styles.contactLabel} htmlFor="email"> Email: </label>
        <input className={styles.contactInput} id="email" type="email" name="email"  value={email} onChange={(event) =>  setEmail(event.target.value)}/>
        <label className={styles.contactLabel} htmlFor="lastName">Subject: </label>
        <input className={styles.contactInput} id="lastName" type="text" name="subject" value={subject} onChange={(event) =>  setSubject(event.target.value)}/>
        <label className={styles.contactLabel} htmlFor="Message">Message: </label>
        <textarea className={styles.contactInput} id="Message" name="message" value={message} onChange={(event) =>  setMessage(event.target.value)}/>
        <button className={styles.contactButton} disabled ={!isValid()} type= "submit" >Send</button>
      </form>
        {confirmationText && 
            <div className={styles.confirmation}> 
              {confirmationText}
          </div>}
    </div>
  );
};


export default ContactPage;



// const Contactform = () => {



  
//   return (
//     <>
//     <form className={styles.contactForm} onSubmit={handleSubmit}>
//       <label htmlFor="firstName">First name: </label>
//       <input id="firstName" type="text" value={firstName} onChange={(event) =>  setFirstName(event.target.value)}/>
//       <label htmlFor="lastName">Last name: </label>
//       <input id="lastName" type="text" value={lastName} onChange={(event) =>  setLastName(event.target.value)}/>
//       <label htmlFor="email"> Email: </label>
//       <input id="email" type="email" value={email} onChange={(event) =>  setEmail(event.target.value)}/>
//       <label htmlFor="Message">Message </label>
//       <textarea id="Message" value={message} onChange={(event) =>  setMessage(event.target.value)}/>
//       <button className={styles.button} disabled ={!isValid()} type= "submit" >Send</button>
//     </form>
//     {confirmationText && <div className={styles.confirmation}>
//       {confirmationText}
//     </div>}
//     </>
//   );
// }

