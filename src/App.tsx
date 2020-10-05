// eslint-disable-next-line
import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/404';

const App: FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
