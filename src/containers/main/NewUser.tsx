import React, { useState } from 'react';
import UserCard from '../../components/UserCard';
import { UserInfo } from '../../types/userType';

function NewUser() {
  const [fakeUser, setFakeUser] = useState<UserInfo[]>([
    {
      profileImage: 'https://picsum.photos/120/100',
      userName: '성석원',
      oneLineIntroduce: '가나다라마바사아자차카',
      stack: ['JavaScript', 'React', 'NodeJs'],
    },
    {
      profileImage: 'https://picsum.photos/120/100',
      userName: '성석민',
      oneLineIntroduce: '가나다라마바사아자차카',
      stack: ['JavaScript', 'React', 'NodeJs', 'TypeScript'],
    },
    {
      profileImage: 'https://picsum.photos/120/100',
      userName: '성석준',
      oneLineIntroduce: '가나다라마바사아자차카',
      stack: ['React', 'NodeJs', 'TypeScript'],
    },
  ]);
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
        {fakeUser.map((el, idx) => (
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

export default NewUser;
