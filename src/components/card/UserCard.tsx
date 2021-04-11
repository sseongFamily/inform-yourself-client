import React from 'react';
import { UserState } from '../../types/userType';
import styled from 'styled-components';
import { InfoCardSection } from '../style/InfoCard';

const Stack = styled.div`
  height: 10px;
  font-size: 10px;
  font-weight: 600;
  padding: 8px;
  margin: 5px 5px 0 0;
  border: 1px solid lightgray;
  border-radius: 100px;
  box-shadow: 1px 1px 3px 1px lightgray;
`;

const Content = styled.div`
  flex-basis: '240px';
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 2%;
  flex-grow: 0;
`;

const UserCardInput = styled.input`
  width: 240px;
  height: 30px;
  font-size: 22px;
  border: none;
  border-bottom: 1px solid black;
`;
function UserCard(props: UserState['userInfo']) {
  const { getDetailInfo, openModal } = props;
  const makeColor = () => {
    // TODO :  Stack카드 색상 랜덤으로 뿌려주기
  };
  const { userName, stack, profileImage, oneLineIntroduce, size, modify } = props;
  const handleModalAndDetailInfo = () => {
    if (openModal === undefined) {
      return;
    }
    if (getDetailInfo === undefined) {
      return;
    }
    openModal();
    getDetailInfo(Number(props.cardId));
  };

  return modify ? (
    <InfoCardSection size={size} onClick={handleModalAndDetailInfo}>
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
        <Content>
          <div className="name" style={{ flexGrow: 0 }}>
            <UserCardInput type="text" value={userName} />
          </div>
          <div className="oneLine" style={{ flexGrow: 0, marginTop: '10%', fontSize: '18px' }}>
            <UserCardInput type="text" value={oneLineIntroduce} />
          </div>
        </Content>
      </div>

      <div
        className="stackSection"
        style={{
          padding: '10px',
          margin: '0 5%',
          display: 'flex',
          flexWrap: 'wrap',
          overflow: 'auto',
        }}
      >
        {stack !== undefined
          ? stack.map((el: string, idx: number) => (
              <div key={idx} style={{}}>
                <Stack>{el}</Stack>
              </div>
            ))
          : null}
      </div>
    </InfoCardSection>
  ) : (
    <InfoCardSection size={size} onClick={handleModalAndDetailInfo}>
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
        <Content>
          <div className="name" style={{ flexGrow: 0 }}>
            <h2 style={{ fontSize: '28px' }}>{userName}</h2>
          </div>
          <div className="oneLine" style={{ flexGrow: 0, marginTop: '10%', fontSize: '18px' }}>
            {oneLineIntroduce}
          </div>
        </Content>
      </div>

      <div
        className="stackSection"
        style={{
          padding: '10px',
          margin: '0 5%',
          display: 'flex',
          flexWrap: 'wrap',
          overflow: 'auto',
        }}
      >
        {stack !== undefined
          ? stack.map((el: string, idx: number) => (
              <div key={idx} style={{}}>
                <Stack>{el}</Stack>
              </div>
            ))
          : null}
      </div>
    </InfoCardSection>
  );
}

export default UserCard;
