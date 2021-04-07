import { UserState } from '../types/userType';

const USERLOGIN = 'user/LOGIN' as const;
const USERLOGOUT = 'user/LOGOUT' as const;
const USERCREATECARD = 'user/CREATECARD' as const;

export const userLogin = (userInfo: UserState) => ({
  type: USERLOGIN,
  payload: userInfo,
});

export const userLogout = () => ({
  type: USERLOGOUT,
});

export const userCreateCard = (userInfo: UserState) => ({
  type: USERCREATECARD,
  payload: userInfo,
});

export type UserAction =
  | ReturnType<typeof userLogin>
  | ReturnType<typeof userLogout>
  | ReturnType<typeof userCreateCard>;
