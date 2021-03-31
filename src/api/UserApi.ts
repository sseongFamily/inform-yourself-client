import axios from 'axios';
import { UserInfo } from '../types/userType';

export const login = async (
  email: string,
  password: string
): Promise<{ userInfo: UserInfo; accessToken: string }> => {
  const result = await axios.post('/user/login', {
    email,
    password,
  });
  const { accessToken } = result.data;
  const userInfo = await axios.get('/user', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(userInfo);
  return { userInfo: userInfo.data.userInfo, accessToken };
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
