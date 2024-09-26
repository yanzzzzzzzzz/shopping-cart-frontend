import { tokenIsExpired } from '@/api/user.api';
import { DecodedPayload } from '@/Model/type';
export const checkTokenValidity = async (token: string) => {
  const isExpired = await tokenIsExpired(token);
  if (isExpired) {
    localStorage.removeItem('token');
    alert('您的登入已過期，請重新登入');
    return false;
  }
  return true;
};
export const decodeToken = (token: string): DecodedPayload | null => {
  try {
    const payload = token.split('.')[1];
    const decodedPayload = JSON.parse(atob(payload)) as DecodedPayload;
    return decodedPayload;
  } catch (error) {
    console.error('Failed to decode token:', error);
    return null;
  }
};
