import axios from 'axios';

export const Api = axios.create({
  baseURL: '/api/image',
});

export const getImage = async (id: number) => {
  const { data } = await Api.get(`/${id}`);
  return data;
};

export const createOrUpdateImage = async (file: File, imageId: number = 0) => {
  console.log('createOrUpdateImage', createOrUpdateImage);

  const formData = new FormData();
  formData.append('image', file);
  formData.append('imageId', imageId.toString());
  const response = await Api.post('/upload', formData);
  return response;
};
