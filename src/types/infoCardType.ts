import { UserInfo } from './userType';

export type CardState = {
  hotAndNewList: HotAndNewInfo;
  detailList: CardInfo;
};

export type CardInfo = {
  infoCardId?: number;
  title: string;
  oneLineIntroduce: string;
  description: string;
  blogUrl: string;
  repositoryUrl: string;
  likeCount?: number;
  stack?: string[];
  modify?: boolean;
};

export type HotAndNewInfo = {
  hotUser: UserInfo[];
  newUser: UserInfo[];
};
