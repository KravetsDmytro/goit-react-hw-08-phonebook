import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import css from './RegisterView.module.css';


const RegisterView = () => {
  const dispatch = useDispatch();
  const { IsErrorLogin } = useAuth();

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    dispatch(register({ name, email, password }));
  };

  // const [passwordVisible, setPasswordVisible] = useState(false);


  return (
    <div className={css.registerForm} >
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className={css.form}>

        <label htmlFor={'name'}>Name</label>
        <input type="text" name="name" id="name" className={css.formInput} />
        <label htmlFor={'email'}>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
          title="Invalid email address"
          className={css.formInput}
        />
        <label htmlFor={'password'}>Password</label>
        <input
          type="password"
          name="password"
          id="password"
          pattern="(?=.*\d).{7,}"
          title="Input Password and Submit [
            Please enter a password of at least 8 characters]"
          className={css.formInput}
        />
        <button type="submit" className={css.formButton}>
          Sign in
        </button>

      </form>

      {IsErrorLogin && (
        <div>
          <h5>Invalid Email address or Password!</h5>
        </div>
      )}
    </div>
  );
};
export default RegisterView;
