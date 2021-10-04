import React from "react";
import { Route, Switch } from 'react-router-dom';
import Error from '../Error';
import Home from '../Home';
import New from '../New';
import Details from '../Details';
import Input from '../Input';

const Main = () => {
  return (
    <main className="main">
      <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/new" component={New} exact/>
          <Route path="/pokemon/:id" component={Details} exact/>
          <Route path="/search" component={Input} exact/>
          <Route component={Error} />
      </Switch>
    </main>
  )
};

export default Main;
