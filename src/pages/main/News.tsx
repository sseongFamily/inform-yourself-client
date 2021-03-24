import React from 'react';
import HotUser from '../../containers/main/HotUser';
import NewUser from '../../containers/main/NewUser';

function News() {
  return (
    // News Page
    <div
      style={{ display: 'flex', flexDirection: 'column', border: '1px solid red', height: '100vh' }}
    >
      <div>
        <NewUser />
      </div>
      <div>
        <HotUser />
      </div>
    </div>
  );
}

export default News;
