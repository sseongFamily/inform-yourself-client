import React, { useState } from 'react';
import UserCard from '../../components/UserCard';
import { UserInfo } from '../../types/userType';

function NewUser() {
  const [fakeUser, setFakeUser] = useState<UserInfo[]>([
    {
      profileImage: 'https://picsum.photos/120/100',
      userName: '성석원',
      oneLineIntroduce: '잘부탁드립니다.',
      stack: ['JavaScript', 'React', 'NodeJs'],
    },
    {
      profileImage: 'https://picsum.photos/120/100',
      userName: '성석민',
      oneLineIntroduce: '안녕하세요.',
      stack: ['JavaScript', 'React', 'NodeJs', 'TypeScript'],
    },
    {
      profileImage: 'https://picsum.photos/120/100',
      userName: '성석준',
      oneLineIntroduce: '안녕하세요. 가나다라마바사',
      stack: ['React', 'NodeJs', 'TypeScript'],
    },
  ]);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '50vh',
        border: '1px solid black',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1 style={{ textAlign: 'center', fontSize: '32px' }}>Hot User</h1>
      <div
        style={{
          display: 'flex',
          border: '1px solid blue',
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
