import css from './LoginForm.module.css';
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

const FeedbackSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});

export default function LoginForm() {

    const dispatch = useDispatch()

    const mailFieldId = useId();
    const passwordFieldId = useId();

    const handleSubmit = (values, actions) => {
        dispatch(logIn(values)).unwrap().catch(() => { alert("Log In error!")});
        actions.resetForm();
    };
    
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor={mailFieldId}>Email</label>
        <Field className={css.input} type="email" name="email" id={mailFieldId} />
        <ErrorMessage className={css.error} name="email" component="span" />

        <label htmlFor={passwordFieldId}>Password</label>
        <Field className={css.input} type="password" name="password" id={passwordFieldId} />
        <ErrorMessage className={css.error} name="password" component="span" />

        <button className={css.btn} type="submit">Log in</button>
      
      </Form>
    </Formik>
  );
}