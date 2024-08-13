import axios from 'axios';

export const Api = axios.create({
  baseURL: '/api/products',
});

export const getProductList = async () => {
  try {
    const response = await Api.get('/');
    return response.data;
  } catch (error) {
    console.error('獲取產品列表時出錯:', error);
    throw error;
  }
};
