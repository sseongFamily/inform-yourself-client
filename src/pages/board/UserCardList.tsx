import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { infoCardList } from '../../api/CardApi';
import UserCard from '../../components/card/UserCard';
import { newCardList } from '../../modules/infoCard';
import { RootState } from '../../modules/reducer';

function UserCardList() {
  const state = useSelector((state: RootState) => state.infoCardReducer);
  const dispatch = useDispatch();
  const { newUser } = state.hotAndNewList;

  useEffect(() => {
    listUpdate();
  }, []);

  const listUpdate = async () => {
    const list = await infoCardList();
    dispatch(newCardList(list));
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold' }}>게시판</h2>
      </div>
      <div>
        안녕하세요
        {newUser.map((el) => (
          <UserCard
            size={'medium'}
            key={el.cardId}
            cardId={el.cardId}
            userName={el.userName}
            oneLineIntroduce={el.oneLineIntroduce}
            profileImage={el.profileImage}
            stack={el.stack}
          />
        ))}
      </div>
    </div>
  );
}

export default UserCardList;
