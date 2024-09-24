import axios from 'axios';
import { CartItem } from '@/Model/type';
export const Api = axios.create({
  baseURL: '/api/cart',
});
export const getCartItems = async (userId: number) => {
  const response = await Api.get(`/${userId}`);
  return response.data as CartItem[];
};
