import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

import styles from "./ContactForm.module.css";

const addContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Name required to fill out"),
  number: Yup.number().required("Phone number required to fill out"),
});

export default function ContactForm({ addContact }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const initValues = { name: "", number: "" };

  function handleSubmit(contact, actions) {
    addContact({ ...contact, id: nanoid() });
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initValues}
      onSubmit={handleSubmit}
      validationSchema={addContactSchema}
    >
      <Form className={styles.form}>
        <div className={styles.fieldset}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field id={nameFieldId} name="name" type="text" />
          <ErrorMessage name="name" component="span" className={styles.error} />
        </div>

        <div className={styles.fieldset}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field id={numberFieldId} name="number" type="text" />
          <ErrorMessage
            name="number"
            component="span"
            className={styles.error}
          />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
