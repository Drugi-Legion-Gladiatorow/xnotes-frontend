// eslint-disable-next-line
import React, { FC, useContext, useEffect } from 'react';
import AuthContext from '../contexts/AuthContext/AuthContext';

// TO DO
// CACHE
// TYPES

const Auth: FC = ({ location }: any) => {
  const context: any = useContext(AuthContext);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get('_id');
    const githubId = params.get('githubId');
    const accessToken = params.get('accessToken');
    const userName = params.get('username');

    context.setContext({ id, githubId, accessToken, userName });
  }, [context, location.search]);

  // WARNING!! DELETE CONTEXT AND LOCATION.SEARCH FROM USEEFFECT ARRAY

  return (
    <>
      aa
      {/* {id ? <Redirect to="/repo" /> : <Redirect to="/" />} */}
    </>
  );
};

export default Auth;
