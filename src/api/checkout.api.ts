import Api from './baseApi';
import { CheckoutModel } from '@/Model/type';

export const checkout = async (checkoutModel: CheckoutModel) => {
  const response = await Api.post('/checkout', checkoutModel);
  return response;
};
