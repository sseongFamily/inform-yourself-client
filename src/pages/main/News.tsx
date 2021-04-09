import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { infoCardDetail } from '../../api/InfoCard';
import DetailCard from '../../components/card/DetailCard';
import HotUser from '../../containers/main/HotUser';
import NewUser from '../../containers/main/NewUser';
import { detailCardInfo } from '../../modules/infoCard';
import { RootState } from '../../modules/reducer';
import { HotAndNewInfo } from '../../types/infoCardType';

type NewsProps = {
  hotAndNewList: HotAndNewInfo;
};

function News({ hotAndNewList }: NewsProps) {
  const state = useSelector((state: RootState) => state);
  //? infoCard를 눌렀을 경우 detail하게 보여주는 state
  const { detailList } = state.infoCardReducer;

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const getDetailInfo = async (cardId: number) => {
    // detail 정보 요청 가져오기

    const detailInfo = await infoCardDetail(Number(cardId));
    //Todo: dispatch를 이용해 deatilInfo 저장하기
    dispatch(detailCardInfo(detailInfo));
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    console.log('X눌림');
    setIsOpen(false);
  };
  const { hotUser, newUser } = hotAndNewList;
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <div>
          <NewUser newUser={newUser} openModal={openModal} getDetailInfo={getDetailInfo} />
        </div>
        <div>
          <HotUser hotUser={hotUser} openModal={openModal} getDetailInfo={getDetailInfo} />
        </div>
      </div>
      <DetailCard isOpen={isOpen} closeModal={closeModal} detailList={detailList} />
    </>
  );
}

export default News;
