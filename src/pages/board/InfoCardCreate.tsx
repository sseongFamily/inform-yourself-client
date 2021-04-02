import React from 'react';
import CreateInfoCard from '../../containers/board/CreateInfoCard';

function InfoCardCreate() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CreateInfoCard />
    </div>
  );
}

export default InfoCardCreate;
