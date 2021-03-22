import React from 'react';
import Developer from './Developer';
import Intro from './Intro';
import News from './News';
import PartnerCompany from './PartnerCompany';

function Home() {
  return (
    <div>
      <Intro />
      <News />
      <PartnerCompany />
      <Developer />
    </div>
  );
}

export default Home;
