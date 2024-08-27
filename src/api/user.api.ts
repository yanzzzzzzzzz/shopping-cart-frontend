import axios from 'axios';
import { LoginResponseModel, LoginModel } from '@/Model/type';

export const Api = axios.create({
  baseURL: '/api/user',
});

export const login = async (
  loginModel: LoginModel
): Promise<LoginResponseModel> => {
  try {
    const response = await Api.post('/login', loginModel);
    return response.data;
  } catch (error) {
    console.error('login error:', error);
    throw error;
  }
};
