import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../../components/card/UserCard';
import MypageDetail from '../../components/user/MypageDetail';
import { RootState } from '../../modules/reducer';

function MypageContainer() {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const { userName, oneLineIntroduce, profileImage, stack } = state.userReducer.userInfo;

  return (
    <div>
      <div>마이페이지 컨테이너 영역</div>
      <UserCard
        size={'large'}
        userName={userName}
        oneLineIntroduce={oneLineIntroduce}
        profileImage={profileImage}
        stack={stack}
      />
      {state.userReducer.cardInfo && (
        <MypageDetail
          title={state.userReducer.cardInfo.title}
          oneLineIntroduce={state.userReducer.cardInfo.oneLineIntroduce}
          description={state.userReducer.cardInfo.description}
          repositoryUrl={state.userReducer.cardInfo.repositoryUrl}
          blogUrl={state.userReducer.cardInfo.blogUrl}
          stack={state.userReducer.cardInfo.stack}
        />
      )}
    </div>
  );
}

export default MypageContainer;
