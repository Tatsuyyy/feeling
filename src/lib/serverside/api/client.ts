import axios from 'axios';

/** ServerSide用のAPIクライアント */
const apiClient = () => {
  const instance = axios.create({
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.response.use(
    (response) => {
      return Promise.resolve(response);
    },
    (error) => {
      throw error;
      // console.log(`error`, error);
    },
  );
  return instance;
};

export default apiClient();
