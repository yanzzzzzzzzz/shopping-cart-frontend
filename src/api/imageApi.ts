import axios from 'axios';

export const Api = axios.create({
  baseURL: '/api/image',
});

export const getImage = async (id: number) => {
  const { data } = await Api.get(`/${id}`);
  return data;
};
