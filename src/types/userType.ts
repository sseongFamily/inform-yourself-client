import { CardInfo } from './infoCardType';

export type UserState = {
  userInfo: UserInfo;
  cardInfo?: CardInfo;
  accessToken: string;
  isLogin?: boolean;
};

export type UserInfo = {
  profileImage: string;
  userName: string;
  oneLineIntroduce: string;
  stack: string[];
};
