import React from "react";
import styles from "./styles.module.css";
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const ContactUs = () => {
  const contactData = {
    title: "Contact Us",
    description:
      "Where Inquiries are Encouraged, Questions Find Answers, and Assistance Awaits - Reach Out to Us Today!",
    Enquiry1: "+34 2653412345",
    Enquiry2: "+76 1234567887",
    Enquiry3: "+11 2987609735",
  };
  return (
    <>
      <div className={styles.contactus}>
        <h1>{contactData.title}</h1>
        <p>{contactData.description}</p>

        <div className={styles.contact}>
          <div className={styles.cont1}>
            <h5> For Enquiries</h5>
            <p>{contactData.Enquiry1}</p>
          </div>
          <div className={styles.cont1}>
            <h5>Accounts Enquiries</h5>
            <p>{contactData.Enquiry2}</p>
          </div>
          <div className={styles.cont1}>
            <h5>Products Enquiries</h5>
            <p>{contactData.Enquiry3}</p>
          </div>
        </div>
      </div>
      <div className={styles.contactcontainer}>
        <h4>Follow Us</h4>
        <div className={styles.sociallinks}>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={20} /> Instagram
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={20} /> Facebook
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={20} /> YouTube
          </a>
        </div>
      </div>
      <div className={styles.contactus1}>
        <h3>Write to us..</h3>

        <form>
          <div>
            <input type="text" size={50} placeholder="Name" />
          </div>
          <br />
          <div>
            <input type="text" size={50} placeholder="Phone Number" />
          </div>
          <br />
          <div>
            <input type="email" size={50} placeholder="Email" />
          </div>
          <br />

          <div>
            <textarea rows={5} cols={53} placeholder="Message" />
          </div>
          <br />
          <button className={styles.btnSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
