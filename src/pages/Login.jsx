import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disable, setDisable] = useState(true);
  const history = useHistory();

  const validate = () => {
    const NUMERO_MINIMO = 6;
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if ((regex.test(email)) && (password.length >= NUMERO_MINIMO)) {
      setDisable(false);
    }
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    validate();
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    validate();
  };

  const handleClick = () => {
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/comidas');
  };

  return (
    <div>
      <h2>Login</h2>
      <label htmlFor="email-bar">
        <input
          data-testid="email-input"
          type="email"
          id="email-bar"
          placeholder="E-mail"
          name="email"
          value={ email }
          onChange={ handleChangeEmail }
        />
      </label>
      <label htmlFor="password-bar">
        <input
          data-testid="password-input"
          type="password"
          id="epassword-bar"
          placeholder="Senha"
          name="password"
          value={ password }
          onChange={ handleChangePassword }
        />
      </label>
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ disable }
        onClick={ handleClick }
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;
