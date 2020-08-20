import React from 'react';
import { auth, provider } from '../utils/firebase';

const Login = (props) => {

  const LoginFacebook = () => {
    auth().signInWithPopup(provider)
      .then(({ user }) => {
        props.history.push('/panel')
      });
  }

  const LogoutFacebook = () => {
    auth().signOut()
      .then(() => {
        props.history.push('/')
      })
  }

  return (
    <div className="Login">
      <div className="Login-container">
        <div className="Login-content">
          <h2>Crear cuenta o Iniciar Sesión</h2>
          <button onClick={LoginFacebook}>
              <i className="fab fa-facebook-square"/>
              <span>Iniciar sesión</span>
          </button>
          <button onClick={LogoutFacebook}>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
    )
};

export default Login;