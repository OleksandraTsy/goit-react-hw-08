import { useDispatch } from 'react-redux';
import css from './RegistrationForm.module.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from '../../redux/auth/operations';
import { useId } from "react";
import * as Yup from "yup";

export default function RegistrationForm() {

  const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});

  const nameFieldId = useId();
  const mailFieldId = useId();
  const passwordFieldId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap().catch(() => { alert("Registration error!") });
    actions.resetForm();
  }

  return (
    <Formik
      validationSchema={FeedbackSchema}
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        
        <label htmlFor={nameFieldId}>Username</label>
        <Field className={css.input} type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={css.error} name="name" component="span" />

        <label htmlFor={mailFieldId}>Email</label>
        <Field className={css.input} type="email" name="email" id={mailFieldId} />
        <ErrorMessage className={css.error} name="email" component="span" />

        <label htmlFor={passwordFieldId}>Password</label>
        <Field className={css.input} type="password" name="password" id={passwordFieldId} />
        <ErrorMessage className={css.error} name="password" component="span" />

      
        <button className={css.btn} type="submit">Register</button>
        
      </Form>
    </Formik>
  )
}