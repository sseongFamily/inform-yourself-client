import axios from 'axios';

export const infoCardDetail = async (id: number) => {
  const result = await axios.get(`/infocard?id=${id}`);
  const info = result.data[0];
  console.log(info);
  return info;
};
