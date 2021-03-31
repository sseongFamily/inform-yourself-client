import { UserState } from '../types/userType';

const USERLOGIN = 'user/LOGIN' as const;

export const userLogin = (userInfo: UserState) => ({
  type: USERLOGIN,
  payload: userInfo,
});

export type UserAction = ReturnType<typeof userLogin>;
