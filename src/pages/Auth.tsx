// eslint-disable-next-line
import React, { FC, useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext, initialState } from '../contexts/AuthContextProvider';

const Auth: FC = ({ location }: any) => {
  const [data, setData] = useState(initialState);
  const context = useContext(AuthContext);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get('_id');
    const githubId = params.get('githubId');
    const accessToken = params.get('accessToken');
    const userName = params.get('username');

    if (id && githubId && accessToken && userName) {
      setData({ isLoggedIn: true, id, githubId, accessToken, userName, errorMessage: '' });
    } else {
      setData((d) => ({ ...d, errorMessage: "Login didn't work" }));
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (data.isLoggedIn) {
      context.dispatch({ type: 'LOGIN', payload: data });
    }
    // eslint-disable-next-line
  }, [data]);

  if (data.isLoggedIn) {
    return <Redirect to="/repo" />;
  }

  if (data.errorMessage) {
    return <div>{data.errorMessage}</div>;
  }

  return <>aa</>;
};

export default Auth;
