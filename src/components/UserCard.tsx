import React from 'react';
import { UserState } from '../types/userType';
import styled from 'styled-components';

const Stack = styled.div`
  margin: 0 3%;
  border: 1px solid black;
  border-radius: 25%;
  height: 30px;
  line-height: 30px;
`;

function UserCard(props: UserState['userInfo']) {
  const makeColor = () => {
    // TODO :  Stack카드 색상 랜덤으로 뿌려주기
  };

  const { userName, stack, profileImage, oneLineIntroduce } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        boxShadow: '1px 1px 3px 1px gray ',
        margin: '2%',
        width: '300px',
        height: '200px',
        borderRadius: '15%',
        justifyContent: 'space-around',
      }}
    >
      <div className="infoSection" style={{ display: 'flex' }}>
        <div
          style={{
            backgroundImage: `url(${profileImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '180px',
            height: '110px',
            borderRadius: '50%',
            marginLeft: '2%',
            flexGrow: 0,
            flexBasis: '160px',
          }}
        />

        <div
          className="content"
          style={{
            flexBasis: '240px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            marginLeft: '2%',
            flexGrow: 0,
          }}
        >
          <div className="name" style={{ flexGrow: 0 }}>
            <h2 style={{ fontSize: '28px' }}>{userName}</h2>
          </div>
          <div className="oneLine" style={{ flexGrow: 0, marginTop: '10%', fontSize: '18px' }}>
            {oneLineIntroduce}
          </div>
        </div>
      </div>

      <div className="stackSection" style={{ margin: '0 5%', display: 'flex' }}>
        {stack.map((el, idx) => (
          <div key={idx} style={{}}>
            <Stack>{el}</Stack>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserCard;
