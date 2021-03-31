import { UserInfo } from './userType';

export type CardState = {
  hotAndNewList: HotAndNewInfo;
};

export type CardInfo = {
  infoCardId: number;
  title: string;
  oneLineIntroduce: string;
  description: string;
  blogUrl: string;
  repositoryUrl: string;
  likeCount: number;
};

export type HotAndNewInfo = {
  hotUser: UserInfo[];
  newUser: UserInfo[];
};
