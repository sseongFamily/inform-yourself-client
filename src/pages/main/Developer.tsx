import React from 'react';
import SeokMin from '../../components/SeokMin';
import SeokWon from '../../components/SeokWon';

function Developer() {
  return (
    <div style={{ height: '100vh', border: '1px solid green' }}>
      <SeokWon />
      <SeokMin />
    </div>
  );
}

export default Developer;
