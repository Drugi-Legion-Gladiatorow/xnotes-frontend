// eslint-disable-next-line
import React, { FC, createContext, useReducer } from 'react';
// eslint-disable-next-line
import authReducer, { Action } from '../reducers/authReducer';

export interface InitialState {
  isLoggedIn: boolean;
  id: string;
  githubId: string;
  accessToken: string;
  userName: string;
  errorMessage: string;
}

export interface AuthValue {
  auth: InitialState;
  dispatch: React.Dispatch<Action>;
}

export const initialState: InitialState = {
  isLoggedIn: false,
  id: '',
  githubId: '',
  accessToken: '',
  userName: '',
  errorMessage: '',
};

export const AuthContext = createContext<AuthValue>({ auth: initialState, dispatch: () => {} });

const AuthContextProvider: FC = ({ children }) => {
  const [auth, dispatch] = useReducer(authReducer, initialState);

  const authValue: AuthValue = { auth, dispatch };

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
