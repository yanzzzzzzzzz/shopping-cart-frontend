import axios from 'axios';
import { ProductDetail } from '@/Model/type';

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

export const getProductDetail = async (
  productId: number
): Promise<ProductDetail> => {
  try {
    const response = await Api.get(`/${productId}`);
    return response.data;
  } catch (error) {
    console.error('獲取產品資訊時出錯:', error);
    throw error;
  }
};
