import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../components/Input";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import app from "../base";
import { NavLink } from "react-router-dom";
import smiling_face from "../assets/header/smiling-face-emoji.svg";
import grapes from "../assets/fruit_svgs/grapes.svg";
import leaf from "../assets/fruit_svgs/leaf.svg";
import bitten_apple from "../assets/fruit_svgs/bitten-apple.svg";
import orange from "../assets/fruit_svgs/orange.svg";

const auth = getAuth(app);

const Auth = () => {
  const { setCurrentUser } = useContext(AuthContext);
  const [formError, setFormError] = useState("");

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
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email format is incorrect")
        .required("Email is a required field"),
      password: Yup.string()
        .min(6, "Password must have 6 characters at least")
        .required("Password is a required field"),
    }),
    onSubmit: async ({ email, password }) => {
      console.log("email:", email);
      console.log("password:", password);

      try {
        const response = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = response.user;

        setCurrentUser(user);
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
        <button className="form_button" type="submit">
          Login
        </button>
        <NavLink to="/reg" className="having_account">
          don't have an account?
        </NavLink>
      </form>
    </div>
  );
};

export default Auth;
