import { CardInfo, HotAndNewInfo } from '../types/infoCardType';
import { UserInfo } from '../types/userType';

const HOTANDNEWINFO = 'user/HOTANDNEWINFO' as const;
const DETAILCARDINFO = 'user/DETAILCARDINFO' as const;
const NEWCARDLIST = 'user/NEWCARDLIST' as const;

// list = hot, new info가 들어있는 배열
export const hotAndNewUserInfoAction = (list: HotAndNewInfo) => ({
  type: HOTANDNEWINFO,
  payload: list,
});

export const detailCardInfo = (list: CardInfo) => ({
  type: DETAILCARDINFO,
  payload: list,
});

export const newCardList = (list: UserInfo[]) => ({
  type: NEWCARDLIST,
  payload: list,
});

export type InfoCardAction =
  | ReturnType<typeof hotAndNewUserInfoAction>
  | ReturnType<typeof detailCardInfo>
  | ReturnType<typeof newCardList>;
