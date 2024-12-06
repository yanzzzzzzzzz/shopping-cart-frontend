import Api from './baseApi';

export const getOrderRecordList = async () => {
  const token = localStorage.getItem('token');
  const response = await Api.get('/checkout', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};
