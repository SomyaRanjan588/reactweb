import React from "react";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  mail: "",
  phone: "",
  check: "",
};
const onSubmit = (values) => {
  alert("this is done");
};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "required";
  }
  if (!values.mail) {
    errors.mail = "required";
  }
  if (!values.phone) {
    errors.phone = "required";
  }
  if (!values.check) {
    errors.check = "required";
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
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlue}
          />
        </div>
        <div>
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="mail">Mail</label>
          <input
            type="email"
            id="mail"
            name="mail"
            onChange={formik.handleChange}
            value={formik.values.mail}
            onBlur={formik.handleBlue}
          />
        </div>
        <div>
          {formik.touched.mail && formik.errors.mail ? (
            <div className="error">{formik.errors.mail}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            onBlur={formik.handleBlue}
          />
        </div>
        <div>
          {formik.touched.phone && formik.errors.phone ? (
            <div className="error">{formik.errors.phone}</div>
          ) : null}
        </div>

        <label>which is</label>
        <div>
          <input
            type="checkbox"
            id="web"
            name="web"
            onChange={formik.handleChange}
            value={formik.values.check}
            onBlur={formik.handleBlue}
          />
          <label htmlFor="webd">Web Design</label>
          <input
            type="checkbox"
            id="webd"
            name="webd"
            onChange={formik.handleChange}
            value={formik.values.check}
            onBlur={formik.handleBlue}
          />
          <label>Web Development</label>
        </div>

        <div>
          {formik.touched.check && formik.errors.check ? (
            <div className="error">{formik.errors.check}</div>
          ) : null}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
