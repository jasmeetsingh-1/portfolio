import React from "react";
import "./cssFiles/contactUs.css";
import linkedIn from "../../../assets/contact_us_logos/bxl-linkedin.svg.svg";
import github from "../../../assets/contact_us_logos/bxl-github.svg.svg";
import twitter from "../../../assets/contact_us_logos/bxl-twitter.svg.svg";

import { Field, Form, Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const intialValues = {
  contactName: "",
  contactEmail: "",
  subject: "",
  message: "",
};

const toastConfig = {
  position: "bottom-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

function ContactUs() {
  return (
    <div className="contact-us-holder">
      <div className="contact-us-left-holder">
        <h1 className="heading-font-portfolio">LETS CONNECT</h1>
        <div>
          <p>
            Say hello at{" "}
            <u className="clicks-contact-us">jasmeets9877@gmail.com</u>
          </p>
          <p>
            For more info, here's my <u className="clicks-contact-us">resume</u>
          </p>
        </div>
        <div className="contact-us-logo-holder">
          <img src={linkedIn} alt="Linked In" />
          <img src={github} alt="github" />
          <img src={twitter} alt="twitter" />
        </div>
      </div>
      <div className="contact-us-right-form-holder">
        <Formik
          initialValues={intialValues}
          onSubmit={(values, { resetForm }) => {
            console.log({ values });
            resetForm();
            toast.success("I'll get in touch with you", toastConfig);
          }}
        >
          {({ values }) => (
            <Form className="contact-us-form-holder">
              <div className="contact-us-form-row">
                <label htmlFor="contactName">Name</label>
                <Field
                  type="text"
                  name="contactName"
                  id="contactName"
                  value={values.contactName}
                />
              </div>
              <div className="contact-us-form-row">
                <label htmlFor="contactEmail">Email</label>
                <Field
                  type="text"
                  name="contactEmail"
                  id="contactEmail"
                  value={values.contactEmail}
                />
              </div>
              <div className="contact-us-form-row">
                <label htmlFor="subject">Subject</label>
                <Field
                  type="text"
                  name="subject"
                  id="subject"
                  value={values.subject}
                />
              </div>
              <div className="contact-us-form-row">
                <label htmlFor="message">Message</label>
                <Field
                  as="textarea"
                  name="message"
                  id="message"
                  value={values.message}
                  style={{
                    height: "5rem",
                    resize: "none",
                    padding: "1rem 0 0 1rem",
                  }}
                />
              </div>
              <div className="contact-us-form-button">
                <button type="submit">SUBMIT</button>
              </div>
            </Form>
          )}
        </Formik>
        <ToastContainer />
      </div>
    </div>
  );
}

export default ContactUs;
