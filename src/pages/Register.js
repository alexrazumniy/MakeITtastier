import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNav } from "../hooks/useNav";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../components/Input";
import smiling_face from "../assets/header/smiling-face-emoji.svg";
import grapes from "../assets/fruit_svgs/grapes.svg";
import leaf from "../assets/fruit_svgs/leaf.svg";
import bitten_apple from "../assets/fruit_svgs/bitten-apple.svg";
import orange from "../assets/fruit_svgs/orange.svg";

import app from "../base";

const auth = getAuth(app);

const Register = () => {
  const [formError, setFormError] = useState("");

  const { goTo } = useNav();

  const {
    handleSubmit,
    handleChange,
    values,
    handleBlur,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirm: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email format is incorrect")
        .required("Email is a required field"),
      password: Yup.string()
        .min(6, "Password must have 6 characters at least")
        .required("Password is a required field"),
      confirm: Yup.string()
        .oneOf(
          [Yup.ref("password"), null],
          "Password must have 6 characters at least"
        )
        .required("Password confirm is a required field"),
    }),
    onSubmit: async ({ email, password }) => {
      console.log("email:", email);
      console.log("password:", password);
      
      try {
        await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        goTo("/login");
      } catch (error) {
        setFormError(error.message);
      }
    },
  });
  return (
    <div className="form_page">
      <div className="form_title">
        Welcome To Yelp App
        <img
          className="form_smiling_face"
          src={smiling_face}
          alt={smiling_face}
        />
      </div>
      <img className="grapes" src={grapes} alt="grapes" />
      <img className="leaf" src={leaf} alt="leaf" />
      <img className="bitten_apple" src={bitten_apple} alt="bitten_apple" />
      <img className="orange" src={orange} alt="orange" />
      <form className="form" onSubmit={handleSubmit}>
        <div className="input_wrapper">
          <Input
            label="email"
            placeholder="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email ? (
            <span className="input_error">{errors.email}</span>
          ) : null}
        </div>
        <div className="input_wrapper">
          <Input
            label="password"
            placeholder="****************"
            name="password"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && errors.password ? (
            <span className="input_error">{errors.password}</span>
          ) : null}
        </div>
        <div className="input_wrapper">
          <Input
            label="confirm password"
            placeholder="****************"
            name="confirm password"
            type="password"
            value={values.confirm}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.confirm && errors.confirm ? (
            <span className="input_error">{errors.confirm}</span>
          ) : null}
        </div>
        <button className="form_button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
