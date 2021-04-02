import axios from 'axios';
import { UserState } from '../types/userType';

export const login = async (email: string, password: string): Promise<UserState> => {
  const result = await axios.post('/user/login', {
    email,
    password,
  });
  const { accessToken } = result.data;
  console.log(accessToken);
  const info = await axios.get('/user', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const { userInfo, userCard } = info.data;
  if (!userCard) {
    return { userInfo, accessToken };
  }
  userInfo.oneLineIntroduce = userCard[0].oneLineIntroduce;
  userInfo.stack = [...userCard[0].stack];
  return { userInfo, cardInfo: userCard[0], accessToken };
};

export const signUp = async (
  email: string,
  password: string,
  userName: string,
  phoneNumber: string,
  birthday: string,
  profileImage?: string
): Promise<boolean> => {
  // TODO: email, password, name, phone_number
  const result = await axios.post('/user/signup', {
    email,
    password,
    userName,
    phoneNumber,
    birthday,
    profileImage,
  });

  if (result.data.message === 'Fail') {
    return false;
  }
  return true;
};
