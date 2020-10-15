import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContextProvider';

// TO DO
// PROPS TYPES

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { auth } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) => (auth.isLoggedIn ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

export default PrivateRoute;
