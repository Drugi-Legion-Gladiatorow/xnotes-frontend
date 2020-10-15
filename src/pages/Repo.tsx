// eslint-disable-next-line
import React, { FC, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContextProvider';

// TO DO
// TYPES
const Repo: FC = () => {
  const { auth } = useContext(AuthContext);

  return <div>Hi, {auth.userName}</div>;
};

export default Repo;
