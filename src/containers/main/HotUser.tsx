import React, { useState } from 'react';
import UserCard from '../../components/card/UserCard';
import { UserInfo } from '../../types/userType';

type HotUserProps = {
  hotUser: UserInfo[];
  openModal: () => void;
  getDetailInfo: (cardId: number) => void;
};

function HotUser({ hotUser, getDetailInfo, openModal }: HotUserProps) {
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
            size={'medium'}
            key={idx}
            cardId={el.cardId}
            profileImage={el.profileImage}
            userName={el.userName}
            oneLineIntroduce={el.oneLineIntroduce}
            stack={el.stack}
            getDetailInfo={getDetailInfo}
            openModal={openModal}
          />
        ))}
      </div>
    </div>
  );
}

export default HotUser;
