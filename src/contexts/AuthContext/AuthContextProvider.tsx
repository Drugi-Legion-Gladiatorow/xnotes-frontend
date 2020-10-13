// eslint-disable-next-line
import React, { FC, useState } from 'react';
import AuthContext from './AuthContext';

// TO DO
// TYPES

const AuthContextProvider: FC = ({ children }) => {
  const [context, setContext] = useState({ isLoggedIn: true });

  return <AuthContext.Provider value={{ context, setContext }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
