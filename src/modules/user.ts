import { UserInfo } from '../types/userType';

const USERLOGIN = 'user/LOGIN' as const;

export const userLogin = (userInfo: UserInfo, accessToken: string) => ({
  type: USERLOGIN,
  payload: { accessToken, userInfo },
});

export type UserAction = ReturnType<typeof userLogin>;
