import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import './Reset.css';
import './App.css';
import MainNav from './components/MainNav';
import Home from './pages/main/Home';
import SignUp from './pages/user/SignUp';
import SignIn from './pages/user/SignIn';
import UserCard from './components/UserCard';

function App() {
  return (
    <div>
      {/* signIn, signUp Page에서는 Nav바 안 보이게 설정 */}
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
