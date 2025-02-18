import React from "react";
import "./cssFiles/contactUs.css";
import linkedIn from "../../../assets/contact_us_logos/bxl-linkedin.svg.svg";
import github from "../../../assets/contact_us_logos/bxl-github.svg.svg";
import twitter from "../../../assets/contact_us_logos/bxl-twitter.svg.svg";
import resume from "../../../assets/JasmeetSingh_cv.pdf";
import { Field, Form, Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";

const intialValues = {
  contactName: "",
  contactEmail: "",
  subject: "",
  message: "",
  contactPhoneNo:"",
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

//Phone number wont be mandatory so no validation for it
const contactUsFormValidator = Yup.object({
  contactName: Yup.string().required("Please enter name."),
  contactEmail: Yup.string()
    .email("Please enter valid Email.")
    .required("Please enter email."),
  subject: Yup.string().required("Please enter subject."),
});

function ContactUs() {
  return (
    <div className="contact-us-holder">
      <div className="contact-us-left-holder">
        <h1 className="heading-font-portfolio">LETS CONNECT</h1>
        <div>
          <p>
            Say hello at{" "}
            <a
              href="mailto:jasmeets9877@gmail.com"
              className="clicks-contact-us"
            >
              jasmeets9877@gmail.com
            </a>
          </p>
          <p>
            For more info, here's my{" "}
            <a
              href={resume}
              download="jasmeetSingh_cv"
              className="clicks-contact-us"
            >
              resume
            </a>
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
          validationSchema={contactUsFormValidator}
          onSubmit={(values, { resetForm }) => {
            console.log({ values });
            resetForm();
            toast.success("I'll get in touch with you", toastConfig);
          }}
        >
          {({ values, errors, touched }) => (
            <Form className="contact-us-form-holder">
              <div className="contact-us-form-row">
                <label htmlFor="contactName">Name</label>
                <Field
                  type="text"
                  name="contactName"
                  id="contactName"
                  value={values.contactName}
                />
                {errors.contactName && touched.contactName ? (
                  <span className="error-message-contact-us-form">
                    {errors.contactName}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="contact-us-two-rows">
                <div className="contact-us-form-row">
                  <label htmlFor="contactEmail">Email</label>
                  <Field
                    type="text"
                    name="contactEmail"
                    id="contactEmail"
                    value={values.contactEmail}
                  />
                  {errors.contactEmail && touched.contactEmail ? (
                    <span className="error-message-contact-us-form">
                      {errors.contactEmail}
                    </span>
                  ) : (
                    ""
                  )}
                  </div>
                  <div className="contact-us-form-row">
                  <label htmlFor="contactPhoneNo">Phone no.</label>
                  <Field
                    type="text"
                    name="contactPhoneNo"
                    id="contactPhoneNo"
                    value={values.contactPhoneNo}
                  />
                  {errors.contactPhoneNo && touched.contactPhoneNo ? (
                    <span className="error-message-contact-us-form">
                      {errors.contactPhoneNo}
                    </span>
                  ) : (
                    ""
                  )}
                  </div>
              </div>
              <div className="contact-us-form-row">
                {errors.subject && touched.subject ? (
                    <span className="error-message-contact-us-form">
                      {errors.subject}
                    </span>
                ) : (
                  ""
                )}
                <label htmlFor="subject">Submit your query</label>
                <Field
                  type="text"
                  name="subject"
                  id="subject"
                  value={values.subject}
                  className="query-css-class"
                />
                <Field
                  as="textarea"
                  name="message"
                  id="message"
                  value={values.message}
                  className="query-css-class"
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
