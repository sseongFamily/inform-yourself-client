import React from 'react';
import './App.css';
import MainNav from './components/MainNav';
import Home from './pages/main/Home';
import News from './pages/main/News';

function App() {
  return (
    <div>
      <MainNav />
      <Home />
      <News />
    </div>
  );
}

export default App;
