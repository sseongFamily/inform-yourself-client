import React from 'react';
import CreateInfoCard from '../../containers/board/CreateInfoCard';
import CreateCard from '../../images/undraw_Create_re_57a3.svg';

function InfoCardCreate() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '100px',
      }}
    >
      <CreateInfoCard />
    </div>
  );
}

export default InfoCardCreate;
