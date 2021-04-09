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
  border: 1px solid black;
  border-radius: 100px;
`;
function UserCard(props: UserState['userInfo']) {
  const { getDetailInfo, openModal } = props;
  const makeColor = () => {
    // TODO :  Stack카드 색상 랜덤으로 뿌려주기
  };

  const { userName, stack, profileImage, oneLineIntroduce, size } = props;
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

  return (
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
