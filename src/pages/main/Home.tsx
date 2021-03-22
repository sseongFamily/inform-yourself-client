import React from 'react';
import Developer from './Developer';
import Intro from './Intro';
import News from './News';

function Home() {
  return (
    <div>
      <Intro />
      <News />
      <Developer />
    </div>
  );
}

export default Home;
