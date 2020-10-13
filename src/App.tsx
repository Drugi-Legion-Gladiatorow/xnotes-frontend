// eslint-disable-next-line
import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Auth, Repo, Error } from './pages';
import AuthContextProvider from './contexts/AuthContext/AuthContextProvider';

const App: FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <AuthContextProvider>
            <Route exact path="/" component={Home} />
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/repo" component={Repo} />
            <Route path="/*" component={Error} />
          </AuthContextProvider>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
