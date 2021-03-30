import axios from 'axios';

export const login = async (email: string, password: string) => {
  const result = await axios.post('/user/login', {
    email,
    password,
  });
  const { accessToken } = result.data;
};
