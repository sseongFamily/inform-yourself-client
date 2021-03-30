const USERLOGIN = 'user/LOGIN' as const;

export const userLogin = (accessToken: string) => ({
  type: USERLOGIN,
  payload: accessToken,
});

export type UserAction = ReturnType<typeof userLogin>;
