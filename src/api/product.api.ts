import axios from 'axios';
import { ProductWithVariants } from '@/Model/type';

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

export const getProductVariants = async (
  productId: number
): Promise<ProductWithVariants> => {
  try {
    const response = await Api.get(`/${productId}/variants`);
    return response.data;
  } catch (error) {
    console.error('獲取產品資訊時出錯:', error);
    throw error;
  }
};
