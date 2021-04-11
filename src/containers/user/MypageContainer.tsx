import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../../components/card/UserCard';
import MypageDetail from '../../components/user/MypageDetail';
import { RootState } from '../../modules/reducer';
import styled from 'styled-components';
import { userCardModify, userCardSave } from '../../modules/user';

const ButtonElement = styled.button`
  width: 85%;
  height: 50px;
  border: none;
  border-radius: 30px;
  margin: 0 auto;
  margin-top: 20px;
  background-color: #6c63ff;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: 0.5s;

  &:hover {
    background-color: #e6e6ef;
    color: #6c63ff;
    transition: 0.7s;
  }
`;

function MypageContainer() {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const [check, setCheck] = useState<boolean>(false);
  const { userName, oneLineIntroduce, profileImage, stack, modify } = state.userReducer.userInfo;

  const modifyAndSave = () => {
    setCheck((prevCheck) => (prevCheck ? false : true));
    modify ? dispatch(userCardSave()) : dispatch(userCardModify());
  };
  return (
    <div
      style={{
        display: 'flex',
        padding: '120px 0 0 100px',
        justifyContent: 'center',
        alignItems: 'center',
        height: '82vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: '2%',
        }}
      >
        <UserCard
          size={'large'}
          userName={userName}
          oneLineIntroduce={oneLineIntroduce}
          profileImage={profileImage}
          stack={stack}
          modify={modify}
        />
        {state.userReducer.cardInfo && (
          <MypageDetail
            title={state.userReducer.cardInfo.title}
            oneLineIntroduce={state.userReducer.cardInfo.oneLineIntroduce}
            description={state.userReducer.cardInfo.description}
            repositoryUrl={state.userReducer.cardInfo.repositoryUrl}
            blogUrl={state.userReducer.cardInfo.blogUrl}
            stack={state.userReducer.cardInfo.stack}
            modify={modify}
          />
        )}
        {!check ? (
          <ButtonElement onClick={modifyAndSave}>수정하기</ButtonElement>
        ) : (
          <ButtonElement onClick={modifyAndSave}>저장하기</ButtonElement>
        )}
      </div>
      <div
        style={{
          width: '50%',
          height: '100vh',
          backgroundImage: `url(../images/mypage_img.svg)`,
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          opacity: '0.75',
          fontSize: 0,
          marginLeft: '2%',
        }}
      >
        이미지영역
      </div>
    </div>
  );
}

export default MypageContainer;
