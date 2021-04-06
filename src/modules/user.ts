import { UserState } from '../types/userType';

const USERLOGIN = 'user/LOGIN' as const;
const USERLOGOUT = 'user/LOGOUT' as const;

export const userLogin = (userInfo: UserState) => ({
  type: USERLOGIN,
  payload: userInfo,
});

export const userLogout = () => ({
  type: USERLOGOUT,
});

export type UserAction = ReturnType<typeof userLogin> | ReturnType<typeof userLogout>;
