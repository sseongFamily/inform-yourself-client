import React from 'react';
import HotUser from '../../containers/main/HotUser';
import NewUser from '../../containers/main/NewUser';
import { HotAndNewInfo } from '../../types/infoCardType';

type NewsProps = {
  hotAndNewList: HotAndNewInfo;
};

function News({ hotAndNewList }: NewsProps) {
  const { hotUser, newUser } = hotAndNewList;
  return (
    // News Page
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div>
        <NewUser newUser={newUser} />
      </div>
      <div>
        <HotUser hotUser={hotUser} />
      </div>
    </div>
  );
}

export default News;
