import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const POST = async ({ url, token, body }) => {
  try {
    const response = await axiosInstance({
      url: url,
      data: body,
      method: 'POST',
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    return response;
  } catch (e) {
    console.log(e);
  }
};

const PATCH = async ({ url, token, body }) => {
  try {
    const response = await axiosInstance({
      url: url,
      data: body,
      method: 'PATCH',
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    return response;
  } catch (e) {
    console.log(e);
  }
};

export { POST, PATCH };
