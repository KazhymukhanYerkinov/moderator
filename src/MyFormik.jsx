import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { setSubmitFailed } from 'redux-form';


const validationSchema = Yup.object().shape({
  email: Yup.string().min(2, 'Minimum 2 character').max(70, 'Maximum 70 character').required('Required field'),
  password: Yup.string().min(2, 'Minimum 2 charcter').max(70, 'Maximum 70 character').required('Required field'),
})


export const MyFormik = ({ signup }) => {
  const submit = (formData, actions) => {
    signup(formData.email, formData.name, formData.surname, formData.password, formData.password_confirm, actions)
  }

  return (
    <div>
      <h1> Sign Up </h1>

      <Formik
        initialValues = {{
          name: '',
          surname: '',
          email: '',
          password: '',
          password_confirm: '',
        }}
        onSubmit = { submit }
        validationSchema = { validationSchema }
      >

        {({ isSubmitting, errors }) => (
          <Form>
          
            { errors.global_error && <span> { errors.global_error  } </span> }
            <Field className = 'input' name = 'name' placeholder = 'Enter a name' />
            <ErrorMessage name = 'name' /> 

            <Field className = 'input' name = 'surname' placeholder = 'Enter a surname'/>
            <ErrorMessage name = 'surname' /> 

            <Field className = 'input' name = 'email' placeholder = 'Enter a email'/>
            <ErrorMessage name = 'email' />

            <Field className = 'input' name = 'password' placeholder = 'Enter a password'/>
            <ErrorMessage name = 'password' />

            <Field className = 'input' name = 'password_confirm' placeholder = 'Enter a password confirm'/>
            <ErrorMessage name = 'password_confirm' /> 

            <button className = 'button' type = 'submit' disabled = { isSubmitting }> Submit </button>
          </Form>
        )}

      </Formik>
    </div>
  )
}


