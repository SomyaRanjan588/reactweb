import React from "react";
import "./App.css";
import { useFormik } from "formik";

const initialValues = {
  fname: "",
  lname: "",
  mail: "",
  phone: "",
};
const onSubmit = (values) => {
  alert("You have successfully send the message");
};
const validate = (values) => {
  let errors = {};
  if (!values.fname) {
    errors.fname = "required";
  }
  if (!values.lname) {
    errors.lname = "required";
  }
  if (!values.mail) {
    errors.mail = "required";
  }
  if (!values.phone) {
    errors.phone = "required";
  }
  return errors;
};

export default function Form() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="input-group2">
              <label htmlFor="fname">First Name</label>
              <input
                className="input2"
                type="text"
                placeholder="Somya"
                id="fname"
                name="fname"
                onChange={formik.handleChange}
                value={formik.values.fname}
                onBlur={formik.handleBlue}
              ></input>
              <br></br>
              <div>
                {formik.touched.fname && formik.errors.fname ? (
                  <div className="error">{formik.errors.fname}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-group2">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lname"
                className="input2"
                placeholder="Sahoo"
                onChange={formik.handleChange}
                value={formik.values.lname}
                onBlur={formik.handleBlue}
              ></input>
              <br></br>
              <div>
                {formik.touched.lname && formik.errors.lname ? (
                  <div className="error">{formik.errors.lname}</div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="input-group3">
              <label>Email</label>
              <input
                className="input2"
                type="text"
                placeholder="ersadwork@gmail.com"
                name="mail"
                id="mail"
                onChange={formik.handleChange}
                value={formik.values.mail}
                onBlur={formik.handleBlue}
              ></input>
              <br></br>
              <div>
                {formik.touched.mail && formik.errors.mail ? (
                  <div className="error">{formik.errors.mail}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-group10">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="input2"
                name="phone"
                id="phone"
                placeholder="+90 543 779 94 94"
                onChange={formik.handleChange}
                value={formik.values.phone}
                onBlur={formik.handleBlue}
              ></input>
              <br></br>
              <div>
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="error">{formik.errors.phone}</div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="input-group4">
              <label className="label1">What the of website do you need?</label>
              <div className="div7">
                <input
                  type="checkbox"
                  value="Web Design"
                  id="webdesign"
                  className="checkbox"
                ></input>
                <label for="webdesign" className="checklabel">
                  Web Design
                </label>
                <input
                  type="checkbox"
                  value="Web Development"
                  id="webdevelopment"
                  className="checkbox1"
                ></input>
                <label for="webdevelopment" className="checklabel">
                  Web Development
                </label>
                <input
                  type="checkbox"
                  value="Logo Design"
                  id="logodesign"
                  className="checkbox1"
                ></input>
                <label for="logodesign" className="checklabel">
                  Logo Design
                </label>
                <input
                  type="checkbox"
                  value="Other"
                  id="other"
                  className="checkbox1"
                ></input>
                <label for="other" className="checklabel">
                  Other
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <label className="message">Message</label>
            <p className="write">Write Your Message. .</p>
            <textarea rows="5"></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="submit2">
              <button type="submit" className="submit1">
                Send Message
              </button>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
