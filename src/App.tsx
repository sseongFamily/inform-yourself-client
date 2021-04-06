import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import './Reset.css';
import './App.css';
import MainNav from './components/MainNav';
import Home from './pages/main/Home';
import SignUp from './pages/user/SignUp';
import SignIn from './pages/user/SignIn';
import InfoCardCreate from './pages/board/InfoCardCreate';
import UserCardList from './pages/board/UserCardList';

function App() {
  return (
    <div>
      {/* signIn, signUp Page에서는 Nav바 안 보이게 설정 */}
      <MainNav />
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/signup" render={() => <SignUp />} />
        <Route path="/signin" render={() => <SignIn />} />
        <Route path="/infocard" render={() => <UserCardList />} />
        <Route path="/createcard" render={() => <InfoCardCreate />} />
      </Switch>
    </div>
  );
}

export default App;
