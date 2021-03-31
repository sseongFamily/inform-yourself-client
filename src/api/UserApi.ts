import axios from 'axios';
import { UserState } from '../types/userType';

export const login = async (email: string, password: string): Promise<UserState> => {
  const result = await axios.post('/user/login', {
    email,
    password,
  });
  const { accessToken } = result.data;
  const info = await axios.get('/user', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const { userInfo, userCard } = info.data;
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

export const hotAndNewUserInfo = async () => {
  const result = await axios.get('/user/list');
  const info = result.data[0];
  return info;
};

export const infoCardDetail = async (id: number) => {
  const result = await axios.get(`/infocard?id=${id}`);
  const info = result.data[0];
  return info;
};
