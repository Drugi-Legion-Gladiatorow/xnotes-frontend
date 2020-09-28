import React, { FC } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import IndexPage from "./pages/IndexPage"
import ErrorPage from "./pages/404"

const App: FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
