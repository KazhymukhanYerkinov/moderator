import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import Modal from './Modal/Modal';
import { InputPassword, InputText } from './FormControl/FromControl';
import { signup } from './redux/auth-reducer';

import './App.css';
import { textRequired, emailRequired, LengthCreator,passwordRequired } from './validators/validation';



const lengthEight = LengthCreator(8, 50);

const AppForm = ({ handleSubmit, error }) => {
  return (
    <>
    { error && <div className = 'error'> { error } </div> }
    <form className = 'form' onSubmit = { handleSubmit }>
      <Field name = {'name'} component = { InputText } label = { 'Имя' }  validate = { textRequired }/>
      <Field name = {'surname'} component = { InputText } label = { 'Фамилия' } validate = { textRequired }/>
      <Field name = {'email'} component = { InputText } label = { 'E-mail' } validate = { emailRequired }/>
      <Field name = {'password1'} component = { InputPassword } label = { 'Создать пароль' } validate = { [textRequired, lengthEight, passwordRequired] }/>
      <Field name = {'password2'} component = { InputPassword } label = { 'Повторить пароль' } validate = { [textRequired, lengthEight, passwordRequired] }/>
      <button className="button" type = 'submit'> Зарегистрироваться </button> 
    </form>
    </>
  )
}

const AppReduxForm = reduxForm({ form: 'app' })(AppForm);

class App extends React.Component {
  render() {
      
    const { isOpen, signup } = this.props;
    function onSubmit(formData) {
      signup(formData.email, formData.name, formData.surname, formData.password1, formData.password2)
      
    }

    return (
      <div className = "wrapper">
        <div className="wrapper__inner">

          <div className="title"> Регистрация </div>
          <AppReduxForm onSubmit = { onSubmit }/>
          
        </div>
        {isOpen && <Modal />}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isOpen: state.authPage.isOpen,
  }
}

export default connect(mapStateToProps, { signup })(App);
