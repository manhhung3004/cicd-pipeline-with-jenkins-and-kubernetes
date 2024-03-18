// LoginComponent.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './actions';

const LoginComponent = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <div>
      {isLoggedIn ? (
        <button>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default LoginComponent;
