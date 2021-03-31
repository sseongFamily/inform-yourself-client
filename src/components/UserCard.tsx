import React, { useState } from 'react';
import { UserInfo } from '../types/userType';
import styled from 'styled-components';
import { infoCardDetail } from '../api/UserApi';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { detailCardInfo } from '../modules/infoCard';
import { RootState } from '../modules/reducer';

const Stack = styled.div`
  margin: 0 3%;
  border: 1px solid black;
  border-radius: 25%;
  height: 30px;
  line-height: 30px;
`;

function UserCard(props: UserInfo) {
  const state = useSelector((state: RootState) => state);
  //? infoCard를 눌렀을 경우 detail하게 보여주는 state
  const { detailList } = state.infoCardReducer;
  const dispatch = useDispatch();

  const makeColor = () => {
    // TODO :  Stack카드 색상 랜덤으로 뿌려주기
  };

  const handleDetailPage = async () => {
    // detail 정보 요청 가져오기
    const detailInfo = await infoCardDetail(Number(props.cardId));
    //Todo: dispatch를 이용해 deatilInfo 저장하기
    dispatch(detailCardInfo(detailInfo));
  };
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
        cursor: 'pointer',
        border: '1px solid red',
      }}
      onClick={handleDetailPage}
    >
      <div className="infoSection" style={{ display: 'flex' }}>
        <div
          style={{
            backgroundImage: `url(${props.profileImage})`,
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
            <h2 style={{ fontSize: '28px' }}>{props.userName}</h2>
          </div>
          <div className="oneLine" style={{ flexGrow: 0, marginTop: '10%', fontSize: '18px' }}>
            {props.oneLineIntroduce}
          </div>
        </div>
      </div>

      <div className="stackSection" style={{ margin: '0 5%', display: 'flex' }}>
        {props.stack.map((el, idx) => (
          <div key={idx} style={{}}>
            <Stack>{el}</Stack>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserCard;
