import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";

import * as Yup from "yup";
import { useId } from "react";
import css from "./LoginForm.module.css";
import { logIn } from "../../redux/auth/operations";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(7, "Password too short!").required("Required"),
});

const initialValues = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={emailFieldId}>
          Email
        </label>
        <Field
          className={css.input}
          type="email"
          name="email"
          id={emailFieldId}
        />
        <ErrorMessage
          className={css.errorMessage}
          name="email"
          component="span"
        />

        <label className={css.label} htmlFor={passwordFieldId}>
          Password
        </label>
        <Field
          className={css.input}
          type="password"
          name="password"
          id={passwordFieldId}
        />
        <ErrorMessage
          className={css.errorMessage}
          name="password"
          component="span"
        />

        <button className={css.submitButton} type="submit">
          Login
        </button>
      </Form>
    </Formik>
  );
};