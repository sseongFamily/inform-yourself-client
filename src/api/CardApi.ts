import axios from 'axios';
import { CardInfo } from '../types/infoCardType';
import { UserState } from '../types/userType';

export const createCard = async (cardInfo: CardInfo): Promise<UserState> => {
  console.log(cardInfo);
  await axios.post('/infocard', { cardInfo });
  const info = await axios.get('/user');

  const { userInfo, userCard } = info.data;
  userInfo.oneLineIntroduce = userCard[0].oneLineIntroduce;
  userInfo.stack = [...userCard[0].stack];
  return { userInfo, cardInfo: userCard[0] };
};

export const infoCardList = async () => {
  const result = await axios.get('/infocard/list');
  const { data } = result;
  return data;
};
