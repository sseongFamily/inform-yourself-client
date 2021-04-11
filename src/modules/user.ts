import { UserState } from '../types/userType';

const USERLOGIN = 'user/LOGIN' as const;
const USERLOGOUT = 'user/LOGOUT' as const;
const USERCREATECARD = 'user/CREATECARD' as const;
const USERCARDMODIFY = 'user/MODIFY' as const;
const USERCARDSAVE = 'user/SAVE' as const;

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

export const userCardModify = () => ({
  type: USERCARDMODIFY,
});

export const userCardSave = () => ({
  type: USERCARDSAVE,
});

export type UserAction =
  | ReturnType<typeof userLogin>
  | ReturnType<typeof userLogout>
  | ReturnType<typeof userCreateCard>
  | ReturnType<typeof userCardModify>
  | ReturnType<typeof userCardSave>;
