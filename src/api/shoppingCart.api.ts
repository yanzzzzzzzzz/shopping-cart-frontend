import Api from './baseApi';
import { CartItem, AddCartItemModel } from '@/Model/type';

export const getCartItems = async (userId: number) => {
  const response = await Api.get(`/cart/${userId}`);
  return response.data as CartItem[];
};

export const deleteCartItem = async (cartId: number) => {
  const response = await Api.delete(`/cart/${cartId}`);
  return response;
};

export const addCartItem = async (cartItem: AddCartItemModel) => {
  const response = await Api.post('/cart', cartItem);
  return response;
};

export const updateCartItem = async (cartId: number, amount: number) => {
  const response = await Api.put(`/cart/${cartId}`, { amount: amount });
  return response;
};
