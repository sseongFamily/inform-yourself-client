import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hotAndNewUserInfo } from '../../api/UserApi';
import { hotAndNewUserInfoAction } from '../../modules/infoCard';
import { RootState } from '../../modules/reducer';
import Developer from './Developer';
import Intro from './Intro';
import News from './News';
import PartnerCompany from './PartnerCompany';

function Home() {
  const state = useSelector((state: RootState) => state);
  const { hotAndNewList } = state.infoCardReducer;
  const dispatch = useDispatch();

  useEffect(() => {
    getHotAndNewInfo();
  }, []);

  const getHotAndNewInfo = async () => {
    const list = await hotAndNewUserInfo();

    dispatch(hotAndNewUserInfoAction(list));
  };
  return (
    <div>
      <Intro />
      <News hotAndNewList={hotAndNewList} />
      <PartnerCompany />
      <Developer />
    </div>
  );
}

export default Home;
