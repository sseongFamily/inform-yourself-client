import { CardInfo } from './infoCardType';

export type UserState = {
  userInfo: UserInfo;
  cardInfo: CardInfo;
  accessToken: string;
  isLogin?: boolean;
};

export type UserInfo = {
  cardId?: number;
  profileImage: string;
  userName: string;
  oneLineIntroduce: CardInfo['oneLineIntroduce'];
  stack: string[];
  getDetailInfo?: (cardId: number) => void;
  openModal?: () => void;
  isOpen?: boolean;
};
