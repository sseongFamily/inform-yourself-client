import { CardState, HotAndNewInfo } from '../types/infoCardType';

const HOTANDNEWINFO = 'user/HOTANDNEWINFO' as const;

// list = hot, new info가 들어있는 배열
export const hotAndNewUserInfoAction = (list: HotAndNewInfo) => ({
  type: HOTANDNEWINFO,
  payload: list,
});

export type InfoCardAction = ReturnType<typeof hotAndNewUserInfoAction>;
