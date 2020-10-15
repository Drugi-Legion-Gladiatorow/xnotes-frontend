// eslint-disable-next-line
import React, { FC, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContextProvider';

// TO DO
// TYPES
const Repo: FC = () => {
  const context = useContext(AuthContext);
  console.log(context);

  return <div>Repo page</div>;
};

export default Repo;
