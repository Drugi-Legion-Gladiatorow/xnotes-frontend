// eslint-disable-next-line
import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Auth, Repo, Error } from './pages';
import PrivateRoute from './components/PrivateRoute';
import AuthContextProvider from './contexts/AuthContextProvider';

const App: FC = () => {
  return (
    <Router>
      <div>
        <AuthContextProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/auth" component={Auth} />
            <PrivateRoute exact path="/repo" component={Repo} />
            <Route path="/*" component={Error} />
          </Switch>
        </AuthContextProvider>
      </div>
    </Router>
  );
};

export default App;
