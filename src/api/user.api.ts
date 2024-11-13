import axios from 'axios';
import {
  LoginResponseModel,
  LoginModel,
  RegisterResponseModel,
  RegisterModel,
  UserInfoModel,
  UserInfoUpdateModel,
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

export const getUserInfo = async (): Promise<UserInfoModel> => {
  try {
    const token = localStorage.getItem('token');
    const response = await Api.get('/', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('userInfo error:', error);
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

export const Update = async (UserInfoUpdateModel: UserInfoUpdateModel) => {
  const token = localStorage.getItem('token');
  const response = await Api.put('', UserInfoUpdateModel, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};
