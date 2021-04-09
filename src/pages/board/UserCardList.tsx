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
        padding: '120px 0 0 100px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
      }}
    >
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
  );
}

export default UserCardList;
