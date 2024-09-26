import Api from './baseApi';
import { CartItem } from '@/Model/type';

export const getCartItems = async (userId: number) => {
  const response = await Api.get(`/cart/${userId}`);
  return response.data as CartItem[];
};

export const deleteCartItem = async (cartId: number) => {
  const response = await Api.delete(`/cart/${cartId}`);
  return response;
};
