import Api from './baseApi';
import { CheckoutModel } from '@/Model/type';

export const checkout = async (checkoutModel: CheckoutModel) => {
  const response = await Api.post('/cart/checkout', checkoutModel);
  return response;
};
