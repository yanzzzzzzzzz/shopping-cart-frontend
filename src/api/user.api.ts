import axios from 'axios';
import {
  LoginResponseModel,
  LoginModel,
  ProfileModel,
  RegisterResponseModel,
  RegisterModel,
} from '@/Model/type';

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

export const tokenIsExpired = async (token: string): Promise<boolean> => {
  try {
    const response = await Api.get('/checkToken', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.status !== 200;
  } catch (error) {
    return true;
  }
};

export const profile = async (token: string): Promise<ProfileModel> => {
  try {
    const response = await Api.get('/profile', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('profile error:', error);
    throw error;
  }
};

export const register = async (
  RegisterModel: RegisterModel
): Promise<RegisterResponseModel> => {
  try {
    const response = await Api.post('/register', RegisterModel);
    return response.data;
  } catch (error) {
    console.error('register error:', error);
    throw error;
  }
};
