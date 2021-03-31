import React, { useState } from 'react';
import UserCard from '../../components/UserCard';
import { UserInfo } from '../../types/userType';

type HotUserProps = {
  hotUser: UserInfo[];
};

function HotUser({ hotUser }: HotUserProps) {
  console.log('hotUser', hotUser);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '50vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1 style={{ textAlign: 'center', fontSize: '32px' }}>Hot User</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {hotUser.map((el, idx) => (
          <UserCard
            key={idx}
            profileImage={el.profileImage}
            userName={el.userName}
            oneLineIntroduce={el.oneLineIntroduce}
            stack={el.stack}
          />
        ))}
      </div>
    </div>
  );
}

export default HotUser;
