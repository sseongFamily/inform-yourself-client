import React from 'react';
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
      {/* <MainNav />
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/signup" render={() => <SignUp />} />
        <Route path="/signin" render={() => <SignIn />} />
      </Switch> */}
      <UserCard
        userName={'성석원'}
        profileImage={'../images/sseong.png'}
        oneLineIntroduce="잘부탁 드립니다"
        stack={['JavaScript', 'React', 'Redux']}
      />
    </div>
  );
}

export default App;
