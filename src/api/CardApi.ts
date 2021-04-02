import axios from 'axios';
import { CardInfo } from '../types/infoCardType';

export const createCard = async (cardInfo: CardInfo, accessToken: string): Promise<void> => {
  console.log(cardInfo);
  await axios.post(
    '/infocard',
    { cardInfo },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
