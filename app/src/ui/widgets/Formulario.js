import React from 'react';
import { reduxForm, Field } from 'redux-form';

const newField = ({
  input,
  type,
  placeholder,
  id,
  meta: { touched, error }
}) => {
  return (
    <div>
      <input {...input} placeholder={placeholder} type={type} id={id} />
      {touched && error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

const GatorForm = ({ handleSubmit, reset, pristine, submitting, valid }) => {
  return (
    <form onSubmit={handleSubmit(val => console.log(val))}>
      <label htmlFor="first-name">Your first name:</label>
      <Field
        name="firstName"
        type="text"
        component={newField}
        id="first-name"
        placeholder="Benedict"
      />
      <label htmlFor="email">Email:</label>
      <Field
        name="email"
        type="email"
        component={newField}
        id="email"
        placeholder="benedict@alligator.io"
      />
      <button type="submit" disabled={!valid || pristine || submitting}>
        Submit
      </button>
      <button type="button" onClick={reset}>
        reset
      </button>
    </form>
  );
};

export default reduxForm({
  form: 'gatorForm'
})(GatorForm);
