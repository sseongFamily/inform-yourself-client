import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import MainNav from './components/MainNav';
import Home from './pages/main/Home';
import SignUp from './pages/user/SignUp';
import SignIn from './pages/user/SignIn';

function App() {
  return (
    <div>
      <MainNav />
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/signup" render={() => <SignUp />} />
        <Route path="/signin" render={() => <SignIn />} />
      </Switch>
    </div>
  );
}

export default App;
