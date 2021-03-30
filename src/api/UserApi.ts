import axios from 'axios';

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
