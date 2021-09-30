import React from "react";
import { Route, Switch } from 'react-router-dom';
import Error from '../Error';
import Home from '../Home';

const Main = () => {
  return (
    <main className="main">
      <Switch>
          <Route path="/" component={Home} exact/>
          <Route component={Error} />
      </Switch>
    </main>
  )
};

export default Main;
