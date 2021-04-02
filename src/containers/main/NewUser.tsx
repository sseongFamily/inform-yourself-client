import React, { useState } from 'react';
import UserCard from '../../components/UserCard';
import { UserInfo } from '../../types/userType';

type NewUserProps = {
  newUser: UserInfo[];
  openModal: () => void;
  getDetailInfo: (cardId: number) => void;
};

function NewUser({ newUser, getDetailInfo, openModal }: NewUserProps) {
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
              getDetailInfo={getDetailInfo}
              openModal={openModal}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewUser;
