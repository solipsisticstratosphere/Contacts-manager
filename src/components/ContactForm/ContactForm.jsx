import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";

import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/contactsOps";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  telephone: Yup.string()
    .min(3, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
});

const initialValues = {
  username: "",
  telephone: "",
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.username,
        number: values.telephone,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.contactForm}>
        <div className={css.field}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.input}
            type="text"
            name="username"
            id={nameFieldId}
          />
          <ErrorMessage name="username" component="span" />
        </div>
        <div className={css.field}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={css.input}
            type="text"
            name="telephone"
            id={numberFieldId}
          />
          <ErrorMessage name="telephone" component="span" />
        </div>
        <button className={css.submit} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
