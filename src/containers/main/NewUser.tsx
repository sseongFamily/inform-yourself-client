import React, { useState } from 'react';
import UserCard from '../../components/UserCard';
import { UserInfo } from '../../types/userType';

type NewUserProps = {
  newUser: UserInfo[];
};

function NewUser({ newUser }: NewUserProps) {
  console.log('newUser', newUser);

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
      <h1 style={{ textAlign: 'center', fontSize: '32px' }}>New User</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid red',
        }}
      >
        {newUser.map((el, idx) => (
          <div>
            <UserCard
              key={idx}
              cardId={el.cardId}
              profileImage={el.profileImage}
              userName={el.userName}
              oneLineIntroduce={el.oneLineIntroduce}
              stack={el.stack}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewUser;
